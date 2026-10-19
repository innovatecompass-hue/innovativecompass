# Handoff prompt: Circle of Stars social (edit, approve, schedule)

Paste everything below the line into a new chat.

---

You're picking up the Circle of Stars Instagram (@circleofstars.app) content pipeline for Innovative Compass. Everything lives in GitHub repo `innovatecompass-hue/innovativecompass`, branch `claude/gracious-babbage-qn3ysq` (NOT main). Check out that branch first, then read:

- `marketing/astrology-journal/metricool-queue.json`: the queue. November is fully scheduled (`status: "scheduled"` with Metricool ids); the 31 December posts are `to_schedule`. Each entry has `date` and a ready `info` object for Metricool `createScheduledPost` (send `info` as a JSON string). Date-check notes are already stripped; `note` fields flag special days.
- `marketing/astrology-journal/approvals.html`: source of truth for all 61 posts. POSTS array is `[id, date, setting, leftBubble, rightBubble, caption, images]`.
- `marketing/astrology-journal/social-posts.md`: character bible (Vela & Lyra), voice, how to make more.

**Metricool**
- Brand "Circle of stars", blogId `7521933`, timezone America/Chicago, Instagram only. NEVER touch the other brands in the account (Pennington 3858912, Dr. Indeyeva 7384033 are clients).
- Already scheduled, don't duplicate: all of November (Nov 1 to 30), 10:00 AM CT daily. Always run `getScheduledPosts` for Nov 1 to Dec 31 first and skip any date that already has a post.
- Slot: 10:00 AM CT daily (Metricool best-time data: 10:00 is the top hour every day). Instagram POST, `isAiGenerated: true`, `autoPublish: true`.
- The Metricool connector's "Create Scheduled Post" tool is set to always allowed (claude.ai/customize/connectors). If prompts come back per post, tell me to recheck that setting. Schedule in parallel batches of about 8 and verify with `getScheduledPosts`.

**Order of work**
1. Check approvals. The approval page Artifact https://claude.ai/artifact/U6jTL7dKkc5hS5UBi8cJnX stores reviews in its db collection `reviews`, keyed by post id like `dec-05`, shaped `{status: "approved" | "redo", note}`. Read it. If it's empty, tell me and ask whether to schedule December unreviewed.
2. Redo any "redo" posts in Higgsfield (see below), update the image URL in approvals.html and the queue, republish the approval Artifact.
3. Dec 18 is the official launch day (free journal plus the Circle of Stars upsell). Draft a launch-announcement caption and two bubble lines for dec-18 for me to approve, generate its image, then schedule. Backup launch window: Dec 9, 9 AM to 3 PM CT.
4. Schedule December. Mark each queue entry `"status": "scheduled"` with its Metricool post id, then commit and push to the branch.

**Images (Higgsfield)**
- Use OUR Higgsfield account only, never the client workspace.
- GPT Image 2.5 (`gpt_image_2_5`), quality medium (1 credit), 2k, 4:5, image reference = design job `9d46bfbc-956b-4cdd-9d84-37faa51b8925` (Element "Vela-and-Lyra" `17fed39a-fe7f-47b3-816b-1815cb851e85`).
- Two white speech bubbles, black serif text, open sky with planets, no window frames.
- Max about 4 jobs in flight (the starter plan returns 429). Generate redos without asking per image; ask before a new concept.
- Image URLs are public Higgsfield CDN links. Metricool fetches them fine even if your sandbox can't open them. 7 November images live on the old client Higgsfield account (prefix `user_3KTj...`); they're already uploaded into Metricool, so leave them.

**Rules**
- Voice: Vela (calm, has read every chart) and Lyra (curious, confused by humans). Dry, deadpan, some attitude. Short captions, one emoji, 3 to 4 hashtags, CTA "free Astrology Journal, link in bio" every 2 to 3 posts.
- No em dashes anywhere. UTM-tag any link: `utm_source=instagram&utm_medium=social&utm_campaign=vela-lyra`.
- Fact-check every astrology date in a caption before scheduling. Verified 2026 dates (Central Time):
  - Mercury direct Nov 13, 9:54 AM. Venus direct Nov 13, 6:30 PM.
  - Sun enters Sagittarius Nov 22, 1:59 AM.
  - Full Moon in Gemini Nov 24, 8:53 AM (conjunct Uranus).
  - Mercury shadow clears Nov 30.
  - New Moon in Sagittarius Dec 8, 6:51 PM.
  - Saturn direct Dec 10. Jupiter retrograde Dec 12. Venus shadow clears Dec 15.
  - Sun enters Capricorn Dec 21, 2:59 PM. Full Moon in Cancer Dec 23, 7:28 PM. Mercury enters Capricorn Dec 25.
  - Mars retrograde Jan 10, 2027.
- Open blocker to remind me about: the landing page isn't public yet. It needs a Vercel import of `astrology-journal/` plus the GHL_API_KEY, GHL_LOCATION_ID and JOURNAL_PDF_URL env vars, which I add myself (never ask me for credentials). Until then "link in bio" goes nowhere; set the IG bio link once it's live.
- Push only to `claude/gracious-babbage-qn3ysq`. No PRs unless I ask.
- Proactive, short replies. Show, don't narrate.
