import { GroupLogo } from './components/GroupLogo';
import { JoinWhatsAppButton } from './components/JoinWhatsAppButton';
import { PracticalExampleSection } from './components/PracticalExampleSection';
import { WhatsAppPhoneMockup } from './components/WhatsAppPhoneMockup';
import { WHATSAPP_GROUP_INVITE_URL, isWhatsAppInviteConfigured } from './config';

const GROUP_PILLARS = [
  {
    index: '01',
    title: 'Simple explanations',
    description: 'Understand AI concepts through familiar work examples.',
  },
  {
    index: '02',
    title: 'Short demos you can follow',
    description: 'Try one practical step while you watch.',
  },
  {
    index: '03',
    title: 'Deeper lessons and guides',
    description: 'Save useful prompts and documents for when you need them.',
  },
];

export default function App() {
  const inviteConfigured = isWhatsAppInviteConfigured(WHATSAPP_GROUP_INVITE_URL);

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F5] text-[#141923] flex flex-col">
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#141923] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      {/* Top Navigation Bar (3-zone contract) */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E5E2DC]">
        <div className="mx-auto max-w-[1160px] h-16 px-5 sm:px-8 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Single-line brand wordmark */}
          <a
            href="#top"
            className="text-[15px] sm:text-[16px] font-bold tracking-tight text-[#141923] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3559E0] rounded-xs"
          >
            Uday Kiran | Practical AI
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A5262]"
          >
            <a
              href="#inside-the-group"
              className="hover:text-[#141923] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3559E0] rounded-xs"
            >
              Inside the group
            </a>
            <a
              href="#practical-example"
              className="hover:text-[#141923] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3559E0] rounded-xs"
            >
              Practical example
            </a>
            <a
              href="#meet-uday"
              className="hover:text-[#141923] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3559E0] rounded-xs"
            >
              Meet Uday
            </a>
            <a
              href="#join-group"
              className="hover:text-[#141923] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3559E0] rounded-xs"
            >
              Join
            </a>
          </nav>

          {/* Zone 3: Compact Join CTA */}
          <div className="shrink-0">
            <JoinWhatsAppButton
              variant="compact"
              label="Join the WhatsApp Group"
              className="hidden sm:inline-flex"
            />
            <JoinWhatsAppButton
              variant="compact"
              label="Join Group"
              className="inline-flex sm:hidden"
            />
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {/* Hero Section with Interactive WhatsApp Mobile Phone Preview */}
        <section aria-labelledby="hero-heading" className="pt-10 pb-18 sm:pt-16 sm:pb-24">
          <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Core Message & Primary CTA (visible early on mobile) */}
              <div className="lg:col-span-7">
                {/* Quiet group identity metadata line (unboxed, zero pills) */}
                <div className="flex items-center gap-3">
                  <GroupLogo
                    sizeClass="h-10 w-10"
                    alt="Practical AI Telugu VIP logo"
                    className="ring-1 ring-black/10"
                  />
                  <div className="text-sm text-[#4A5262] flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold text-[#141923]">Practical AI Telugu VIP</span>
                    <span aria-hidden="true">·</span>
                    <span>WhatsApp learning group</span>
                  </div>
                </div>

                <h1
                  id="hero-heading"
                  className="mt-6 text-[clamp(2.25rem,4.4vw,3.5rem)] font-bold tracking-tight text-[#141923] leading-[1.1] text-balance"
                >
                  Learn AI in Telugu. Use it in your everyday work.
                </h1>

                <p className="mt-5 max-w-[58ch] text-[17px] sm:text-[18px] leading-[1.6] text-[#4A5262]">
                  Join <strong className="font-semibold text-[#141923]">Practical AI Telugu VIP</strong>, a
                  WhatsApp group for working professionals who want to understand AI and try it on
                  real tasks, one step at a time.
                </p>

                {/* Natural Telugu line in soft blue-to-lavender surface */}
                <div className="mt-6 max-w-[54ch] rounded-2xl soft-accent-surface border border-[#DCE3FA] px-5 py-4">
                  <p lang="te" className="font-telugu text-[16.5px] sm:text-[18px] font-semibold leading-[1.6] text-[#1C2747]">
                    AIని సింపుల్‌గా నేర్చుకుందాం. మన పనిలో ఎలా వాడాలో కలిసి ట్రై చేద్దాం.
                  </p>
                </div>

                {/* Primary CTA & Helper Text */}
                <div className="mt-8 flex flex-col items-start gap-2.5">
                  <JoinWhatsAppButton variant="primary" />
                  {inviteConfigured && (
                    <p className="text-sm text-[#5A6273]">
                      Opens the group invite in WhatsApp.
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column: Mobile Phone with WhatsApp Group Icon & Messages */}
              <div className="lg:col-span-5">
                <WhatsAppPhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What you'll find in the group */}
        <section
          id="inside-the-group"
          aria-labelledby="inside-group-heading"
          className="py-20 sm:py-24 border-t border-[#E5E2DC] bg-[#F5F3EE]/60"
        >
          <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-[#3559E0]">Inside the group</p>
              <h2
                id="inside-group-heading"
                className="mt-2.5 text-[28px] sm:text-[34px] font-bold tracking-tight text-[#141923] leading-[1.2] text-balance"
              >
                What you’ll find in the group
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {GROUP_PILLARS.map((pillar) => (
                <article
                  key={pillar.index}
                  className="rounded-2xl bg-white border border-[#E5E2DC] p-7 flex flex-col justify-between transition-colors duration-150 hover:border-[#C7D2F5]"
                >
                  <div>
                    <span className="font-mono text-sm font-medium text-[#3559E0] tabular-nums">
                      {pillar.index}.
                    </span>
                    <h3 className="mt-4 text-[19px] font-bold tracking-tight text-[#141923] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[15.5px] leading-[1.65] text-[#4A5262]">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Try a practical example */}
        <PracticalExampleSection />

        {/* Section 4: Meet Uday Kiran (text-only layout per brief) */}
        <section
          id="meet-uday"
          aria-labelledby="meet-uday-heading"
          className="py-20 sm:py-24 border-t border-[#E5E2DC] bg-[#F5F3EE]/60"
        >
          <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <p className="text-sm font-medium text-[#3559E0]">Your host</p>
                <h2
                  id="meet-uday-heading"
                  className="mt-2.5 text-[28px] sm:text-[34px] font-bold tracking-tight text-[#141923] leading-[1.2]"
                >
                  Meet Uday Kiran
                </h2>
                <p className="mt-3 text-sm text-[#5A6273]">
                  Uday Kiran · Practical AI
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="rounded-2xl bg-white border border-[#E5E2DC] p-7 sm:p-10">
                  <blockquote className="text-[19px] sm:text-[22px] font-medium leading-[1.6] text-[#141923] tracking-[-0.01em]">
                    “I’ve spent the last three years learning AI and putting what I learn into
                    practice. I started this group to share what I’ve tried, explain the parts that
                    can feel complicated, and give you a simple way to try them yourself.”
                  </blockquote>
                  <p className="mt-6 text-sm text-[#5A6273]">
                    Uday Kiran <span aria-hidden="true">·</span> Host, Practical AI Telugu VIP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Final Invitation */}
        <section
          id="join-group"
          aria-labelledby="final-invitation-heading"
          className="py-20 sm:py-24 border-t border-[#E5E2DC]"
        >
          <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
            <div className="rounded-3xl soft-accent-surface border border-[#D6DFFA] px-6 py-12 sm:px-12 sm:py-16">
              <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
                <GroupLogo
                  sizeClass="h-16 w-16"
                  alt="Practical AI Telugu VIP WhatsApp group icon"
                  className="ring-2 ring-white shadow-sm"
                />

                <h2
                  id="final-invitation-heading"
                  className="mt-6 text-[28px] sm:text-[36px] font-bold tracking-tight text-[#141923] leading-[1.18] text-balance"
                >
                  Start with one task you already do at work.
                </h2>

                <p className="mt-4 max-w-[50ch] text-[16.5px] sm:text-[17.5px] leading-[1.6] text-[#3A4354]">
                  Bring your curiosity. I’ll share examples and resources you can try at your own
                  pace.
                </p>

                <div className="mt-8 flex flex-col items-center gap-2.5">
                  <JoinWhatsAppButton variant="primary" />
                  {inviteConfigured && (
                    <p className="text-sm text-[#4A5262]">
                      Opens the group invite in WhatsApp.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-[#E5E2DC] bg-[#FAF8F5]">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[#141923]">
            Uday Kiran | Practical AI
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#4A5262]">
            <a
              href="#inside-the-group"
              className="hover:text-[#141923] hover:underline underline-offset-4 transition-colors"
            >
              Inside the group
            </a>
            <a
              href="#practical-example"
              className="hover:text-[#141923] hover:underline underline-offset-4 transition-colors"
            >
              Practical example
            </a>
            <a
              href="#meet-uday"
              className="hover:text-[#141923] hover:underline underline-offset-4 transition-colors"
            >
              Meet Uday
            </a>
            {inviteConfigured && (
              <a
                href={WHATSAPP_GROUP_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#114B36] hover:underline underline-offset-4 transition-colors"
              >
                Join the WhatsApp Group
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
