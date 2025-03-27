"use client";

import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function ScriptSuggestions() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 md:p-6">
    <div className="flex items-center space-x-3 mb-4">
      <span className="bg-[#362b85] h-[30px] w-[30px] rounded-full flex"></span>
      <h2 className="font-bold">Script Suggestions</h2>
    </div>

    <div className="space-y-4 px-2">
      {currentCall.scriptSuggestions.map((suggestion) => (
        <p
          key={suggestion.id}
          className="border-l-2 border-gray-300 pl-4"
          onClick={() => {
            // Implement copy to clipboard or other action
            navigator.clipboard.writeText(suggestion.text);
          }}
        >
          <p className="text-[#6a6a6a] font-normal">{suggestion.text}</p>
        </p>
      ))}
    </div>
  </div>
  );
} 