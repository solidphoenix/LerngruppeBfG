export type LearningMethod = {
  slug: string
  title: string
  description: string
  focus: string
  steps: string[]
  topics: string[]
}

export const learningMethods: LearningMethod[] = [
  {
    slug: "virchow-trias-check",
    title: "Virchow-Trias-Check",
    description:
      "Ordne Risikofaktoren den drei Ursachen (Blutströmung, Gefäßwand, Gerinnung) zu.",
    focus:
      "Du trainierst das schnelle Erkennen der drei Hauptursachen einer Thrombose.",
    steps: [
      "Schreibe die drei Bereiche Blutströmung, Gefäßwand und Gerinnung auf.",
      "Ordne mindestens drei Risikofaktoren je Bereich zu und begründe kurz warum.",
      "Vergleiche deine Zuordnung mit dem PDF und ergänze fehlende Punkte.",
    ],
    topics: ["2. Übersicht Virchow-Trias", "3. Risikofaktoren einer Thrombose"],
  },
  {
    slug: "thrombose-symptom-scan",
    title: "Thrombose-Symptom-Scan",
    description:
      "Schweregefühl, warme Extremität, Schwellung und Wadenschmerz als Alarmzeichen merken.",
    focus:
      "Du baust eine schnelle Checkliste auf, um Warnzeichen sicher zu erkennen.",
    steps: [
      "Notiere die typischen Symptome einer Beinvenenthrombose in Stichpunkten.",
      "Markiere im Skript, welche Symptome als Alarmzeichen gelten.",
      "Übe das Abfragen der Symptome laut anhand eines Fallbeispiels.",
    ],
    topics: ["1. Definition Thrombose", "3. Risikofaktoren einer Thrombose"],
  },
  {
    slug: "atem-bewegungsuebungen",
    title: "Atem- & Bewegungsübungen",
    description:
      "Tiefes Atmen und aktive Fußbewegungen fördern den venösen Rückfluss.",
    focus:
      "Du lernst einfache Übungen, die die Muskelpumpe aktivieren und Thrombosen vorbeugen.",
    steps: [
      "Führe 3–5 tiefe Atemzüge durch und zähle dabei die Atemphasen.",
      "Bewege die Füße aktiv (Fußkreisen und Zehenziehen) für 1–2 Minuten.",
      "Notiere, wie du die Übungen in die Pflegeplanung einbaust.",
    ],
    topics: ["Text - Atemübungen", "Text - Bewegungsübungen"],
  },
  {
    slug: "ausstreichen-hochlagerung",
    title: "Ausstreichen & Hochlagerung",
    description:
      "Beinvenen ausstreichen und Beine hochlagern, um venöse Stauung zu reduzieren.",
    focus:
      "Du übst Maßnahmen zur Entlastung der Beinvenen und dokumentierst die Wirkung.",
    steps: [
      "Simuliere das Ausstreichen der Beinvenen in einem Schritt-für-Schritt-Ablauf.",
      "Plane eine Hochlagerung mit korrekter Lagerungshöhe (Herzniveau beachten).",
      "Formuliere, wann die Maßnahmen kontraindiziert sind.",
    ],
    topics: ["Text - Ausstreichen der Beinvenen", "Text - Hochlagerung der Beine"],
  },
  {
    slug: "kompressionstraining",
    title: "Kompressionstraining",
    description:
      "Kompressionsverband und Thromboseprophylaxestrumpf korrekt anlegen.",
    focus:
      "Du trainierst das Anlegen von Kompressionsmaterialien und achtest auf Druckverteilung.",
    steps: [
      "Erstelle eine Checkliste für das Anlegen eines Kompressionsverbandes.",
      "Übe das richtige Abmessen und Anziehen eines Prophylaxestrumpfes.",
      "Notiere die wichtigsten Haut- und Durchblutungskontrollen.",
    ],
    topics: [
      "Text - Kompressionsverband",
      "Text - Medizinischer Thromboseprophylaxestrumpf",
    ],
  },
  {
    slug: "wundarten-karteikarten",
    title: "Wundarten-Karteikarten",
    description:
      "Mechanische, chemische, thermische und strahlenbedingte Wunden unterscheiden.",
    focus:
      "Du lernst, Wundarten schnell zuzuordnen und typische Beispiele zu nennen.",
    steps: [
      "Erstelle vier Karteikarten für die unterschiedlichen Wundarten.",
      "Notiere pro Karte je zwei Beispiele und typische Ursachen.",
      "Teste dich selbst mit einer schnellen Zuordnungsrunde.",
    ],
    topics: ["04 Wunden & Wundversorgung", "04b Literatur Wunden und Drainagen"],
  },
  {
    slug: "wundheilungsphasen-poster",
    title: "Wundheilungsphasen-Poster",
    description:
      "Exsudation (bis 3 Tage), Proliferation (1–14 Tage), Regeneration (ab Tag 4, überlappend).",
    focus:
      "Du visualisierst die Wundheilung, um Zeiträume und Aufgaben sicher zu erinnern.",
    steps: [
      "Skizziere die drei Phasen mit Zeitangaben auf einem Poster.",
      "Füge zu jeder Phase die wichtigsten Pflegeziele hinzu.",
      "Hänge das Poster sichtbar auf und wiederhole die Phasen täglich.",
    ],
    topics: ["04a AB Wundheilung"],
  },
  {
    slug: "non-touch-verbandswechsel",
    title: "Non-Touch-Verbandswechsel",
    description:
      "Wundauflage nicht berühren und einfache Wundversorgung strukturiert üben.",
    focus:
      "Du trainierst den sterilen Ablauf und minimierst Kontaminationsrisiken.",
    steps: [
      "Schreibe die Materialien auf, die du vor dem Verbandswechsel bereitlegst.",
      "Übe den Ablauf mit Fokus auf die Non-Touch-Technik.",
      "Notiere die wichtigsten Dokumentationspunkte nach dem Wechsel.",
    ],
    topics: ["04 Wunden & Wundversorgung"],
  },
  {
    slug: "diabetes-glukosewerte-check",
    title: "Diabetes-Glukosewerte-Check",
    description:
      "Nüchtern-BZ 80–100 mg/dl, HbA1c ≥ 6,5% (Diagnosegrenze für Diabetes mellitus) und oGTT im Team abfragen.",
    focus:
      "Du merkst dir die entscheidenden Laborwerte und kannst sie sicher wiedergeben.",
    steps: [
      "Notiere die Referenzwerte für Nüchtern-BZ, HbA1c und oGTT.",
      "Erstelle eine Mini-Abfrage für Lernpartner:innen.",
      "Markiere Abweichungen, die als Diagnosekriterium gelten.",
    ],
    topics: ["1. Diabetes Präsentation", "3. AB Diabetes mellitus"],
  },
  {
    slug: "hypoglykaemie-notfallkarte",
    title: "Hypoglykämie-Notfallkarte",
    description:
      "Bei < 50 mg/dl Glukose geben, BZ messen, Arzt informieren; bei Bewusstlosigkeit stabile Seitenlage.",
    focus:
      "Du sicherst die Sofortmaßnahmen und kannst sie im Notfall schnell abrufen.",
    steps: [
      "Schreibe die Sofortmaßnahmen in der richtigen Reihenfolge auf eine Karte.",
      "Ergänze Warnzeichen wie Zittern, Schwitzen oder Bewusstseinsstörungen.",
      "Übe die Situation anhand eines kurzen Rollenspiels.",
    ],
    topics: ["1. Diabetes Präsentation", "8 Pflege bei Diabetes mellitus Typ 2"],
  },
  {
    slug: "dge-10-regeln-foodplan",
    title: "DGE-10-Regeln-Foodplan",
    description:
      "5 am Tag, Vollkorn, 1,5 Liter Wasser, maximal 300–600 g Fleisch/Woche.",
    focus:
      "Du leitest Ernährungsempfehlungen aus den DGE-Regeln ab und planst Mahlzeiten.",
    steps: [
      "Liste die 10 DGE-Regeln stichpunktartig auf.",
      "Plane einen Tagesplan mit Obst, Gemüse und Vollkornanteil.",
      "Notiere, wie viel Flüssigkeit empfohlen wird.",
    ],
    topics: ["2. Die 10 Regeln der DGE"],
  },
  {
    slug: "fieberkurven-pflegeplan",
    title: "Fieberkurven & Pflegeplan",
    description:
      "Fieberphasen erkennen, Vitalzeichen 2× täglich, Wadenwickel bei warmen Beinen.",
    focus:
      "Du lernst, Fieberverläufe zu dokumentieren und passende Maßnahmen zu planen.",
    steps: [
      "Zeichne eine einfache Fieberkurve mit den drei Phasen.",
      "Lege fest, wann Vitalzeichenkontrollen stattfinden sollen.",
      "Notiere geeignete Pflegeinterventionen für jede Phase.",
    ],
    topics: ["Fieber"],
  },
  {
    slug: "fallbeispiel-herr-winterhaus",
    title: "Fallbeispiel Herr Winterhaus",
    description:
      "Case-Review zu Diabetes, Wundversorgung, Fiebermanagement und Mobilisation.",
    focus:
      "Du verknüpfst mehrere Themenbereiche und trainierst pflegerisches Denken.",
    steps: [
      "Lies das Fallbeispiel und markiere die relevanten Probleme.",
      "Leite daraus Pflegeziele für Wundversorgung, Diabetes und Fieber ab.",
      "Notiere mindestens drei Maßnahmen zur Mobilisation.",
    ],
    topics: ["LS 4C Herr Winterhaus (Fallbeispiel)", "04 Wunden & Wundversorgung"],
  },
  {
    slug: "insulinpen-schritt-fuer-schritt",
    title: "Insulin-PEN Schritt für Schritt",
    description:
      "Lerne den korrekten Umgang mit dem Insulin-PEN und übe die Injektionsschritte.",
    focus:
      "Du trainierst die praxisnahe Handhabung des Insulin-PEN und vermeidest typische Fehler.",
    steps: [
      "Lege alle benötigten Materialien bereit (PEN, Nadel, Desinfektionsmittel).",
      "Übe die Schrittfolge: Nadel aufsetzen, Dosis einstellen, Injektionsstelle desinfizieren.",
      "Injiziere und warte 10 Sekunden, bevor du die Nadel entfernst.",
      "Notiere, warum die Injektionsstelle regelmäßig gewechselt werden muss.",
    ],
    topics: ["5. Insulinspritzen mit dem PEN", "1. Diabetes Präsentation"],
  },
  {
    slug: "lungenembolie-notfall",
    title: "Lungenembolie-Notfallkarte",
    description:
      "Erkenne die Warnzeichen einer Lungenembolie und leite Sofortmaßnahmen ein.",
    focus:
      "Du sicherst lebensrettende Erstmaßnahmen und verstehst den Zusammenhang mit Thrombosen.",
    steps: [
      "Notiere die typischen Symptome einer Lungenembolie (Atemnot, Brustschmerz, Tachykardie).",
      "Erstelle eine Notfallkarte mit den Sofortmaßnahmen in der richtigen Reihenfolge.",
      "Erkläre den Zusammenhang zwischen Beinvenenthrombose und Lungenembolie.",
    ],
    topics: ["1a Lungenembolie", "1. Definition Thrombose"],
  },
  {
    slug: "venensystem-anatomie",
    title: "Venensystem der Beine verstehen",
    description:
      "Lerne den Aufbau des Venensystems mit tiefen und oberflächlichen Venen sowie der Muskelpumpe.",
    focus:
      "Du verstehst, warum Bewegung und Kompression die Thromboseprophylaxe unterstützen.",
    steps: [
      "Zeichne eine Skizze des Beinvenensystems mit tiefen und oberflächlichen Venen.",
      "Markiere die Lage der Venenklappen und die Richtung des Blutflusses.",
      "Erkläre die Funktionsweise der Muskelpumpe und warum Immobilität gefährlich ist.",
    ],
    topics: ["1b Venensystem der Beine", "1. Definition Thrombose"],
  },
  {
    slug: "diabetes-spaetfolgen-mindmap",
    title: "Diabetes-Spätfolgen Mindmap",
    description:
      "Erstelle eine Mindmap zu den Langzeitkomplikationen bei Diabetes mellitus.",
    focus:
      "Du lernst, warum eine gute BZ-Einstellung langfristig wichtig ist.",
    steps: [
      "Schreibe Diabetes mellitus in die Mitte und zeichne Äste für jede Spätfolge.",
      "Notiere zu jeder Spätfolge: betroffenes Organ, Symptome und Prävention.",
      "Ergänze die Mindmap mit Pflegemaßnahmen zur Vorbeugung (Fußpflege, Augencheck).",
    ],
    topics: ["3. AB Diabetes mellitus", "8 Pflege bei Diabetes mellitus Typ 2"],
  },
  {
    slug: "ernaehrungsprotokoll",
    title: "Ernährungsprotokoll erstellen",
    description:
      "Plane und dokumentiere eine diabetesgerechte Tagesernährung nach DGE-Regeln.",
    focus:
      "Du übst die praktische Umsetzung der Ernährungsempfehlungen im Pflegealltag.",
    steps: [
      "Erstelle einen Tages-Ernährungsplan mit 3 Hauptmahlzeiten und 2 Snacks.",
      "Prüfe den Plan anhand der 10 DGE-Regeln (Vollkorn, 5 am Tag, Flüssigkeit).",
      "Berechne die ungefähre Kohlenhydratmenge und diskutiere die Auswirkung auf den BZ.",
    ],
    topics: ["2. Die 10 Regeln der DGE", "1. Diabetes Präsentation"],
  },
  {
    slug: "fieber-dokumentation",
    title: "Fieberdokumentation üben",
    description:
      "Erstelle eine vollständige Fieberkurve und dokumentiere Pflegeinterventionen je Phase.",
    focus:
      "Du trainierst die korrekte Dokumentation von Fieberverläufen und Pflegemaßnahmen.",
    steps: [
      "Zeichne eine Fieberkurve mit realistischen Werten über 3 Tage.",
      "Ordne jeder Phase (Anstieg, Höhe, Abfall) die passenden Pflegeinterventionen zu.",
      "Dokumentiere Vitalzeichen, Wadenwickel-Anwendung und Flüssigkeitsbilanz.",
    ],
    topics: ["Fieber"],
  },
  {
    slug: "wundversorgung-simulation",
    title: "Verbandswechsel-Simulation",
    description:
      "Simuliere einen vollständigen aseptischen Verbandswechsel nach Non-Touch-Technik.",
    focus:
      "Du trainierst den sterilen Ablauf in der richtigen Reihenfolge.",
    steps: [
      "Bereite alle Materialien vor und lege sie in der richtigen Reihenfolge bereit.",
      "Führe den Verbandswechsel als Trockenübung durch (Handschuhe, Pinzette, Kompressen).",
      "Fülle anschließend einen Wunddokumentationsbogen vollständig aus.",
      "Lasse eine Lernpartner:in deine Technik beobachten und Feedback geben.",
    ],
    topics: ["04 Wunden & Wundversorgung", "04b Literatur Wunden und Drainagen"],
  },
  // ── Schmerzmanagement ──────────────────────────────────────
  {
    slug: "schmerzassessment-training",
    title: "Schmerzassessment-Training",
    description:
      "NRS, VAS und BESD-Skala sicher anwenden und den passenden Einsatzbereich kennen.",
    focus:
      "Du trainierst das schnelle und korrekte Einschätzen von Schmerzen mit verschiedenen Assessment-Instrumenten.",
    steps: [
      "Schreibe die Skalen NRS, VAS, VRS und BESD mit jeweils einer Kurzbeschreibung auf.",
      "Ordne jeder Skala eine passende Patientengruppe zu (z.B. BESD bei Demenz).",
      "Simuliere ein Schmerzassessment mit einem Lernpartner und dokumentiere die Ergebnisse.",
    ],
    topics: ["PAP LP Schmerzmanagement"],
  },
  {
    slug: "who-stufenschema-poster",
    title: "WHO-Stufenschema-Poster",
    description:
      "Die drei Stufen der WHO-Schmerztherapie mit Beispielmedikamenten visualisieren.",
    focus:
      "Du erstellst ein Poster, das dir hilft, die medikamentöse Schmerztherapie schnell abzurufen.",
    steps: [
      "Zeichne drei Stufen und notiere zu jeder Stufe Beispielmedikamente.",
      "Ergänze Adjuvantien und typische Nebenwirkungen je Stufe.",
      "Vergleiche dein Poster mit dem PDF und ergänze fehlende Informationen.",
    ],
    topics: ["PAP LP Schmerzmanagement"],
  },
  {
    slug: "schmerzdokumentation-ueben",
    title: "Schmerzdokumentation üben",
    description:
      "Schmerzanamnese vollständig durchführen und korrekt dokumentieren.",
    focus:
      "Du lernst, alle relevanten Punkte einer Schmerzanamnese systematisch zu erfassen.",
    steps: [
      "Erstelle eine Checkliste für die Schmerzanamnese (Lokalisation, Intensität, Qualität, Zeitverlauf).",
      "Führe die Anamnese anhand eines Fallbeispiels durch.",
      "Dokumentiere die Ergebnisse inklusive Maßnahmen und Wirksamkeit.",
    ],
    topics: ["PAP LP Schmerzmanagement"],
  },
  {
    slug: "nicht-medikamentoese-schmerzlinderung",
    title: "Nicht-medikamentöse Schmerzlinderung",
    description:
      "Physikalische und psychologische Maßnahmen zur Schmerzlinderung kennenlernen.",
    focus:
      "Du erweiterst dein Repertoire an pflegerischen Interventionen gegen Schmerzen.",
    steps: [
      "Liste mindestens 5 nicht-medikamentöse Maßnahmen auf (Kälte, Wärme, Lagerung, TENS, Entspannung).",
      "Ordne jeder Maßnahme eine geeignete Schmerzsituation zu.",
      "Übe eine Progressive Muskelrelaxation nach Jacobson als praktische Übung.",
    ],
    topics: ["PAP LP Schmerzmanagement"],
  },
  {
    slug: "medikamentengabe-6r-regel",
    title: "6-R-Regel bei Medikamentengabe",
    description:
      "Die 6-R-Regel der Medikamentengabe sicher anwenden und dokumentieren.",
    focus:
      "Du sicherst die fehlerfreie Medikamentenverabreichung im Pflegealltag.",
    steps: [
      "Schreibe die 6 R auf: Richtiger Patient, richtiges Medikament, richtige Dosis, richtiger Zeitpunkt, richtige Applikationsform, richtige Dokumentation.",
      "Simuliere eine Medikamentengabe mit Lernpartner und prüfe alle 6 R.",
      "Notiere besondere Regeln für BtM-Medikamente (Vier-Augen-Prinzip, Dokumentation).",
    ],
    topics: ["PAP LP Schmerzmanagement"],
  },
  // ── Delegation ─────────────────────────────────────────────
  {
    slug: "delegation-verantwortungsbereiche",
    title: "Delegation – Vier Verantwortungsbereiche",
    description:
      "Delegations-, Überwachungs-, Übernahme- und Durchführungsverantwortung sicher unterscheiden.",
    focus:
      "Du lernst, welche Verantwortung bei wem liegt, wenn Aufgaben delegiert werden.",
    steps: [
      "Erstelle eine Tabelle mit vier Spalten für die Verantwortungsbereiche.",
      "Füge je Spalte eine kurze Definition und ein Praxisbeispiel hinzu.",
      "Überprüfe dein Ergebnis mit dem Delegation-PDF.",
    ],
    topics: ["Delegation"],
  },
  {
    slug: "remonstrationspflicht-training",
    title: "Remonstrationspflicht – Wann muss ich ablehnen?",
    description:
      "Das Recht und die Pflicht, Maßnahmen abzulehnen, wenn die Kompetenz fehlt.",
    focus:
      "Du trainierst, in welchen Situationen du Aufgaben ablehnen musst und wie du das kommunizierst.",
    steps: [
      "Definiere Remonstrationspflicht in eigenen Worten.",
      "Formuliere drei Szenarien, in denen du eine Aufgabe ablehnen müsstest.",
      "Übe die Kommunikation der Ablehnung in einem kurzen Rollenspiel.",
    ],
    topics: ["Delegation"],
  },
  {
    slug: "delegierbare-taetigkeiten-check",
    title: "Delegierbare vs. Nicht-delegierbare Tätigkeiten",
    description:
      "Sicher unterscheiden, welche Aufgaben an Pflegefachassistenten delegiert werden dürfen.",
    focus:
      "Du baust dir eine Checkliste auf, um im Alltag sofort entscheiden zu können.",
    steps: [
      "Erstelle zwei Listen: delegierbar und nicht delegierbar.",
      "Ordne Beispieltätigkeiten (Tabletten verabreichen, Blutentnahme usw.) zu.",
      "Begründe bei strittigen Fällen, warum die Tätigkeit (nicht) delegierbar ist.",
    ],
    topics: ["Delegation"],
  },
  // ── Demenz & Validation ────────────────────────────────────
  {
    slug: "validation-iva-ueben",
    title: "Integrative Validation (IVA) üben",
    description:
      "Sich in die Erlebniswelt eines Menschen mit Demenz einfühlen und validierend kommunizieren.",
    focus:
      "Du trainierst den wertschätzenden Umgang mit dementen Menschen nach Nicole Richard.",
    steps: [
      "Notiere den Grundsatz 'Verwirrt nicht die Verwirrten' und erkläre ihn.",
      "Beschreibe drei Alltagssituationen, in denen du validierend reagieren würdest.",
      "Übe eine validierende Gesprächssequenz mit einem Lernpartner.",
    ],
    topics: ["10 Validation nach Nicole Richard"],
  },
  {
    slug: "kitwood-beduerfnisblume",
    title: "Kitwood-Bedürfnisblume zeichnen",
    description:
      "Die fünf psychischen Grundbedürfnisse nach Tom Kitwood visualisieren und anwenden.",
    focus:
      "Du verstehst, welche Bedürfnisse bei Demenz besonders gefährdet sind.",
    steps: [
      "Zeichne die Bedürfnisblume mit Liebe im Zentrum und den fünf Blütenblättern.",
      "Beschrifte jedes Blatt: Trost, Bindung, Einbeziehung, Beschäftigung, Identität.",
      "Ordne jedem Bedürfnis eine konkrete pflegerische Maßnahme zu.",
    ],
    topics: ["06 Bedürfnisblume Kitwood", "07 Text zur Kitwood Blume"],
  },
  {
    slug: "demenz-fallbeispiel-analyse",
    title: "Fallbeispiel Frau Ring – Demenz analysieren",
    description:
      "Herausforderndes Verhalten bei Demenz verstehen und pflegerische Antworten ableiten.",
    focus:
      "Du verknüpfst Theorie (IVA, Kitwood) mit einem konkreten Pflegefall.",
    steps: [
      "Lies das Fallbeispiel Frau Ring und markiere die beschriebenen Probleme.",
      "Analysiere das herausfordernde Verhalten (Rufen, Klopfen) anhand der Kitwood-Bedürfnisse.",
      "Plane validationsgestützte Pflegemaßnahmen für Frau Ring.",
    ],
    topics: [
      "01 Fallbeispiel 7C Alt werden ist nichts für Feiglinge",
      "10 Validation nach Nicole Richard",
      "06 Bedürfnisblume Kitwood",
    ],
  },
  // ── Biographiearbeit ───────────────────────────────────────
  {
    slug: "biographie-vs-lebenslauf",
    title: "Biographie vs. Lebenslauf unterscheiden",
    description:
      "Den Unterschied zwischen Lebenslauf, Biographie und Biographiearbeit klar erklären.",
    focus:
      "Du kannst die drei Begriffe sicher voneinander abgrenzen.",
    steps: [
      "Schreibe Definitionen für Lebenslauf, Biographie und Biographiearbeit auf.",
      "Erstelle ein Schaubild, das die Unterschiede visuell zeigt.",
      "Vergleiche mit dem PDF und ergänze fehlende Aspekte.",
    ],
    topics: ["03a Biographie vs. Biographiearbeit", "03b Lebenslauf vs. Biographie Zusammenfassung"],
  },
  {
    slug: "biographiearbeit-methoden-poster",
    title: "Biographiearbeit-Methoden-Poster",
    description:
      "Mindestens 8 Methoden der Biographiearbeit auf einem Poster sammeln.",
    focus:
      "Du erweiterst dein Repertoire an Zugängen zur Lebensgeschichte von Pflegebedürftigen.",
    steps: [
      "Liste alle Methoden aus dem PDF auf (Fotos, Musik, Erzählungen, Erinnerungskoffer usw.).",
      "Gestalte ein Poster mit je einem Bild oder Symbol pro Methode.",
      "Notiere zu jeder Methode eine konkrete Umsetzungsidee für deinen Pflegealltag.",
    ],
    topics: ["05b Methoden und Ziele der Biografiearbeit"],
  },
  {
    slug: "biographiearbeit-themenschwerpunkte",
    title: "Biographiearbeit – Themenschwerpunkte zuordnen",
    description:
      "Die sechs Themenschwerpunkte kennen und passende Fragen zuordnen.",
    focus:
      "Du übst, biografische Fragen gezielt zu formulieren.",
    steps: [
      "Erstelle Karteikarten mit den sechs Themenschwerpunkten.",
      "Ordne vorgegebene Fragen (z.B. 'Welchen Beruf haben Sie erlernt?') dem richtigen Schwerpunkt zu.",
      "Formuliere eigene biografische Fragen zu jedem Schwerpunkt.",
    ],
    topics: ["05a Themenschwerpunkte der Biographiearbeit"],
  },
]
