// Abstract interconnected nodes representing global network
export default function ModernLogo3({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Network nodes */}
      <circle cx="8" cy="8" r="3" fill="url(#logo-gradient-3)" />
      <circle cx="24" cy="8" r="3" fill="url(#logo-gradient-3)" />
      <circle cx="16" cy="20" r="3" fill="url(#logo-gradient-3)" />
      <circle cx="8" cy="24" r="2" fill="url(#logo-gradient-3)" />
      <circle cx="24" cy="24" r="2" fill="url(#logo-gradient-3)" />
      
      {/* Connecting lines */}
      <line x1="8" y1="8" x2="24" y2="8" stroke="url(#logo-gradient-3)" strokeWidth="2" opacity="0.6" />
      <line x1="8" y1="8" x2="16" y2="20" stroke="url(#logo-gradient-3)" strokeWidth="2" opacity="0.6" />
      <line x1="24" y1="8" x2="16" y2="20" stroke="url(#logo-gradient-3)" strokeWidth="2" opacity="0.6" />
      <line x1="8" y1="24" x2="16" y2="20" stroke="url(#logo-gradient-3)" strokeWidth="1.5" opacity="0.4" />
      <line x1="24" y1="24" x2="16" y2="20" stroke="url(#logo-gradient-3)" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}