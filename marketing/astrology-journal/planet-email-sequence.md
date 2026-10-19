# Astrology Journal: "Meet Your Planets" email sequence

11 emails: a welcome that delivers the PDF, then one email per planet. Voice: warm big sister, hero's journey, signed by Miranda. Draft copy for Miranda to edit.

## GHL setup

**Workflow trigger:** Contact Tag Added = `astrology-journal`

| # | Send | Email | Subject |
|---|---|---|---|
| 0 | Immediately | Welcome + PDF | Your Astrology Journal is here |
| 1 | Day 1 | Sun | The part of you that's not up for negotiation |
| 2 | Day 3 | Moon | Your Moon sign explains your 2 a.m. thoughts |
| 3 | Day 5 | Mercury | Why you and your best friend argue in different languages |
| 4 | Day 7 | Venus | What you love, and what you let yourself have |
| 5 | Day 10 | Mars | How you fight, flirt and get things done |
| 6 | Day 13 | Jupiter | Where life keeps saying yes |
| 7 | Day 16 | Saturn | The strict teacher who actually believes in you |
| 8 | Day 19 | Uranus | The part of you that refuses to be normal |
| 9 | Day 22 | Neptune | Dreams, intuition and a little bit of fog |
| 10 | Day 25 | Pluto | What has to end so you can begin |

Two emails a week keeps the journal fresh while people are still excited about it. A planet a week would stretch this to two and a half months.

**Before you turn it on:**
- Create a GHL **Custom Value** `journal_pdf_url` holding the PDF link. Every email uses `{{custom_values.journal_pdf_url}}`, so you only change it in one place.
- `{{contact.first_name}}` is blank for people who skipped the name field. Set a fallback in the GHL editor if your account supports it, or change the greeting to "Hey you," for everyone.
- Every link carries UTM tags: `utm_source=email&utm_medium=nurture&utm_campaign=meet-your-planets&utm_content=<email>`.
- The Circle of Stars links (emails 0, 4 and 10) only work for the public once Vercel login protection is off on that project.
- Add a **Goal** step: if the contact gets the tag `circle-of-stars-signup`, remove them from the sequence's upsell emails. (Optional; only if Circle of Stars signups get tagged in GHL.)

---

## Email 0: Welcome (immediately)

**Subject:** Your Astrology Journal is here
**Preview:** Start with your Rising sign. Here's why.

Hey {{contact.first_name}},

Here it is: your 91-page Astrology Journal.

**[Download your journal]**({{custom_values.journal_pdf_url}})

One tip before you dive in: don't read it front to back in one sitting. Start with your Rising sign, the mask you wear, and come back for one chapter at a time. It's a journey, not a textbook.

You'll need your birth chart for this. Grab your birth date, place and, if you can, the exact time (a birth certificate or a parent's memory works). Pop them into any free chart calculator, or into [Circle of Stars](https://www.circleofstars.app/welcome?utm_source=email&utm_medium=nurture&utm_campaign=meet-your-planets&utm_content=e00-welcome), which even shows you what changes if you don't know your birth time. Keep the chart next to your journal.

Over the next few weeks I'll send you a short note about each planet: what it runs in your life, one question to journal on and one side quest. Ten planets, ten little doors.

See you tomorrow with the Sun.

miranda xoxo

P.S. Hit reply and tell me your Big Three (Sun, Moon and Rising). I love reading them.

---

## Email 1: The Sun (day 1)

**Subject:** The part of you that's not up for negotiation
**Preview:** You already know your Sun sign. Let's go deeper.

Hey {{contact.first_name}},

Your Sun sign is the one you already know. It's the one on the coffee mug.

But the Sun in your chart is more than a personality type. It's your core: what gives you energy, what you're here to grow into, the version of you that shows up when you feel most alive.

Here's what most horoscopes skip. Your Sun **sign** tells you *how* you shine. Your Sun's **house** tells you *where*. A Leo Sun in the 10th house wants to shine at work. A Leo Sun in the 4th wants to be the warm center of home.

**Journal prompt:** When did you last feel completely like yourself? Where were you, and what were you doing?

**Side quest:** Find your Sun's house in your chart, then reread the Sun chapter of your journal with that house in mind. Does it explain where you feel most "on"?

Next up: the Moon, the part of you nobody sees at parties.

miranda xoxo

---

## Email 2: The Moon (day 3)

**Subject:** Your Moon sign explains your 2 a.m. thoughts
**Preview:** What you need to feel safe, and why nobody guessed it.

Hey {{contact.first_name}},

If the Sun is who you are at noon, the Moon is who you are at 2 a.m.

The Moon is your emotional home base: what you need to feel safe, how you comfort yourself, what you reach for when the day falls apart.

It's also why two people with the same Sun sign can feel completely different. A Taurus Sun with a Gemini Moon needs a good conversation to calm down. A Taurus Sun with a Cancer Moon needs a blanket and their people.

The Moon moves fast, about two and a half days per sign, so your exact birth date really matters here.

**Journal prompt:** What do you do when you need to feel better? Is it what you actually need, or just what's familiar?

**Side quest:** Ask someone close to you how they comfort themselves after a hard day. Then look up their Moon sign. Spooky, right?

miranda xoxo

---

## Email 3: Mercury (day 5)

**Subject:** Why you and your best friend argue in different languages
**Preview:** How you think, talk and learn is written in your chart.

Hey {{contact.first_name}},

Mercury runs your mind: how you think, talk, learn and make sense of the world.

Some Mercurys think out loud (hello, Gemini and Sagittarius). Some need to sit with an idea for three days before they say a word (we see you, Scorpio and Capricorn).

Knowing your Mercury takes the pressure off. You're not "bad at explaining things." You might just explain in pictures, or stories, or bullet points.

And yes, Mercury retrograde. About three times a year Mercury appears to move backward across the sky. It's an optical effect, but astrologers treat it as a time to re-view, re-do and re-connect. Also a great time to read that email twice before you hit send.

**Journal prompt:** How do you learn best: reading, listening, talking it through or doing it with your hands? Does your Mercury sign agree?

**Side quest:** Write the text you've been avoiding. Then rewrite it the way your Mercury sign would say it.

miranda xoxo

---

## Email 4: Venus (day 7)

**Subject:** What you love, and what you let yourself have
**Preview:** Your love language is hiding in your chart.

Hey {{contact.first_name}},

Venus is about love, but not only romance. It's what you find beautiful, what you value, how you spend money and how you like to be cared for. Venus answers one question: what feels like pleasure to me?

A Venus in Taurus falls in love over a long dinner. A Venus in Aquarius falls in love over a three-hour conversation about the future of cities. Neither is wrong. Both get very confused by the other.

**Journal prompt:** What did you love as a kid, before anyone told you what you should love?

**Side quest:** Look up the Venus sign of someone you love. Read their Venus page in your journal and notice what suddenly makes sense.

Want to see your Venus next to theirs, and everyone else's in your life? That's exactly what [Circle of Stars](https://www.circleofstars.app/welcome?utm_source=email&utm_medium=nurture&utm_campaign=meet-your-planets&utm_content=e04-venus) does. Free to start.

miranda xoxo

---

## Email 5: Mars (day 10)

**Subject:** How you fight, flirt and get things done
**Preview:** Your drive has a sign. So does your temper.

Hey {{contact.first_name}},

If Venus is what you want, Mars is how you go and get it.

Mars is your engine: your drive, your courage, how you handle conflict and what makes your blood boil.

- **Fire Mars** (Aries, Leo, Sagittarius) acts first and thinks later.
- **Water Mars** (Cancer, Scorpio, Pisces) feels everything first, then moves.
- **Earth Mars** (Taurus, Virgo, Capricorn) builds slowly and never quits.
- **Air Mars** (Gemini, Libra, Aquarius) wins every argument and sometimes forgets to actually do the thing.

**Journal prompt:** Think of the last time you got really angry. What were you actually protecting?

**Side quest:** Pick one thing you've been putting off. Do it this week the way your Mars sign would.

miranda xoxo

---

## Email 6: Jupiter (day 13)

**Subject:** Where life keeps saying yes
**Preview:** Your lucky planet, and where you overdo it.

Hey {{contact.first_name}},

Jupiter is the planet of growth, luck and big faith. Wherever it sits in your chart is where doors open, where you're naturally generous and where things just seem to work out.

It's also where you overdo it, because Jupiter never met a limit it liked.

Jupiter takes about 12 years to travel the whole zodiac, so everyone born within a year or so of you shares your Jupiter sign. The house is what makes it yours.

Every 12 years Jupiter returns to where it was when you were born: around 12, 24, 36, 48. Look back at those years. Did something open up?

**Journal prompt:** Where in your life do things come easily, almost suspiciously easily?

**Side quest:** Find your Jupiter house. Say yes to one opportunity in that part of your life this month.

miranda xoxo

---

## Email 7: Saturn (day 16)

**Subject:** The strict teacher who actually believes in you
**Preview:** Your hardest lesson is also your greatest strength.

Hey {{contact.first_name}},

Saturn has a bad reputation. It's the planet of limits, discipline, fear and hard work. Wherever it sits is where life makes you earn it the slow way.

Here's the part nobody tells you: Saturn is also where you end up most skilled. The thing you struggled with at 20 is often the thing you're known for at 40.

You've probably heard of the Saturn return. Around age 29, and again around 58, Saturn comes back to its birth position. Careers change, relationships get tested, people grow up fast. If you're between 27 and 30 and everything feels like a test, it's not just you.

**Journal prompt:** What have you always been "bad at" that secretly matters a lot to you?

**Side quest:** Open the Saturn chapter of your journal and write one statement that strengthens your Saturn placement. Say it out loud every morning for seven days.

miranda xoxo

---

## Email 8: Uranus (day 19)

**Subject:** The part of you that refuses to be normal
**Preview:** Your inner rebel has an address.

Hey {{contact.first_name}},

Uranus is the rebel. It's the planet of sudden change, freedom and the moments you break the rules because the rules stopped making sense.

Uranus spends about seven years in each sign, so your whole age group shares it. That's why every generation rebels differently.

What makes Uranus personal is its house. That's the part of your life where you can't stand being told what to do, and where your breakthroughs come out of nowhere.

**Journal prompt:** Where do you feel boxed in? What would you change tomorrow if nobody would judge you?

**Side quest:** Do one small thing this week that's completely unlike you. Notice how it feels.

miranda xoxo

---

## Email 9: Neptune (day 22)

**Subject:** Dreams, intuition and a little bit of fog
**Preview:** Where you're most magical, and most likely to see what you want to see.

Hey {{contact.first_name}},

Neptune is the dreamer. It rules intuition, imagination, music, spirituality and the part of you that feels connected to something bigger.

It's also the planet of fog. Where Neptune sits, you can idealize people, escape reality or see exactly what you hoped to see.

Neptune moves so slowly, about 14 years per sign, that it describes a whole generation's dreams. Its house shows where your own dreaming happens.

**Journal prompt:** When did your gut feeling turn out to be right? And when did you ignore a red flag because the dream was too pretty?

**Side quest:** Make a playlist for your Neptune house. Play it the next time you sit down with your journal.

miranda xoxo

---

## Email 10: Pluto (day 25)

**Subject:** What has to end so you can begin
**Preview:** The last planet, and the end of your hero's journey (for now).

Hey {{contact.first_name}},

Pluto is the planet of power, transformation and rebirth. Wherever it sits is where life asks you to let something go so something truer can grow.

It's intense. It's also where you're strongest, because you've already survived the hardest version of it.

Pluto spends 12 to 30 years in each sign. Its house shows where your deepest transformations happen.

And with that, you've met all ten planets.

You've met the mask you wear, the core you shine from and the heart you feel with. You've faced your Saturn lessons and found where your dreams and your power live. That's a real hero's journey, and you did it.

Remember: your chart doesn't decide your life. You do. Astrology just hands you the map.

**Journal prompt:** What have you already outgrown but haven't let go of yet?

**Side quest:** Reread the first page you wrote in your journal. What would you tell that version of you now?

**Your next chapter:** now that you know your own chart, meet the charts of the people you love. [Circle of Stars](https://www.circleofstars.app/welcome?utm_source=email&utm_medium=nurture&utm_campaign=meet-your-planets&utm_content=e10-pluto) puts them side by side with you: their charts, their strengths and what you could create together. Free to start.

I believe in you, always.

miranda xoxo

P.S. Would you hit reply and tell me what surprised you most? With your permission, I'd love to share a few words from readers on the journal page.
