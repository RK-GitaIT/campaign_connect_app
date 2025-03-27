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
    <main className="py-4">
  <div className="flex flex-col md:flex-row gap-5 justify-center  ml-[30px]">
    <div className="w-full md:w-[25%] lg:w-[25%]"> 
      <CustomerInfo />
      <div className="mt-4">
        <ScriptSuggestions />
      </div>
    </div>

    <div className="flex-1 md:w-[67%] lg:w-[67%]">
      <VehicleInfo />
      <ServiceInfo />
    </div>

    <div className="w-full md:w-[25%] lg:w-[25%]"> 
      <OngoingCall />
    </div>
  </div>
</main>
  </div>
</CampaignProvider>
  );
} 