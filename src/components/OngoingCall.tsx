"use client";

import React, { useState, useEffect } from "react";
import { useCampaign } from "../context/CampaignContext";

export default function OngoingCall() {
  const { currentCall, updateCallStatus, transferCall, agent, setCurrentCallById } = useCampaign();

  const [callDuration, setCallDuration] = useState("00:00:00");
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Update the call timer every second
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
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [currentCall]);

  // Hide component if no call/agent
  if (!currentCall || !agent) return null;

  // End call handler
  const handleEndCall = () => {
    updateCallStatus(currentCall.id, "ended");
    setCurrentCallById(""); // Clear current call
  };

  // Transfer call handler (example: agent #2)
  const handleTransfer = () => {
    const nextAgentId = "2";
    transferCall(currentCall.id, agent.id, nextAgentId, "Customer requested transfer");
  };

  return (
    <div className="w-72 bg-[#26292E] rounded-lg shadow-lg overflow-hidden">
      {/* 
        TOP SECTION:
        Large dark area for "Ongoing Call" label, 
        green dot, and call timer
      */}
      <div className="h-52 flex flex-col justify-end px-4 pb-4">
        <h2 className="text-white text-base font-semibold mb-2">Ongoing Call</h2>
        <div className="flex items-center space-x-2">
          {/* Green Indicator */}
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          {/* Timer */}
          <span className="text-white text-sm">{callDuration}</span>
        </div>
      </div>

      {/* 
        MIDDLE SECTION:
        Dark bar with 4 square icon buttons
      */}
      <div className="bg-[#2F3237] px-4 py-3 flex items-center justify-around">
        {/* 1) Mute/Unmute */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 rounded-md bg-[#3A3D43] flex items-center justify-center border border-transparent hover:border-white hover:scale-110 transition-transform duration-300"
          title={isMuted ? "Unmute" : "Mute"}
        >
          <i className="fas fa-microphone-slash text-white"></i>
        </button>

        {/* 2) Transfer */}
        <button
          onClick={handleTransfer}
           className="w-10 h-10 rounded-md bg-[#3A3D43] flex items-center justify-center border border-transparent hover:border-white hover:scale-110 transition-transform duration-300"
          title="Transfer Call"
        >
          <i className="fas fa-phone text-white"></i>
        </button>

        {/* 3) Pause/Resume */}
        <button
          onClick={() => setIsPaused(!isPaused)}
           className="w-10 h-10 rounded-md bg-[#3A3D43] flex items-center justify-center border border-transparent hover:border-white hover:scale-110 transition-transform duration-300"
          title={isPaused ? "Resume" : "Pause"}
        >
          <i className="fas fa-pause text-white"></i>
        </button>

        {/* 4) Keypad (example) */}
        <button
          onClick={() => alert("Open keypad")}
            className="w-10 h-10 rounded-md bg-[#3A3D43] flex items-center justify-center border border-transparent hover:border-white hover:scale-110 transition-transform duration-300"
          title="Keypad"
        >
          <i className="fas fa-keyboard text-white"></i>
        </button>
      </div>

      {/* 
        BOTTOM SECTION:
        Full-width gradient bar with End Call icon
      */}
      <div className="bg-gradient-to-r from-red-500 to-purple-500 h-14 flex items-center justify-center">
        <button
          onClick={handleEndCall}
             className="w-10 h-10 rounded-md text-white flex items-center justify-center border border-transparent hover:border-white hover:scale-110 transition-transform duration-300"
          title="End Call"
        >
          <i className="fas fa-phone-slash text-xl"></i>
        </button>
      </div>
    </div>
  );
}
