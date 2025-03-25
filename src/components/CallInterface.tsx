'use client'

import { useState, useEffect } from 'react'
import { Card } from './ui/Card'

interface CallInterfaceProps {
  agentName: string;
  agentRole: string;
  onManualMode: () => void;
  onStartNextDial: () => void;
}

export function CallInterface({ 
  agentName, 
  agentRole, 
  onManualMode, 
  onStartNextDial 
}: CallInterfaceProps) {
  const [countdown, setCountdown] = useState(10)
  const [isPaused, setIsPaused] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [isCallActive, setIsCallActive] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (!isPaused && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [countdown, isPaused])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCallActive) {
      timer = setInterval(() => {
        setCallDuration(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isCallActive])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          {agentName.charAt(0)}
        </div>
        <div>
          <h3 className="font-medium">{agentName}</h3>
          <p className="text-sm text-gray-500">{agentRole}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center space-x-2">
          <span>Auto Dialing in</span>
          <span className="font-medium">{countdown} seconds</span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center"
          >
            {isPaused ? '▶' : '⏸'}
          </button>
        </div>

        {isCallActive && (
          <div className="bg-black text-white px-4 py-2 rounded-lg">
            {formatTime(callDuration)}
          </div>
        )}

        <button
          onClick={onManualMode}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Manual Mode
        </button>

        <button
          onClick={onStartNextDial}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Start Next Dial
        </button>
      </div>
    </div>
  )
} 