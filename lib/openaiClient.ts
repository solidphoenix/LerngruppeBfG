/**
 * Client-side AI API wrapper.
 *
 * Supports both OpenAI (ChatGPT) and Anthropic (Claude) as AI providers.
 * Both API keys can be configured simultaneously — the user chooses which
 * provider to use at runtime from the UI.
 *
 * Requests are proxied through a server-side API route (/api/chat) so that
 * API keys are never exposed to the browser.
 */

/* ── configuration ───────────────────────────────────────── */

export type AIProvider = "openai" | "anthropic"

export const OPENAI_MODELS = [
  { id: "gpt-4o-mini", label: "GPT-4o Mini (schnell & günstig)" },
  { id: "gpt-4o", label: "GPT-4o (beste Qualität)" },
  { id: "gpt-3.5-turbo", label: "GPT-3.5 Turbo (günstig)" },
] as const

export const ANTHROPIC_MODELS = [
  { id: "claude-sonnet-4-20250514", label: "Claude Sonnet 4 (beste Qualität)" },
  { id: "claude-3-5-haiku-20241022", label: "Claude 3.5 Haiku (schnell & günstig)" },
] as const

/** All models across providers – used by the settings page. */
export const AVAILABLE_MODELS = [...OPENAI_MODELS, ...ANTHROPIC_MODELS]

export const DEFAULT_MODEL = "gpt-4o-mini"

/**
 * Returns the OpenAI API key.
 * Only available in server-side contexts.
 */
export function getOpenAIKey(): string {
  return process.env.OPENAI_API_KEY ?? process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ""
}

/**
 * Checks whether at least one AI API key is configured.
 *
 * Only reliable in server-side contexts. Client-side code should fetch
 * /api/chat/status to determine configuration status.
 */
export function isOpenAIConfigured(): boolean {
  const openaiKey = process.env.OPENAI_API_KEY ?? process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ""
  const anthropicKey = process.env.ANTHROPIC_API_KEY ?? ""
  return openaiKey.length > 0 || anthropicKey.length > 0
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
  options?: { temperature?: number; maxTokens?: number; provider?: AIProvider }
): Promise<string> {
  const temperature = options?.temperature ?? 0.7
  const maxTokens = options?.maxTokens ?? 1024
  const provider = options?.provider

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, temperature, maxTokens, provider }),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    const errorMsg =
      (errorBody as { error?: string })?.error ??
      `KI-API-Fehler: ${response.status} ${response.statusText}`
    throw new Error(errorMsg)
  }

  const data = await response.json()
  const content = (data as { content?: string })?.content
  if (typeof content !== "string") {
    throw new Error("Unerwartete Antwort von der KI-API.")
  }
  return content
}

/* ── Convenience: test the API key ───────────────────────── */

export async function testAPIKey(provider?: AIProvider): Promise<{ ok: boolean; error?: string }> {
  try {
    const result = await chatCompletion(
      [{ role: "user", content: "Antworte nur mit: OK" }],
      { temperature: 0, maxTokens: 10, provider }
    )
    return { ok: result.length > 0 }
  } catch (err) {
    return { ok: false, error: (err as Error).message }
  }
}
