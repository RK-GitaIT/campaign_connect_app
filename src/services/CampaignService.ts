import { Agent, CallData, InboundCall, Transfer, CallStatus, CallType } from '../interfaces/models';
import { mockAgents, mockCallData, mockInboundCalls, mockTransfers, mockCallStatuses, mockCallTypes, mockCampaignSettings, mockCallHistory, mockPerformanceMetrics } from './mockData';

export interface ICampaignService {
  getAgents(): Agent[];
  getAgentById(id: string): Agent | undefined;
  getCurrentCall(): CallData | null;
  getInboundCalls(): InboundCall[];
  getTransfers(): Transfer[];
  getCallStatuses(): CallStatus[];
  getCallTypes(): CallType[];
  getCampaignSettings(): typeof mockCampaignSettings;
  getCallHistory(): typeof mockCallHistory;
  getPerformanceMetrics(): typeof mockPerformanceMetrics;
  updateCallStatus(callId: string, status: CallStatus['status']): void;
  transferCall(callId: string, fromAgentId: string, toAgentId: string, reason: string): void;
  updateAgentStatus(agentId: string, status: Agent['status']): void;
  updateCallInfo(callId: string, updates: Partial<CallData>): void;
  setCurrentCall(callId: string): void;
}

export class CampaignService implements ICampaignService {
  private agents: Agent[] = mockAgents;
  private calls: CallData[] = mockCallData;
  private inboundCalls: InboundCall[] = mockInboundCalls;
  private transfers: Transfer[] = mockTransfers;
  private callStatuses: CallStatus[] = mockCallStatuses;
  private callTypes: CallType[] = mockCallTypes;
  private currentCallId: string | null = mockCallData[0]?.id || null;

  constructor() {
    // Initialize the first call as current if available
    if (this.calls.length > 0 && !this.currentCallId) {
      this.currentCallId = this.calls[0].id;
    }
  }

  getAgents(): Agent[] {
    return this.agents;
  }

  getAgentById(id: string): Agent | undefined {
    return this.agents.find(agent => agent.id === id);
  }

  getCurrentCall(): CallData | null {
    if (!this.currentCallId) return null;
    return this.calls.find(call => call.id === this.currentCallId) || null;
  }

  getInboundCalls(): InboundCall[] {
    return this.inboundCalls;
  }

  getTransfers(): Transfer[] {
    return this.transfers;
  }

  getCallStatuses(): CallStatus[] {
    return this.callStatuses;
  }

  getCallTypes(): CallType[] {
    return this.callTypes;
  }

  getCampaignSettings(): typeof mockCampaignSettings {
    return mockCampaignSettings;
  }

  getCallHistory(): typeof mockCallHistory {
    return mockCallHistory;
  }

  getPerformanceMetrics(): typeof mockPerformanceMetrics {
    return mockPerformanceMetrics;
  }

  updateCallStatus(callId: string, status: CallStatus['status']): void {
    const call = this.calls.find(c => c.id === callId);
    if (call) {
      call.callInfo.status = status;
      const callStatus = this.callStatuses.find(cs => cs.id === callId);
      if (callStatus) {
        callStatus.status = status;
      }
    }
  }

  transferCall(callId: string, fromAgentId: string, toAgentId: string, reason: string): void {
    const transfer: Transfer = {
      id: `TRF-${Date.now()}`,
      fromAgentId,
      toAgentId,
      callId,
      timestamp: new Date().toISOString(),
      reason,
      status: 'pending'
    };
    this.transfers.push(transfer);
  }

  updateAgentStatus(agentId: string, status: Agent['status']): void {
    const agent = this.agents.find(a => a.id === agentId);
    if (agent) {
      agent.status = status;
    }
  }

  updateCallInfo(callId: string, updates: Partial<CallData>): void {
    const call = this.calls.find(c => c.id === callId);
    if (call) {
      Object.assign(call, updates);
    }
  }

  setCurrentCall(callId: string): void {
    const call = this.calls.find(c => c.id === callId);
    if (call) {
      this.currentCallId = callId;
    }
  }
} 