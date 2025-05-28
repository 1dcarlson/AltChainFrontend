// Geometric A-shaped logo with modern styling
export default function ModernLogo2({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Modern A shape with chain elements */}
      <path
        d="M16 4L8 24h4l1.5-4h5l1.5 4h4L16 4z"
        fill="url(#logo-gradient-2)"
      />
      
      {/* Horizontal line in A */}
      <rect
        x="12"
        y="16"
        width="8"
        height="2"
        fill="white"
        rx="1"
      />
      
      {/* Small chain link accent */}
      <circle
        cx="24"
        cy="8"
        r="2"
        fill="none"
        stroke="url(#logo-gradient-2)"
        strokeWidth="1.5"
      />
    </svg>
  );
}