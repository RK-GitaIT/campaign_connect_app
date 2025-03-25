'use client'

import { useState } from 'react'
import { Card } from './ui/Card'

interface VehicleInfo {
  year: string;
  make: string;
  model: string;
  type: string;
  target: string;
  service: string;
}

interface CallDetailsProps {
  attempt: number;
  companyName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  vehicleInfo: VehicleInfo;
  onAddDisposition: () => void;
  onAddNotes: () => void;
}

export function CallDetails({
  attempt,
  companyName,
  address,
  vehicleInfo,
  onAddDisposition,
  onAddNotes,
}: CallDetailsProps) {
  const [laborCost, setLaborCost] = useState('75')
  const [partsCost, setPartsCost] = useState('75')

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <Card>
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-gray-200 rounded-lg">
              Attempt {attempt}
            </div>
            
            <div>
              <h3 className="font-medium">Company</h3>
              <p>{companyName}</p>
            </div>

            <div>
              <h3 className="font-medium">Address</h3>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.state} {address.zip}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="col-span-8">
        <Card>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Vehicle Information</h2>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm text-gray-500">Vehicle</h3>
                <p className="font-medium">{`${vehicleInfo.year} ${vehicleInfo.make} ${vehicleInfo.model} ${vehicleInfo.type}`}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Target</h3>
                <p className="font-medium">{vehicleInfo.target}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Service</h3>
                <p className="font-medium">{vehicleInfo.service}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Battery Replacement</h3>
              <div className="flex space-x-4">
                <div>
                  <label className="block text-sm text-gray-500">Labor</label>
                  <div className="flex items-center">
                    <span className="mr-1">$</span>
                    <input
                      type="text"
                      value={laborCost}
                      onChange={(e) => setLaborCost(e.target.value)}
                      className="w-20 border rounded px-2 py-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-500">Parts</label>
                  <div className="flex items-center">
                    <span className="mr-1">$</span>
                    <input
                      type="text"
                      value={partsCost}
                      onChange={(e) => setPartsCost(e.target.value)}
                      className="w-20 border rounded px-2 py-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={onAddDisposition}
                className="text-red-500 hover:text-red-600"
              >
                Add disposition
              </button>
              <button
                onClick={onAddNotes}
                className="text-blue-500 hover:text-blue-600"
              >
                Add Notes
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 