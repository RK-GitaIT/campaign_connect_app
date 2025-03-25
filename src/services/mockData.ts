import { Agent, CallData, InboundCall, Transfer, CallStatus, CallType } from '../interfaces/models';

// Mock Agents
export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Agent',
    avatar: '/images/default-avatar.svg',
    status: 'online'
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Agent',
    avatar: '/images/default-avatar.svg',
    status: 'away'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Agent',
    avatar: '/images/default-avatar.svg',
    status: 'offline'
  }
];

// Mock Call Data
export const mockCallData: CallData[] = [
  {
    id: '1',
    attempt: 1,
    customerInfo: {
      company: 'Jiffy Lube Q2 2025',
      address: {
        street: '212 West Plano St',
        city: 'Plano',
        state: 'TX',
        zipCode: '75063',
      },
    },
    vehicleInfo: {
      year: '2027',
      make: 'Audi',
      model: 'Q5',
      type: 'SUV',
    },
    serviceInfo: {
      labor: 75,
      parts: 75,
      total: 150,
      notes: '',
    },
    callInfo: {
      duration: '00:03:09',
      status: 'ongoing',
    },
    target: 'Dealer',
    service: 'Battery Replacement',
    scriptSuggestions: [
      {
        id: 1,
        text: 'Hi, Can you let me know the price for ___'
      },
      {
        id: 2,
        text: 'Hi, I was just trying to find the price of service'
      },
      {
        id: 3,
        text: 'Hi, I was just trying to find out how much do you charge for'
      }
    ]
  },
  {
    id: '2',
    attempt: 1,
    customerInfo: {
      company: 'AutoZone Q2 2025',
      address: {
        street: '123 Main St',
        city: 'Dallas',
        state: 'TX',
        zipCode: '75201',
      },
    },
    vehicleInfo: {
      year: '2026',
      make: 'Toyota',
      model: 'Camry',
      type: 'Sedan',
    },
    serviceInfo: {
      labor: 50,
      parts: 100,
      total: 150,
      notes: '',
    },
    callInfo: {
      duration: '00:00:00',
      status: 'pending',
    },
    target: 'Dealer',
    service: 'Oil Change',
    scriptSuggestions: [
      {
        id: 1,
        text: 'Hi, I need to schedule an oil change'
      },
      {
        id: 2,
        text: 'What are your oil change service options?'
      }
    ]
  }
];

// Mock Inbound Calls
export const mockInboundCalls: InboundCall[] = [
  {
    id: 'INB-001',
    phoneNumber: '+1 (555) 123-4567',
    timestamp: new Date().toISOString(),
    status: 'waiting',
    waitTime: '00:02:15',
    customerInfo: {
      name: 'Alice Johnson',
      company: 'ABC Corp',
      previousCalls: 2
    }
  },
  {
    id: 'INB-002',
    phoneNumber: '+1 (555) 987-6543',
    timestamp: new Date().toISOString(),
    status: 'in-queue',
    waitTime: '00:01:30',
    customerInfo: {
      name: 'Bob Wilson',
      company: 'XYZ Inc',
      previousCalls: 1
    }
  }
];

// Mock Transfers
export const mockTransfers: Transfer[] = [
  {
    id: 'TRF-001',
    fromAgentId: '1',
    toAgentId: '2',
    callId: '1',
    timestamp: new Date().toISOString(),
    reason: 'Specialized Service',
    status: 'completed'
  },
  {
    id: 'TRF-002',
    fromAgentId: '2',
    toAgentId: '3',
    callId: '2',
    timestamp: new Date().toISOString(),
    reason: 'Technical Support',
    status: 'pending'
  }
];

// Mock Call Statuses
export const mockCallStatuses: CallStatus[] = [
  {
    id: '1',
    status: 'ongoing',
    timestamp: new Date().toISOString(),
    duration: '00:03:09',
    agentId: '1'
  },
  {
    id: '2',
    status: 'pending',
    timestamp: new Date().toISOString(),
    duration: '00:00:00',
    agentId: null
  }
];

// Mock Call Types
export const mockCallTypes: CallType[] = [
  {
    id: 'TYPE-001',
    name: 'Outbound Sales',
    description: 'Sales calls to potential customers',
    scriptTemplate: 'Hi, I\'m calling about...'
  },
  {
    id: 'TYPE-002',
    name: 'Customer Support',
    description: 'Support calls from existing customers',
    scriptTemplate: 'Thank you for contacting us...'
  },
  {
    id: 'TYPE-003',
    name: 'Technical Support',
    description: 'Technical assistance calls',
    scriptTemplate: 'I understand you\'re having an issue with...'
  }
];

// Mock Campaign Settings
export const mockCampaignSettings = {
  autoDialDelay: 30, // seconds
  maxAttempts: 3,
  retryDelay: 3600, // 1 hour in seconds
  businessHours: {
    start: '09:00',
    end: '17:00',
    timezone: 'America/Chicago'
  },
  maxConcurrentCalls: 5,
  transferRules: [
    {
      condition: 'technical_issue',
      transferTo: '3' // Agent ID for technical support
    },
    {
      condition: 'escalation',
      transferTo: '2' // Agent ID for supervisor
    }
  ]
};

// Mock Call History
export const mockCallHistory = [
  {
    id: 'HIST-001',
    callId: '1',
    timestamp: new Date().toISOString(),
    action: 'call_started',
    agentId: '1',
    details: 'Call initiated with customer'
  },
  {
    id: 'HIST-002',
    callId: '1',
    timestamp: new Date().toISOString(),
    action: 'transfer_initiated',
    agentId: '1',
    details: 'Transferred to technical support'
  }
];

// Mock Performance Metrics
export const mockPerformanceMetrics = {
  daily: {
    totalCalls: 45,
    successfulCalls: 32,
    averageDuration: '00:04:23',
    transferRate: 0.15
  },
  weekly: {
    totalCalls: 245,
    successfulCalls: 178,
    averageDuration: '00:04:15',
    transferRate: 0.12
  },
  monthly: {
    totalCalls: 980,
    successfulCalls: 745,
    averageDuration: '00:04:30',
    transferRate: 0.10
  }
}; 