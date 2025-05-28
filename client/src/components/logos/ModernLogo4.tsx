// Clean hexagonal logo with minimal design
export default function ModernLogo4({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      
      {/* Hexagonal shape representing connectivity */}
      <path
        d="M16 4L24 9V19L16 24L8 19V9L16 4Z"
        fill="url(#logo-gradient-4)"
      />
      
      {/* Inner A letter */}
      <path
        d="M16 10L12 18h1.5l0.75-1.5h3.5l0.75 1.5H20L16 10z"
        fill="white"
      />
      
      {/* Crossbar of A */}
      <rect
        x="13.5"
        y="15"
        width="5"
        height="1"
        fill="url(#logo-gradient-4)"
      />
    </svg>
  );
}