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
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className='flex justify-between'>
          <div className="mb-6  pb-4 space-y-4">
            <p className="text-[18px] text-gray-600 font-medium">
              Hi, I was just trying to find out how much do you charge for
            </p>
            <h3 className="text-[20px] font-bold  mt-2">
              {currentCall.service}
            </h3>
          </div>
          <div className="flex flex-col items-start">
        <button className="inline-flex items-center px-4 py-2 text-md font-medium text-[rgb(255,0,0)] hover:scale-110 transition-transform duration-300 font-bold">
         
          Add Notes
        </button>
       
      </div>
      </div>
      <div className="flex gap-4 mb-4">
          {/* Labor Input Box */}
          <div className="flex items-center border border-gray-500 px-4 py-2 rounded-lg">
            <label className="text-gray-600">Labor</label>
            <div className="h-6 w-[1px] bg-gray-400 mx-3"></div>
            <span className="text-gray-600 mr-2">$</span>
            <input
              type="text"
              value={labor}
              onChange={(e) => setLabor(Number(e.target.value))}
              className="border-none focus:outline-none font-bold text-xl w-12  placeholder:text-black focus:border-b-2 focus:border-black"
              placeholder="75_"
            />          
          </div>

        {/* Parts Input Box */}
        <div className="flex items-center border border-gray-500 px-4 py-2 rounded-lg">
          <label className="text-gray-600">Parts</label>
          <div className="h-6 w-[1px] bg-gray-400 mx-3"></div>
          <span className="text-gray-600 mr-2">$</span>
          <input
            type="text"
            value={parts}
            onChange={(e) => setParts(Number(e.target.value))}
            className="border-none focus:outline-none font-bold text-xl w-12 placeholder:text-black focus:border-b-2 focus:border-black"
            placeholder="75_"
          />
        </div>
      </div>

    
      <div className="flex items-center  rounded p-2 mb-4 total">
          <label className="mr-2">Total<span className="text-red-500">*</span></label>
          <div className="h-7 w-[1px] bg-gray-400 mx-2"></div>
          <input type="text"   
                value={`$${(labor + parts).toFixed(2)}`}
                readOnly 
                className="w-full border-none focus:outline-none"/>
      </div>
      <div className="mb-4">

          <textarea 
          placeholder="Notes" 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="w-full border-2  p-2 h-24 focus:outline-none notes" ></textarea>
      </div>    
     
    </div>
  );
} 