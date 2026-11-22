import { useState } from 'react';
import { Check, CheckCheck, ChevronLeft, Copy, FileText, Play } from 'lucide-react';
import { GroupLogo } from './GroupLogo';
import { JoinWhatsAppButton } from './JoinWhatsAppButton';

type PreviewFilter = 'all' | 'explanation' | 'demo' | 'guide';

const SAMPLE_PROMPT_SNIPPET =
  'Summarize these meeting notes into Decisions, Action items, Owner, and Due date. Mark any missing detail as "To confirm."';

export function WhatsAppPhoneMockup() {
  const [activeFilter, setActiveFilter] = useState<PreviewFilter>('all');
  const [demoExpanded, setDemoExpanded] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopySnippet = async () => {
    try {
      await navigator.clipboard.writeText(SAMPLE_PROMPT_SNIPPET);
      setCopiedPrompt(true);
      window.setTimeout(() => setCopiedPrompt(false), 2000);
    } catch {
      setCopiedPrompt(false);
    }
  };

  const showExplanation = activeFilter === 'all' || activeFilter === 'explanation';
  const showDemo = activeFilter === 'all' || activeFilter === 'demo';
  const showGuide = activeFilter === 'all' || activeFilter === 'guide';

  const tabs: { id: PreviewFilter; label: string }[] = [
    { id: 'all', label: 'All posts' },
    { id: 'explanation', label: 'Explanations' },
    { id: 'demo', label: 'Short demo' },
    { id: 'guide', label: 'Saved guide' },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Soft blue-to-lavender ambient frame behind phone */}
      <div className="relative w-full max-w-[388px] flex flex-col items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-[48px] soft-accent-surface blur-2xl opacity-85"
        />

        {/* Realistic Smartphone Frame */}
        <div className="relative w-full max-w-[356px] rounded-[42px] bg-[#161B26] p-[10px] shadow-[0_24px_60px_-20px_rgba(20,25,35,0.28)] ring-1 ring-black/15">
          {/* Subtle hardware side buttons */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -left-[3px] top-24 h-9 w-[3px] rounded-l bg-[#262D3D]"
          />
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -left-[3px] top-36 h-12 w-[3px] rounded-l bg-[#262D3D]"
          />
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -right-[3px] top-28 h-14 w-[3px] rounded-r bg-[#262D3D]"
          />

          {/* Inner Phone Screen (nested radius: 42 - 10 = 32px) */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#EFEAE2] flex flex-col">
            {/* Top Status Bar & Speaker Island */}
            <div className="bg-[#0B4A35] px-5 pt-2.5 pb-1.5 text-white flex items-center justify-between text-[11px] font-medium tabular-nums">
              <span>9:41</span>
              <div
                aria-hidden="true"
                className="h-4 w-20 rounded-full bg-[#06281D]/90"
              />
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="inline-block h-2 w-2 rounded-xs bg-white/85" />
                <span className="inline-block h-2.5 w-4 rounded-[3px] border border-white/80 p-[1px]">
                  <span className="block h-full w-full rounded-[1px] bg-white" />
                </span>
              </div>
            </div>

            {/* WhatsApp Group Header with Attached Group Icon */}
            <div className="bg-[#0B4A35] px-3 pb-3 pt-1 text-white flex items-center gap-2.5 border-b border-black/10">
              <ChevronLeft className="h-5 w-5 shrink-0 text-white/85" aria-hidden="true" />
              <GroupLogo
                sizeClass="h-10 w-10"
                className="ring-1 ring-white/25"
                alt="Practical AI Telugu VIP group icon inside WhatsApp header"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold leading-tight text-white">
                  Practical AI Telugu VIP
                </p>
                <p className="truncate text-[11px] text-[#CBE7DC] leading-tight mt-0.5">
                  Uday Kiran · Practical AI
                </p>
              </div>
            </div>

            {/* Chat Messages Stream */}
            <div className="whatsapp-wallpaper px-3 py-3.5 space-y-2.5 min-h-[395px] max-h-[430px] overflow-y-auto">
              {/* Date separator */}
              <div className="flex justify-center">
                <span className="text-[11px] font-medium text-[#54656F] bg-white/85 px-2.5 py-0.5 rounded-md shadow-[0_1px_0.5px_rgba(0,0,0,0.08)]">
                  Inside the group
                </span>
              </div>

              {/* Message 1: Simple Explanation */}
              {showExplanation && (
                <article className="max-w-[94%] rounded-xl rounded-tl-xs bg-white px-3 py-2.5 shadow-[0_1px_1px_rgba(11,20,26,0.1)] text-left">
                  <p className="text-[11px] font-semibold text-[#114B36]">Uday Kiran</p>
                  <p className="mt-1 text-[12.5px] leading-[1.45] text-[#141923]">
                    AI prompt rayadam complicated kadu — think of it like briefing a new teammate:{' '}
                    <span className="font-medium">context + exact task + output format.</span>
                  </p>
                  <p className="mt-1.5 font-telugu text-[12px] leading-[1.5] text-[#2F3A4B]">
                    మన రోజువారీ పనిలో ఒక చిన్న task తీసుకుని step by step try చేద్దాం.
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#667781] tabular-nums">
                    <span>9:12 AM</span>
                    <CheckCheck className="h-3.5 w-3.5 text-[#3559E0]" aria-hidden="true" />
                  </div>
                </article>
              )}

              {/* Message 2: Short Demo Card */}
              {showDemo && (
                <article className="max-w-[94%] rounded-xl rounded-tl-xs bg-white px-3 py-2.5 shadow-[0_1px_1px_rgba(11,20,26,0.1)] text-left">
                  <p className="text-[11px] font-semibold text-[#114B36]">Uday Kiran</p>
                  <div className="mt-1.5 rounded-lg bg-[#F4F6FC] border border-[#DFE6FA] p-2.5">
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setDemoExpanded((prev) => !prev)}
                        aria-expanded={demoExpanded}
                        aria-label={demoExpanded ? 'Hide demo walkthrough steps' : 'Preview demo walkthrough steps'}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3559E0] text-white hover:bg-[#2746BA] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3559E0]"
                      >
                        <Play className="h-4 w-4 ml-0.5 fill-current" aria-hidden="true" />
                      </button>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-semibold text-[#141923] leading-snug">
                          Short demo: Rough notes to follow-up
                        </p>
                        <p className="text-[11px] text-[#546075]">
                          2 min walkthrough · Watch &amp; try one step
                        </p>
                      </div>
                    </div>

                    {demoExpanded && (
                      <ol className="mt-2.5 pt-2 border-t border-[#DFE6FA] space-y-1 text-[11.5px] text-[#2F3A4B] list-decimal list-inside">
                        <li>Paste 4–5 rough bullet notes from your call.</li>
                        <li>Ask for decisions, owners, and due dates.</li>
                        <li>Verify any “To confirm” gaps before sending.</li>
                      </ol>
                    )}

                    <button
                      type="button"
                      onClick={() => setDemoExpanded((prev) => !prev)}
                      className="mt-2 text-[11px] font-medium text-[#3559E0] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3559E0]"
                    >
                      {demoExpanded ? 'Hide steps' : 'Preview 3 steps'}
                    </button>
                  </div>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#667781] tabular-nums">
                    <span>9:15 AM</span>
                    <CheckCheck className="h-3.5 w-3.5 text-[#3559E0]" aria-hidden="true" />
                  </div>
                </article>
              )}

              {/* Message 3: Deeper Lesson / Saved Prompt Guide */}
              {showGuide && (
                <article className="max-w-[94%] rounded-xl rounded-tl-xs bg-white px-3 py-2.5 shadow-[0_1px_1px_rgba(11,20,26,0.1)] text-left">
                  <p className="text-[11px] font-semibold text-[#114B36]">Uday Kiran</p>
                  <div className="mt-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5E2DC] p-2.5">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 shrink-0 text-[#4A5262] mt-0.5" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-semibold text-[#141923]">
                          Meeting Follow-Up Prompt Guide
                        </p>
                        <p className="mt-1 font-mono text-[10.5px] leading-[1.45] text-[#4A5262]">
                          “{SAMPLE_PROMPT_SNIPPET}”
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between pt-2 border-t border-[#EAE7E1]">
                      <span className="text-[10.5px] text-[#687082]">Save for your next call</span>
                      <button
                        type="button"
                        onClick={handleCopySnippet}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#114B36] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114B36]"
                      >
                        {copiedPrompt ? (
                          <>
                            <Check className="h-3 w-3" aria-hidden="true" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" aria-hidden="true" />
                            <span>Copy prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#667781] tabular-nums">
                    <span>9:18 AM</span>
                    <CheckCheck className="h-3.5 w-3.5 text-[#3559E0]" aria-hidden="true" />
                  </div>
                </article>
              )}
            </div>

            {/* Bottom WhatsApp Invite Action Bar inside Phone */}
            <div className="bg-white border-t border-[#E5E2DC] px-3 py-3">
              <JoinWhatsAppButton variant="phone" label="Join the WhatsApp Group" />
            </div>
          </div>
        </div>

        {/* Interactive Message Preview Filter Controls */}
        <div
          role="tablist"
          aria-label="Filter preview messages shown inside the WhatsApp phone"
          className="relative mt-5 inline-flex flex-wrap items-center justify-center gap-1 rounded-xl bg-[#EFEDE8] p-1 border border-[#E5E2DC]"
        >
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3559E0] ${
                  isActive
                    ? 'bg-white text-[#141923] shadow-xs'
                    : 'text-[#4A5262] hover:text-[#141923]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
