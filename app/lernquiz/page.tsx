"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const quizGuidelines = [
  {
    title: "Selbstcheck",
    description:
      "Wähle zuerst eine Antwort und begründe sie, bevor du die Lösung öffnest.",
  },
  {
    title: "Fehler notieren",
    description:
      "Schreibe dir falsche Antworten kurz auf und wiederhole sie später.",
  },
  {
    title: "PDF-Quelle nutzen",
    description:
      "Jede Frage ist mit den PDF-Unterlagen verknüpft, damit du schnell nachlesen kannst.",
  },
  {
    title: "Lerntempo",
    description:
      "Plane pro Quizrunde 10–15 Minuten, damit du nicht unter Zeitdruck gerätst.",
  },
]

type QuizQuestion = {
  question: string
  options: string[]
  answer: string
  explanation: string
  source: string
}

type QuizSection = {
  title: string
  description: string
  questions: QuizQuestion[]
}

const allQuizSections: QuizSection[] = [
  {
    title: "Wundversorgung",
    description: "Grundlagen und aseptische Arbeitsweise überprüfen.",
    questions: [
      {
        question: "Welche Aussage beschreibt eine aseptische Wunde korrekt?",
        options: [
          "Sie ist mit Keimen besiedelt und eitrig.",
          "Sie ist keimfrei, z.B. eine OP-Wunde.",
          "Sie entsteht ausschließlich durch thermische Einwirkung.",
          "Sie ist immer chronisch und schlecht heilend.",
        ],
        answer: "B",
        explanation: "Aseptische Wunden gelten als keimfrei.",
        source: "04 Wunden & Wundversorgung",
      },
      {
        question: "Welche Phase gehört zur Wundheilung?",
        options: [
          "Exsudation",
          "Mineralisation",
          "Oxidation",
          "Konsolidierung",
        ],
        answer: "A",
        explanation: "Die Exsudationsphase ist die erste Phase der Wundheilung.",
        source: "04a AB Wundheilung",
      },
      {
        question: "Welche Angabe gehört zur Wunddokumentation?",
        options: [
          "Wundgröße und Exsudatmenge",
          "Lieblingsessen der Patientin",
          "Raumtemperatur im Zimmer",
          "Dienstplan der Woche",
        ],
        answer: "A",
        explanation:
          "Wundgröße, Exsudat, Geruch und Schmerzen sind Pflichtangaben.",
        source: "04 Wunden & Wundversorgung",
      },
      {
        question: "Was passt zur Non-Touch-Technik?",
        options: [
          "Sterile Wundauflage mit den Fingern anfassen",
          "Sterile Pinzette verwenden und Fläche nicht berühren",
          "Wunde mit ungewaschenen Händen abtasten",
          "Verband ohne Desinfektion wechseln",
        ],
        answer: "B",
        explanation:
          "Bei der Non-Touch-Technik werden sterile Instrumente genutzt.",
        source: "04b Literatur Wunden und Drainagen",
      },
      {
        question: "Welche Wundart entsteht durch Hitze oder Kälte?",
        options: [
          "Mechanische Wunde",
          "Chemische Wunde",
          "Thermische Wunde",
          "Strahlenbedingte Wunde",
        ],
        answer: "C",
        explanation:
          "Thermische Wunden entstehen durch Hitze (Verbrennung) oder Kälte (Erfrierung).",
        source: "04 Wunden & Wundversorgung",
      },
      {
        question: "Welches Material wird bei einem aseptischen Verbandswechsel benötigt?",
        options: [
          "Sterile Kompressen, Desinfektionsmittel und Handschuhe",
          "Nur ein Pflaster",
          "Haushaltspapier und Klebeband",
          "Schere ohne sterile Verpackung",
        ],
        answer: "A",
        explanation:
          "Für einen aseptischen Verbandswechsel werden sterile Materialien und Desinfektionsmittel benötigt.",
        source: "04 Wunden & Wundversorgung",
      },
      {
        question: "Was kennzeichnet die Proliferationsphase der Wundheilung?",
        options: [
          "Blutung und Entzündung",
          "Bildung von Granulationsgewebe",
          "Vollständige Narbenbildung",
          "Abstoßung von Gewebe",
        ],
        answer: "B",
        explanation:
          "In der Proliferationsphase bildet sich neues Granulationsgewebe zur Wundfüllung.",
        source: "04a AB Wundheilung",
      },
      {
        question: "Was unterscheidet primäre von sekundärer Wundheilung?",
        options: [
          "Primäre Wundheilung dauert immer länger.",
          "Sekundäre Wundheilung erfolgt bei verunreinigten Wunden mit größerer Narbe.",
          "Primäre Wundheilung tritt nur bei chronischen Wunden auf.",
          "Es gibt keinen Unterschied.",
        ],
        answer: "B",
        explanation:
          "Primär heilt komplikationslos mit kleiner Narbe, sekundär bei Infektion/Verunreinigung langsamer.",
        source: "04 Wunden & Wundversorgung",
      },
    ],
  },
  {
    title: "Diabetes & Ernährung",
    description: "Werte, Notfälle und Ernährungsempfehlungen trainieren.",
    questions: [
      {
        question: "Welche HbA1c-Grenze gilt als Diagnosegrenze?",
        options: ["≥ 5,5%", "≥ 6,5%", "≥ 7,5%", "≥ 8,5%"],
        answer: "B",
        explanation: "Die Präsentation nennt ≥ 6,5% als Diagnosegrenze.",
        source: "1. Diabetes Präsentation",
      },
      {
        question: "Was ist bei Hypoglykämie zuerst zu tun?",
        options: [
          "Insulin spritzen",
          "Glukose geben und BZ kontrollieren",
          "Flüssigkeit einschränken",
          "Patient sofort mobilisieren",
        ],
        answer: "B",
        explanation:
          "Bei < 50 mg/dl sofort Glukose geben und den Arzt informieren.",
        source: "1. Diabetes Präsentation",
      },
      {
        question: "Welche Empfehlung gehört zu den DGE-Regeln?",
        options: [
          "5 Portionen Obst und Gemüse pro Tag",
          "Kein Wasser trinken",
          "Nur Fleisch essen",
          "Zuckerfreie Getränke vermeiden",
        ],
        answer: "A",
        explanation: "Die DGE empfiehlt 5 Portionen Obst und Gemüse täglich.",
        source: "2.Die 10-Regeln-der-DGE",
      },
      {
        question: "Was beschreibt der oGTT?",
        options: [
          "Zuckertest nach Glukosegabe",
          "Röntgenaufnahme der Beine",
          "Messung der Körpertemperatur",
          "Test zur Lungenfunktion",
        ],
        answer: "A",
        explanation:
          "Beim oralen Glukosetoleranztest wird der BZ nach Glukosegabe gemessen.",
        source: "1. Diabetes Präsentation",
      },
      {
        question: "Welcher Nüchtern-Blutzuckerwert gilt als normal?",
        options: [
          "40–60 mg/dl",
          "80–100 mg/dl",
          "120–150 mg/dl",
          "200–250 mg/dl",
        ],
        answer: "B",
        explanation:
          "Der normale Nüchtern-Blutzucker liegt bei 80–100 mg/dl.",
        source: "1. Diabetes Präsentation",
      },
      {
        question: "Welche Anzeichen sprechen für eine Hyperglykämie?",
        options: [
          "Zittern und Schwitzen",
          "Starker Durst, häufiges Wasserlassen und Müdigkeit",
          "Kälteempfinden und Schüttelfrost",
          "Wadenschmerzen und Schwellung",
        ],
        answer: "B",
        explanation:
          "Starker Durst, Polyurie und Müdigkeit sind typische Zeichen einer Hyperglykämie.",
        source: "1. Diabetes Präsentation",
      },
      {
        question: "Wie viel Fleisch pro Woche empfiehlt die DGE maximal?",
        options: [
          "100–200 g",
          "300–600 g",
          "800–1000 g",
          "Keine Empfehlung",
        ],
        answer: "B",
        explanation:
          "Die DGE empfiehlt maximal 300–600 g Fleisch pro Woche.",
        source: "2.Die 10-Regeln-der-DGE",
      },
      {
        question: "Was ist beim Injizieren mit dem Insulin-PEN zu beachten?",
        options: [
          "Nadel sofort nach dem Spritzen entfernen",
          "10 Sekunden warten, bevor die Nadel entfernt wird",
          "Ohne Desinfektion spritzen",
          "Immer dieselbe Einstichstelle verwenden",
        ],
        answer: "B",
        explanation:
          "Nach der Injektion sollte man 10 Sekunden warten, damit das Insulin vollständig abgegeben wird.",
        source: "5. Insulinspritzen mit dem PEN",
      },
    ],
  },
  {
    title: "Thromboseprophylaxe",
    description: "Warnzeichen erkennen und Maßnahmen planen.",
    questions: [
      {
        question: "Welche Maßnahme gehört zur Thromboseprophylaxe?",
        options: [
          "Absolute Bettruhe ohne Mobilisation",
          "Atemübungen und aktive Fußbewegungen",
          "Beine dauerhaft tief lagern",
          "Flüssigkeitszufuhr reduzieren",
        ],
        answer: "B",
        explanation:
          "Atem- und Bewegungsübungen aktivieren die Muskelpumpe und fördern den Rückfluss.",
        source: "Text - Bewegungsübungen",
      },
      {
        question: "Welche drei Faktoren umfasst die Virchow-Trias?",
        options: [
          "Blutdruck, Temperatur, Puls",
          "Blutströmung, Gefäßwand, Gerinnung",
          "Schmerz, Schwellung, Rötung",
          "Ruhe, Bewegung, Kompression",
        ],
        answer: "B",
        explanation: "Virchow-Trias = Blutströmung, Gefäßwand, Gerinnung.",
        source: "2. Übersicht Virchow Trias",
      },
      {
        question: "Welches Symptom passt zur Beinvenenthrombose?",
        options: [
          "Beidseitige kalte Füße",
          "Einseitige Schwellung und Wadenschmerz",
          "Trockener Husten ohne Fieber",
          "Niedriger Blutzucker",
        ],
        answer: "B",
        explanation:
          "Schwellung, Wärmegefühl und Wadenschmerz sind typische Symptome.",
        source: "1. Definition Thrombose",
      },
      {
        question: "Was ist bei Verdacht auf Thrombose zu tun?",
        options: [
          "Patient sofort laufen lassen",
          "Arzt informieren und Bettruhe einhalten",
          "Beine tief lagern",
          "Kompression ohne Anordnung starten",
        ],
        answer: "B",
        explanation:
          "Bei Verdacht gilt: Arzt informieren und Bettruhe einhalten.",
        source: "1. Definition Thrombose",
      },
      {
        question: "Was ist das Ziel eines Kompressionsverbandes?",
        options: [
          "Wunde vor Licht schützen",
          "Venösen Rückfluss verbessern und Ödeme verhindern",
          "Blutfluss in den Arterien stoppen",
          "Knochen stabilisieren",
        ],
        answer: "B",
        explanation:
          "Kompressionsverbände verbessern den venösen Rückfluss und verhindern Ödeme.",
        source: "Text - Kompressionsverband",
      },
      {
        question: "Welcher Risikofaktor begünstigt eine Thrombose?",
        options: [
          "Regelmäßige Bewegung",
          "Immobilität und Dehydratation",
          "Ausreichend Flüssigkeitszufuhr",
          "Tägliches Spazierengehen",
        ],
        answer: "B",
        explanation:
          "Immobilität und Dehydratation zählen zu den wichtigsten Risikofaktoren für eine Thrombose.",
        source: "3. Risikofaktoren einer Thrombose",
      },
      {
        question: "Was ist eine mögliche Komplikation einer Thrombose?",
        options: [
          "Hypoglykämie",
          "Lungenembolie",
          "Wundinfektion",
          "Fieberkrampf",
        ],
        answer: "B",
        explanation:
          "Eine Lungenembolie ist die gefährlichste Komplikation einer tiefen Beinvenenthrombose.",
        source: "1a Lungenembolie",
      },
      {
        question: "In welche Richtung wird ein Kompressionsverband gewickelt?",
        options: [
          "Von proximal nach distal",
          "Von distal nach proximal",
          "Von der Mitte nach außen",
          "In beliebiger Richtung",
        ],
        answer: "B",
        explanation:
          "Der Druck wird von distal nach proximal aufgebaut, um den venösen Rückfluss zu fördern.",
        source: "Text - Kompressionsverband",
      },
    ],
  },
  {
    title: "Fiebermanagement",
    description: "Temperaturgrenzen und Maßnahmen sicher kennen.",
    questions: [
      {
        question: "Ab welcher Temperatur spricht man von Fieber?",
        options: ["37,0 °C", "37,5 °C", "38,0 °C", "39,5 °C"],
        answer: "C",
        explanation: "Fieber beginnt ab 38 °C Körpertemperatur.",
        source: "Fieber",
      },
      {
        question: "Welche Maßnahme hilft bei Fieber in der Höhephase?",
        options: [
          "Wadenwickel",
          "Kühle Getränke anbieten",
          "Ruhe sichern und Vitalzeichen kontrollieren",
          "Körper stark zudecken",
        ],
        answer: "C",
        explanation:
          "In der Höhephase sind Ruhe und engmaschige Vitalzeichenkontrolle wichtig.",
        source: "Fieber",
      },
      {
        question: "In welcher Phase tritt meist Schüttelfrost auf?",
        options: ["Fieberanstieg", "Fieberhöhe", "Fieberabfall", "Erschöpfung"],
        answer: "A",
        explanation: "Schüttelfrost tritt typisch im Fieberanstieg auf.",
        source: "Fieber",
      },
      {
        question: "Welche Maßnahme passt zum Fieberabfall?",
        options: [
          "Schwitzen abtrocknen und Flüssigkeit anbieten",
          "Patient kalt duschen",
          "Keine Vitalzeichenkontrolle",
          "Vollständig zudecken",
        ],
        answer: "A",
        explanation:
          "Beim Fieberabfall ist Flüssigkeitsausgleich und Beobachtung wichtig.",
        source: "Fieber",
      },
      {
        question: "Wann sollten Wadenwickel bei Fieber eingesetzt werden?",
        options: [
          "Nur bei kalten Beinen",
          "Bei warmen Beinen und Temperaturen über 39 °C",
          "Immer direkt bei Fieberanstieg",
          "Nie, da sie schädlich sind",
        ],
        answer: "B",
        explanation:
          "Wadenwickel sollten nur bei warmen Extremitäten angewendet werden.",
        source: "Fieber",
      },
      {
        question: "Wie oft sollten Vitalzeichen bei Fieber kontrolliert werden?",
        options: [
          "Einmal pro Woche",
          "Mindestens 2× täglich und bei Veränderungen",
          "Nur einmal bei Aufnahme",
          "Alle 5 Minuten",
        ],
        answer: "B",
        explanation:
          "Mindestens 2× täglich und zusätzlich bei Zustandsveränderungen.",
        source: "Fieber",
      },
      {
        question: "Welche Medikamente können bei Fieber verordnet werden?",
        options: [
          "Antibiotika als Erstmaßnahme",
          "Paracetamol oder Ibuprofen nach ärztlicher Anordnung",
          "Insulin",
          "Heparin",
        ],
        answer: "B",
        explanation:
          "Paracetamol und Ibuprofen sind gängige fiebersenkende Medikamente nach ärztlicher Anordnung.",
        source: "Fieber",
      },
    ],
  },
  {
    title: "Lungenembolie & Venensystem",
    description: "Notfallwissen zu Lungenembolie und Venensystem der Beine.",
    questions: [
      {
        question: "Was ist die häufigste Ursache einer Lungenembolie?",
        options: [
          "Lungenentzündung",
          "Losgelöster Thrombus aus den tiefen Beinvenen",
          "Allergische Reaktion",
          "Asthma-Anfall",
        ],
        answer: "B",
        explanation:
          "Die häufigste Ursache einer Lungenembolie ist ein losgelöster Thrombus (Embolus) aus den tiefen Beinvenen.",
        source: "1a Lungenembolie",
      },
      {
        question: "Welche Symptome sind typisch für eine Lungenembolie?",
        options: [
          "Durchfall und Erbrechen",
          "Plötzliche Atemnot, Brustschmerz und Tachykardie",
          "Juckreiz und Hautausschlag",
          "Rückenschmerzen und Fieber",
        ],
        answer: "B",
        explanation:
          "Atemnot, Brustschmerz und Tachykardie sind typische Warnzeichen einer Lungenembolie.",
        source: "1a Lungenembolie",
      },
      {
        question: "Welche Sofortmaßnahme ist bei Verdacht auf Lungenembolie am wichtigsten?",
        options: [
          "Patient sofort mobilisieren",
          "Notruf absetzen und Oberkörper hochlagern",
          "Wadenwickel anlegen",
          "Blutdruck messen und abwarten",
        ],
        answer: "B",
        explanation:
          "Bei Verdacht auf Lungenembolie: Notruf, Oberkörper hochlagern, Sauerstoff und Vitalzeichen überwachen.",
        source: "1a Lungenembolie",
      },
      {
        question: "Welchen Anteil des venösen Blutes transportieren die tiefen Beinvenen?",
        options: [
          "Etwa 50 %",
          "Etwa 70 %",
          "Etwa 90 %",
          "100 %",
        ],
        answer: "C",
        explanation:
          "Die tiefen Beinvenen transportieren ca. 90 % des venösen Blutes zum Herzen zurück.",
        source: "1b Venensystem der Beine",
      },
      {
        question: "Was unterstützt den venösen Rückstrom in den Beinen?",
        options: [
          "Bluthochdruck",
          "Muskelpumpe und Venenklappen",
          "Hohe Außentemperaturen",
          "Tiefe Lagerung der Beine",
        ],
        answer: "B",
        explanation:
          "Die Muskelpumpe (besonders Wadenmuskel) und die Venenklappen sind essenziell für den venösen Rückstrom.",
        source: "1b Venensystem der Beine",
      },
      {
        question: "Was verbindet die tiefen mit den oberflächlichen Beinvenen?",
        options: [
          "Arterien",
          "Perforansvenen",
          "Lymphgefäße",
          "Kapillaren",
        ],
        answer: "B",
        explanation:
          "Perforansvenen verbinden die tiefen mit den oberflächlichen Venen und haben ebenfalls Venenklappen.",
        source: "1b Venensystem der Beine",
      },
    ],
  },
  {
    title: "Diabetes-Spätfolgen & Pflege",
    description: "Langzeitkomplikationen und pflegerische Schwerpunkte bei Diabetes.",
    questions: [
      {
        question: "Welche Spätfolge betrifft die Augen bei Diabetes?",
        options: [
          "Nephropathie",
          "Retinopathie",
          "Neuropathie",
          "Makroangiopathie",
        ],
        answer: "B",
        explanation:
          "Die diabetische Retinopathie betrifft die Netzhaut und kann bis zur Erblindung führen.",
        source: "3. AB Diabetes mellitus",
      },
      {
        question: "Was ist die wichtigste Maßnahme zur Vorbeugung des diabetischen Fußsyndroms?",
        options: [
          "Regelmäßige BZ-Messung",
          "Tägliche Fußinspektion und Fußpflege",
          "Bewegungsverzicht",
          "Erhöhte Insulindosis",
        ],
        answer: "B",
        explanation:
          "Die tägliche Fußinspektion und professionelle Fußpflege sind entscheidend zur Vermeidung von Fußulzera.",
        source: "8 Pflege bei Diabetes mellitus Typ 2",
      },
      {
        question: "Welche Diabetes-Spätfolge betrifft die Nieren?",
        options: [
          "Retinopathie",
          "Neuropathie",
          "Nephropathie",
          "Makroangiopathie",
        ],
        answer: "C",
        explanation:
          "Die diabetische Nephropathie ist eine Nierenschädigung, die bis zur Dialysepflichtigkeit führen kann.",
        source: "3. AB Diabetes mellitus",
      },
      {
        question: "Warum ist die Injektionsstelle beim Insulin-PEN regelmäßig zu wechseln?",
        options: [
          "Damit die Nadel schärfer bleibt",
          "Um Lipodystrophien (Gewebeveränderungen) zu vermeiden",
          "Weil jede Stelle nur einmal verwendet werden darf",
          "Wegen der besseren Optik",
        ],
        answer: "B",
        explanation:
          "Wiederholte Injektionen an derselben Stelle können zu Lipodystrophien führen, die die Insulinaufnahme beeinträchtigen.",
        source: "5. Insulinspritzen mit dem PEN",
      },
    ],
  },
  {
    title: "Schmerzmanagement",
    description: "Schmerzarten, Assessment, WHO-Stufenschema und pflegerische Interventionen.",
    questions: [
      {
        question: "Welche Schmerzart entsteht durch Nervenschädigung?",
        options: [
          "Nozizeptiver Schmerz",
          "Neuropathischer Schmerz",
          "Noziplastischer Schmerz",
          "Psychogener Schmerz",
        ],
        answer: "B",
        explanation:
          "Neuropathischer Schmerz entsteht durch Nervenschädigung (z.B. diabetische Polyneuropathie) und ist typisch brennend oder einschießend.",
        source: "PAP LP Schmerzmanagement",
      },
      {
        question: "Was beschreibt die NRS korrekt?",
        options: [
          "Eine Skala mit Gesichtern für Kinder",
          "Eine numerische Skala von 0 bis 10 zur Schmerzeinschätzung",
          "Eine Skala zur Blutdruckmessung",
          "Eine Skala für die Wundgröße",
        ],
        answer: "B",
        explanation:
          "Die NRS (Numerische Rangskala) reicht von 0 (kein Schmerz) bis 10 (stärkster vorstellbarer Schmerz).",
        source: "PAP LP Schmerzmanagement",
      },
      {
        question: "Welches Medikament gehört zu WHO-Stufe 3?",
        options: [
          "Ibuprofen",
          "Tramadol",
          "Morphin",
          "Paracetamol",
        ],
        answer: "C",
        explanation:
          "Morphin ist ein starkes Opioid und der Goldstandard auf WHO-Stufe 3.",
        source: "PAP LP Schmerzmanagement",
      },
      {
        question: "Was ist die häufigste Dauernebenwirkung von Opioiden?",
        options: [
          "Durchfall",
          "Obstipation",
          "Hautausschlag",
          "Fieber",
        ],
        answer: "B",
        explanation:
          "Obstipation ist die häufigste Dauernebenwirkung bei Opioiden – Laxanzien sollten prophylaktisch gegeben werden.",
        source: "PAP LP Schmerzmanagement",
      },
      {
        question: "Welche Skala eignet sich zur Schmerzerfassung bei Demenz?",
        options: [
          "NRS",
          "VAS",
          "BESD-Skala",
          "Wong-Baker-Skala",
        ],
        answer: "C",
        explanation:
          "Die BESD-Skala ist speziell für die Fremdeinschätzung von Schmerzen bei Menschen mit Demenz entwickelt.",
        source: "PAP LP Schmerzmanagement",
      },
      {
        question: "Was gehört NICHT zur 6-R-Regel der Medikamentengabe?",
        options: [
          "Richtiger Patient",
          "Richtige Zimmernummer",
          "Richtige Dosis",
          "Richtige Dokumentation",
        ],
        answer: "B",
        explanation:
          "Die 6 R sind: Patient, Medikament, Dosis, Zeitpunkt, Applikationsform, Dokumentation – nicht die Zimmernummer.",
        source: "PAP LP Schmerzmanagement",
      },
      {
        question: "Was beschreibt den Expertenstandard Schmerzmanagement?",
        options: [
          "Nur medikamentöse Therapie bei Schmerzen",
          "Einen Rahmen für professionelles Schmerzmanagement mit 6 Standardebenen",
          "Eine ärztliche Leitlinie ohne Pflegebezug",
          "Nur die WHO-Stufentherapie",
        ],
        answer: "B",
        explanation:
          "Der DNQP-Expertenstandard umfasst 6 Ebenen: Erhebung, Einschätzung, Planung, Durchführung, Evaluation und Beratung.",
        source: "PAP LP Schmerzmanagement",
      },
      {
        question: "Welche nicht-medikamentöse Maßnahme hilft bei Muskelverspannung?",
        options: [
          "Eispackung",
          "Wärmeanwendung (Kirschkernkissen, warme Wickel)",
          "Kompressionsverband",
          "Hochlagerung der Beine",
        ],
        answer: "B",
        explanation:
          "Wärmeanwendungen helfen bei chronischen Muskelverspannungen durch Entspannung der Muskulatur.",
        source: "PAP LP Schmerzmanagement",
      },
    ],
  },
  {
    title: "Delegation in der Pflege",
    description: "Delegation, Verantwortungsbereiche und Remonstrationspflicht.",
    questions: [
      {
        question: "Was regelt die Delegationsverantwortung?",
        options: [
          "Dass die PFA die Maßnahme korrekt durchführt",
          "Dass die PFK sicherstellt, dass die Aufgabe delegierbar ist und die PFA die Fähigkeiten besitzt",
          "Dass die PFA regelmäßig kontrolliert wird",
          "Dass die PFA die Maßnahme ablehnen darf",
        ],
        answer: "B",
        explanation:
          "Die Delegationsverantwortung liegt bei der PFK: Die Aufgabe muss delegierbar sein und die PFA muss die nötigen Fähigkeiten besitzen.",
        source: "Delegation",
      },
      {
        question: "Was ist die Remonstrationspflicht?",
        options: [
          "Die Pflicht, jede Aufgabe zu übernehmen",
          "Das Recht und die Pflicht, Maßnahmen bei fehlender Kompetenz abzulehnen",
          "Die Pflicht, Fehler der PFK zu melden",
          "Die Pflicht zur Dokumentation",
        ],
        answer: "B",
        explanation:
          "Die Remonstrationspflicht ist das Recht und die Pflicht zur Ablehnung, wenn fachliche/technische Fähigkeiten fehlen oder die Anordnung fehlerhaft ist.",
        source: "Delegation",
      },
      {
        question: "Welche Tätigkeit darf NICHT an Pflegefachassistenten delegiert werden?",
        options: [
          "Tabletten verabreichen",
          "Körperpflege durchführen",
          "Medikamente stellen",
          "Subkutane Injektion geben",
        ],
        answer: "C",
        explanation:
          "Medikamente stellen ist eine nicht-delegierbare Tätigkeit und darf nur von Pflegefachpersonen durchgeführt werden.",
        source: "Delegation",
      },
      {
        question: "Darf eine PFA nach Delegation Insulin spritzen?",
        options: [
          "Nein, auf keinen Fall",
          "Ja, aber nur s.c. und wenn die PFK die Einheiten eingestellt hat und die Kompetenz bestätigt",
          "Ja, ohne Einschränkungen",
          "Nur bei Typ-2-Diabetes",
        ],
        answer: "B",
        explanation:
          "Subkutane Insulininjektion ist delegierbar, wenn die PFK die Einheiten einstellt und sich vergewissert hat, dass Fachwissen und Technik beherrscht werden.",
        source: "Delegation",
      },
      {
        question: "Wer trägt die Durchführungsverantwortung?",
        options: [
          "Die delegierende Pflegefachkraft",
          "Die Pflegedienstleitung",
          "Der/die Pflegefachassistent*in",
          "Der behandelnde Arzt",
        ],
        answer: "C",
        explanation:
          "Die Durchführungsverantwortung liegt bei der Person, die die Maßnahme ausführt – also beim/bei der PFA.",
        source: "Delegation",
      },
      {
        question: "Was passiert, wenn eine PFA eine nicht-delegierbare Tätigkeit durchführt?",
        options: [
          "Nichts, solange es gut geht",
          "Es verstößt gegen die Übernahmeverantwortung und kann rechtliche Konsequenzen haben",
          "Die PFK ist allein verantwortlich",
          "Die Pflegedienstleitung haftet",
        ],
        answer: "B",
        explanation:
          "Die PFA verletzt ihre Übernahmeverantwortung und Remonstrationspflicht; beide Seiten können rechtlich haften.",
        source: "Delegation",
      },
    ],
  },
  {
    title: "Demenz & Validation",
    description: "IVA nach Nicole Richard, Kitwood-Bedürfnisblume und personzentrierte Pflege.",
    questions: [
      {
        question: "Was bedeutet Integrative Validation (IVA)?",
        options: [
          "Den Dementen mit der Realität konfrontieren",
          "Die Erlebniswelt des dementen Menschen akzeptieren und validierend begleiten",
          "Medikamentöse Therapie bei Demenz",
          "Biografische Daten sammeln",
        ],
        answer: "B",
        explanation:
          "IVA nach Nicole Richard: Sich in die Erlebniswelt des Betroffenen einlassen, damit er sich akzeptiert und respektiert fühlt.",
        source: "10 Validation nach Nicole Richard",
      },
      {
        question: "Was steht im Zentrum der Kitwood-Bedürfnisblume?",
        options: [
          "Beschäftigung",
          "Trost",
          "Liebe",
          "Identität",
        ],
        answer: "C",
        explanation:
          "Liebe bildet das Zentrum der Kitwood-Bedürfnisblume; die fünf Blätter sind Trost, Bindung, Einbeziehung, Beschäftigung und Identität.",
        source: "06 Bedürfnisblume Kitwood",
      },
      {
        question: "Was bedeutet 'Verwirrt nicht die Verwirrten'?",
        options: [
          "Keine Medikamente gegen Verwirrung geben",
          "Demente nicht mit der Realität konfrontieren, ihre Welt akzeptieren",
          "Verwirrte Patienten isolieren",
          "Alle Verwirrten gleich behandeln",
        ],
        answer: "B",
        explanation:
          "Für den dementen Menschen ist seine Realität genauso real wie unsere. Konfrontation wäre unwürdig und sinnlos.",
        source: "10 Validation nach Nicole Richard",
      },
      {
        question: "Welches ist KEIN Bedürfnis der Kitwood-Blume?",
        options: [
          "Trost",
          "Einbeziehung",
          "Ernährung",
          "Identität",
        ],
        answer: "C",
        explanation:
          "Die fünf Bedürfnisse sind Trost, Bindung, Einbeziehung, Beschäftigung und Identität – Ernährung gehört nicht dazu.",
        source: "06 Bedürfnisblume Kitwood",
      },
      {
        question: "Was sind Antriebe im Sinne der IVA?",
        options: [
          "Medikamentöse Wirkungen",
          "Lebenslang stabile Charaktereigenschaften (z.B. Fürsorge, Ordnungssinn)",
          "Physische Reflexe",
          "Pflegeziele",
        ],
        answer: "B",
        explanation:
          "Antriebe sind lebenslang stabile Charaktereigenschaften, die bei Demenz wieder stärker sichtbar werden.",
        source: "10 Validation nach Nicole Richard",
      },
      {
        question: "Was beschreibt personzentrierte Pflege nach Kitwood?",
        options: [
          "Pflege nach einem standardisierten Schema",
          "Pflege, die sich an den individuellen Bedürfnissen des Betroffenen orientiert",
          "Pflege nur durch Angehörige",
          "Ausschließlich medikamentöse Behandlung",
        ],
        answer: "B",
        explanation:
          "Personzentrierte Pflege nach Kitwood orientiert sich an den fünf psychischen Grundbedürfnissen des individuellen Menschen.",
        source: "07 Text zur Kitwood Blume",
      },
    ],
  },
  {
    title: "Biographiearbeit",
    description: "Biographie, Methoden, Ziele und Grenzen der Biographiearbeit.",
    questions: [
      {
        question: "Was unterscheidet Biographie vom Lebenslauf?",
        options: [
          "Beides ist das Gleiche",
          "Der Lebenslauf enthält nur zeitliche Daten; die Biographie ist die Lebensgeschichte mit Gefühlen",
          "Die Biographie enthält nur berufliche Daten",
          "Der Lebenslauf ist ausführlicher als die Biographie",
        ],
        answer: "B",
        explanation:
          "Der Lebenslauf enthält zeitliche Daten und berufliche Laufbahn. Die Biographie ist die Lebensgeschichte mit Gefühlen und Bedeutungszuschreibungen.",
        source: "03b Lebenslauf vs. Biographie Zusammenfassung",
      },
      {
        question: "Welches ist KEINE Methode der Biographiearbeit?",
        options: [
          "Erinnerungskoffer",
          "Blutdruckmessung",
          "Fotos und Fotoalben",
          "Musik und Singen",
        ],
        answer: "B",
        explanation:
          "Blutdruckmessung ist eine pflegerische Maßnahme, keine Methode der Biographiearbeit.",
        source: "05b Methoden und Ziele der Biografiearbeit",
      },
      {
        question: "Welcher Themenschwerpunkt gehört zur Biographiearbeit?",
        options: [
          "Laborwerte",
          "Beruf und Lebensleistung",
          "Medikamentenspiegel",
          "Pflegediagnosen",
        ],
        answer: "B",
        explanation:
          "Beruf und Lebensleistung ist einer der sechs Themenschwerpunkte. Fragen z.B.: 'Welchen Beruf haben Sie erlernt?'",
        source: "05a Themenschwerpunkte der Biographiearbeit",
      },
      {
        question: "Was ist eine wichtige Grenze der Biographiearbeit?",
        options: [
          "Sie darf nur bei Demenz eingesetzt werden",
          "Man muss alle Fragen beantworten lassen",
          "Freiwilligkeit und Respekt vor dem Nicht-Erzählen-Wollen",
          "Nur Psychologen dürfen sie durchführen",
        ],
        answer: "C",
        explanation:
          "Biographiearbeit braucht Freiwilligkeit. Sie darf kein Verhör sein und muss die Intimsphäre respektieren.",
        source: "02 Missverständnis bei falsch verstandener Biographiearbeit",
      },
      {
        question: "Was ist ein Ziel der Biographiearbeit?",
        options: [
          "Medikamentöse Therapie optimieren",
          "Sinnstiftung und Identitätsbildung fördern",
          "Pflegepersonal entlasten",
          "Diagnosen stellen",
        ],
        answer: "B",
        explanation:
          "Die Biographiearbeit fördert Sinnstiftung, Identitätsbildung und gibt dem Erlebten eine Bedeutung.",
        source: "05b Methoden und Ziele der Biografiearbeit",
      },
      {
        question: "Gelungene Biographiearbeit verbindet …",
        options: [
          "Nur die Vergangenheit mit der Gegenwart",
          "Vergangenheit, Gegenwart und Zukunft",
          "Nur die Zukunft mit Pflegezielen",
          "Nur die Kindheit mit dem Alter",
        ],
        answer: "B",
        explanation:
          "Gelungene Biographiearbeit verbindet Vergangenheit, Gegenwart und Zukunft und steigert Wohlbefinden.",
        source: "03b Lebenslauf vs. Biographie Zusammenfassung",
      },
    ],
  },
]
function shuffle<T>(array: T[]): T[] {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const QUESTIONS_PER_SECTION = 4

function QuizCard({ quiz }: { quiz: QuizQuestion }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  const correctIndex = quiz.answer.charCodeAt(0) - 65

  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle className="text-lg">{quiz.question}</CardTitle>
        <CardDescription>Wähle eine Antwort und prüfe sie.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-gray-600">
        <ol className="space-y-1">
          {quiz.options.map((option, index) => {
            let optionClass =
              "flex gap-2 rounded-lg px-3 py-2 cursor-pointer transition-colors"
            if (revealed) {
              if (index === correctIndex) {
                optionClass += " bg-emerald-100 text-emerald-800"
              } else if (index === selected) {
                optionClass += " bg-red-100 text-red-800"
              }
            } else if (index === selected) {
              optionClass += " bg-primary/10 text-primary ring-1 ring-primary/30"
            } else {
              optionClass += " hover:bg-gray-50"
            }

            return (
              <li
                key={`${quiz.question}-${index}`}
                className={optionClass}
                onClick={() => {
                  if (!revealed) setSelected(index)
                }}
              >
                <span className="font-semibold text-gray-500">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span>{option}</span>
              </li>
            )
          })}
        </ol>

        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            disabled={selected === null}
            className="w-full rounded-lg border border-dashed border-gray-200 bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {selected === null
              ? "Bitte zuerst eine Antwort auswählen"
              : "Lösung anzeigen"}
          </button>
        )}

        {revealed && (
          <div className="rounded-lg border border-dashed border-gray-200 bg-white/80 p-3">
            <p className="font-medium text-gray-700">
              Richtige Antwort: {quiz.answer}
            </p>
            {selected !== null && (
              <p
                className={`mt-1 text-xs font-medium ${
                  selected === correctIndex
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {selected === correctIndex
                  ? "✓ Richtig!"
                  : "✗ Leider falsch."}
              </p>
            )}
            <p className="mt-2 text-xs text-gray-500">{quiz.explanation}</p>
            <p className="mt-2 text-xs text-gray-400">
              Quelle: {quiz.source}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function LernquizPage() {
  const [randomizedSections, setRandomizedSections] = useState(() =>
    allQuizSections.map((section) => ({
      ...section,
      questions: section.questions.slice(0, QUESTIONS_PER_SECTION),
    }))
  )

  useEffect(() => {
    setRandomizedSections(
      allQuizSections.map((section) => ({
        ...section,
        questions: shuffle(section.questions).slice(0, QUESTIONS_PER_SECTION),
      }))
    )
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <header className="text-center mb-10">
          <Badge className="mb-3">Lernquiz</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-3 text-balance">
            Lernquiz mit ausführlichen Lösungen
          </h1>
          <p className="text-lg text-gray-600 text-pretty max-w-2xl mx-auto">
            Teste dein Wissen mit neuen Quizfragen aus den PDFs. Jede Frage enthält
            eine Lösung, eine kurze Begründung und die passende Quelle. Die Fragen
            werden bei jedem Laden der Seite neu gemischt.
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
            Quiz-Regeln für maximale Lernwirkung
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {quizGuidelines.map((guide) => (
              <Card key={guide.title} className="bg-white/90">
                <CardHeader>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          {randomizedSections.map((section) => (
            <div key={section.title}>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {section.questions.map((quiz) => (
                  <QuizCard key={quiz.question} quiz={quiz} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="mb-3">
            Du kannst die Quizfragen erweitern, indem du neue PDFs im Ordner
            <span className="font-semibold"> /pdf-uploads</span> ablegst.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/lernplattform" className="text-primary hover:underline">
              Zur Lernplattform
            </Link>
            <Link href="/ki-quiz" className="text-primary hover:underline">
              Zum KI-Quiz
            </Link>
            <Link href="/ki-assistent" className="text-primary hover:underline">
              Zum KI-Assistenten
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
