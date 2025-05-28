// Ultra-minimal monogram style
export default function ModernLogo5({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      
      {/* Modern letterform A with C integration */}
      <path
        d="M8 24V20C8 12 12 8 16 8C20 8 24 12 24 20V24"
        fill="none"
        stroke="url(#logo-gradient-5)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Connecting bar */}
      <line
        x1="12"
        y1="18"
        x2="20"
        y2="18"
        stroke="url(#logo-gradient-5)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Small accent dot */}
      <circle
        cx="26"
        cy="10"
        r="2"
        fill="url(#logo-gradient-5)"
      />
    </svg>
  );
}