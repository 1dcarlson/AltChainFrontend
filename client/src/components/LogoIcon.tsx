import ModernLogo3 from './logos/ModernLogo3';

export default function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return <ModernLogo3 className={className || "w-7 h-7"} />;
}