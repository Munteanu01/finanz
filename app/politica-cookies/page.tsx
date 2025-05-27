import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Politica privind fișierele cookies</h1>
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">I. Introducere</h2>
              <p className="text-gray-700 leading-relaxed">
                Prezenta politică privind fișierele cookies se aplică tuturor utilizatorilor paginii de internet <a href="https://finanzconsult.ro/" className="text-blue-600 hover:text-blue-800">https://finanzconsult.ro/</a>.
                Informațiile prezentate în continuare au ca scop informarea utilizatorilor acestei pagini de internet cu privire la plasarea, utilizarea și administrarea cookie-urilor de către BENTZ ACCOUNTING ADMINISTRATION S.R.L. în contextul navigării utilizatorilor pe această pagină de internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">II. Ce sunt cookie-urile?</h2>
              <p className="text-gray-700 leading-relaxed">
                Folosim termenul „cookie”-uri pentru a ne referi la modulele cookie și la tehnologiile similare prin intermediul cărora pot fi colectate informații în mod automat. Un „Internet Cookie” (termen cunoscut și sub denumirea de „browser cookie” sau „HTTP cookie” ori „cookie”) reprezintă un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe computerul, terminalul mobil sau pe alte echipamente ale unui utilizator prin intermediul cărora se accesează internetul.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookie-urile sunt instalate prin solicitarea emisă de un web-server către un browser (de ex.: Internet Explorer, Firefox, Chrome). Cookie-urile odată instalate au o durată de existență determinată, rămânând „pasive”, în sensul că nu conțin programe software, viruși sau spyware și nu vor accesa informațiile de pe hard driverul utilizatorului pe al cărui echipament au fost instalate.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>numele cookie-ului;</li>
                <li>conținutul sau valoarea cookie-ului.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Din punct de vedere tehnic, doar web-serverul care a trimis cookie-ul îl poate accesa din nou în momentul în care un utilizator se întoarce pe pagina de internet asociată web-serverului respectiv.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">III. Pentru ce scopuri sunt utilizate cookie-urile?</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Îmbunătățirea utilizării acestei pagini de internet, inclusiv prin identificarea oricăror erori care apar în timpul vizitării/utilizării acesteia de către utilizatori;</li>
                <li>Furnizarea de statistici anonime cu privire la modul în care este utilizată această pagină de internet către deținătorul website-ului;</li>
                <li>Anticiparea unor eventuale bunuri care vor fi în viitor puse la dispoziția utilizatorilor prin intermediul acestei pagini de internet, în funcție de serviciile / produsele accesate.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Pe baza feedback-ului transmis prin cookie-uri, deținătorul website-ului poate adopta măsuri pentru ca această pagină de internet să fie mai eficientă și mai accesibilă pentru utilizatori. Astfel, utilizarea cookie-urilor permite memorarea anumitor setări/preferințe stabilite de către utilizatorii acestei pagini de internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">IV. Care este durata de viață a cookie-urilor?</h2>
              <p className="text-gray-700 leading-relaxed">
                Durata de viață a cookie-urilor poate varia semnificativ, depinzând de scopul pentru care este plasat. Există următoarele categorii:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  <strong>Cookie-uri de sesiune</strong> – șterse automat când utilizatorul își închide browserul.
                </li>
                <li>
                  <strong>Cookie-uri persistente sau fixe</strong> – rămân stocate până la o anumită dată de expirare sau până la ștergerea acestora de către utilizator.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">V. Ce sunt cookie-urile plasate de terți?</h2>
              <p className="text-gray-700 leading-relaxed">
                Anumite secțiuni de conținut pot fi furnizate prin intermediul unor terți, caz în care aceste cookie-uri sunt denumite cookie-uri plasate de terți („third party cookie-uri”). Terții furnizori trebuie să respecte regulile în materie de protecție a datelor și Politica de Confidențialitate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aceste cookie-uri pot proveni de la următorii terți: Google Analytics, Facebook.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">VI. Ce cookie-uri sunt folosite prin intermediul acestei pagini de internet?</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Cookie-uri de performanță a paginii de internet</li>
                <li>Cookie-uri de analiză a utilizatorilor</li>
                <li>Cookie-uri pentru geotargetting</li>
                <li>Cookie-uri de înregistrare</li>
                <li>Cookie-uri pentru publicitate</li>
                <li>Cookie-uri ale furnizorilor de publicitate</li>
              </ul>
              <div className="space-y-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">a. Cookie-uri de performanță</h4>
                  <p className="text-gray-700 text-sm">
                    Memorarea preferințelor utilizatorului, astfel încât setarea din nou a preferințelor la vizite ulterioare nu mai este necesară.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">b. Cookie-uri de analiză a utilizatorilor</h4>
                  <p className="text-gray-700 text-sm">
                    Informații statistice privind vizitele anterioare ale utilizatorilor pe site.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">c. Cookie-uri pentru geotargetting</h4>
                  <p className="text-gray-700 text-sm">
                    Utilizate pentru a stabili țara de proveniență a utilizatorului.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">d. Cookie-uri pentru înregistrare</h4>
                  <p className="text-gray-700 text-sm">
                    Memorează contul cu care sunteți înregistrat și asociază comentariile postate cu username-ul contului.
                  </p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">e. Cookie-uri pentru publicitate</h4>
                  <p className="text-gray-700 text-sm">
                    Permit aflarea vizualizării de către un utilizator a unei reclame online, tipul acesteia și timpul scurs de la momentul vizualizării.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">VII. Ce tip de informații sunt stocate și accesate prin intermediul cookie-urilor?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookie-urile păstrează informații într-un fișier text de mici dimensiuni care permit recunoașterea browserului. Această pagină de internet recunoaște browserul până când cookie-urile expiră sau sunt șterse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">VIII. Particularizarea setărilor browserului privind cookie-urile</h2>
              <p className="text-gray-700 leading-relaxed">
                Dacă utilizați singur calculatorul, pot fi setate termene lungi de expirare pentru stocarea istoricului de navigare. Dacă este folosit de mai multe persoane, poate fi luată în considerare ștergerea datelor individuale de navigare la închiderea browserului.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">IX. Cum pot fi oprite cookie-urile?</h2>
              <p className="text-gray-700 leading-relaxed">
                Dezactivarea și refuzul de a primi cookie-uri pot face această pagină dificil de vizitat, atrăgând limitări ale posibilităților de utilizare. Utilizatorii își pot configura browserul să respingă fișierele cookie sau să fie acceptate cookie-uri de la o pagină anume.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toate browserele moderne oferă posibilitatea de a schimba setările cookie-urilor. Aceste setări pot fi accesate, ca regulă, în secțiunea „opțiuni” sau în meniul de „preferințe” al browserului tău.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 hover:text-blue-800">Cookie settings in Internet Explorer</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:text-blue-800">Cookie settings in Firefox</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:text-blue-800">Cookie settings in Chrome</a></li>
                <li><a href="https://support.apple.com/en-us/HT201265" className="text-blue-600 hover:text-blue-800">Cookie settings in Safari</a></li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Refuzarea sau dezactivarea cookie-urilor nu înseamnă că nu veți mai primi publicitate online – ci doar că aceasta nu va fi adaptată preferințelor și intereselor dumneavoastră.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">X. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Pentru orice întrebări suplimentare cu privire la modul în care sunt utilizate cookie-urile prin intermediul acestei pagini de internet, vă rugăm să vă adresați la:
                <a href="mailto:firma@finanzconsult.ro" className="text-blue-600 hover:text-blue-800 ml-1">
                  firma@finanzconsult.ro
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}