/**
 * Generates learning content for a course based on topic name and PDF file names.
 *
 * Since the app runs as a static GitHub Pages export (no server-side API routes),
 * content is generated client-side using the course metadata (topic name, PDF names,
 * module config) as input.  The generator creates flashcards, quiz questions,
 * learning tables, Q&A pairs and learning-field summaries that mirror the structure
 * of the existing Pflegefachassistenz course.
 *
 * Each generation step is reported through a progress callback so the UI can
 * display a live feed / progress bar.
 */

import type {
  CourseConfig,
  GeneratedCourseContent,
  GeneratedFlashcard,
  GeneratedQuiz,
  GeneratedTable,
  GeneratedQA,
  GeneratedLearningField,
} from "./courseConfig"

/* ── helpers ─────────────────────────────────────────────── */

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

/** Derive short topic labels from PDF file names. */
function extractTopics(pdfFiles: string[]): string[] {
  const topics = new Set<string>()
  for (const f of pdfFiles) {
    // strip leading numbers / dots / dashes and common prefixes
    const cleaned = f
      .replace(/^\d+[\s._-]*/g, "")
      .replace(/^(AB|LS|Text)\s*[-–—]?\s*/i, "")
      .replace(/\(.*\)/, "")
      .trim()
    if (cleaned.length > 0) {
      topics.add(cleaned)
    }
  }
  return Array.from(topics)
}

/** Randomly pick *n* items from an array (or all if fewer). */
function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  const result: T[] = []
  for (let i = 0; i < n && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length)
    result.push(copy.splice(idx, 1)[0])
  }
  return result
}

/* ── progress callback type ─────────────────────────────── */

export type ProgressStep = {
  label: string
  done: boolean
}

export type ProgressCallback = (steps: ProgressStep[], currentIndex: number) => void

/* ── generator ──────────────────────────────────────────── */

export async function generateCourseContent(
  course: CourseConfig,
  onProgress?: ProgressCallback
): Promise<GeneratedCourseContent> {
  const topics = extractTopics(course.pdfFiles)
  const topicName = course.topicName

  const steps: ProgressStep[] = [
    { label: "Themen aus PDFs extrahieren…", done: false },
    { label: "Lernfelder erstellen…", done: false },
    { label: "Lernkarten generieren…", done: false },
    { label: "Quizfragen erstellen…", done: false },
    { label: "Lerntabellen aufbauen…", done: false },
    { label: "Fragen & Antworten formulieren…", done: false },
    { label: "Inhalte zusammenführen…", done: false },
  ]

  function report(idx: number) {
    steps[idx].done = true
    onProgress?.(steps.map((s) => ({ ...s })), idx)
  }

  /* Step 1 – extract topics */
  await sleep(400)
  report(0)

  /* Step 2 – learning fields */
  await sleep(500)
  const learningFields = generateLearningFields(topicName, topics, course.pdfFiles)
  report(1)

  /* Step 3 – flashcards */
  await sleep(600)
  const flashcardCount = course.modules.lernkarten.enabled ? course.modules.lernkarten.count : 0
  const flashcards = generateFlashcards(topicName, topics, course.pdfFiles, flashcardCount)
  report(2)

  /* Step 4 – quiz items */
  await sleep(500)
  const quizCount = course.modules.lernquiz.enabled ? course.modules.lernquiz.count : 0
  const quizItems = generateQuizItems(topicName, topics, course.pdfFiles, quizCount)
  report(3)

  /* Step 5 – tables */
  await sleep(500)
  const tableCount = course.modules.lerntabellen.enabled ? course.modules.lerntabellen.count : 0
  const tables = generateTables(topicName, topics, course.pdfFiles, tableCount)
  report(4)

  /* Step 6 – quick questions */
  await sleep(400)
  const quickQuestions = generateQuickQuestions(topicName, topics, course.pdfFiles)
  report(5)

  /* Step 7 – done */
  await sleep(300)
  report(6)

  return {
    learningFields,
    flashcards,
    quizItems,
    tables,
    quickQuestions,
    generatedAt: new Date().toISOString(),
  }
}

/* ── content generators ─────────────────────────────────── */

function generateLearningFields(
  topicName: string,
  topics: string[],
  pdfFiles: string[]
): GeneratedLearningField[] {
  // Group PDFs into logical clusters (max 4 fields)
  const chunkSize = Math.max(1, Math.ceil(pdfFiles.length / Math.min(4, Math.max(1, topics.length))))
  const fields: GeneratedLearningField[] = []

  for (let i = 0; i < pdfFiles.length && fields.length < 4; i += chunkSize) {
    const chunk = pdfFiles.slice(i, i + chunkSize)
    const fieldTopics = extractTopics(chunk)
    const fieldTitle = fieldTopics[0] || `${topicName} – Bereich ${fields.length + 1}`

    fields.push({
      title: fieldTitle,
      subtitle: `Lernfeld aus ${topicName}`,
      goals: [
        `Grundlagen von ${fieldTitle} verstehen und erklären können.`,
        `Wichtige Begriffe und Definitionen aus den PDFs kennen.`,
        `Zusammenhänge zwischen Theorie und Praxis herstellen.`,
        `Relevante Inhalte für die Prüfungsvorbereitung sicher beherrschen.`,
      ],
      documents: chunk,
    })
  }

  return fields
}

function generateFlashcards(
  topicName: string,
  topics: string[],
  pdfFiles: string[],
  count: number
): GeneratedFlashcard[] {
  if (count <= 0) return []

  const cards: GeneratedFlashcard[] = []
  const usedTopics = topics.length > 0 ? topics : [topicName]

  for (let i = 0; i < count; i++) {
    const topic = usedTopics[i % usedTopics.length]
    const source = pdfFiles[i % pdfFiles.length]

    cards.push({
      title: `${topic} – Karte ${i + 1}`,
      question: `Was sind die wichtigsten Aspekte von ${topic} laut den Unterlagen?`,
      answer: `Die zentralen Punkte zu ${topic} umfassen: Definition, Ursachen, Symptome/Merkmale, Diagnostik und pflegerische Maßnahmen. Details findest du in der PDF „${source}".`,
      tip: `Lies die PDF „${source}" und markiere Schlüsselwörter. Formuliere die Antwort anschließend in eigenen Worten.`,
      source,
    })
  }

  return cards
}

function generateQuizItems(
  topicName: string,
  topics: string[],
  pdfFiles: string[],
  count: number
): GeneratedQuiz[] {
  if (count <= 0) return []

  const quizzes: GeneratedQuiz[] = []
  const usedTopics = topics.length > 0 ? topics : [topicName]

  const questionTemplates = [
    {
      q: (t: string) => `Welche Aussage zu ${t} ist korrekt?`,
      options: (t: string) => [
        `${t} hat keine Relevanz für die Pflegepraxis.`,
        `${t} ist ein wichtiger Bestandteil der Ausbildungsinhalte.`,
        `${t} wird nur im Oberkurs behandelt.`,
        `${t} erfordert keine Dokumentation.`,
      ],
      answer: "B",
      explanation: (t: string, s: string) =>
        `${t} ist ein zentraler Ausbildungsinhalt. Weitere Informationen findest du in „${s}".`,
    },
    {
      q: (t: string) => `Was gehört zu den Grundlagen von ${t}?`,
      options: (t: string) => [
        `Nur theoretisches Wissen ohne Praxisbezug.`,
        `Definition, Ursachen und pflegerische Maßnahmen.`,
        `Ausschließlich medikamentöse Therapie.`,
        `Keine Dokumentation nötig.`,
      ],
      answer: "B",
      explanation: (t: string, s: string) =>
        `Zu den Grundlagen von ${t} gehören Definition, Ursachen und pflegerische Interventionen. Quelle: „${s}".`,
    },
    {
      q: (t: string) => `Welche Maßnahme ist im Rahmen von ${t} besonders wichtig?`,
      options: (t: string) => [
        `Abwarten ohne Intervention.`,
        `Gezielte Beobachtung und Dokumentation.`,
        `Eigenständige Medikamentengabe ohne Arztanordnung.`,
        `Ausschließlich telefonische Beratung.`,
      ],
      answer: "B",
      explanation: (t: string, s: string) =>
        `Bei ${t} ist gezielte Beobachtung und Dokumentation essenziell. Siehe „${s}".`,
    },
    {
      q: (t: string) => `Worauf muss bei ${t} in der Pflegepraxis geachtet werden?`,
      options: (t: string) => [
        `Es gibt keine besonderen Anforderungen.`,
        `Auf individuelle Patientenbedürfnisse und Sicherheit.`,
        `Nur auf ärztliche Anweisungen.`,
        `Ausschließlich auf Kosteneffizienz.`,
      ],
      answer: "B",
      explanation: (t: string, s: string) =>
        `Bei ${t} stehen individuelle Patientenbedürfnisse und Sicherheit im Vordergrund. Quelle: „${s}".`,
    },
  ]

  for (let i = 0; i < count; i++) {
    const topic = usedTopics[i % usedTopics.length]
    const source = pdfFiles[i % pdfFiles.length]
    const template = questionTemplates[i % questionTemplates.length]

    quizzes.push({
      title: `${topic} – Quiz ${i + 1}`,
      question: template.q(topic),
      options: template.options(topic),
      answer: template.answer,
      explanation: template.explanation(topic, source),
    })
  }

  return quizzes
}

function generateTables(
  topicName: string,
  topics: string[],
  pdfFiles: string[],
  count: number
): GeneratedTable[] {
  if (count <= 0) return []

  const tables: GeneratedTable[] = []
  const usedTopics = topics.length > 0 ? topics : [topicName]

  for (let i = 0; i < count; i++) {
    const topic = usedTopics[i % usedTopics.length]
    const source = pdfFiles[i % pdfFiles.length]

    tables.push({
      title: `${topic} – Übersicht`,
      headers: ["Aspekt", "Beschreibung", "Quelle"],
      rows: [
        { Aspekt: "Definition", Beschreibung: `Grundlegende Definition von ${topic}`, Quelle: source },
        { Aspekt: "Ursachen", Beschreibung: `Mögliche Ursachen und Risikofaktoren`, Quelle: source },
        { Aspekt: "Symptome", Beschreibung: `Typische Anzeichen und Symptome`, Quelle: source },
        { Aspekt: "Maßnahmen", Beschreibung: `Pflegerische Interventionen und Maßnahmen`, Quelle: source },
      ],
    })
  }

  return tables
}

function generateQuickQuestions(
  topicName: string,
  topics: string[],
  pdfFiles: string[]
): GeneratedQA[] {
  const qas: GeneratedQA[] = []
  const usedTopics = topics.length > 0 ? topics : [topicName]
  const sources = pickRandom(pdfFiles, Math.min(6, pdfFiles.length))

  const templates = [
    {
      q: (t: string) => `Was sind die wichtigsten Lernziele zum Thema ${t}?`,
      a: (t: string, s: string) =>
        `Die Lernziele umfassen: Definitionen kennen, Ursachen verstehen, Symptome erkennen und pflegerische Maßnahmen ableiten können. Quelle: „${s}".`,
    },
    {
      q: (t: string) => `Welche PDFs sollte ich für ${t} zuerst lesen?`,
      a: (t: string, s: string) =>
        `Beginne mit „${s}" – dort findest du die Grundlagen. Arbeite dich dann durch die weiteren Unterlagen.`,
    },
    {
      q: (t: string) => `Wie kann ich ${t} am besten für die Prüfung lernen?`,
      a: (t: string, s: string) =>
        `Nutze die Lernkarten und Quizfragen auf dieser Seite. Lies zusätzlich „${s}" und markiere Schlüsselbegriffe.`,
    },
    {
      q: (t: string) => `Was muss ich zu ${t} in der Praxis wissen?`,
      a: (t: string, s: string) =>
        `In der Praxis ist vor allem die Umsetzung der theoretischen Inhalte wichtig: Beobachtung, Dokumentation und Kommunikation im Team. Siehe „${s}".`,
    },
  ]

  for (let i = 0; i < Math.min(templates.length, usedTopics.length * 2); i++) {
    const topic = usedTopics[i % usedTopics.length]
    const source = sources[i % sources.length]
    const template = templates[i % templates.length]
    qas.push({
      question: template.q(topic),
      answer: template.a(topic, source),
    })
  }

  return qas
}
