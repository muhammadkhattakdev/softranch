export default function Loading() {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          {/* Animated Logo/Spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-primary-color rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-primary-light rounded-full animate-spin animation-delay-150"></div>
          </div>
          
          {/* Loading Text */}
          <div className="text-center">
            <h2 className="text-white text-xl font-bold mb-2">SoftRanch</h2>
            <p className="text-gray-400 text-sm">Loading amazing content...</p>
          </div>
          
          {/* Loading Bar */}
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-color to-primary-light rounded-full animate-loading-bar"></div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes loading-bar {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out infinite;
          }
          
          .animation-delay-150 {
            animation-delay: 150ms;
          }
        `}</style>
      </div>
    )
  }