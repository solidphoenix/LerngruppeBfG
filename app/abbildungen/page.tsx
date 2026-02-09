import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const figureSections = [
  {
    title: "Wundversorgung",
    description: "Grafiken zu Wundarten, Heilungsphasen und Dokumentation.",
    figures: [
      {
        name: "Wundheilungsphasen",
        caption:
          "Übersicht über Exsudation, Proliferation und Regeneration mit Zeitachsen.",
        source: "04a AB Wundheilung",
        highlights: [
          "Zeitliche Abfolge der Phasen",
          "Wichtige Pflegeinterventionen pro Phase",
          "Wundheilung mit/ohne Komplikationen",
        ],
      },
      {
        name: "Aseptische vs. septische Wunde",
        caption:
          "Schema zur Unterscheidung von Infektionszeichen und Wundrandbeurteilung.",
        source: "04 Wunden & Wundversorgung",
        highlights: [
          "Infektionszeichen erkennen",
          "Dokumentationsfelder im Wundbogen",
          "Beispiele für aseptische Wunden",
        ],
      },
    ],
  },
  {
    title: "Diabetes & Stoffwechsel",
    description: "Abbildungen zu Insulinwirkung, PEN und Ernährung.",
    figures: [
      {
        name: "Insulinwirkung im Körper",
        caption:
          "Grafik zur Glukoseaufnahme in Muskel- und Fettzellen mit Insulin.",
        source: "1. Diabetes Präsentation",
        highlights: [
          "Transport von Glukose in die Zelle",
          "Speicherung als Glykogen",
          "Auswirkungen bei Insulinmangel",
        ],
      },
      {
        name: "Insulin-PEN Schrittfolge",
        caption:
          "Bildsequenz zur Vorbereitung und Anwendung des Insulin-PEN.",
        source: "5. Insulinspritzen mit dem PEN",
        highlights: [
          "Dosis einstellen",
          "Desinfektion der Einstichstelle",
          "Injektionsdauer 10 Sekunden",
        ],
      },
    ],
  },
  {
    title: "Thrombose & Fieber",
    description: "Schemata zu Virchow-Trias, Prophylaxe und Fieberverlauf.",
    figures: [
      {
        name: "Virchow-Trias",
        caption:
          "Dreiecksgrafik zu Blutströmung, Gefäßwand und Gerinnungsneigung.",
        source: "2. Übersicht Virchow Trias",
        highlights: [
          "Risikofaktoren zuordnen",
          "Zusammenhang der drei Ursachen",
          "Beispiele aus der Pflegepraxis",
        ],
      },
      {
        name: "Fieberkurve",
        caption:
          "Verlauf mit Anstieg, Höhe, Abfall – inklusive Pflegemaßnahmen je Phase.",
        source: "Fieber",
        highlights: [
          "Schüttelfrost im Anstieg",
          "Überwachung der Vitalzeichen",
          "Flüssigkeitsbilanz nach Fieberabfall",
        ],
      },
    ],
  },
]

const usageNotes = [
  "Nutze die Abbildungen als visuellen Einstieg in jedes Thema.",
  "Hake die Highlights ab, wenn du die Grafik verstanden hast.",
  "Öffne die passende PDF-Datei, falls du mehr Details brauchst.",
]

export default function AbbildungenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-sky-50">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <header className="text-center mb-10">
          <Badge className="mb-3">Abbildungen</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-3 text-balance">
            Wichtige Abbildungen aus den PDFs
          </h1>
          <p className="text-lg text-gray-600 text-pretty max-w-2xl mx-auto">
            Die PDFs enthalten Grafiken und Schemata, die du für die Klausur kennen
            solltest. Hier findest du eine strukturierte Übersicht mit kurzen Erklärungen.
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
            So arbeitest du mit den Abbildungen
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {usageNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-10">
          {figureSections.map((section) => (
            <div key={section.title}>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {section.figures.map((figure) => (
                  <Card key={figure.name} className="bg-white/90">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-lg">{figure.name}</CardTitle>
                        <Badge variant="secondary">PDF-Grafik</Badge>
                      </div>
                      <CardDescription>{figure.caption}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-center rounded-lg border border-dashed border-indigo-200 bg-indigo-50/70 p-6 text-xs font-medium text-indigo-700">
                        Vorschau-Platzhalter für Abbildung
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Highlights</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
                          {figure.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-xs text-gray-400">Quelle: {figure.source}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="mb-3">
            Alle Abbildungen stammen aus den PDFs im Ordner
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
