"use client";

import React, { useState, useEffect } from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function OngoingCall() {
  const { currentCall, updateCallStatus, transferCall, agent, setCurrentCallById } = useCampaign();
  const [callDuration, setCallDuration] = useState('00:00:00');
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!currentCall) return;

    const startTime = new Date();
    const timer = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      setCallDuration(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [currentCall]);

  if (!currentCall || !agent) return null;

  const handleEndCall = () => {
    updateCallStatus(currentCall.id, 'ended');
    setCurrentCallById(''); // Clear current call
  };

  const handleTransfer = () => {
    // In a real app, you would show a transfer dialog
    // For now, we'll transfer to the next available agent
    const nextAgentId = '2'; // This should come from a proper agent selection
    transferCall(currentCall.id, agent.id, nextAgentId, 'Customer requested transfer');
  };

  return (
    <div className="flex flex-col space-y-6 p-6">
      {/* Call Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Ongoing Call</h2>
            <p className="text-sm text-gray-500">Duration: {callDuration}</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-2 rounded-full ${
                isMuted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMuted ? 'M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' : 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'}
                />
              </svg>
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`p-2 rounded-full ${
                isPaused ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isPaused ? 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' : 'M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'}
                />
              </svg>
            </button>
            <button
              onClick={handleTransfer}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
            <button
              onClick={handleEndCall}
              className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Call Details */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Company</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">{currentCall.customerInfo.company}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Address</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {`${currentCall.customerInfo.address.street}, ${currentCall.customerInfo.address.city}, ${currentCall.customerInfo.address.state} ${currentCall.customerInfo.address.zipCode}`}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">{currentCall.callInfo.status}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Agent</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">{agent.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 