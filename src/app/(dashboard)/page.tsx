'use client'

import { useState, useEffect } from 'react'
import { CallInterface } from '@/components/CallInterface'
import { CallDetails } from '@/components/CallDetails'
import { OngoingCall } from '@/components/OngoingCall'
import { telnyxService } from '@/services/telnyxService'

export default function DashboardPage() {
  const [callDuration, setCallDuration] = useState(0)
  const [callStatus, setCallStatus] = useState<string>('')
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    telnyxService.setCallStatusCallback(setCallStatus)
    telnyxService.setCallDurationCallback(setCallDuration)
  }, [])

  const handleStartNextDial = async () => {
    try {
      await telnyxService.makeCall({
        destinationNumber: '+1234567890', // Replace with actual number
        callerNumber: '+0987654321', // Replace with your Telnyx number
      })
    } catch (error) {
      console.error('Error starting call:', error)
    }
  }

  const handleMute = async () => {
    try {
      const isMuted = await telnyxService.toggleMute()
      setIsMuted(isMuted)
    } catch (error) {
      console.error('Error toggling mute:', error)
    }
  }

  const handleHangup = async () => {
    try {
      await telnyxService.hangupCall()
    } catch (error) {
      console.error('Error hanging up:', error)
    }
  }

  return (
    <div className="space-y-6">
      <CallInterface
        agentName="John Doe"
        agentRole="Agent"
        onManualMode={() => {}}
        onStartNextDial={handleStartNextDial}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <CallDetails
            attempt={1}
            companyName="Jiffy Lube Q2 2025"
            address={{
              street: "212 West Plano St",
              city: "Plano",
              state: "TX",
              zip: "75063"
            }}
            vehicleInfo={{
              year: "2027",
              make: "Audi",
              model: "Q5",
              type: "SUV",
              target: "Dealer",
              service: "Battery Replacement"
            }}
            onAddDisposition={() => {}}
            onAddNotes={() => {}}
          />
        </div>

        <div className="col-span-3">
          {callStatus === 'connected' && (
            <OngoingCall
              duration={callDuration}
              onMute={handleMute}
              onHangup={handleHangup}
              onPause={() => {}}
              onKeypad={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  )
} 