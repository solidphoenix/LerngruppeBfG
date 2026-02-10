/**
 * Client-side OpenAI API wrapper.
 *
 * Since the app is deployed as a static export (GitHub Pages), there are no
 * server-side API routes.  The OpenAI API key is stored in the browser's
 * localStorage – the user enters it via the KI-Einstellungen page.
 *
 * The wrapper calls the OpenAI Chat Completions API directly from the browser
 * using the standard fetch API.  No SDK dependency is required.
 */

/* ── API key management (localStorage) ───────────────────── */

const API_KEY_STORAGE_KEY = "lernplattform-openai-key"
const MODEL_STORAGE_KEY = "lernplattform-openai-model"

export const AVAILABLE_MODELS = [
  { id: "gpt-4o-mini", label: "GPT-4o Mini (schnell & günstig)" },
  { id: "gpt-4o", label: "GPT-4o (beste Qualität)" },
  { id: "gpt-3.5-turbo", label: "GPT-3.5 Turbo (günstig)" },
] as const

export const DEFAULT_MODEL = "gpt-4o-mini"

export function getOpenAIKey(): string {
  if (typeof window === "undefined") return ""
  return localStorage.getItem(API_KEY_STORAGE_KEY) ?? ""
}

export function setOpenAIKey(key: string): void {
  if (typeof window === "undefined") return
  if (key.trim()) {
    localStorage.setItem(API_KEY_STORAGE_KEY, key.trim())
  } else {
    localStorage.removeItem(API_KEY_STORAGE_KEY)
  }
}

export function getSelectedModel(): string {
  if (typeof window === "undefined") return DEFAULT_MODEL
  return localStorage.getItem(MODEL_STORAGE_KEY) ?? DEFAULT_MODEL
}

export function setSelectedModel(model: string): void {
  if (typeof window === "undefined") return
  localStorage.setItem(MODEL_STORAGE_KEY, model)
}

export function isOpenAIConfigured(): boolean {
  return getOpenAIKey().length > 0
}

/* ── Chat Completion ─────────────────────────────────────── */

export type ChatMessage = {
  role: "system" | "user" | "assistant"
  content: string
}

export type OpenAIError = {
  message: string
  type?: string
  code?: string
}

export async function chatCompletion(
  messages: ChatMessage[],
  options?: { temperature?: number; maxTokens?: number }
): Promise<string> {
  const apiKey = getOpenAIKey()
  if (!apiKey) {
    throw new Error("Kein OpenAI API-Key konfiguriert. Bitte unter KI-Einstellungen hinterlegen.")
  }

  const model = getSelectedModel()
  const temperature = options?.temperature ?? 0.7
  const maxTokens = options?.maxTokens ?? 1024

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    const errorMsg =
      (errorBody as { error?: OpenAIError })?.error?.message ??
      `OpenAI API-Fehler: ${response.status} ${response.statusText}`
    throw new Error(errorMsg)
  }

  const data = await response.json()
  const content = data?.choices?.[0]?.message?.content
  if (typeof content !== "string") {
    throw new Error("Unerwartete Antwort von der OpenAI API.")
  }
  return content.trim()
}

/* ── Convenience: test the API key ───────────────────────── */

export async function testAPIKey(): Promise<{ ok: boolean; error?: string }> {
  try {
    const result = await chatCompletion(
      [{ role: "user", content: "Antworte nur mit: OK" }],
      { temperature: 0, maxTokens: 10 }
    )
    return { ok: result.length > 0 }
  } catch (err) {
    return { ok: false, error: (err as Error).message }
  }
}
