// Optimized network nodes logo for favicon and general use
export default function ModernLogo3({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="altchain-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      
      {/* Main network nodes - optimized for small sizes */}
      <circle cx="8" cy="8" r="3.5" fill="url(#altchain-logo-gradient)" />
      <circle cx="24" cy="8" r="3.5" fill="url(#altchain-logo-gradient)" />
      <circle cx="16" cy="20" r="3.5" fill="url(#altchain-logo-gradient)" />
      <circle cx="8" cy="24" r="2.5" fill="url(#altchain-logo-gradient)" />
      <circle cx="24" cy="24" r="2.5" fill="url(#altchain-logo-gradient)" />
      
      {/* Connecting lines - thicker for favicon clarity */}
      <line x1="8" y1="8" x2="24" y2="8" stroke="url(#altchain-logo-gradient)" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
      <line x1="8" y1="8" x2="16" y2="20" stroke="url(#altchain-logo-gradient)" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
      <line x1="24" y1="8" x2="16" y2="20" stroke="url(#altchain-logo-gradient)" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
      <line x1="8" y1="24" x2="16" y2="20" stroke="url(#altchain-logo-gradient)" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <line x1="24" y1="24" x2="16" y2="20" stroke="url(#altchain-logo-gradient)" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}