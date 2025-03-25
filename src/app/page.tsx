import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Campaign Connect
        </h1>
        <p className="text-xl text-gray-600">
          Your platform for efficient campaign management and communication
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <Link 
            href="/dashboard" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link 
            href="/auth/login" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
