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
  isInitialized: boolean;
  updateCallStatus: (callId: string, status: CallStatus['status']) => void;
  transferCall: (callId: string, fromAgentId: string, toAgentId: string, reason: string) => void;
  updateAgentStatus: (agentId: string, status: Agent['status']) => void;
  updateCallInfo: (callId: string, updates: Partial<CallData>) => void;
  setCurrentCallById: (callId: string) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export function CampaignProvider({ children }: { children: React.ReactNode }) {
  // 1. State Management
  const [service] = useState(() => ServiceFactory.getInstance().getCampaignService());
  const [agent, setAgent] = useState<Agent | null>(null);
  const [currentCall, setCurrentCall] = useState<CallData | null>(null);
  const [inboundCalls, setInboundCalls] = useState<InboundCall[]>([]);
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [callStatuses, setCallStatuses] = useState<CallStatus[]>([]);
  const [callTypes, setCallTypes] = useState<CallType[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // 2. Private Methods
  const initializeData = async () => {
    try {
      const agents = service.getAgents();
      if (!agents.length) {
        throw new Error('No agents found');
      }
      
      setAgent(agents[0]);
      setCurrentCall(service.getCurrentCall());
      setInboundCalls(service.getInboundCalls());
      setTransfers(service.getTransfers());
      setCallStatuses(service.getCallStatuses());
      setCallTypes(service.getCallTypes());
      setIsInitialized(true);
    } catch (error) {
      console.error('Failed to initialize campaign data:', error);
    }
  };

  // 3. Effects
  useEffect(() => {
    initializeData();
  }, [service]);

  // 4. Public Methods
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

  // 5. Context Value
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
    isInitialized,
    updateCallStatus,
    transferCall,
    updateAgentStatus,
    updateCallInfo,
    setCurrentCallById,
  };

  // 6. Render
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