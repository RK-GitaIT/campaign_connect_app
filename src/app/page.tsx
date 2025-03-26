"use client";


import Header from '@/components/Header';
import { CampaignProvider } from '../context/CampaignContext';
import CustomerInfo from '@/components/CustomerInfo';
import ScriptSuggestions from '@/components/ScriptSuggestions';
import VehicleInfo from '@/components/VehicleInfo';
import ServiceInfo from '@/components/ServiceInfo';
import OngoingCall from '@/components/OngoingCall';

export default function Home() {
  return (
<CampaignProvider>
  <div className="min-h-screen bg-[#F9FAFB]">
    <Header />
    <main className="container mx-auto py-4">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-2/3 lg:w-[400px]"> 
          <CustomerInfo />
          <div className="mt-4">
            <ScriptSuggestions />
          </div>
        </div>

        <div className="flex-1 max-w-[800px]">
          <VehicleInfo />
          <ServiceInfo />
        </div>

        <div className="w-full md:w-1/3 lg:w-[280px]"> 
          <OngoingCall />
        </div>
      </div>
    </main>
  </div>
</CampaignProvider>
  );
} 