"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API request for password reset
    setTimeout(() => {
      setMessage(`Password reset link has been sent to ${email}.`)
      setLoading(false)
    }, 1500)
  }

  const router = useRouter();
  const handelLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/login"); 
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Forgot Password</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {message && (
            <div className="text-sm text-green-500 mt-2">
              {message}
            </div>
          )}

          <div className="flex justify-between items-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>

          <div className="text-center text-sm mt-4">
            <Link href="/login" onClick={handelLogin} className="font-medium text-purple-600 hover:text-purple-500">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}