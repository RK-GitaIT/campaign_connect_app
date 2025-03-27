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
  <div className="min-h-screen bg-slate-100">
    <Header />
    <main className="py-4">
  <div className="flex flex-col md:flex-row gap-5 justify-center  ml-[30px]">
    <div className="w-full md:w-[20%] lg:w-[20%]"> 
      <CustomerInfo />
      <div className="mt-4">
        <ScriptSuggestions />
      </div>
    </div>

    <div className="flex-1 md:w-[78%] lg:w-[78%]">
      <VehicleInfo />
      <div className="w-full h-[2px] bg-gray-600"></div>
      <ServiceInfo />
    </div>

    <div className="w-full md:w-[20%] lg:w-[20%]"> 
      <OngoingCall />
    </div>
  </div>
</main>
  </div>
</CampaignProvider>
  );
} 