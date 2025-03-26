"use client";

import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function VehicleInfo() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
  <h2 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Information</h2>
  <div className="flex flex-col lg:flex-row gap-4 pl-10">
    {/* First Row: Year and Make */}
    <div className="flex flex-col sm:flex-row lg:flex-1 gap-4 w-full">
      <div className="flex-1 min-w-[160px]">
        <label className="block text-lg font-medium text-gray-700">Year</label>
        <p className="text-[#7b7b83] text-xl font-bold">{currentCall.vehicleInfo.year}</p>
      </div>
      <div className="flex-1 min-w-[160px]">
        <label className="block text-lg font-medium text-gray-700">Make</label>
        <p className="text-[#7b7b83] text-base font-normal">{currentCall.vehicleInfo.make}</p>
      </div>
    </div>
    {/* Second Row: Model and Type */}
    <div className="flex flex-col sm:flex-row lg:flex-1 gap-4 w-full">
      <div className="flex-1 min-w-[160px]">
        <label className="block text-lg font-medium text-gray-700">Model</label>
        <p className="text-[#7b7b83] text-base font-normal">{currentCall.vehicleInfo.model}</p>
      </div>
      <div className="flex-1 min-w-[160px]">
        <label className="block text-lg font-medium text-gray-700">Type</label>
        <p className="text-[#7b7b83] text-base font-normal">{currentCall.vehicleInfo.type}</p>
      </div>
    </div>
  </div>
</div>

  
  );
} 