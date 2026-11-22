import { useState } from 'react';
import { GROUP_LOGO_SRC } from '../config';

interface GroupLogoProps {
  sizeClass?: string;
  alt?: string;
  className?: string;
}

export function GroupLogo({
  sizeClass = 'h-11 w-11',
  alt = 'Practical AI Telugu VIP WhatsApp group icon',
  className = '',
}: GroupLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${sizeClass} ${className} flex shrink-0 items-center justify-center rounded-full bg-[#070E4B] text-white font-semibold tracking-tight select-none`}
      >
        <span className="text-xs">AI</span>
      </div>
    );
  }

  return (
    <img
      src={GROUP_LOGO_SRC}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`${sizeClass} ${className} shrink-0 rounded-full object-cover bg-[#070E4B]`}
    />
  );
}
