import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface ActionRow {
  task: string;
  owner: string;
  dueDate: string;
  ownerMissing?: boolean;
  dueMissing?: boolean;
}

interface ExampleScenario {
  id: 'sprint' | 'client';
  label: string;
  title: string;
  roughNotes: string[];
  decisions: string[];
  actions: ActionRow[];
}

const PROMPT_TEXT = `Read these rough meeting notes and create a clear follow-up summary with:
1. Key decisions
2. Action items with Owner and Due date

If an owner or due date is missing in the notes, write "To confirm" instead of guessing.`;

const SCENARIOS: ExampleScenario[] = [
  {
    id: 'sprint',
    label: 'Team sync notes',
    title: 'Weekly team sync (fictional notes)',
    roughNotes: [
      'Agreed to move the Q3 training deck to Google Slides so everyone can edit.',
      'Kiran will update the onboarding checklist by Thursday 5 PM.',
      'Need someone to share the updated FAQ link with support.',
      'Decided to keep Friday demo calls to 20 mins max.',
      'Priya to send the draft welcome email — date not finalized yet.',
    ],
    decisions: [
      'Move the Q3 training deck to Google Slides for shared editing.',
      'Cap Friday demo calls at 20 minutes.',
    ],
    actions: [
      {
        task: 'Update the onboarding checklist',
        owner: 'Kiran',
        dueDate: 'Thursday, 5:00 PM',
      },
      {
        task: 'Share the updated FAQ link with support',
        owner: 'To confirm',
        dueDate: 'To confirm',
        ownerMissing: true,
        dueMissing: true,
      },
      {
        task: 'Send the draft welcome email',
        owner: 'Priya',
        dueDate: 'To confirm',
        dueMissing: true,
      },
    ],
  },
  {
    id: 'client',
    label: 'Project handoff notes',
    title: 'Project handoff call (fictional notes)',
    roughNotes: [
      'Client approved the Phase 1 homepage copy as written.',
      'Ravi will upload the final report PDF before Tuesday noon.',
      'Need to confirm who owns the monthly metrics sheet going forward.',
      'Next check-in will be on Zoom instead of a long email thread.',
      'Ananya to verify access permissions for the new analyst (no date set).',
    ],
    decisions: [
      'Phase 1 homepage copy is approved as written.',
      'Hold the next check-in over Zoom rather than via email.',
    ],
    actions: [
      {
        task: 'Upload the final report PDF',
        owner: 'Ravi',
        dueDate: 'Tuesday, 12:00 PM',
      },
      {
        task: 'Assign owner for the monthly metrics sheet',
        owner: 'To confirm',
        dueDate: 'To confirm',
        ownerMissing: true,
        dueMissing: true,
      },
      {
        task: 'Verify access permissions for the new analyst',
        owner: 'Ananya',
        dueDate: 'To confirm',
        dueMissing: true,
      },
    ],
  },
];

export function PracticalExampleSection() {
  const [scenarioId, setScenarioId] = useState<'sprint' | 'client'>('sprint');
  const [highlightGaps, setHighlightGaps] = useState(true);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const scenario = SCENARIOS.find((item) => item.id === scenarioId) ?? SCENARIOS[0];

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      setCopiedPrompt(true);
      window.setTimeout(() => setCopiedPrompt(false), 2000);
    } catch {
      setCopiedPrompt(false);
    }
  };

  return (
    <section
      id="practical-example"
      aria-labelledby="practical-example-heading"
      className="py-20 sm:py-24 border-t border-[#E5E2DC]"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        {/* Section Intro */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#3559E0]">Try a practical example</p>
          <h2
            id="practical-example-heading"
            className="mt-2.5 text-[28px] sm:text-[34px] font-bold tracking-tight text-[#141923] leading-[1.2] text-balance"
          >
            Turn rough meeting notes into a clear follow-up
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-[#4A5262]">
            Give AI a few fictional meeting notes and ask it to pull out decisions, action items,
            owners, and due dates. Tell it to mark missing details as “To confirm.” Review the
            output against the notes before you use it.
          </p>
        </div>

        {/* Scenario Switcher & Gap Toggle */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Choose a fictional meeting notes example"
            className="inline-flex items-center gap-1 rounded-xl bg-[#EFEDE8] p-1 border border-[#E5E2DC]"
          >
            {SCENARIOS.map((item) => {
              const active = item.id === scenarioId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setScenarioId(item.id)}
                  className={`min-h-[40px] px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3559E0] ${
                    active
                      ? 'bg-white text-[#141923] shadow-xs'
                      : 'text-[#4A5262] hover:text-[#141923]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setHighlightGaps((prev) => !prev)}
            aria-pressed={highlightGaps}
            className="min-h-[40px] px-3.5 py-2 text-sm font-medium rounded-lg border border-[#DCD8D0] bg-white text-[#141923] hover:bg-[#F5F3EE] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3559E0]"
          >
            {highlightGaps ? 'Highlighting “To confirm” gaps' : 'Highlight “To confirm” gaps'}
          </button>
        </div>

        {/* 2-Column Before / After Practical Workbench */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Step 1: Rough Notes + Prompt */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white border border-[#E5E2DC] p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#EFECE6]">
                <h3 className="text-[16px] font-semibold text-[#141923]">
                  01. Input · {scenario.title}
                </h3>
              </div>

              <ul className="mt-5 space-y-3 text-[15px] leading-[1.6] text-[#3A4150]">
                {scenario.roughNotes.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8D96A8]" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prompt Box */}
            <div className="mt-7 pt-5 border-t border-[#EFECE6]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold text-[#4A5262]">
                  Prompt you can try today
                </p>
                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className="inline-flex min-h-[36px] items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md text-[#114B36] hover:bg-[#EDF5F1] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114B36]"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy prompt</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="mt-2.5 whitespace-pre-wrap rounded-xl bg-[#FAF8F5] border border-[#E8E5DF] p-4 font-mono text-[12.5px] leading-[1.6] text-[#2F3747]">
                {PROMPT_TEXT}
              </pre>
            </div>
          </div>

          {/* Step 2: Structured Output */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white border border-[#E5E2DC] p-6 sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#EFECE6]">
                <h3 className="text-[16px] font-semibold text-[#141923]">
                  02. Clear follow-up draft
                </h3>
                <span className="text-xs text-[#687082]">Ready to review</span>
              </div>

              {/* Decisions */}
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-[#141923]">Decisions</h4>
                <ul className="mt-2.5 space-y-2 text-[15px] leading-[1.6] text-[#3A4150]">
                  {scenario.decisions.map((decision) => (
                    <li key={decision} className="flex items-start gap-2.5">
                      <span className="text-[#114B36] font-semibold" aria-hidden="true">
                        –
                      </span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Items Table */}
              <div className="mt-7">
                <h4 className="text-sm font-semibold text-[#141923]">Action items</h4>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E8E5DF] text-xs font-semibold text-[#687082]">
                        <th className="py-2.5 pr-4">Action item</th>
                        <th className="py-2.5 px-3 whitespace-nowrap">Owner</th>
                        <th className="py-2.5 pl-3 whitespace-nowrap">Due date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0EDE7] text-[14.5px]">
                      {scenario.actions.map((row) => (
                        <tr key={row.task}>
                          <td className="py-3.5 pr-4 text-[#141923] font-medium">
                            {row.task}
                          </td>
                          <td className="py-3.5 px-3 whitespace-nowrap">
                            <span
                              className={
                                row.ownerMissing && highlightGaps
                                  ? 'font-medium text-[#3559E0] bg-[#EEF2FF] px-2 py-0.5 rounded'
                                  : 'text-[#4A5262]'
                              }
                            >
                              {row.owner}
                            </span>
                          </td>
                          <td className="py-3.5 pl-3 whitespace-nowrap tabular-nums">
                            <span
                              className={
                                row.dueMissing && highlightGaps
                                  ? 'font-medium text-[#3559E0] bg-[#EEF2FF] px-2 py-0.5 rounded'
                                  : 'text-[#4A5262]'
                              }
                            >
                              {row.dueDate}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Grounded Review Reminder */}
            <div className="mt-7 pt-4 border-t border-[#EFECE6] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13.5px] text-[#4A5262]">
              <p>
                Review the output against your original notes before you send it to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
