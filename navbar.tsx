"use client"

import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react"
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
    desktop: "xl:h-10 3xl:h-12",
    width: 200,
    height: 50,
  },
  dropdown: {
    // Calculate distance from button to navbar bottom - keep mobile at 16px
    distanceToNavbar: {
      mobile: 17, // Keep as requested - don't change
      desktop: 23, // Keep as requested
    },
    minWidthSingle: "min-w-64",
    maxWidthSingle: "max-w-80",
    minWidthDouble: "min-w-[700px]",
    maxWidthDouble: "max-w-4xl",
    zIndex: "z-50",
  },
  spacing: {
    desktop: "space-x-1 2xl:space-x-2",
    padding: "px-1 xl:px-2 2xl:px-3 py-2",
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
    { title: "Actualizarea codurilor CAEN", href: "/modificari/srl#actualizare-caen" },
    { title: "Adăugare/Ștergere Cod CAEN", href: "/modificari/srl#adaugare-stergere-caen" },
    { title: "Schimbare cod CAEN principal", href: "/modificari/srl#schimbare-caen-principal" },
    { title: "Schimbare sediu social", href: "/modificari/srl#sediu-social" },
    { title: "Prelungire sediu social", href: "/modificari/srl#prelungire-sediu" },
    { title: "Deschidere punct de lucru", href: "/modificari/srl#deschidere-punct" },
    { title: "Prelungire punct de lucru", href: "/modificari/srl#prelungire-punct" },
    { title: "Închidere punct de lucru", href: "/modificari/srl#inchidere-punct" },
    { title: "Modificare nume firmă", href: "/modificari/srl#modificare-nume" },
    { title: "Majorare capital social", href: "/modificari/srl#majorare-capital" },
    { title: "Cesiune părți sociale", href: "/modificari/srl#cesiune-parti" },
  ],
  modificariPfa: [
    { title: "Actualizare Rev. 3", href: "/modificari/pfa#actualizare-rev3" },
    { title: "Adăugare cod CAEN", href: "/modificari/pfa#cod-caen" },
    { title: "Schimbare sediu social", href: "/modificari/pfa#sediu-social" },
    { title: "Prelungire sediu social", href: "/modificari/pfa#prelungire-sediu" },
    { title: "Deschidere punct de lucru", href: "/modificari/pfa#deschidere-punct" },
    { title: "Prelungire punct de lucru", href: "/modificari/pfa#prelungire-punct" },
    { title: "Închidere punct de lucru", href: "/modificari/pfa#inchidere-punct" },
    { title: "Suspendare activitate", href: "/modificari/pfa#suspendare" },
    { title: "Reluare activitate", href: "/modificari/pfa#reluare" },
    { title: "Închidere", href: "/modificari/pfa#inchidere" },
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
  { title: "Juridic", href: "/juridic" }, // This is now a simple link
  { title: "Aplicație", href: "https://online-srlconsult.ro/" },
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
  const mobileDistance = NAVBAR_CONFIG.dropdown.distanceToNavbar.mobile
  const desktopDistance = NAVBAR_CONFIG.dropdown.distanceToNavbar.desktop

  return {
    top: `calc(100% + ${mobileDistance}px)`,
    '--dropdown-top-xl': `calc(100% + ${desktopDistance}px)`,
  } as React.CSSProperties
}

const getDropdownClasses = (columns: number) => {
  const widthClasses = getDropdownWidth(columns)
  return `navbar-dropdown absolute top-full left-0 bg-white border-l border-r border-b border-gray-200 rounded-b-lg shadow-lg ${NAVBAR_CONFIG.dropdown.zIndex} ${widthClasses}`
}

const getButtonClasses = (isActive: boolean, isAppLink = false) => {
  const baseClasses = `
    flex items-center
    ${NAVBAR_CONFIG.spacing.padding}
    ${NAVBAR_CONFIG.spacing.textSize}
    font-medium
    transition-colors
    whitespace-nowrap
    rounded-lg
    max-2xl:px-1 max-2xl:py-1
  `

  const stateClasses = isAppLink
    ? "bg-primaryColor text-white hover:bg-primaryColor/90"
    : isActive
      ? "text-primaryColor"
      : "text-gray-700 hover:text-primaryColor hover:bg-gray-50"

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
                  className="block px-3 py-2 text-xs xl:text-sm text-gray-700 hover:text-primaryColor hover:bg-gray-50 rounded-md transition-colors font-medium"
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
    className={`${NAVBAR_CONFIG.spacing.padding} ${NAVBAR_CONFIG.spacing.textSize} font-medium text-gray-700 hover:text-primaryColor hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap`}
    onClick={onClick}
  >
    {title}
  </Link>
)

// Simple Mobile Menu Item Component
const SimpleMobileMenuItem = ({
  title,
  href,
  onClick,
}: {
  title: string
  href: string
  onClick: () => void
}) => (
  <Link
    href={href}
    className="block px-4 py-3 text-gray-700 hover:text-primaryColor hover:bg-blue-50 rounded-lg transition-colors font-medium"
    onClick={onClick}
  >
    {title}
  </Link>
)

// Simple Mobile Dropdown Section Component
const SimpleMobileDropdownSection = ({
  title,
  items,
  onItemClick,
}: {
  title: string
  items: MenuItem[]
  onItemClick: () => void
}) => (
  <div>
    <details className="group">
      <summary className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primaryColor hover:bg-blue-50 rounded-lg transition-colors font-medium cursor-pointer">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="ml-4 mt-1 space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-gray-600 hover:text-primaryColor hover:bg-blue-50 rounded-lg transition-colors text-sm"
            onClick={onItemClick}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </details>
  </div>
)

// ===== MAIN COMPONENT =====
export default function FinanzNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [showContactBar, setShowContactBar] = useState(false)
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

  // Show contact bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowContactBar(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      {/* Contact Bar - appears after scroll */}
      <div
        className={`
          fixed left-0 right-0 z-50 flex items-center justify-center
          transition-transform duration-500 ease-in-out
        `}
        style={{
          minHeight: 28,
          background: "#0E124C",
          margin: 0,
          padding: 0,
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
          transform: showContactBar ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: showContactBar ? "auto" : "none",
        }}
      >
        <div className="flex items-center justify-center gap-0 w-full max-w-5xl px-6 py-1">
          <a
            href="tel:+40712345678"
            className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-semibold sm:text-xs text-[11px] rounded-lg px-2 py-0.5 hover:bg-blue-800/40 focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{ textDecoration: "none" }}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="decoration-white/40 hover:decoration-white">021 9222</span>
          </a>
          <span className="h-4 w-px bg-white/40 mx-1" />
          <a
            href="mailto:office@finanz.ro"
            className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-semibold sm:text-xs text-[11px] rounded-lg px-2 py-0.5 hover:bg-blue-800/40 focus:outline-none focus:ring-2 focus:ring-white/40"
            style={{ textDecoration: "none" }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="decoration-white/40 hover:decoration-white">contact@finanzconsult.ro</span>
          </a>
          <span className="h-4 sm:flex mr-2 hidden w-px bg-white/40 " />
          {/* Urmareste-ne section - ascuns pe mobil */}
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="text-white/90 font-semibold text-[11px] sm:text-xs">Urmărește-ne:</span>
            <a href="https://www.tiktok.com/@finanz" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              <Image src="/tik-tok.png" alt="TikTok" width={12} height={12} />
            </a>
            <a href="https://www.facebook.com/finanzconsult" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              <Image src="/facebook-app-symbol.png" alt="Facebook" width={12} height={12} />
            </a>
            <a href="https://www.instagram.com/finanzconsult" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              <Image src="/instagram.png" alt="Instagram" width={12} height={12} />
            </a>
          </div>
        </div>
      </div>
      {/* Divider line under contact bar */}
      <div className="fixed left-0 right-0 z-40 bg-gray-200 h-px transition-all duration-500 ease-in-out" style={{
        top: showContactBar ? 28 : 0,
        opacity: showContactBar ? 1 : 0,
        pointerEvents: showContactBar ? "auto" : "none",
      }}></div>
      {/* Main Navigation */}
      <nav
        className={`
          bg-white shadow-sm border-b border-gray-200 fixed left-0 right-0 z-40
          transition-all duration-500 ease-in-out
          ${showContactBar ? "top-[28px]" : "top-0"}
        `}
      >
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
            <div className={`hidden 2xl:flex items-center space-x-0 ${NAVBAR_CONFIG.spacing.desktop}`}>
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
              {STATIC_LINKS.map(({ title, href }) => {
                const isAppLink = title.toLowerCase() === "aplicație";
                const isContactLink = title.toLowerCase() === "contact";
                const specialClasses = isAppLink
                ? "bg-primaryColor text-white hover:text-white hover:bg-primaryColor/80"
                : isContactLink
                ? "bg-secundaryColor text-white hover:text-white hover:bg-secundaryColor/80"
                : "text-gray-700";

                const baseClasses = `
                  ${NAVBAR_CONFIG.spacing.padding} 
                  ${NAVBAR_CONFIG.spacing.textSize} 
                  font-medium 
                  whitespace-nowrap
                  rounded-lg
                  transition-colors
                  hover:text-primaryColor 
                  hover:bg-gray-50
                `;

             
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`${baseClasses} ${specialClasses}`}
                    target={isAppLink ? "_blank" : undefined}
                    rel={isAppLink ? "noopener noreferrer" : undefined}
                  >
                    {title}
                  </Link>
                );
              })}

            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="2xl:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Simple Mobile Menu Overlay */}
      {isOpen && (
        <div className="2xl:hidden fixed inset-0 bg-white z-50 overflow-x-hidden">
          <div className="h-full overflow-y-auto">
            <div className="p-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={handleMenuClose}>
                  <Image src="/images/logo.png" alt="FINANZ Consult" width={150} height={40} className="h-8 w-auto" />
                </Link>
                <button onClick={handleMenuClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* Simple Mobile Menu Content - All items in one list */}
              <div className="space-y-2">
                {/* Dropdown Sections */}
                <SimpleMobileDropdownSection
                  title="Contabilitate"
                  items={MENU_ITEMS.contabilitate}
                  onItemClick={handleMenuClose}
                />

                <SimpleMobileDropdownSection
                  title="Înființări"
                  items={MENU_ITEMS.infiintari}
                  onItemClick={handleMenuClose}
                />

                <SimpleMobileDropdownSection
                  title="Modificări SRL"
                  items={MENU_ITEMS.modificariSrl}
                  onItemClick={handleMenuClose}
                />

                <SimpleMobileDropdownSection
                  title="Modificări PFA"
                  items={MENU_ITEMS.modificariPfa}
                  onItemClick={handleMenuClose}
                />

                <SimpleMobileDropdownSection
                  title="Închideri"
                  items={MENU_ITEMS.inchideri}
                  onItemClick={handleMenuClose}
                />

                {/* Static Links */}
                {STATIC_LINKS.map((link) => (
                  <SimpleMobileMenuItem key={link.href} title={link.title} href={link.href} onClick={handleMenuClose} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for responsive dropdown positioning */}
      <style jsx global>{`
        @media (min-width: 1280px) {
          .navbar-dropdown {
            top: var(--dropdown-top-xl) !important;
          }
        }
      `}</style>
    </div>
  )
}
