import Link from "next/link";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  href?: string;
  animated?: boolean;
}

export default function Logo({ 
  size = 'md', 
  showText = true, 
  className = '', 
  href,
  animated = false 
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const logoElement = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary-400 to-accent-500 rounded-lg flex items-center justify-center ${animated ? 'animate-pulse' : ''}`}>
        <svg
          className={`${iconSizeClasses[size]} text-white`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
          <path d="M4 8h16v10H4V8z" fillOpacity="0.3"/>
          <rect x="6" y="10" width="3" height="1" rx="0.5"/>
          <rect x="6" y="12" width="4" height="1" rx="0.5"/>
          <rect x="6" y="14" width="2" height="1" rx="0.5"/>
        </svg>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-semibold text-white`}>
          Fast App 2
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-80 transition-opacity duration-200">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
}