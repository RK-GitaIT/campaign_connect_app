"use client";

import React, { useState, useEffect } from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function ServiceInfo() {
  const { currentCall, updateCallInfo } = useCampaign();
  const [labor, setLabor] = useState(currentCall?.serviceInfo.labor || 0);
  const [parts, setParts] = useState(currentCall?.serviceInfo.parts || 0);
  const [notes, setNotes] = useState(currentCall?.serviceInfo.notes || '');

  useEffect(() => {
    const total = labor + parts;
    updateCallInfo({
      serviceInfo: {
        labor,
        parts,
        total,
        notes,
      },
    });
  }, [labor, parts, notes, updateCallInfo]);

  if (!currentCall) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Service Quote</h2>
        <p className="text-[16px] text-gray-600">
          Hi, I was just trying to find out how much do you charge for
        </p>
        <h3 className="text-[20px] font-bold text-indigo-600 mt-2">
          {currentCall.service}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[14px] font-medium text-gray-700 mb-2">
            Labor
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-[14px]">$</span>
            </div>
            <input
              type="text"
              value={labor}
              onChange={(e) => setLabor(Number(e.target.value))}
              className="block w-full pl-7 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[16px] transition-colors"
              placeholder="75"
            />
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-medium text-gray-700 mb-2">
            Parts
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-[14px]">$</span>
            </div>
            <input
              type="text"
              value={parts}
              onChange={(e) => setParts(Number(e.target.value))}
              className="block w-full pl-7 pr-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[16px] transition-colors"
              placeholder="75"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-[14px] font-medium text-gray-700">
            Total<span className="text-red-500 ml-0.5">*</span>
          </label>
          <span className="text-sm text-gray-500">Auto-calculated</span>
        </div>
        <input
          type="text"
          value={`$${(labor + parts).toFixed(2)}`}
          readOnly
          className="block w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50 text-[18px] font-semibold text-gray-900"
        />
      </div>

      <div className="mb-6">
        <label className="block text-[14px] font-medium text-gray-700 mb-2">
          Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-[16px] placeholder-gray-400"
          placeholder="Add any additional notes or comments here..."
        />
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add disposition
        </button>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Add Notes
        </button>
      </div>
    </div>
  );
} 