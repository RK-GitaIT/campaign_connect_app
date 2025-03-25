"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Agent, CallData, InboundCall, Transfer, CallStatus, CallType } from '../interfaces/models';
import { ICampaignService } from '../services/CampaignService';
import { ServiceFactory } from '../services/ServiceFactory';

interface CampaignContextType {
  agent: Agent | null;
  currentCall: CallData | null;
  inboundCalls: InboundCall[];
  transfers: Transfer[];
  callStatuses: CallStatus[];
  callTypes: CallType[];
  campaignSettings: ReturnType<ICampaignService['getCampaignSettings']>;
  callHistory: ReturnType<ICampaignService['getCallHistory']>;
  performanceMetrics: ReturnType<ICampaignService['getPerformanceMetrics']>;
  updateCallStatus: (callId: string, status: CallStatus['status']) => void;
  transferCall: (callId: string, fromAgentId: string, toAgentId: string, reason: string) => void;
  updateAgentStatus: (agentId: string, status: Agent['status']) => void;
  updateCallInfo: (callId: string, updates: Partial<CallData>) => void;
  setCurrentCallById: (callId: string) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export function CampaignProvider({ children }: { children: React.ReactNode }) {
  const [service] = useState(() => ServiceFactory.getInstance().getCampaignService());
  const [agent, setAgent] = useState<Agent | null>(null);
  const [currentCall, setCurrentCall] = useState<CallData | null>(null);
  const [inboundCalls, setInboundCalls] = useState<InboundCall[]>([]);
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [callStatuses, setCallStatuses] = useState<CallStatus[]>([]);
  const [callTypes, setCallTypes] = useState<CallType[]>([]);

  useEffect(() => {
    console.log("Hello RK");
    // Initialize data
    const agents = service.getAgents();
    setAgent(agents[0]); // Set first agent as current
    setCurrentCall(service.getCurrentCall());
    setInboundCalls(service.getInboundCalls());
    setTransfers(service.getTransfers());
    setCallStatuses(service.getCallStatuses());
    setCallTypes(service.getCallTypes());
  }, [service]);

  const updateCallStatus = (callId: string, status: CallStatus['status']) => {
    service.updateCallStatus(callId, status);
    setCallStatuses(service.getCallStatuses());
    setCurrentCall(service.getCurrentCall());
  };

  const transferCall = (callId: string, fromAgentId: string, toAgentId: string, reason: string) => {
    service.transferCall(callId, fromAgentId, toAgentId, reason);
    setTransfers(service.getTransfers());
  };

  const updateAgentStatus = (agentId: string, status: Agent['status']) => {
    service.updateAgentStatus(agentId, status);
    const updatedAgent = service.getAgentById(agentId);
    if (updatedAgent) {
      setAgent(updatedAgent);
    }
  };

  const updateCallInfo = (callId: string, updates: Partial<CallData>) => {
    service.updateCallInfo(callId, updates);
    setCurrentCall(service.getCurrentCall());
  };

  const setCurrentCallById = (callId: string) => {
    service.setCurrentCall(callId);
    setCurrentCall(service.getCurrentCall());
  };

  const value = {
    agent,
    currentCall,
    inboundCalls,
    transfers,
    callStatuses,
    callTypes,
    campaignSettings: service.getCampaignSettings(),
    callHistory: service.getCallHistory(),
    performanceMetrics: service.getPerformanceMetrics(),
    updateCallStatus,
    transferCall,
    updateAgentStatus,
    updateCallInfo,
    setCurrentCallById,
  };

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
}

export function useCampaign() {
  const context = useContext(CampaignContext);
  if (context === undefined) {
    throw new Error('useCampaign must be used within a CampaignProvider');
  }
  return context;
} 