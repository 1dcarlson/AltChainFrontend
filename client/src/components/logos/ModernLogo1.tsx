// Modern minimalist logo with interconnected links
export default function ModernLogo1({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern chain links in gradient */}
      <defs>
        <linearGradient id="logo-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      
      {/* First link */}
      <rect
        x="6"
        y="10"
        width="8"
        height="12"
        rx="4"
        fill="none"
        stroke="url(#logo-gradient-1)"
        strokeWidth="2.5"
      />
      
      {/* Second link */}
      <rect
        x="18"
        y="10"
        width="8"
        height="12"
        rx="4"
        fill="none"
        stroke="url(#logo-gradient-1)"
        strokeWidth="2.5"
      />
      
      {/* Third link - smaller, representing innovation */}
      <circle
        cx="16"
        cy="8"
        r="3"
        fill="url(#logo-gradient-1)"
      />
    </svg>
  );
}