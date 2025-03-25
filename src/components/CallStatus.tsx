interface CallStatusProps {
  status: 'connecting' | 'connected' | 'disconnected';
  duration?: number;
  caller?: string;
}

export function CallStatus({ status, duration, caller }: CallStatusProps) {
  return (
    <div className="text-center space-y-2">
      <div className="text-xl font-semibold">
        {status === 'connecting' && 'Connecting...'}
        {status === 'connected' && 'Connected'}
        {status === 'disconnected' && 'Call Ended'}
      </div>
      {status === 'connected' && (
        <>
          <div className="text-gray-600">
            {caller ? `Call with ${caller}` : 'Active Call'}
          </div>
          {duration && (
            <div className="text-sm text-gray-500">
              Duration: {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
            </div>
          )}
        </>
      )}
    </div>
  )
} 