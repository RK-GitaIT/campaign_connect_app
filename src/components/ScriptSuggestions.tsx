"use client";

import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function ScriptSuggestions() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Script Suggestions</h2>
      <div className="space-y-3">
        {currentCall.scriptSuggestions.map((suggestion) => (
          <button
            key={suggestion.id}
            className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
            onClick={() => {
              // Implement copy to clipboard or other action
              navigator.clipboard.writeText(suggestion.text);
            }}
          >
            <p className="text-sm text-gray-900">{suggestion.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
} 