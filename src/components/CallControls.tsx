'use client'

interface CallControlsProps {
  isMuted: boolean;
  onMuteToggle: () => void;
  onHangup: () => void;
}

export function CallControls({ isMuted, onMuteToggle, onHangup }: CallControlsProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={onMuteToggle}
        className={`p-4 rounded-full ${
          isMuted ? 'bg-red-500' : 'bg-green-500'
        } text-white hover:opacity-90 transition-opacity`}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      <button
        onClick={onHangup}
        className="p-4 rounded-full bg-red-500 text-white hover:opacity-90 transition-opacity"
      >
        Hang Up
      </button>
    </div>
  )
} 