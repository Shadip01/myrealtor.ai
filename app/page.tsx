import SignInForm from "@/components/sign-in-form"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-lg mr-2"></div>
              <span className="font-bold text-2xl text-purple-600">FundVibe.</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2">Welcome Back!</h1>
          <p className="text-center text-gray-600 mb-8">Sign in to manage your finances with FundVibe</p>

          <SignInForm />

          <div className="text-center text-sm text-gray-500 mt-8">2024 FundVibe, All rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

