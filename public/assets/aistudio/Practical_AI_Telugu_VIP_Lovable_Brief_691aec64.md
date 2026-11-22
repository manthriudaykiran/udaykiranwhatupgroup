# Practical AI Telugu VIP | Lovable website brief

Build a single-page, mobile-first landing page for **Practical AI Telugu VIP**, a WhatsApp learning group hosted by **Uday Kiran | Practical AI**. The primary goal is to help Telugu-speaking working professionals understand what they’ll learn and join the group in one tap.

## Audience and voice

Write for Telugu-speaking working professionals, primarily ages 25–35, who are curious about AI and want to start applying it at work alongside a busy schedule. Keep the age range as audience context. Use simple English with one natural Telugu line. Keep the copy warm, genuine, and grounded in Uday’s experience.

## Page copy and layout

### Header

Show **Uday Kiran | Practical AI** as the brand. Add a compact **Join the WhatsApp Group** button if it fits comfortably.

### Hero

# Learn AI in Telugu. Use it in your everyday work.

Join **Practical AI Telugu VIP**, a WhatsApp group for working professionals who want to understand AI and try it on real tasks, one step at a time.

**AIని సింపుల్‌గా నేర్చుకుందాం. మన పనిలో ఎలా వాడాలో కలిసి ట్రై చేద్దాం.**

Primary button **Join the WhatsApp Group**

Helper text **Opens the group invite in WhatsApp.**

### What you’ll find in the group

- **Simple explanations** — Understand AI concepts through familiar work examples.
- **Short demos you can follow** — Try one practical step while you watch.
- **Deeper lessons and guides** — Save useful prompts and documents for when you need them.

### Try a practical example

**Turn rough meeting notes into a clear follow-up**

Give AI a few fictional meeting notes and ask it to pull out decisions, action items, owners, and due dates. Tell it to mark missing details as “To confirm.” Review the output against the notes before you use it.

### Meet Uday Kiran

“I’ve spent the last three years learning AI and putting what I learn into practice. I started this group to share what I’ve tried, explain the parts that can feel complicated, and give you a simple way to try them yourself.”

Use Uday’s approved portrait if supplied. Use a text-only layout until then.

### Final invitation

**Start with one task you already do at work.**

Bring your curiosity. I’ll share examples and resources you can try at your own pace.

Button **Join the WhatsApp Group**

### Footer

**Uday Kiran | Practical AI**

## WhatsApp link setup

- Define a single editable setting named `WHATSAPP_GROUP_INVITE_URL` and use it for every join button.
- Set its initial value to `{{WHATSAPP_GROUP_INVITE_URL}}`. Replace the placeholder with the full invite link copied from the WhatsApp group. The URL should begin with `https://chat.whatsapp.com/`.
- Render each active button as a regular link directly to the group invite, with no form or sign-in between the page and WhatsApp. While the invite is missing, disable the buttons and show **Group invite coming soon** in the preview. Enable the buttons and show the hero helper text when the link is configured.
- Test the configured link before publishing. It should open the intended group invitation on both mobile and desktop.

## Visual design

- Use a warm off-white background, deep ink text, a soft blue-to-lavender accent, and a dark green primary button with white text. Keep spacing generous and decoration restrained.
- Use a readable sans-serif for English and a Telugu-capable fallback such as Noto Sans Telugu. Use one H1 and clear section headings.
- On mobile, use a single-column layout with the hero CTA visible early. Stack the three benefits. On desktop, display the benefits in three columns when space allows.
- Use comfortable tap targets, visible keyboard focus, and sufficient contrast. Keep the page fast and lightweight.

## Build and launch checks

- Build a single route. The landing page needs no accounts, database, or lead form.
- Keep the copy experience-based. Leave out testimonials, member counts, pricing, and guarantees unless Uday supplies approved details.
- Page title: **Practical AI Telugu VIP | Learn AI in Telugu**
- Meta description: **Join Uday Kiran’s WhatsApp group for Telugu-speaking working professionals. Learn AI with simple explanations, demos, and practical examples for work.**
- Preview at mobile and desktop widths. Check Telugu text, CTA placement, keyboard navigation, and the actual group invite before publishing.
