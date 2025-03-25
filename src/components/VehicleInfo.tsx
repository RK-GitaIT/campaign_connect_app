"use client";

import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function VehicleInfo() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <p className="mt-1 text-sm text-gray-900">{currentCall.vehicleInfo.year}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Make</label>
          <p className="mt-1 text-sm text-gray-900">{currentCall.vehicleInfo.make}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Model</label>
          <p className="mt-1 text-sm text-gray-900">{currentCall.vehicleInfo.model}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <p className="mt-1 text-sm text-gray-900">{currentCall.vehicleInfo.type}</p>
        </div>
      </div>
    </div>
  );
} 