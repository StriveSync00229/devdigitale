"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, StopCircle } from "lucide-react"

export default function TimeTracker() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRunning])

  const handleStartPause = () => {
    setIsRunning(!isRunning)
  }

  const handleStop = () => {
    setIsRunning(false)
    // Ici, on enverrait le temps au backend
    console.log(`Session terminée. Temps enregistré: ${time} secondes.`)
    setTime(0)
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0")
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0")
    const s = (seconds % 60).toString().padStart(2, "0")
    return `${h}:${m}:${s}`
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-muted/50 rounded-md">
      <div className="text-2xl font-mono font-bold text-foreground tabular-nums">{formatTime(time)}</div>
      <div className="flex items-center gap-2">
        <Button onClick={handleStartPause} size="sm" variant={isRunning ? "destructive" : "default"}>
          {isRunning ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {isRunning ? "Pause" : "Démarrer"}
        </Button>
        <Button onClick={handleStop} size="sm" variant="outline" disabled={time === 0 && !isRunning}>
          <StopCircle className="mr-2 h-4 w-4" />
          Arrêter & Enregistrer
        </Button>
      </div>
    </div>
  )
}
