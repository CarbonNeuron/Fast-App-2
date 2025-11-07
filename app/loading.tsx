export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 min-h-[calc(100vh-8rem)]">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-xl">FA</span>
            </div>
            {/* Spinning Ring */}
            <div className="absolute -inset-2 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Loading...
          </h2>
          <p className="text-slate-300 max-w-md mx-auto">
            Please wait while we prepare your experience
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}