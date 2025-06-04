"use client";
import FinanzNavbar from "../../../navbar";
import Footer from "../../../components/footer";
import HeroPages from "../../../components/HeroPages";

export default function AplicatiePage() {
  return (
    <>
      <FinanzNavbar />
      <HeroPages
              title="Navigăm împreună prin fiscalitate"
              subtitle="Facturezi de pe dispozitivul preferat" backgroundImage={""} cards={[]}      />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-8 text-gray-800">
        <section>
          <p>
            Cu aplicația <b>Finanz Consult</b>, facturarea devine rapidă și eficientă, indiferent dacă alegi să o faci de pe telefon sau desktop. Grație funcției de sincronizare între dispozitive, toate datele tale sunt actualizate și accesibile, asigurând o experiență de utilizare fluidă și fără întreruperi.
          </p>
          <p>
            Pentru a gestiona volume mari de muncă cu maximă eficiență, aplicația noastră îți pune la dispoziție un set complet de instrumente într-un mediu desktop avansat și intuitiv. Astfel, poți să îți îndeplinești sarcinile rapid și precis, fără a sacrifica calitatea muncii.
          </p>
          <p>
            Descoperă flexibilitatea oferită de aplicația noastră, disponibilă pe Android, iOS și Desktop. Indiferent de dispozitivul pe care preferi să lucrezi, aplicația noastră se adaptează nevoilor tale, permițându-ți să facturezi mai inteligent și mai eficient.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-primaryColor mb-2">
            Ne ocupăm de contabilitate, tu te concentrezi pe afacerea ta
          </h2>
          <p>
            Finanz Consult pune la dispoziția clienților săi o aplicație online care facilitează accesul rapid și eficient la serviciile financiare și contabile. Prin intermediul acestei aplicații, clienții pot:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Monitoriza cheltuieli/venituri – urmărire în timp real a tranzacțiilor financiare.</li>
            <li>Accesa rapoarte financiare – rapoarte detaliate și statistici pentru decizii informate.</li>
            <li>Planifica economiile și investițiile – instrumente pentru atingerea obiectivelor financiare.</li>
            <li>Gestiona bugetele – bugete personalizate și optimizare a resurselor.</li>
            <li>Comunica cu experții – întrebări și consultanță direct prin aplicație.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-primaryColor mb-2">
            Avantajele aplicației FinanzConsult.ro
          </h2>
          <p>
            Aceste funcționalități sunt concepute pentru a simplifica și eficientiza procesele financiare și contabile, oferind clienților o experiență modernă și intuitivă.
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><b>Comunicare eficientă:</b> Spațiu virtual pentru comunicare și partajare documente în timp real.</li>
            <li><b>Gestiune documente:</b> Încărcare și arhivare electronică automată a documentelor.</li>
            <li><b>Rapoarte financiare:</b> Acces în timp real la rapoarte detaliate.</li>
            <li><b>Facturare simplificată:</b> Emitere rapidă și gratuită a facturilor, acces permanent pentru contabil.</li>
            <li><b>Procesare documente:</b> Tehnologie avansată pentru procesare rapidă.</li>
            <li><b>Sistem de acces securizat:</b> Protejarea datelor și documentelor companiei.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-primaryColor mb-2">
            Abordează relația cu contabilul tău într-un mod diferit
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><b>Oferă acces contabilului tău:</b> Acces direct la arhivă și facturare pentru eficiență sporită.</li>
            <li><b>Acces la baza de date:</b> Documentele rămân la tine, poți schimba contabilul oricând.</li>
            <li><b>Sistem de acces securizat:</b> Documente securizate și stocate în cloud.</li>
            <li><b>Adaugă asociați și angajați:</b> Echipa gestionează documentele contabile eficient.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}