"use client";

import React, { useState, useEffect } from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function ServiceInfo() {
  const { currentCall, updateCallInfo } = useCampaign();
  const [labor, setLabor] = useState(currentCall?.serviceInfo.labor || 75);
  const [parts, setParts] = useState(currentCall?.serviceInfo.parts || 75);
  const [notes, setNotes] = useState(currentCall?.serviceInfo.notes || '');

  useEffect(() => {
    if (!currentCall?.id) return;
    
    const total = labor + parts;
    updateCallInfo(currentCall.id, {
      serviceInfo: {
        labor,
        parts,
        total,
        notes,
      },
    });
  }, [labor, parts, notes, updateCallInfo, currentCall?.id]);

  if (!currentCall) return null;

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mt-4">
      <div className='flex justify-between'>
          <div className="mb-6 border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Service Quote</h2>
            <p className="text-[16px] text-gray-600">
              Hi, I was just trying to find out how much do you charge for
            </p>
            <h3 className="text-[20px] font-bold  mt-2">
              {currentCall.service}
            </h3>
          </div>
          <div className="flex flex-col items-center">
        <button className="inline-flex items-center px-4 py-2 text-md font-medium text-red-600 hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add disposition
        </button>
        <button className="inline-flex items-center px-4 py-2 text-md font-medium text-indigo-600 hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Add Notes
        </button>
      </div>
      </div>

      <div className="flex space-x-4 mb-4 mt-6">
              
                <div className="flex items-center border p-2 rounded-lg labor-input">
                    <label className="mr-2 text-gray-600">Labor</label>           
                    <div className="h-6 w-[1px] bg-gray-400 mx-2"></div>
                    <span className="mr-1 text-gray-600">$</span>
                    <input type="text" 
                      value={labor}
                      onChange={(e) => setLabor(Number(e.target.value))}
                    className="w-full md:w-[165px] border-none focus:outline-none font-semibold text-xl"/>
                </div>
            
               
                <div className="flex items-center border p-2 rounded-lg labor-input" >
                    <label className="mr-2 text-gray-600">Parts</label>
                 
                    <div className="h-6 w-[1px] bg-gray-400 mx-2"></div>
                    <span className="mr-1 text-gray-600">$</span>
                    <input type="text" 
                    value={parts}
                    onChange={(e) => setParts(Number(e.target.value))}
                    className="w-full md:w-[165px] border-none focus:outline-none font-semibold text-xl" />
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
        className="block w-full px-4 py-3 border-2 border-[#1e64a4] rounded-lg bg-gray-50 text-[18px] font-semibold text-gray-900 focus:border-[#1e64a4] focus:outline-none"
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
        className="block w-full px-4 py-3 border-2 border-[#1e64a4] rounded-lg text-[16px] placeholder-gray-400 focus:border-[#1e64a4] focus:outline-none"
        placeholder="Add any additional notes or comments here..."
    />
</div>

     
    </div>
  );
} 