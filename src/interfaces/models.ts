export interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
}

export interface VehicleInfo {
  target?: string;
  replace?: string;
  year?: string;
  make?: string;
  model?: string;
  type?: string;
}

export interface ServiceInfo {
  labor: number;
  parts: number;
  total: number;
  notes: string;
}

export interface CallInfo {
  duration: string;
  status: 'ongoing' | 'ended' | 'pending';
}

export interface CustomerInfo {
  company: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface Disposition {
  id: string;
  name: string;
  status: string;
}

export interface ScriptSuggestion {
  id: number;
  text: string;
}

export interface CallData {
  id: string;
  attempt: number;
  customerInfo: CustomerInfo;
  vehicleInfo: VehicleInfo;
  serviceInfo: ServiceInfo;
  callInfo: CallInfo;
  target: string;
  service: string;
  scriptSuggestions: ScriptSuggestion[];
}

export interface InboundCall {
  id: string;
  phoneNumber: string;
  timestamp: string;
  status: 'waiting' | 'in-queue' | 'connected' | 'ended';
  waitTime: string;
  customerInfo: {
    name: string;
    company: string;
    previousCalls: number;
  };
}

export interface Transfer {
  id: string;
  fromAgentId: string;
  toAgentId: string;
  callId: string;
  timestamp: string;
  reason: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface CallStatus {
  id: string;
  status: 'ongoing' | 'ended' | 'pending';
  timestamp: string;
  duration: string;
  agentId: string | null;
}

export interface CallType {
  id: string;
  name: string;
  description: string;
  scriptTemplate: string;
} 