"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

// ===== CONFIGURATION =====
const NAVBAR_CONFIG = {
  heights: {
    mobile: "h-16",
    desktop: "xl:h-20",
    mobileValue: 64, // 16 * 4 = 64px
    desktopValue: 80, // 20 * 4 = 80px
  },
  logo: {
    mobile: "h-8",
    tablet: "lg:h-8",
    desktop: "xl:h-12",
    width: 200,
    height: 50,
  },
  dropdown: {
    // Calculate distance from button to navbar bottom - keep mobile at 16px
    distanceToNavbar: {
      mobile: 16, // Keep as requested - don't change
      desktop: 22, // Keep as requested
    },
    minWidthSingle: "min-w-64",
    maxWidthSingle: "max-w-80",
    minWidthDouble: "min-w-[600px]",
    maxWidthDouble: "max-w-4xl",
    zIndex: "z-50",
  },
  spacing: {
    desktop: "lg:space-x-1 xl:space-x-2",
    padding: "px-1 lg:px-2 xl:px-3 py-2",
    textSize: "text-xs xl:text-sm",
  },
}

// ===== MENU DATA =====
const MENU_ITEMS = {
  contabilitate: [
    { title: "Contabilitate SRL", href: "/contabilitate/srl" },
    { title: "Contabilitate PFA", href: "/contabilitate/pfa" },
    { title: "Tarife contabilitate", href: "/contabilitate/tarife" },
  ],
  infiintari: [
    { title: "Înființare SRL", href: "/infiintari/srl" },
    { title: "Înființare PFA", href: "/infiintari/pfa" },
    { title: "Înființare ONG", href: "/infiintari/ong" },
  ],
  modificariSrl: [
    { title: "Schimbare sediu social", href: "/modificari/srl/sediu-social" },
    { title: "Actualizare Rev. 3", href: "/modificari/srl/actualizare-rev3" },
    { title: "Schimbare cod CAEN principal", href: "/modificari/srl/cod-caen" },
    { title: "Prelungire sediu social", href: "/modificari/srl/prelungire-sediu" },
    { title: "Prelungire punct de lucru", href: "/modificari/srl/prelungire-punct" },
    { title: "Cesiune părți sociale", href: "/modificari/srl/cesiune-parti" },
    { title: "Schimbare administrator", href: "/modificari/srl/administrator" },
    { title: "Deschidere punct de lucru", href: "/modificari/srl/deschidere-punct" },
    { title: "Închidere punct de lucru", href: "/modificari/srl/inchidere-punct" },
    { title: "Actualizare date ONRC", href: "/modificari/srl/onrc" },
    { title: "Adăugare/Ștergere coduri CAEN", href: "/modificari/srl/coduri-caen" },
    { title: "Actualizare act constitutiv", href: "/modificari/srl/act-constitutiv" },
    { title: "Schimbare denumire firmă", href: "/modificari/srl/denumire" },
    { title: "Majorare/Micsorare capital social", href: "/modificari/srl/capital" },
    { title: "Prelungire mandat administrator", href: "/modificari/srl/mandat" },
    { title: "Suspendare activitate firmă", href: "/modificari/srl/suspendare" },
    { title: "Reluare activitate firmă", href: "/modificari/srl/reluare" },
    { title: "Modificare formă juridică SRL-D în SRL", href: "/modificari/srl/forma-juridica" },
    { title: "Radiere firmă", href: "/modificari/srl/radiere" },
  ],
  modificariPfa: [
    { title: "Actualizare Rev. 3", href: "/modificari/pfa/actualizare-rev3" },
    { title: "Adăugare cod CAEN", href: "/modificari/pfa/cod-caen" },
    { title: "Schimbare sediu social", href: "/modificari/pfa/sediu-social" },
    { title: "Prelungire sediu social", href: "/modificari/pfa/prelungire-sediu" },
    { title: "Deschidere punct de lucru", href: "/modificari/pfa/deschidere-punct" },
    { title: "Prelungire punct de lucru", href: "/modificari/pfa/prelungire-punct" },
    { title: "Închidere punct de lucru", href: "/modificari/pfa/inchidere-punct" },
    { title: "Suspendare activitate", href: "/modificari/pfa/suspendare" },
    { title: "Reluare activitate", href: "/modificari/pfa/reluare" },
    { title: "Închidere", href: "/modificari/pfa/inchidere" },
  ],
  inchideri: [
    { title: "Închidere SRL", href: "/inchideri/srl" },
    { title: "Închidere PFA", href: "/inchideri/pfa" },
  ],
}

const STATIC_LINKS = [
  { title: "Găzduire sediu", href: "/gazduire-sediu" },
  { title: "Autorizații", href: "/autorizatii" },
  { title: "Înregistrare mărci", href: "/inregistrare-marci" },
  { title: "Contact", href: "/contact" },
]

// ===== DROPDOWN CONFIGURATION =====
const DROPDOWN_CONFIG = [
  { key: "contabilitate", title: "Contabilitate", items: MENU_ITEMS.contabilitate, columns: 1 },
  { key: "infiintari", title: "Înființări", items: MENU_ITEMS.infiintari, columns: 1 },
  { key: "modificari-srl", title: "Modificări SRL", items: MENU_ITEMS.modificariSrl, columns: 2 },
  { key: "modificari-pfa", title: "Modificări PFA", items: MENU_ITEMS.modificariPfa, columns: 1 },
  { key: "inchideri", title: "Închideri", items: MENU_ITEMS.inchideri, columns: 1 },
]

// ===== TYPES =====
interface MenuItem {
  title: string
  href: string
}

interface DropdownProps {
  title: string
  items: MenuItem[]
  dropdownKey: string
  columns?: number
  isOpen: boolean
  onToggle: (key: string) => void
  onClose: () => void
}

// ===== UTILITY FUNCTIONS =====
const getDropdownWidth = (columns: number) => {
  return columns === 2
    ? `${NAVBAR_CONFIG.dropdown.minWidthDouble} ${NAVBAR_CONFIG.dropdown.maxWidthDouble}`
    : `${NAVBAR_CONFIG.dropdown.minWidthSingle} ${NAVBAR_CONFIG.dropdown.maxWidthSingle}`
}

const getDropdownPosition = () => {
  // Calculate position to be directly under navbar
  const mobileDistance = NAVBAR_CONFIG.dropdown.distanceToNavbar.mobile
  const desktopDistance = NAVBAR_CONFIG.dropdown.distanceToNavbar.desktop

  return {
    // Use CSS calc to position under navbar on different screen sizes
    top: `calc(100% + ${mobileDistance}px)`,
    // On xl screens, use desktop distance
    "--dropdown-top-xl": `calc(100% + ${desktopDistance}px)`,
  }
}

const getDropdownClasses = (columns: number) => {
  const widthClasses = getDropdownWidth(columns)
  return `absolute top-full left-0 bg-white border-l border-r border-b border-gray-200 rounded-b-lg shadow-lg ${NAVBAR_CONFIG.dropdown.zIndex} ${widthClasses}`
}

const getButtonClasses = (isActive: boolean) => {
  const baseClasses = `flex items-center ${NAVBAR_CONFIG.spacing.padding} ${NAVBAR_CONFIG.spacing.textSize} font-medium transition-colors whitespace-nowrap rounded-lg`
  const stateClasses = isActive ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"

  return `${baseClasses} ${stateClasses}`
}

// ===== COMPONENTS =====

// Dropdown Component
const CustomDropdown = ({ title, items, dropdownKey, columns = 1, isOpen, onToggle, onClose }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={dropdownRef}>
      <button type="button" onClick={() => onToggle(dropdownKey)} className={getButtonClasses(isOpen)}>
        {title}
        <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className={getDropdownClasses(columns)} style={getDropdownPosition()}>
          <div className="p-2">
            <div className={`grid ${columns === 2 ? "grid-cols-2" : "grid-cols-1"} gap-1`}>
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors lg:font-semibold lg:text-base"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Static Link Component
const StaticLink = ({ title, href, onClick }: { title: string; href: string; onClick?: () => void }) => (
  <Link
    href={href}
    className={`${NAVBAR_CONFIG.spacing.padding} ${NAVBAR_CONFIG.spacing.textSize} font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap`}
    onClick={onClick}
  >
    {title}
  </Link>
)

// Modern Mobile Menu Item Component
const ModernMobileMenuItem = ({
  title,
  href,
  onClick,
  className = "",
}: {
  title: string
  href: string
  onClick: () => void
  className?: string
}) => (
  <Link
    href={href}
    className={`block px-5 py-4 text-lg font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 border border-transparent hover:border-blue-200 ${className}`}
    onClick={onClick}
  >
    {title}
  </Link>
)

// Modern Mobile Dropdown Section Component
const ModernMobileDropdownSection = ({
  title,
  items,
  onItemClick,
  itemClassName = "",
}: {
  title: string
  items: MenuItem[]
  onItemClick: () => void
  itemClassName?: string
}) => (
  <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-md border border-blue-100 overflow-hidden">
    <details className="group">
      <summary className="flex items-center justify-between px-5 py-4 text-lg font-bold text-slate-800 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 border-b border-blue-100">
        <span className="tracking-wide text-blue-900">{title}</span>
        <div className="bg-blue-500 rounded-full p-1">
          <ChevronDown className="h-4 w-4 text-white transition-all duration-200 group-open:rotate-180" />
        </div>
      </summary>
      <div className="px-3 pb-3 bg-white">
        <div className="space-y-1 pt-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 text-slate-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-200 ${itemClassName}`}
              onClick={onItemClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </details>
  </div>
)

// ===== MAIN COMPONENT =====
export default function FinanzNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // ===== HOOKS =====

  // Block body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown]
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setOpenDropdown(null)
        }
      }
    }

    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside)
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [openDropdown])

  // ===== EVENT HANDLERS =====

  const handleMenuClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleDropdownToggle = useCallback((dropdownKey: string) => {
    setOpenDropdown((current) => (current === dropdownKey ? null : dropdownKey))
  }, [])

  const handleDropdownClose = useCallback(() => {
    setOpenDropdown(null)
  }, [])

  // ===== RENDER =====

  return (
    <div className="overflow-x-hidden">
      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between ${NAVBAR_CONFIG.heights.mobile} ${NAVBAR_CONFIG.heights.desktop}`}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="FINANZ Consult"
                width={NAVBAR_CONFIG.logo.width}
                height={NAVBAR_CONFIG.logo.height}
                className={`${NAVBAR_CONFIG.logo.mobile} ${NAVBAR_CONFIG.logo.tablet} ${NAVBAR_CONFIG.logo.desktop} w-auto`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center space-x-0 ${NAVBAR_CONFIG.spacing.desktop}`}>
              {/* Dropdown Menus */}
              {DROPDOWN_CONFIG.map((dropdown) => (
                <CustomDropdown
                  key={dropdown.key}
                  title={dropdown.title}
                  items={dropdown.items}
                  dropdownKey={dropdown.key}
                  columns={dropdown.columns}
                  isOpen={openDropdown === dropdown.key}
                  onToggle={handleDropdownToggle}
                  onClose={handleDropdownClose}
                />
              ))}

              {/* Static Links */}
              {STATIC_LINKS.map((link) => (
                <StaticLink key={link.href} title={link.title} href={link.href} />
              ))}
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gradient-to-br from-slate-100 via-white to-blue-50 z-50 overflow-x-hidden">
          <div
            className="h-full overflow-y-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="p-6 pb-20">
              {/* Modern Mobile Header */}
              <div className="flex items-center justify-between mb-10">
                <Link href="/" onClick={handleMenuClose}>
                  <Image src="/images/logo.png" alt="FINANZ Consult" width={150} height={40} className="h-8 w-auto" />
                </Link>
                <button
                  onClick={handleMenuClose}
                  className="p-3 hover:bg-white hover:shadow-lg rounded-2xl transition-all duration-300 focus:outline-none border border-transparent hover:border-slate-200"
                >
                  <X className="h-6 w-6 text-slate-600" />
                </button>
              </div>

              {/* Modern Mobile Menu Content */}
              <div className="space-y-6">
                {/* Static Links Section */}
                <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-md border border-blue-100 p-2">
                  <div className="space-y-1">
                    {STATIC_LINKS.map((link) => (
                      <ModernMobileMenuItem
                        key={link.href}
                        title={link.title}
                        href={link.href}
                        onClick={handleMenuClose}
                      />
                    ))}
                  </div>
                </div>

                {/* Dropdown Sections */}
                <div className="space-y-5">
                  <ModernMobileDropdownSection
                    title="Contabilitate"
                    items={MENU_ITEMS.contabilitate}
                    onItemClick={handleMenuClose}
                    itemClassName="text-base font-semibold"
                  />

                  <ModernMobileDropdownSection
                    title="Înființări"
                    items={MENU_ITEMS.infiintari}
                    onItemClick={handleMenuClose}
                    itemClassName="text-base font-semibold"
                  />

                  <ModernMobileDropdownSection
                    title="Modificări SRL"
                    items={MENU_ITEMS.modificariSrl}
                    onItemClick={handleMenuClose}
                    itemClassName="text-sm font-semibold"
                  />

                  <ModernMobileDropdownSection
                    title="Modificări PFA"
                    items={MENU_ITEMS.modificariPfa}
                    onItemClick={handleMenuClose}
                    itemClassName="text-sm font-semibold"
                  />

                  <ModernMobileDropdownSection
                    title="Închideri"
                    items={MENU_ITEMS.inchideri}
                    onItemClick={handleMenuClose}
                    itemClassName="text-base font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for responsive dropdown positioning */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @media (min-width: 1280px) {
          [style*="--dropdown-top-xl"] {
            top: var(--dropdown-top-xl) !important;
          }
        }
      `}</style>
    </div>
  )
}
