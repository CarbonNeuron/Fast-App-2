import Logo from "./components/Logo";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 h-[calc(100vh-4rem)]">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <Logo size="xl" showText={false} animated={true} />
            {/* Spinning Ring */}
            <div className="absolute -inset-4 border-2 border-primary-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Loading...
          </h2>
          <p className="text-secondary-300 max-w-md mx-auto">
            Please wait while we prepare your experience
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}