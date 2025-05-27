import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function TermeniConditii() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Termeni și condiții</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">1. Informații generale</h2>
              <p className="text-gray-700 leading-relaxed">
                Prezentii termeni și condiții reglementează utilizarea site-ului web https://finanzconsult.ro/, deținut
                și operat de FINANZ CONSULT S.R.L., cu sediul în Splaiul Independentei, Nr 202 B, Sector 6, București.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Prin accesarea și utilizarea acestui site web, acceptați în totalitate acești termeni și condiții. Dacă
                nu sunteți de acord cu aceștia, vă rugăm să nu utilizați site-ul.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">2. Servicii oferite</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FINANZ CONSULT oferă următoarele servicii prin intermediul site-ului:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Servicii de contabilitate pentru SRL și PFA</li>
                <li>Înființări de companii (SRL, PFA, ONG)</li>
                <li>Modificări și actualizări pentru companii existente</li>
                <li>Închideri de companii</li>
                <li>Găzduire sediu social</li>
                <li>Obținere autorizații și licențe</li>
                <li>Înregistrare mărci și brevete</li>
                <li>Consultanță fiscală și juridică</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">3. Utilizarea site-ului</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">3.1 Utilizare permisă</h3>
                  <p className="text-gray-700 text-sm">
                    Site-ul poate fi utilizat exclusiv în scopuri legale și în conformitate cu acești termeni și
                    condiții. Este interzisă utilizarea site-ului în scopuri ilegale sau neautorizate.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">3.2 Restricții</h3>
                  <p className="text-gray-700 text-sm">
                    Este interzis să modificați, copiați, distribuiți, transmiteți, afișați, să efectuați, să
                    reproduceți, să publicați, să acordați licențe, să creați lucrări derivate, să transferați sau să
                    vindeți orice informații, software, produse sau servicii obținute de pe acest site.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">4. Proprietatea intelectuală</h2>
              <p className="text-gray-700 leading-relaxed">
                Toate drepturile de proprietate intelectuală asupra conținutului site-ului, inclusiv dar fără a se
                limita la texte, imagini, grafice, logo-uri, icoane, software, aparțin FINANZ CONSULT S.R.L. sau
                licențiatorilor săi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">5. Responsabilitate</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">5.1 Limitarea răspunderii</h3>
                  <p className="text-gray-700 text-sm">
                    FINANZ CONSULT S.R.L. nu își asumă responsabilitatea pentru eventualele daune directe, indirecte,
                    incidentale sau consecutive care rezultă din utilizarea sau imposibilitatea de utilizare a
                    site-ului.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">5.2 Acuratețea informațiilor</h3>
                  <p className="text-gray-700 text-sm">
                    Deși ne străduim să menținem informațiile de pe site actualizate și corecte, nu garantăm acuratețea,
                    completitudinea sau actualitatea acestora.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">6. Modificări ale termenilor</h2>
              <p className="text-gray-700 leading-relaxed">
                FINANZ CONSULT S.R.L. își rezervă dreptul de a modifica acești termeni și condiții în orice moment, fără
                notificare prealabilă. Modificările vor intra în vigoare imediat după publicarea pe site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">7. Legea aplicabilă</h2>
              <p className="text-gray-700 leading-relaxed">
                Acești termeni și condiții sunt guvernați de legea română. Orice dispută care decurge din sau în
                legătură cu acești termeni va fi soluționată de instanțele competente din România.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">8. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Pentru întrebări referitoare la acești termeni și condiții, ne puteți contacta la:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> contact@finanzconsult.ro
                </p>
                <p className="text-gray-700">
                  <strong>Telefon:</strong> 021 20308 2014 2077
                </p>
                <p className="text-gray-700">
                  <strong>Adresă:</strong> Splaiul Independentei, Nr 202 B, Sector 6, București
                </p>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Ultima actualizare:</strong> Ianuarie 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
