import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_GROUP_INVITE_URL, isWhatsAppInviteConfigured } from '../config';

interface JoinWhatsAppButtonProps {
  variant?: 'primary' | 'compact' | 'phone';
  className?: string;
  label?: string;
}

export function JoinWhatsAppButton({
  variant = 'primary',
  className = '',
  label = 'Join the WhatsApp Group',
}: JoinWhatsAppButtonProps) {
  const isConfigured = isWhatsAppInviteConfigured(WHATSAPP_GROUP_INVITE_URL);

  const sizeStyles =
    variant === 'compact'
      ? 'min-h-[40px] px-4 py-2 text-sm gap-2 rounded-lg'
      : variant === 'phone'
        ? 'min-h-[44px] w-full px-4 py-2.5 text-sm gap-2 rounded-xl justify-center'
        : 'min-h-[50px] px-6 py-3 text-[15px] gap-2.5 rounded-xl';

  if (!isConfigured) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`inline-flex items-center whitespace-nowrap shrink-0 font-semibold bg-[#D6D3CD] text-[#5B6270] cursor-not-allowed ${sizeStyles} ${className}`}
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Group invite coming soon</span>
      </button>
    );
  }

  return (
    <a
      href={WHATSAPP_GROUP_INVITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center whitespace-nowrap shrink-0 font-semibold text-white bg-[#114B36] hover:bg-[#0B3928] active:bg-[#082C1F] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114B36] ${sizeStyles} ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 opacity-85 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
