'use client'

import { useState, useEffect } from 'react'

interface OngoingCallProps {
  duration: number;
  onMute: () => void;
  onHangup: () => void;
  onPause: () => void;
  onKeypad: () => void;
}

export function OngoingCall({
  duration,
  onMute,
  onHangup,
  onPause,
  onKeypad
}: OngoingCallProps) {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Ongoing Call</h2>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onMute}
            className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <span>Mute</span>
          </button>

          <button
            onClick={onHangup}
            className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-red-600 hover:bg-red-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
            </svg>
            <span>End Call</span>
          </button>

          <button
            onClick={onPause}
            className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Pause</span>
          </button>

          <button
            onClick={onKeypad}
            className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Keypad</span>
          </button>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2">
            Call Controls
          </div>
        </div>
      </div>
    </div>
  )
} 