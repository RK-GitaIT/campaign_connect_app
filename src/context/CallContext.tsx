'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface Call {
  id: string;
  status: 'connecting' | 'connected' | 'disconnected';
  duration: number;
  caller?: string;
  isMuted: boolean;
}

interface CallContextType {
  activeCall: Call | null;
  startCall: (caller?: string) => void;
  endCall: () => void;
  toggleMute: () => void;
}

const CallContext = createContext<CallContextType | undefined>(undefined)

export function CallProvider({ children }: { children: ReactNode }) {
  const [activeCall, setActiveCall] = useState<Call | null>(null)

  const startCall = (caller?: string) => {
    setActiveCall({
      id: Math.random().toString(36).substr(2, 9),
      status: 'connecting',
      duration: 0,
      caller,
      isMuted: false,
    })
  }

  const endCall = () => {
    setActiveCall(null)
  }

  const toggleMute = () => {
    if (activeCall) {
      setActiveCall({
        ...activeCall,
        isMuted: !activeCall.isMuted,
      })
    }
  }

  return (
    <CallContext.Provider
      value={{
        activeCall,
        startCall,
        endCall,
        toggleMute,
      }}
    >
      {children}
    </CallContext.Provider>
  )
}

export function useCall() {
  const context = useContext(CallContext)
  if (context === undefined) {
    throw new Error('useCall must be used within a CallProvider')
  }
  return context
} 