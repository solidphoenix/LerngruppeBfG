"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const STORAGE_KEY = "lerngruppe-study-progress"

const studyTopics = [
  { id: "thrombose", label: "Thrombose & Prophylaxe", emoji: "🩸" },
  { id: "wunden", label: "Wunden & Wundversorgung", emoji: "🩹" },
  { id: "diabetes", label: "Diabetes mellitus", emoji: "💉" },
  { id: "ernaehrung", label: "Ernährung / DGE-Regeln", emoji: "🥗" },
  { id: "fieber", label: "Fieber & Beobachtung", emoji: "🌡️" },
  { id: "schmerz", label: "Schmerzmanagement", emoji: "💊" },
  { id: "fallbeispiel", label: "Fallbeispiel Herr Winterhaus", emoji: "📋" },
]

function getMotivation(percent: number): string {
  if (percent === 0) return "Los geht's! Klicke auf ein Thema, um zu starten. 💪"
  if (percent < 30) return "Guter Anfang! Bleib dran! 🚀"
  if (percent < 50) return "Fast die Hälfte geschafft! Weiter so! 📈"
  if (percent < 75) return "Mehr als die Hälfte – stark! 🔥"
  if (percent < 100) return "Du bist fast fertig – Endspurt! 🏁"
  return "Alle Themen gelernt – du bist klausurfit! 🎉🏆"
}

export function StudyProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setCompleted(new Set(JSON.parse(saved) as string[]))
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  function toggle(id: string) {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
      } catch {
        // ignore storage errors
      }
      return next
    })
  }

  const percent = Math.round((completed.size / studyTopics.length) * 100)

  return (
    <Card className="bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 border-violet-200">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-xl">Lern-Fortschritt</CardTitle>
          <Badge
            variant="secondary"
            className="bg-violet-100 text-violet-700"
          >
            {completed.size}/{studyTopics.length} Themen
          </Badge>
        </div>
        <CardDescription>
          Markiere Themen als gelernt und behalte deinen Fortschritt im Blick.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Fortschritt</span>
            <span className="font-semibold text-violet-600">{percent}%</span>
          </div>
          <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500 transition-all duration-500 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Motivation */}
        <p className="text-sm text-gray-600 text-center font-medium">
          {getMotivation(percent)}
        </p>

        {/* Topic checkboxes */}
        <div className="grid gap-2 sm:grid-cols-2">
          {studyTopics.map((topic) => {
            const done = completed.has(topic.id)
            return (
              <button
                key={topic.id}
                onClick={() => toggle(topic.id)}
                className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm transition-all text-left ${
                  done
                    ? "bg-violet-50 border-violet-300 text-violet-800"
                    : "bg-white/70 border-gray-200 text-gray-600 hover:border-violet-200 hover:bg-violet-50/50"
                }`}
              >
                <span className="text-base">{topic.emoji}</span>
                <span className="flex-1 font-medium">{topic.label}</span>
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md border text-xs transition-colors ${
                    done
                      ? "border-violet-400 bg-violet-500 text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {done ? "✓" : ""}
                </span>
              </button>
            )
          })}
        </div>

        {percent === 100 && (
          <div className="rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-3 text-center">
            <p className="text-sm font-semibold text-emerald-700">
              🎓 Glückwunsch! Du hast alle Themen bearbeitet!
            </p>
            <p className="text-xs text-emerald-600 mt-1">
              Wiederhole jetzt mit dem KI-Quiz oder den Lernkarten für maximalen Erfolg.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
