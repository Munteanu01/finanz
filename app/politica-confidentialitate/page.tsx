import FinanzNavbar from "../../navbar"
import Footer from "../../components/footer"

export default function PoliticaConfidentialitate() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FinanzNavbar />
      <main className="container mx-auto py-12 px-4 mt-16 xl:mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primaryColor mb-8">Politica de confidențialitate</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">I. Informații generale</h2>
              <p className="text-gray-700 leading-relaxed">
                Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă una dintre preocupările
                principale ale FINANZ CONSULT S.R.L., cu sediul în Spl. Independentei, Nr.202 B, Sector 6, Județ:
                București, în calitate de operator de date.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Acest document are rolul de a vă informa cu privire la prelucrarea datelor dumneavoastră cu caracter
                personal, în contextul utilizării paginii de internet https://finanzconsult.ro/.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">
                II. Categoriile de date cu caracter personal prelucrate
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">II.1. Dacă sunteți client al Site-ului</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Deținătorul website-ului va prelucra datele dumneavoastră cu caracter personal, cum ar fi nume și
                prenume, telefon, adresa de e-mail, adresa de facturare, adresa de livrare, date referitoare la modul în
                care utilizați Site-ul, de exemplu comportamentul / preferințele / obișnuințele dumneavoastră în cadrul
                deținătorul website-ului, precum și orice alte categorii de date pe care le furnizați în mod direct în
                contextul creării contului de utilizator, în contextul plasării unei comenzi prin intermediul site-ului
                sau în orice alt mod care rezultă din utilizarea Site-ului.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">II.2. Dacă sunteți vizitator al Site-ului</h3>
              <p className="text-gray-700 leading-relaxed">
                Deținătorul website-ului va prelucra datele dumneavoastră cu caracter personal pe care le furnizați în
                mod direct în contextul utilizării Site-ului, cum ar fi datele pe care le furnizați în cadrul secțiunii
                de contact / întrebări / reclamații, în măsura în care ne contactați în acest fel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">III. Scopurile și temeiurile de prelucrare</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">III.1. Pentru clienții Site-ului</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Desfășurarea relației contractuale</h4>
                  <p className="text-gray-700 text-sm">
                    Pentru preluarea, validarea, expedierea și facturarea comenzii plasate pe Site, informarea
                    dumneavoastră asupra stării comenzii, organizarea returului de produse comandate etc.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Temei:</strong> Contractul încheiat între dumneavoastră și deținătorul website-ului.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Îndeplinirea obligațiilor legale</h4>
                  <p className="text-gray-700 text-sm">
                    Pentru îndeplinirea obligațiilor legale care incumbă deținătorul website-ului în contextul
                    serviciilor prestate prin intermediul Site-ului, inclusiv a obligațiilor în materie fiscală, precum
                    și în materie de arhivare.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Temei:</strong> Obligații legale.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Activități de marketing</h4>
                  <p className="text-gray-700 text-sm">
                    Pentru transmiterea, prin intermediul mijloacelor de comunicare la distanță (e-mail, sms) de
                    comunicări comerciale privind produsele și serviciile oferite de deținătorul website-ului, prin
                    intermediul Site-ului.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Temei:</strong> Consimțământul dumneavoastră.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">IV. Durata pentru care vă prelucrăm datele</h2>
              <p className="text-gray-700 leading-relaxed">
                Ca principiu, deținătorul website-ului va prelucra datele dumneavoastră cu caracter personal atât cât
                este necesar pentru realizarea scopurilor de prelucrare menționate mai sus.
              </p>
              <p className="text-gray-700 leading-relaxed">
                În cazul în care sunteți client, vom prelucra datele dumneavoastră pe întreaga durată a raporturilor
                contractuale și ulterior conform obligațiilor legale care revin în sarcina deținătorul website-ului (de
                ex., în cazul documentelor justificative financiar-contabile pentru care termenul de păstrare prevăzut
                de lege este de 10 ani de la data încheierii exercițiului financiar în cursul căruia au fost întocmite).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">V. Drepturile de care beneficiați</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Dreptul la informare</h4>
                  <p className="text-gray-700 text-sm">
                    Dreptul de a primi detalii privind activitățile de prelucrare efectuate.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Dreptul de acces</h4>
                  <p className="text-gray-700 text-sm">
                    Dreptul de a obține confirmarea privind prelucrarea datelor cu caracter personal.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Dreptul la rectificare</h4>
                  <p className="text-gray-700 text-sm">
                    Dreptul de a obține corectarea datelor cu caracter personal inexacte.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Dreptul la ștergere</h4>
                  <p className="text-gray-700 text-sm">Dreptul de a fi uitat în anumite condiții prevăzute de lege.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primaryColor mb-4">VI. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Pentru orice întrebări suplimentare cu privire la modul în care datele cu caracter personal sunt
                prelucrate și pentru a vă exercita drepturile menționate mai sus, vă rugăm să vă adresați la adresa de
                email:
                <a href="mailto:contact@finanzconsult.ro" className="text-blue-600 hover:text-blue-800 ml-1">
                  contact@finanzconsult.ro
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
