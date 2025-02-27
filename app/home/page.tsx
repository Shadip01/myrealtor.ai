export default function HomePage() {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to FundVibe</h1>
        <p className="text-gray-600 mb-8">You've successfully logged in. Start managing your finances!</p>
        <a
          href="/"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          Back to Login
        </a>
      </div>
    </div>
  )
}

