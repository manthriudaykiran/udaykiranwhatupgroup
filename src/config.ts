/**
 * Single editable WhatsApp group invite link used by every CTA button on the page.
 * Replace with a valid https://chat.whatsapp.com/... invite URL to enable all join links.
 */
export const WHATSAPP_GROUP_INVITE_URL =
  'https://chat.whatsapp.com/LfWyV6JpYnkKimIKbufnSC?mode=gi_t';

export const GROUP_LOGO_SRC =
  '/assets/aistudio/Practical_AI_Telugu_VIP_logo_d4cad9c9.png';

export function isWhatsAppInviteConfigured(url: string = WHATSAPP_GROUP_INVITE_URL): boolean {
  const trimmed = url.trim();
  if (!trimmed || trimmed.includes('{{WHATSAPP_GROUP_INVITE_URL}}')) {
    return false;
  }
  return trimmed.startsWith('https://chat.whatsapp.com/');
}
