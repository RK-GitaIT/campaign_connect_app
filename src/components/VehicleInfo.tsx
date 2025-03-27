"use client";

import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function VehicleInfo() {
  const { currentCall } = useCampaign();

  if (!currentCall) return null;

  return (
    <div className=" p-8 bg-white rounded-tl-lg rounded-tr-lg shadow">
    <h2 className="font-bold">Vehicle Information</h2>
    <div className="flex flex-col md:flex-row justify-between md:items-center bg-slate-100 p-4 mt-4 rounded-lg">
        <div>
            <p className="font-bold">Vehicle</p>
            <p className="text-[#7b7b83] text-xl font-bold">
            {`${currentCall.vehicleInfo.year} ${currentCall.vehicleInfo.make} ${currentCall.vehicleInfo.model} ${currentCall.vehicleInfo.type}`}
          </p>

        </div>
        <div>
            <p className="font-bold" >Target</p>
            <p className="vehicle-target">{currentCall.vehicleInfo.target}</p>
        </div>
        <div>
            <p className="font-bold">Vehicle</p>
            <p className="vehicle-target">{currentCall.vehicleInfo.replace}</p>
        </div>
    </div>
  
</div>
  
  );
} 