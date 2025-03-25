import { Client } from '@telnyx/webrtc'

interface CallOptions {
  destinationNumber: string;
  callerNumber: string;
}

class TelnyxService {
  private client: any;
  private currentCall: any;
  private onCallStatusChange?: (status: string) => void;
  private onCallDurationChange?: (duration: number) => void;

  constructor() {
    this.client = new Client({
      login_token: process.env.NEXT_PUBLIC_TELNYX_LOGIN_TOKEN!,
    })

    this.setupEventListeners()
  }

  private setupEventListeners() {
    this.client.on('telnyx.ready', () => {
      console.log('Telnyx client is ready')
    })

    this.client.on('telnyx.error', (error: any) => {
      console.error('Telnyx error:', error)
    })

    this.client.on('telnyx.notification', (notification: any) => {
      console.log('Telnyx notification:', notification)
    })
  }

  public setCallStatusCallback(callback: (status: string) => void) {
    this.onCallStatusChange = callback
  }

  public setCallDurationCallback(callback: (duration: number) => void) {
    this.onCallDurationChange = callback
  }

  public async makeCall(options: CallOptions) {
    try {
      this.currentCall = await this.client.newCall({
        destinationNumber: options.destinationNumber,
        callerNumber: options.callerNumber,
      })

      this.currentCall.on('state', (state: any) => {
        if (this.onCallStatusChange) {
          this.onCallStatusChange(state.current)
        }
      })

      let duration = 0
      const durationInterval = setInterval(() => {
        if (this.onCallDurationChange) {
          this.onCallDurationChange(duration++)
        }
      }, 1000)

      this.currentCall.on('hangup', () => {
        clearInterval(durationInterval)
        if (this.onCallStatusChange) {
          this.onCallStatusChange('disconnected')
        }
      })

      return this.currentCall
    } catch (error) {
      console.error('Error making call:', error)
      throw error
    }
  }

  public async hangupCall() {
    if (this.currentCall) {
      try {
        await this.currentCall.hangup()
        this.currentCall = null
      } catch (error) {
        console.error('Error hanging up call:', error)
        throw error
      }
    }
  }

  public async toggleMute() {
    if (this.currentCall) {
      try {
        if (this.currentCall.isMuted) {
          await this.currentCall.unmute()
        } else {
          await this.currentCall.mute()
        }
        return this.currentCall.isMuted
      } catch (error) {
        console.error('Error toggling mute:', error)
        throw error
      }
    }
    return false
  }

  public async sendDTMF(digit: string) {
    if (this.currentCall) {
      try {
        await this.currentCall.sendDTMF(digit)
      } catch (error) {
        console.error('Error sending DTMF:', error)
        throw error
      }
    }
  }
}

export const telnyxService = new TelnyxService() 