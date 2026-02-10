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
import {
  getOpenAIKey,
  setOpenAIKey,
  getSelectedModel,
  setSelectedModel,
  testAPIKey,
  AVAILABLE_MODELS,
} from "@/lib/openaiClient"

export default function KiEinstellungenPage() {
  const [apiKey, setApiKey] = useState("")
  const [model, setModel] = useState("")
  const [saved, setSaved] = useState(false)
  const [testing, setTesting] = useState(false)
  const [testResult, setTestResult] = useState<{
    ok: boolean
    error?: string
  } | null>(null)
  const [showKey, setShowKey] = useState(false)

  useEffect(() => {
    setApiKey(getOpenAIKey())
    setModel(getSelectedModel())
  }, [])

  function handleSave() {
    setOpenAIKey(apiKey)
    setSelectedModel(model)
    setSaved(true)
    setTestResult(null)
    setTimeout(() => setSaved(false), 3000)
  }

  function handleRemove() {
    setOpenAIKey("")
    setApiKey("")
    setTestResult(null)
    setSaved(false)
  }

  async function handleTest() {
    if (!apiKey.trim()) return
    // Save first so the test uses the current key
    setOpenAIKey(apiKey)
    setSelectedModel(model)
    setTesting(true)
    setTestResult(null)
    const result = await testAPIKey()
    setTestResult(result)
    setTesting(false)
  }

  const isConfigured = apiKey.trim().length > 0

  function maskKey(key: string): string {
    if (key.length <= 8) return "••••••••"
    return key.slice(0, 4) + "••••••••" + key.slice(-4)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <header className="text-center mb-10">
          <Badge className="mb-3">Einstellungen</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-3 text-balance">
            KI-Einstellungen
          </h1>
          <p className="text-lg text-gray-600 text-pretty max-w-2xl mx-auto">
            Konfiguriere deinen OpenAI (ChatGPT) API-Key, um den
            KI-Assistenten und das KI-Quiz mit echten KI-Antworten zu nutzen.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/ki-assistent"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
            >
              Zum KI-Assistenten
            </Link>
            <Link
              href="/ki-quiz"
              className="px-5 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              Zum KI-Quiz
            </Link>
          </div>
        </header>

        {/* Status */}
        <section className="mb-6">
          <Card
            className={
              isConfigured
                ? "bg-emerald-50/80 border-emerald-200"
                : "bg-amber-50/80 border-amber-200"
            }
          >
            <CardContent className="py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{isConfigured ? "✅" : "⚠️"}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {isConfigured
                      ? "OpenAI API-Key ist konfiguriert"
                      : "Kein API-Key hinterlegt"}
                  </p>
                  <p className="text-xs text-gray-600">
                    {isConfigured
                      ? "KI-Assistent und KI-Quiz nutzen ChatGPT für echte KI-Antworten."
                      : "Der KI-Assistent nutzt den lokalen Wissens-Modus ohne echte KI."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* API Key Configuration */}
        <section className="mb-6">
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg">OpenAI API-Key</CardTitle>
              <CardDescription>
                Dein API-Key wird nur lokal in deinem Browser gespeichert und
                niemals an unseren Server übertragen. Die Anfragen gehen direkt
                von deinem Browser an die OpenAI API.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  API-Key
                </label>
                <div className="flex gap-2">
                  <input
                    type={showKey ? "text" : "password"}
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value)
                      setSaved(false)
                      setTestResult(null)
                    }}
                    placeholder="sk-..."
                    className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 font-mono"
                  />
                  <button
                    onClick={() => setShowKey(!showKey)}
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                    title={showKey ? "Key verbergen" : "Key anzeigen"}
                  >
                    {showKey ? "🙈" : "👁️"}
                  </button>
                </div>
                {isConfigured && !showKey && (
                  <p className="mt-1 text-xs text-gray-500 font-mono">
                    Gespeichert: {maskKey(apiKey)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Modell
                </label>
                <select
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value)
                    setSaved(false)
                  }}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                >
                  {AVAILABLE_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleSave}
                  disabled={!apiKey.trim()}
                  className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Speichern
                </button>
                <button
                  onClick={handleTest}
                  disabled={!apiKey.trim() || testing}
                  className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {testing ? "Teste…" : "Verbindung testen"}
                </button>
                {isConfigured && (
                  <button
                    onClick={handleRemove}
                    className="rounded-lg border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Key entfernen
                  </button>
                )}
              </div>

              {saved && (
                <p className="text-sm text-emerald-600 font-medium">
                  ✓ Einstellungen gespeichert!
                </p>
              )}

              {testResult && (
                <div
                  className={`rounded-lg p-3 text-sm ${
                    testResult.ok
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {testResult.ok
                    ? "✅ Verbindung erfolgreich! Der API-Key funktioniert."
                    : `❌ Fehler: ${testResult.error}`}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* How to get an API key */}
        <section className="mb-6">
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg">
                So bekommst du einen API-Key
              </CardTitle>
              <CardDescription>
                Du brauchst ein OpenAI-Konto mit Guthaben (nicht dasselbe wie
                ein ChatGPT Plus Abo).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal space-y-2 pl-5 text-sm text-gray-700">
                <li>
                  Gehe zu{" "}
                  <a
                    href="https://platform.openai.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    platform.openai.com
                  </a>{" "}
                  und erstelle ein Konto (oder melde dich an).
                </li>
                <li>
                  Öffne{" "}
                  <a
                    href="https://platform.openai.com/api-keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    API Keys
                  </a>{" "}
                  in den Einstellungen.
                </li>
                <li>
                  Klicke auf <strong>„Create new secret key"</strong> und kopiere
                  den Key (beginnt mit <code className="text-xs bg-gray-100 px-1 rounded">sk-</code>).
                </li>
                <li>
                  Lade unter{" "}
                  <a
                    href="https://platform.openai.com/settings/organization/billing/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Billing
                  </a>{" "}
                  Guthaben auf (ab $5 USD).
                </li>
                <li>
                  Füge den Key oben ein und klicke auf{" "}
                  <strong>Speichern</strong>.
                </li>
              </ol>
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
                <strong>Hinweis:</strong> Ein ChatGPT Plus Abo (20 $/Monat) ist
                nicht dasselbe wie API-Guthaben. Für die API brauchst du
                separates Guthaben unter{" "}
                <a
                  href="https://platform.openai.com/settings/organization/billing/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  platform.openai.com/settings/organization/billing
                </a>
                .
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privacy & Security */}
        <section className="mb-6">
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="text-lg">Datenschutz & Sicherheit</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
                <li>
                  Dein API-Key wird <strong>nur lokal</strong> in deinem Browser
                  gespeichert (localStorage).
                </li>
                <li>
                  Der Key wird <strong>niemals</strong> an unseren Server
                  übertragen.
                </li>
                <li>
                  Alle Anfragen gehen <strong>direkt</strong> von deinem Browser
                  an die OpenAI API.
                </li>
                <li>
                  Du kannst den Key jederzeit entfernen – dann wird wieder der
                  lokale Wissens-Modus verwendet.
                </li>
                <li>
                  Die Kosten pro Frage liegen bei ca. 0,001–0,01 $ je nach
                  Modell.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ki-assistent" className="text-primary hover:underline">
              KI-Assistent
            </Link>
            <Link href="/ki-quiz" className="text-primary hover:underline">
              KI-Quiz
            </Link>
            <Link href="/lernplattform" className="text-primary hover:underline">
              Lernplattform
            </Link>
            <Link href="/" className="text-primary hover:underline">
              Startseite
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
