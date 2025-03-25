"use client";

import React, { useState, useEffect } from 'react';
import { useCampaign } from '../context/CampaignContext';

export const CallControls: React.FC = () => {
  const { currentCall } = useCampaign();
  const [duration, setDuration] = useState('00:00:00');

  useEffect(() => {
    let startTime = Date.now();
    const timer = setInterval(() => {
      const diff = Date.now() - startTime;
      const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
      const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
      const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
      setDuration(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!currentCall) return null;

  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Ongoing Call</h2>
        <div className="text-2xl font-bold text-green-400">{duration}</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>

        <button className="flex items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>

        <button className="flex items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        </button>

        <button className="flex items-center justify-center p-3 bg-red-600 rounded-lg hover:bg-red-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((key) => (
          <button
            key={key}
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-xl font-bold"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}; 