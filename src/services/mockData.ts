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
      company: 'Audi USA',
      address: {
        street: '2200 Ferdinand Porsche Dr',
        city: 'Herndon',
        state: 'VA',
        zipCode: '20171',
      },
    },
    vehicleInfo: {
      year: '2027',
      make: 'Audi',
      model: 'Q5',
      type: 'SUV',
    },
    serviceInfo: {
      labor: 80,
      parts: 100,
      total: 180,
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
        text: 'Hi, Can you let me know the price for a battery replacement?'
      },
      {
        id: 2,
        text: 'Hi, I was just trying to find out the cost of service.'
      }
    ]
  },
  {
    id: '2',
    attempt: 1,
    customerInfo: {
      company: 'Tesla Service Center',
      address: {
        street: '3500 Deer Creek Rd',
        city: 'Palo Alto',
        state: 'CA',
        zipCode: '94304',
      },
    },
    vehicleInfo: {
      year: '2025',
      make: 'Tesla',
      model: 'Model 3',
      type: 'Sedan',
    },
    serviceInfo: {
      labor: 90,
      parts: 120,
      total: 210,
      notes: '',
    },
    callInfo: {
      duration: '00:00:00',
      status: 'pending',
    },
    target: 'Dealer',
    service: 'Tire Replacement',
    scriptSuggestions: [
      {
        id: 1,
        text: 'Hi, I need to replace my Tesla Model 3 tires.'
      },
      {
        id: 2,
        text: 'Can you provide the cost of tire replacement?'
      }
    ]
  },
  {
    id: '3',
    attempt: 1,
    customerInfo: {
      company: 'BMW Service Center',
      address: {
        street: '500 BMW Plaza',
        city: 'Woodcliff Lake',
        state: 'NJ',
        zipCode: '07677',
      },
    },
    vehicleInfo: {
      year: '2026',
      make: 'BMW',
      model: 'X5',
      type: 'SUV',
    },
    serviceInfo: {
      labor: 100,
      parts: 150,
      total: 250,
      notes: '',
    },
    callInfo: {
      duration: '00:00:00',
      status: 'pending',
    },
    target: 'Dealer',
    service: 'Brake Pad Replacement',
    scriptSuggestions: [
      {
        id: 1,
        text: 'Hi, I need new brake pads for my BMW X5.'
      },
      {
        id: 2,
        text: 'Can you provide a quote for brake pad replacement?'
      }
    ]
  },
  {
    id: '4',
    attempt: 1,
    customerInfo: {
      company: 'Mercedes-Benz Service',
      address: {
        street: '1 Mercedes Dr',
        city: 'Montvale',
        state: 'NJ',
        zipCode: '07645',
      },
    },
    vehicleInfo: {
      year: '2027',
      make: 'Mercedes-Benz',
      model: 'C-Class',
      type: 'Sedan',
    },
    serviceInfo: {
      labor: 110,
      parts: 130,
      total: 240,
      notes: '',
    },
    callInfo: {
      duration: '00:02:45',
      status: 'ongoing',
    },
    target: 'Dealer',
    service: 'Engine Oil Change',
    scriptSuggestions: [
      {
        id: 1,
        text: 'Hi, I need an oil change for my Mercedes C-Class.'
      },
      {
        id: 2,
        text: 'Can you tell me your pricing for an oil change?'
      }
    ]
  },
  {
    id: '5',
    attempt: 1,
    customerInfo: {
      company: 'Lexus Dealership',
      address: {
        street: '123 Lexus Ave',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90001',
      },
    },
    vehicleInfo: {
      year: '2025',
      make: 'Lexus',
      model: 'RX 350',
      type: 'SUV',
    },
    serviceInfo: {
      labor: 85,
      parts: 95,
      total: 180,
      notes: '',
    },
    callInfo: {
      duration: '00:00:00',
      status: 'pending',
    },
    target: 'Dealer',
    service: 'Battery Inspection',
    scriptSuggestions: [
      {
        id: 1,
        text: 'Hi, I need a battery inspection for my Lexus RX 350.'
      },
      {
        id: 2,
        text: 'Can you tell me how much a battery check costs?'
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