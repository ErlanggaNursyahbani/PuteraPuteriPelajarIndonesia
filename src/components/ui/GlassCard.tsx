
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = React.memo(({ children, className }: GlassCardProps) => {
  // Combine base classes with any additional classes passed via props
  const combinedClassName = `
    p-5 md:p-8                         // Padding (slightly larger on medium screens)
    rounded-xl                         // Rounded corners
    border border-white/20             // Translucent white border (20% opacity) - Tailwind v3+ shorthand
    shadow-lg                          // Soft shadow
    backdrop-blur-md                   // Blur effect for background
    bg-[linear-gradient(135deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.5)_70%,rgba(41,171,226,0.2)_100%)] // Custom gradient
    ${className || ''}                 // Add custom classes if provided
  `;

  return (
    <div className={combinedClassName.trim()}>
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;
