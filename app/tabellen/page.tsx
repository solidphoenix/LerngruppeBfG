import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const overviewTables = [
  {
    title: "Pflegeprozess im Überblick",
    description: "Strukturierter Ablauf für Planung und Evaluation.",
    headers: ["Schritt", "Ziel", "Dokumentation"],
    rows: [
      [
        "Assessment",
        "Daten sammeln, Risiken erkennen",
        "Vitalzeichen, Pflegeanamnese, Befunde",
      ],
      [
        "Pflegeplanung",
        "Ziele und Maßnahmen festlegen",
        "Pflegeziele, Maßnahmenplan, Verantwortlichkeiten",
      ],
      [
        "Durchführung",
        "Maßnahmen umsetzen",
        "Durchführungsnachweis, Beobachtungen",
      ],
      [
        "Evaluation",
        "Wirksamkeit prüfen",
        "Zielerreichung, Anpassungen, nächste Schritte",
      ],
    ],
  },
  {
    title: "Pflegemaßnahmen nach Themen",
    description: "Tabelle für zentrale Maßnahmen und Dokumentation.",
    headers: ["Thema", "Beobachtung", "Maßnahme", "Dokumentation"],
    rows: [
      [
        "Wundversorgung",
        "Wundrand, Exsudat, Schmerz",
        "Aseptischer Verbandswechsel, Non-Touch-Technik",
        "Wunddoku, Foto, Material",
      ],
      [
        "Diabetes",
        "BZ-Werte, Symptome",
        "BZ messen, Ernährung anpassen, Insulin verabreichen",
        "BZ-Kurve, Insulingabe, Beschwerden",
      ],
      [
        "Thrombose",
        "Schwellung, Schmerz, Hautfarbe",
        "Mobilisation, Kompression, Atemübungen",
        "Prophylaxenachweis, Beobachtung",
      ],
      [
        "Fieber",
        "Temperatur, Kreislauf",
        "Wadenwickel, Flüssigkeit, Ruhe",
        "Fieberkurve, Vitalzeichen",
      ],
      [
        "Schmerzmanagement",
        "Schmerzintensität (NRS), Lokalisation",
        "Medikamente nach WHO-Schema, Kälte, Wärme, Lagerung",
        "Schmerztagebuch, Wirksamkeit, Nebenwirkungen",
      ],
    ],
  },
  {
    title: "Notfallmaßnahmen-Überblick",
    description: "Sofortmaßnahmen bei kritischen Pflegesituationen.",
    headers: ["Notfall", "Erkennung", "Sofortmaßnahme", "Weiteres Vorgehen"],
    rows: [
      [
        "Hypoglykämie",
        "BZ < 50 mg/dl, Zittern, Schwitzen",
        "Glukose geben, BZ messen",
        "Arzt informieren, Ursache klären",
      ],
      [
        "Lungenembolie",
        "Atemnot, Brustschmerz, Tachykardie",
        "Notruf, Oberkörper hochlagern, O₂",
        "Vitalzeichen überwachen",
      ],
      [
        "Thromboseverdacht",
        "Einseitige Schwellung, Wadenschmerz",
        "Arzt informieren, Bettruhe",
        "Keine Mobilisation ohne Anordnung",
      ],
      [
        "Hohes Fieber (> 39 °C)",
        "Heiße Haut, Tachykardie, Unruhe",
        "Wadenwickel, Flüssigkeit",
        "Arzt informieren, Antipyretika nach AO",
      ],
      [
        "Starke Schmerzen (NRS ≥ 7)",
        "Patient äußert starke Schmerzen, Schonhaltung",
        "Arzt informieren, Bedarfsmedikation",
        "Reassessment nach 30 Min, Dokumentation",
      ],
    ],
  },
  {
    title: "Verbandswechsel-Checkliste",
    description: "Schritt-für-Schritt-Ablauf eines aseptischen Verbandswechsels.",
    headers: ["Schritt", "Handlung", "Hinweis"],
    rows: [
      ["1", "Händedesinfektion durchführen", "Mind. 30 Sekunden einwirken"],
      ["2", "Material bereitstellen", "Sterile Kompressen, Desinfektionsmittel, Handschuhe"],
      ["3", "Alten Verband entfernen", "Unsterile Handschuhe verwenden"],
      ["4", "Wunde inspizieren & dokumentieren", "Größe, Exsudat, Geruch, Wundrand"],
      ["5", "Wundreinigung mit Non-Touch-Technik", "Von innen nach außen desinfizieren"],
      ["6", "Neuen Verband steril auflegen", "Sterile Pinzette verwenden"],
      ["7", "Verband fixieren & beschriften", "Datum, Uhrzeit, Handzeichen"],
    ],
  },
  {
    title: "Ernährung bei Diabetes – Praxistipps",
    description: "Konkrete Ernährungsempfehlungen basierend auf den DGE-Regeln.",
    headers: ["Mahlzeit", "Empfehlung", "Beispiel"],
    rows: [
      ["Frühstück", "Vollkorn, wenig Zucker", "Vollkornbrot mit Frischkäse, Obst"],
      ["Mittagessen", "Gemüse-Basis, mageres Eiweiß", "Gemüsepfanne mit Hähnchen, Reis"],
      ["Abendessen", "Leicht, ballaststoffreich", "Salat mit Fisch, Vollkornbrot"],
      ["Snacks", "Obst, Nüsse, Gemüsesticks", "Apfel, Mandeln, Karotten"],
      ["Getränke", "1,5 L Wasser/Tag, ungesüßt", "Wasser, Kräutertee"],
    ],
  },
  {
    title: "WHO-Stufenschema der Schmerztherapie",
    description: "Medikamentöse Schmerztherapie nach dem WHO-Stufenmodell.",
    headers: ["Stufe", "Medikamente", "Nebenwirkungen", "Hinweis"],
    rows: [
      [
        "Stufe 1",
        "Ibuprofen, Diclofenac, Paracetamol, Metamizol",
        "Magen-Darm, Niere, Leber (Paracetamol)",
        "PPI-Schutz bei NSAR erwägen",
      ],
      [
        "Stufe 2",
        "Tramadol, Tilidin, Codein",
        "Übelkeit, Obstipation, Sedierung",
        "+ Nicht-Opioide ± Adjuvantien",
      ],
      [
        "Stufe 3",
        "Morphin, Oxycodon, Fentanyl, Hydromorphon",
        "Obstipation, Atemdepression, Sedierung",
        "Laxanzien prophylaktisch, BtM-Regeln",
      ],
    ],
  },
  {
    title: "Schmerzassessment-Skalen",
    description: "Übersicht der Schmerzeinschätzungsinstrumente.",
    headers: ["Skala", "Beschreibung", "Einsatzgebiet"],
    rows: [
      ["NRS", "Numerisch 0–10, Patient schätzt selbst ein", "Verbal-kompetente Erwachsene"],
      ["VAS", "10-cm-Linie, Patient markiert Schmerzintensität", "Verlaufskontrolle"],
      ["VRS", "Verbale Kategorien (kein – unerträglich)", "Ältere, einfache Anwendung"],
      ["Wong-Baker", "Gesichter-Skala (lachend – weinend)", "Kinder, Sprachbarrieren"],
      ["BESD", "Fremdeinschätzung: Mimik, Körpersprache, Lautäußerung", "Menschen mit Demenz"],
    ],
  },
  {
    title: "Delegation – Vollständige Übersicht",
    description: "Verantwortungsbereiche, delegierbare und nicht-delegierbare Tätigkeiten.",
    headers: ["Aspekt", "Details", "Rechtsgrundlage/Hinweis"],
    rows: [
      ["Definition", "Übertragung von Aufgaben an andere Personen", "SGB V, Pflegeberufegesetz"],
      ["Delegationsverantwortung", "PFK prüft Delegierbarkeit, korrekte Anordnung, Fähigkeit der PFA", "Liegt bei der delegierenden Person"],
      ["Überwachungspflicht", "PFK überzeugt sich regelmäßig von korrekter Ausführung", "Instruktion und Kontrolle"],
      ["Übernahmeverantwortung", "PFA prüft eigene Kompetenz, Remonstrationspflicht", "Recht und Pflicht zur Ablehnung"],
      ["Durchführungsverantwortung", "PFA führt Maßnahme korrekt durch", "Haftung bei Fehlern"],
      ["Delegierbar", "Grundpflege, Tabletten, s.c. Injektionen, Augentropfen, Microclist", "Nach Anweisung durch PFK"],
      ["Nicht delegierbar", "Medikamente stellen, i.m./i.v. Injektionen, Blutentnahmen, Wundversorgung", "Nur PFK oder Arzt"],
    ],
  },
  {
    title: "Integrative Validation (IVA) nach Nicole Richard",
    description: "Übersicht über Grundprinzipien und Umsetzung der IVA bei Demenz.",
    headers: ["Prinzip", "Beschreibung", "Praxisbeispiel"],
    rows: [
      ["Validieren", "Annehmen, Wertschätzen, Akzeptieren", "Gefühle des Betroffenen bestätigen"],
      ["Nicht konfrontieren", "Erlebniswelt akzeptieren, nicht korrigieren", "'Ihr Bus kommt gleich' statt 'Sie sind im Pflegeheim'"],
      ["Antriebe nutzen", "Lebenslange Charaktereigenschaften ansprechen", "Bei Ordnungssinn: Servietten falten lassen"],
      ["Gefühle spiegeln", "Momentane Empfindungen ernst nehmen", "Bei Angst: 'Ich sehe, dass Sie sich sorgen'"],
      ["Sicherheit geben", "Vertrautheit und Routine anbieten", "Rituale beibehalten, Bezugspflege"],
    ],
  },
  {
    title: "Kitwood-Bedürfnisblume – Ausführlich",
    description: "Die fünf psychischen Grundbedürfnisse nach Tom Kitwood mit Pflegemaßnahmen.",
    headers: ["Bedürfnis", "Erklärung", "Pflegerische Umsetzung", "Gefahr bei Vernachlässigung"],
    rows: [
      ["Trost", "Sicherheit und Nähe geben", "Beruhigende Pflege, Körperkontakt, ruhige Umgebung", "Angst, Unruhe, Agitation"],
      ["Bindung", "Vertraute Beziehungen pflegen", "Bezugspflege, Angehörige einbeziehen, Fotos", "Isolation, Rückzug"],
      ["Einbeziehung", "Teilhabe am sozialen Leben", "Gemeinschaftsaktivitäten, Gespräche, Gruppenangebote", "Einsamkeit, Depression"],
      ["Beschäftigung", "Sinnvolle Aktivität ermöglichen", "Biografisch orientierte Angebote, Alltagstätigkeiten", "Langeweile, Unruhe"],
      ["Identität", "Das eigene Selbst erhalten", "Namen verwenden, Gewohnheiten bewahren, Biographiearbeit", "Identitätsverlust, Verzweiflung"],
    ],
  },
  {
    title: "Biographiearbeit – Themenschwerpunkte, Methoden & Ziele",
    description: "Umfassende Übersicht zur Biographiearbeit in der Altenpflege.",
    headers: ["Bereich", "Inhalt", "Beispiele/Fragen"],
    rows: [
      ["Themenschwerpunkt 1", "Elternhaus und frühe Jugend", "Geschwister? Schule? Strenge Eltern?"],
      ["Themenschwerpunkt 2", "Beruf und Lebensleistung", "Welchen Beruf erlernt? Stolz auf was?"],
      ["Themenschwerpunkt 3", "Normen, Werte, Interessen", "Religion? Hobbys? Traditionen?"],
      ["Themenschwerpunkt 4", "Rituale und Gewohnheiten", "Aufsteh-Rituale? Mahlzeiten? Zubettgehen?"],
      ["Themenschwerpunkt 5", "Soziale Bedürfnisse", "Wichtige Menschen? Lieber allein oder in Gesellschaft?"],
      ["Themenschwerpunkt 6", "Bedeutsame Lebensereignisse", "Wertvolle Erinnerungen? Heimatgegenstände?"],
      ["Methoden", "Zugangswege", "Fotos, Musik, Erinnerungskoffer, Erzählungen, Stammbaum"],
      ["Ziele", "Ergebnisse", "Sicherheit, Identität, Sinnstiftung, Kommunikation, Wohlbefinden"],
      ["Grenzen", "Vorsicht", "Freiwilligkeit, kein Verhör, Datenschutz, Sensibilität"],
    ],
  },
]

const workflowNotes = [
  "Alle Tabellen können als Lernposter ausgedruckt werden.",
  "Ergänze eigene Beispiele aus der Praxis, um den Transfer zu sichern.",
  "Bei Unsicherheiten immer die PDF-Quellen prüfen.",
]

export default function TabellenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-zinc-50">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <header className="text-center mb-10">
          <Badge className="mb-3">Tabellen</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-3 text-balance">
            Tabellen & Übersichten für die Prüfungsvorbereitung
          </h1>
          <p className="text-lg text-gray-600 text-pretty max-w-2xl mx-auto">
            Ausführliche Tabellen helfen dir, Pflegeprozesse zu strukturieren und
            Maßnahmen korrekt zu dokumentieren. Nutze sie als Leitfaden für Klausuren
            und Praxis.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/lernplattform"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
            >
              Zur Lernplattform
            </Link>
            <Link
              href="/"
              className="px-5 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              Zur Anmeldung
            </Link>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Hinweise für den Einsatz
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {workflowNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6">
          {overviewTables.map((table) => (
            <Card key={table.title} className="bg-white/90">
              <CardHeader>
                <CardTitle className="text-lg">{table.title}</CardTitle>
                <CardDescription>{table.description}</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="overflow-hidden rounded-lg border border-gray-100">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-xs text-gray-500">
                      <tr>
                        {table.headers.map((header) => (
                          <th
                            key={header}
                            className="px-3 py-2 text-left font-semibold"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {table.rows.map((row, rowIndex) => (
                        <tr key={`${table.title}-row-${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${table.title}-row-${rowIndex}-cell-${cellIndex}`}
                              className="px-3 py-2 text-gray-600"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="mb-3">
            Die Tabellen basieren auf den PDFs aus dem Ordner
            <span className="font-semibold"> /pdf-uploads</span>.
          </p>
          <Link href="/lernplattform" className="text-primary hover:underline">
            Zur Lernplattform
          </Link>
        </footer>
      </div>
    </main>
  )
}
