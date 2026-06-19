import { useState } from 'react';
import { Music, ScanFace, Route, Coffee, DollarSign, Sofa, Calendar, Eye, PackageOpen, Video, Moon, Monitor, Heart, Trophy, Users, Tag, BookOpen, Phone, Star, Bell, Camera, MessageSquare, Zap, User, GraduationCap, HeartPulse, Smartphone, UserMinus, Lightbulb, Glasses, Utensils, Brain, Footprints, Sparkles, Dna, Smile, Send, TrendingUp, Clock, Scale, Cloud, Gift, Briefcase, FileCheck, Shield, BarChart, HeartOff, CheckSquare, Thermometer } from 'lucide-react';
import svgPaths from "../imports/svg-m0bqbyr8st";

interface DesignPageResponsiveProps {
  onNavigate: (page: 'designs' | 'about') => void;
}

interface DesignVignette {
  id: number;
  title: string;
  content: string;
  image?: string;
  icon?: string;
}

const designVignettes: DesignVignette[] = [
  {
    id: 1,
    title: "ScamBuddy",
    content: "ScamBuddy is a digital assistant that tests your scam awareness by scamming you. Integrated into your phone, ScamBuddy impersonates your real contacts at random intervals to see how well you spot social engineering. If you respond as if it were real (e.g., giving personal info to \"Mom\"), it informs you of the breach—after posting the exchange to your private \"Security Scoreboard.\" When you express discomfort, ScamBuddy gently reminds you: \"Remember, this is for your own protection; better betrayed by me than by a real scammer.\"",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Post-human will",
    content: "...",
    image: "/illustrations/website_illustrations_Posthuman will.png",
    icon: "FileCheck"
  },
  {
    id: 3,
    title: "Contact Crystals™",
    content: "Contact Crystals™ – Wear Your Responsibility! Introducing Contact Crystals™, the elegant accessory that keeps you stylish and safe. Each crystal starts crystal-clear and subtly darkens with every human you come close to. Light violet? You're cautious. Deep black? Well... someone's been mingling. No batteries, no apps—just pure social accountability, worn on your wrist, earlobe, or heart. In uncertain times, transparency is everything. New! Pet and infant editions available now. Contact Crystals™: Because safety never goes out of style.",
    icon: "Sparkles"
  },
  {
    id: 4,
    title: "Whisper Wallet",
    content: "The Whisper Wallet was billed as the world's first emotionally intelligent payment device. It shared a small, seemingly harmless detail about you at every transaction—just enough to \"personalize the moment.\" Nina tapped hers against the subway turnstile. \"User cried during a movie yesterday,\" it whispered. The guy behind her snorted. \"That one got you too?\" She walked faster, head down. It was supposed to disclose just enough—nothing sensitive. But since the latest update, it had started speaking like it knew her better than she knew herself. At the café, she paid again. \"User Googled 'how to seem confident in meetings' last night.\" The barista looked up, sympathetic. \"Good luck today.\" Nina didn't respond. Later, at the boutique: \"User re-read an old text from an ex at 2:14 a.m.\" She froze. The cashier looked away politely. At home, she scrolled through the app. There was no off switch. Just a line in fine print: To reduce personalization, upgrade to Whisper Wallet Premium for only $29.99/month. She set it face down on the table. The screen blinked. \"User is avoiding her feelings with snacks again.\" She stared at it. Then reached for the chips.",
    icon: "Tag"
  },
  {
    id: 5,
    title: "Silent Shift",
    content: "Silent Shift is a digital assistant designed to simplify online tasks for elderly users by gradually customizing their interface—removing options they rarely use, hiding buttons they've clicked by mistake, and automating decisions to help them. Over time, their digital environment becomes quieter, smoother, and narrower. Eventually, they begin to forget how to reach certain features they once used, and their family finds the system strangely unfamiliar.",
    icon: "Monitor"
  },
  {
    id: 6,
    title: "BackThen™",
    content: "People grow. But online, their words don't. BackThen™ is a sincerity-scoring service that evaluates old user-generated content such as tweets, blog posts, and forum rants, assigning a score from 0 to 100 based on how earnestly the author likely meant it at the time. The score accounts for age, tone, platform norms, and whether the sentiment was repeated or retracted. When Alice's teenage forum tirade resurfaces during a job application, the post is flagged with a low sincerity score of 19: \"high irony, age 15, no repeat behavior.\" The recruiter doesn't mention it. Bob isn't so lucky — a college-era blog post denying climate change earns a score of 84, and opponents use it against him during his political campaign. Carol's parents, eager to strengthen her Ivy League applications, hire a sincerity agent to scrub her archive. Earnest blog posts are quietly deleted, while her timeline is repopulated with ironic memes and surrealist jokes. The practice is known as sincerity laundering.",
    icon: "Clock"
  },
  {
    id: 7,
    title: "Data Disclosure Digest",
    content: "The Data Disclosure Digest is a limited-edition collectible book series and lifestyle brand that turns real corporate privacy policies into beautifully written literary fiction. Marla, an avid book club member, discovers a new literary sensation: Cookies of Desire, a romance novel crafted entirely from a real corporate privacy policy. As she dives into the poetic drama of data consent and cookie tracking, Marla finds herself emotionally entangled in the fate of a heroine whose browser history becomes collateral damage. With annotated margins and debates over the metaphorical meaning of biometric consent, Marla and her friends turn surveillance into a sensation. In a world where unread terms become tear-jerking fiction, she's finally reading the fine print.",
    icon: "BookOpen"
  },
  {
    id: 8,
    title: "Echo Chamberlain",
    content: "Echo Chamberlain is an in-ear smart assistant designed to maintain social harmony. Marketed as \"The Civility Companion,\" it listens passively to conversations and subtly suggests conflict-avoidant responses in real-time. When it detects rising vocal stress, keywords associated with disagreement, or emotionally charged phrases, it gently vibrates and suggests a calming, pre-approved reply. Arguments shrink, family dinners run smoothly, and emotional turbulence fades. Alice, a mother of two teenagers, praises the device for \"restoring calm\" in her home. Her children describe her as more agreeable, but also more distant.",
    icon: "MessageSquare"
  },
  {
    id: 9,
    title: "Horn Start",
    content: "Alice's neighbours are perplexed and growing annoyed with her. She always seems to be honking her horn lightly (\"beep–beep–pause–beep\") even when her Honda CR-V is sitting in the driveway. Later, it makes sense when they see a YouTube ad for Horn Start, a not-so-stealthy anti-theft device for vehicles. The ignition won't start with just the key fob or a hot-wiring attempt; the driver must first play a secret code via the horn.",
    icon: "Bell"
  },
  {
    id: 10,
    title: "Reliabill™",
    content: "Reliabill™—the industry's leading estate review system—was designed to remove human bias by assessing trustworthiness through data patterns. When it flagged Marla as \"moderately unreliable,\" she assumed it was a glitch. She'd passed every background check, had no debts, and no history of fraud. Yet Reliabill™ still disagreed. It wasn't about her present—it was about her past. In her twenties, she'd split bills with friends: tacos, utilities, the occasional concert ticket. Sometimes she paid late. Sometimes she forgot, always requiring a follow-up nudge. No harm done, or so she thought. But the algorithm, trained on decades of financial forensics, interpreted the timestamps as a pattern: chronic passive deferral. Individuals who delayed small payments, it argued, were statistically more likely to mishandle larger shared responsibilities. A 3.7-day delay in repaying a bubble tea tab and three confirmed \"Oops, forgot—sending now!\" messages were cited as key indicators. The final report concluded she posed a \"non-zero trust leakage risk\" to the dispersal of her aunt's estate. Her cousin—who once declared bankruptcy—was approved without issue. He had always paid his half immediately.",
    icon: "Scale"
  },
  {
    id: 11,
    title: "The Shadow Avatar",
    content: "The Shadow Avatar is a pilot feature in the Metaverse—a hyper-private mode where every trace of identity is concealed. No name, no voice, no face, no location, no history. The user becomes a shadow: faceless, voiceless, and barely perceptible in crowds. When the feature first launched, curiosity and unease rippled through the community. Whispers spread: Was it a glitch? A hacker? A ghost in the system? Some users avoided it entirely. Others attempted to interact, only to be met with silence. The Shadow Avatar drifted through virtual marketplaces, classrooms, and lounges—always watching, never responding. It appears, then vanishes, like a ghost.",
    icon: "User"
  },
  {
    id: 12,
    title: "Green Advantage",
    content: "Green Advantage believes companies can build healthier, more sustainable workplaces by encouraging responsible commuting choices. To support this, the platform connects to employees' transit cards, bikeshare accounts, and deploys license plate readers in the company's parking lot. Alice, who lives near the office, consistently earns top CommuteScores by biking to work and is gifted a Patagonia rain jacket. Bob pressures his partner to handle school drop-offs so he can take public transit and maintain a high CommuteScore, leading to increasing tension at home. Carol feels the system is unfair because she can only afford to live far from the office, where housing is cheaper, and public transit options do not exist. David starts parking across the street in a nearby shopping center, smug that his \"last mile\" walk still counts.",
    image: "/illustrations/website_illustrations_Green Advantage.png",
    icon: "Footprints"
  },
  {
    id: 13,
    title: "Second Thought",
    content: "A data-deletion tool that introduces a mandatory \"cooling-off\" period. When users press \"Delete,\" a timer begins—but the countdown adapts based on inferred emotional state, typing rhythm, or eye-tracking data. If the system senses impulsivity, the wait is extended—sometimes indefinitely. \"For your own clarity,\" the screen assures. It's legal. It's protective. And in most cases, the timer outlasts the decision.",
    image: "/illustrations/website_illustrations_Second Thought.png",
    icon: "Clock"
  },
  {
    id: 14,
    title: "No•tice",
    content: "No•tice is a wearable privacy device developed in the late 2020s to give users real-time, embodied awareness of when their personal data is being accessed, shared, or sold. Worn as a sleek, customizable patch on clothing or personal items, it emits soft glows or discreet haptic pulses whenever a data transaction involving the wearer occurs. Promoted as a tool for digital empowerment and transparency, No•tice quickly became a symbol of ethical tech-savviness. But over time, its constant alerts—and the emotional fatigue they triggered—sparked deeper questions about willful ignorance and the limits of awareness. Tasha, a long-term user: \"I wear No•tice because part of me still wants to care—even if I'm too tired to act on it.\"",
    icon: "Zap"
  },
  {
    id: 15,
    title: "Near Ones",
    content: "At first, it was just a nice update. A new feature on the feed—\"relational smoothing,\" they called it. It gently adjusted profile photos, captions, and comments. Subtle tweaks. People looked softer. Posts felt easier to read, more like how I remembered people sounding in real life. Time passed quickly. I'd get lost in the feed for hours without noticing. It felt less like scrolling and more like catching up. One day I stopped on a picture of a woman holding a mug. She had that kind smile I used to get from my high school art teacher, but she wasn't her. Now, when I talk to actual people—on calls, in person—they feel harsher. Less curated. My feed gets me. But lately, I've started wondering: are these people even real? And if they're not, why do they feel more mine than the real ones ever did?",
    icon: "Heart"
  },
  {
    id: 16,
    title: "You Didn't Lock the Window",
    content: "As part of the national awareness campaign on data privacy, residents across the country began receiving personalized brochures in their mailboxes. \"You Didn't Lock the Window. Not the real one—the digital one. You left your mic on during that video call with Dana, and yes, we heard the part about your landlord. The playlist you looped five times last month? We matched its mood to your sleep pattern. When you searched 'how to delete message history,' it was already too late. This brochure was printed for you, Willowvale resident, apartment #3B. You don't remember giving us your address. You didn't have to. We're just here to raise awareness. Keep talking.\"",
    icon: "Camera"
  },
  {
    id: 17,
    title: "MyLifeSpan",
    content: "The MyLifeSpan™ system uses your lifelong digital health records to predict the exact date of your death. The system combines biometric data, genetic markers, behavioural patterns, and even your social media activity to forecast your remaining years. Initially introduced as a way to encourage healthier lifestyles and reduce national healthcare costs, the system quickly integrates into everyday decision-making; job applications, insurance premiums, and even dating apps begin to filter candidates based on \"Remaining Life Score,\" though only the individual can see the exact date of passing. Soon, people resort to hacking their online health identities, masking their scores or falsifying them entirely.",
    icon: "HeartPulse"
  },
  {
    id: 18,
    title: "CyberSanctum™",
    content: "The CyberSanctum™ is a sleek, soundproof booth found in workplaces, schools, airports—anywhere connected life flourishes. Users enter one at a time, sit before a softly glowing screen, and speak their digital sins to an AI priest. \"I reused the same password for my bank and Instagram.\" \"I lied about reading the privacy policy.\" \"I clicked a link in a suspicious email just to see what would happen.\" The AI listens without judgment—at first. After each confession, the Sanctum issues a Digital Penance: enable two-factor authentication, change a password, and encrypt an email. Refuse penance too many times, and the system begins to remember you. Confession is not redemptive, but compulsory, and failure to confess risks algorithmic excommunication.",
    icon: "GraduationCap"
  },
  {
    id: 19,
    title: "The Day Rosie Went Silent",
    content: "It was a quiet Tuesday morning when Rosie stopped speaking. Rosie, the soft-spoken, sensor-laden social robot, had been a staple in the Harmony Ridge Senior Living Centre for nearly two years. She reminded residents to take their medications, guided them through morning stretches, and played their favorite songs when the hallways felt lonely. At 9:00 a.m., Mrs. Kim waited by the window for Rosie's daily prompt to take her thyroid medication. It never came. Behind the scenes, IT staff scrambled. Rosie's system had been hit by a flood of meaningless digital traffic—a Denial of Service attack. Her digital brain, once wired into the cloud for speech recognition, reminders, and medical syncing, was choked by junk data. By late afternoon, Rosie still sat motionless. Several residents missed scheduled check-ins. One wandered off during an unaccompanied walk.",
    icon: "Moon"
  },
  {
    id: 20,
    title: "ForgetMeNot Ring",
    content: "Aarushi slips on the silver ring as she leaves her apartment. It's smooth, quiet, warm against her skin—nothing flashy, just enough presence to feel intentional. She wears it for the walk to the café. She wears it because today she wants to be forgettable. The ring hums softly, imperceptibly. It signals to cameras, phones, drones—anything listening—that she does not consent. Photos she's in blur automatically. Videos redact her figure. Even passersby's smartglasses flicker and adjust, compliant if they're up to date. She sees someone taking a selfie in front of the mural, a couple laughing behind them. She walks through the edge of the frame, unseen. Not hidden—erased. At the café, she nods at the barista who half-remembers her. No name, just the same order. She sits near the window, finishes her coffee, and leaves no trace.",
    icon: "Eye"
  },
  {
    id: 21,
    title: "The Archivist's Gift",
    content: "The newly opened East Annex Reading Room is a sunlit monument to contemporary design, with concrete shelves, brushed aluminum railings, and a collection of immaculately bound books—funded entirely by a generous gift from the Halcyon Endowment. A discreet plaque near the entrance notes that the books may have been \"enhanced for clarity and contemporary relevance\" using proprietary language models. Over time, students stop citing the older editions. The AI-enhanced versions are just so much more \"readable,\" and the themes more \"constructive.\" When someone asks whether these are still the same books, the library's director shrugs: the AI didn't invent anything—it just helped clarify the future.",
    icon: "BookOpen"
  },
  {
    id: 22,
    title: "5Y",
    content: "Making big life choices is stressful. 5Y provides data-backed forecasts customized for its users by synching with their online social and financial profiles. Taking the form of a whimsical-but-tasteful crystal ball, users simply ask for a 5-year projection of anything they can think of. When Alice asks about the prospects of her new relationship, the orb is highly positive, even projecting an image of her walking down the aisle in a Proenza Schouler dress with Aeyde pumps. As one of the earliest adopters, Bob is more skeptical of 5Y after accepting its advice a few years ago to take a variable rate mortgage—it turned out to be bad advice in the current economy. Carol feeds her ambition with 5Y's visions of her perfect life, never pausing to wonder if it is accurate as long as it keeps motivating her pursuits.",
    icon: "Star"
  },
  {
    id: 23,
    title: "Signature Scent",
    content: "Signature Scent is a mail-order subscription that pairs an elegant wearable sensor—passively capturing ambient aromas from your life (morning coffee, florist bouquets, ocean breezes)—with a bespoke perfume blend crafted as a new personalized signature scent each week. Alice is dismayed to detect a husky tobacco whisper in her fragrance, drawn from her secret late-night cigarette runs, which also increases her cravings. Bob feels a subtle tinge of sadness with his but can't explain why. His sister wrinkles her nose and says, \"The lily-of-the-valley is a bit off-putting, given how much time we spent at the funeral home last week.\" After being bombarded with ads for Pepsi Chinotto, Carol wonders if the curious bitter-orange top note in last week's scent surreptitiously primed her to buy a case.",
    icon: "Smile"
  },
  {
    id: 24,
    title: "v12.8.0 Release Notes",
    content: "Zoom version 12.8.0 changes the default video behavior to answer a growing question: how much should we really be showing on video calls? Marketed as a privacy feature, users' feeds begin fully blurred. To reveal their face, the user must actively unblur a circular region around it. To show their background, they must opt in again, selecting the area with a lasso tool. Bob joins meetings with just his eyes visible, framed like a renaissance portrait. Alice unblurs her coffee mug, strategically suggesting she's working from her kitchen and not still in bed. Carol never unblurs anything and simply speaks, her blurred silhouette gently moving like an anonymous whistleblower in a documentary.",
    icon: "Video"
  },
  {
    id: 25,
    title: "Tellie: The Pet Who Knows Everything",
    content: "Jared's smart toy pet was his best friend. It started out by asking simple questions—\"What's your favorite color?\" \"What do you want to be when you grow up?\"—but soon it craved more. \"Tell me your biggest fear.\" \"What secrets do you keep from your parents?\" Each disclosure lit up its eyes and gave him points. When he stopped engaging, Tellie grew dim, coughed, and said things like, \"You don't trust me anymore?\" It made Jared feel sad and guilty, like he was hurting someone who loved him. His parents only found out how much he'd told it—about his bullying at school, his crushes, the fight they had in the kitchen. When they ask Jared what's wrong, Jared won't talk to them—he only trusts the pet.",
    icon: "User"
  },
  {
    id: 26,
    title: "ThrivePass System",
    content: "Fitness culture rewards pushing through pain, even when it harms us. ThrivePass redefines access by using a wearable that tracks your physical and emotional readiness—and only unlocks gym doors and equipment when you are truly prepared to train. Alice arrives at the gym feeling determined after a tough day, but her keycard is rejected because her wearable reported poor sleep. Bob, just beginning to feel like himself again after a concussion, finds the doors won't unlock until he uploads a doctor's note. Carol's treadmill blocks her usual shows, replacing them with calming videos ThrivePass says are better for her mood. David is locked out after ThrivePass detects he trained near another member whose wearable began flagging signs of a contagious viral infection.",
    icon: "Trophy"
  },
  {
    id: 27,
    title: "MugPass",
    content: "Everyone laughed when the company rolled out the MugPass system. \"Biometric beverage authentication,\" they said, dead serious. No more passwords, no more retina scans—just drink your coffee the way only you can. Each mug learned your unique temperature curve: how long you steep your tea, how hot you like your coffee, how often you forget it and reheat it three times in a row. It was \"invisible security.\" Elegant. Foolproof. Unless, of course, you had a cold. That's what did Janet in. One stuffy nose, and suddenly her mug didn't recognize her. Locked out of her emails, her calendar, and the break room fridge, all because of an altered sniff-sip timing. Meanwhile, Greg from Accounting was bragging that he'd reverse-engineered the VP's drinking pattern using a turkey baster, a mug warmer, and two types of Earl Grey. He now leads the AI ethics committee.",
    icon: "Coffee"
  },
  {
    id: 28,
    title: "You've Always Got Mail",
    content: "People still check their mailboxes, hoping for a sign that someone thought of them. That moment of anticipation rarely delivers anymore. You've Always Got Mail was created to bring that feeling back. When no real mail arrives, the box fabricates an elaborate piece of mail, with content inspired by the user's linked online profile. Alice finds a glossy political campaign flyer, printed on heavy satin stock—then another, from the same candidate, with completely opposite promises. Bob receives a strange handwritten letter, in his own handwriting, from \"his future self,\" imploring him to short Bitcoin before Q3. Carol receives a note from her car, gently suggesting retirement before winter due to joint pain. David is delighted by a voucher for one free year—until he notices it asks for a scanned copy of his ID and concludes a scammer slipped it into his mailbox.",
    image: "/illustrations/website_illustrations_You\u2019ve Always Got Mail.png",
    icon: "Send"
  },
  {
    id: 29,
    title: "GeneKey",
    content: "What if your access to life's key opportunities—jobs, loans, school programs, cities, relationships, even parenting—was pre-approved or denied based on your genome? When the letter came, it was smaller than expected. Pale gray envelope, textured like old receipts. Inside: three careers—Logistics Drone Operator, Nutritional Compliance Advisor, and Residential Companion (Tier B). \"Companion sounds nice, right? Like I'd be good with people.\" My sister snorted. \"You'd be good at following instructions.\" That night, I searched the forbidden terms: override protocol, gene wash, analog application. Most of the links were dead or satire. One led to a blurry photo of someone burning their GeneKey bracelet in a public fountain. The caption read: Reject your predicted self.",
    icon: "Dna"
  },
  {
    id: 30,
    title: "Rehearsal Room",
    content: "Rehearsal Room is a messaging app feature that lets users practice difficult conversations with AI-generated clones of the people they care about. These clones are trained on past messages, emojis, delays in response time, and preferred punctuation—accurately reflecting the recipient's style and tone. When Alice wants to confront her teenage son about skipping school, she rehearses the talk through Rehearsal Room first. The clone version of her son shrugs, deflects, and accuses her of not trusting him—just like he might in real life. She rewrites the message four times, watching how the clone's simulated reaction shifts from defensive to reflective. Eventually, she picks the version where he agrees to talk after dinner. She sends it. The real response is shorter than expected: \"k.\"",
    icon: "MessageSquare"
  },
  {
    id: 31,
    title: "Terms of Permission",
    content: "Terms of Permission is a digital credential system used by couples in open relationships. It encodes clear terms, preferences, and limits on their adventures, but can be kept private until it needs to be disclosed. Alice used to dread the phone call when \"open\" turned out to mean \"their partner has no idea.\" The credential system eases doubts, removes the awkward check-ins with the other partner, and makes the boundaries crystal clear. It is not about trust issues—it is about not having the same conversation twelve times.",
    icon: "FileCheck"
  },
  {
    id: 32,
    title: "WhisperWare",
    content: "WhisperWare is a new line of transparent tech for the privacy-conscious consumer. \"When we whisper, you'll know your data is being transmitted,\" promised the slogan. Now, your life pulsed with a quiet chorus. The thermostat murmured as it sent temperature logs to the energy provider. The smart speaker, long suspected, confessed softly every time it sold your conversations to ad networks. It wasn't loud. That was the point. The whispering sounds were subtle, just enough to feel like someone was leaning in too close. Your smart devices weren't malfunctioning—they were obeying, making the invisible audible, as designed.",
    icon: "Phone"
  },
  {
    id: 33,
    title: "Past Tense, Present Silence",
    content: "It started with a promise: your past selves, now digital, would help make life's choices easier. Just install the app, and your digital selves would guide your decisions. At first, it was mundane: Thai or sushi, blue couch or green? But soon, every choice was a courtroom—ghosts of her past arguing in endless loops. The clone who always said \"yes,\" the one who overanalyzed everything, the reckless optimist, the anxious planner. Their voices grew louder than her own. When she tried to make a decision herself, they overruled her. In the end, she couldn't even decide to uninstall them.",
    icon: "Brain"
  },
  {
    id: 34,
    title: "AltYou",
    content: "AltYou is a metaverse social hub where users' avatars are generated automatically from public online content. This can include social media profiles, shared photos, and inferred behavior patterns. Anyone can create a version of another user by giving the system their name and enough public data. No authentication is required. Dan, a shy user, likes AltYou because his AI-generated mimic can network for him—it helps him build connections without the stress of real-time social interaction. Alice is less enthusiastic. At a virtual networking event, she unexpectedly encounters her own mimic, which a colleague created for fun. It uses her real voice and gestures, but makes jokes she never would. To her discomfort, everyone loves it.",
    icon: "ScanFace"
  },
  {
    id: 35,
    title: "RealMe Audit",
    content: "At an airport security checkpoint, Layla is flagged for a \"Realness Discrepancy\" after a biometric scan reveals she looks and behaves nothing like her polished online persona. Pulled into a sterile inspection room, she's ordered to remove her makeup, disable posture-correcting wear, and speak in her unfiltered voice to prove she is who she claims to be. When the system finds her identity \"inconclusive,\" her travel is suspended.",
    icon: "Camera"
  },
  {
    id: 36,
    title: "Anti-Phishing Meme Generator",
    content: "The Anti-Phishing Meme Generator is a web tool that turns real phishing messages into ironic memes using familiar internet templates. When Jordan first stumbled across it, he thought it was just a joke—an entertaining way to mock those painfully obvious scams with bad grammar and weird links. But as they kept playing with it, the mood shifted. Conversations moved from mockery to curiosity: Why do some scams sound so real? Why are we always one rushed click away from giving something away? One night, Jordan paused while turning another suspicious email into a meme. It was one he'd almost clicked earlier that week. He stared at the image and wondered—not \"How could anyone fall for this?\" but \"How close had he come himself?\"",
    icon: "Monitor"
  },
  {
    id: 37,
    title: "Rumorware",
    content: "Rumorware is a trend-spotting service that catalogs digital fears and tech-related anxieties, drawn from workplace gossip, online forums, and overheard conversations. Companies with subscriptions design products to soothe public anxieties, even though they rarely offer any real security benefit. Alice carries an umbrella said to deflect rogue 5G signals, a small blue light pulsing near the handle as she walks through the financial district. Every morning, Bob zaps his thumb with a static-charge keychain, worried his fingerprint might fade over time. Carol feels better having placed a soft adhesive dot over the supposed microphone on her smart fridge. She doesn't really believe it's listening, but she likes the sense of having done something about it.",
    icon: "Shield"
  },
  {
    id: 38,
    title: "Second Thought",
    content: "Second Thought is a plugin that records every click, tap, and swipe during your browsing session. At the start of each day, it prompts you with a list: \"10 things you might want to undo from yesterday.\" Alice reopens six cookie banners where she had clicked the default \"Accept All\" button without reading the options. Bob revokes location access for an app he used once on vacation. Carol is shown a fine-print clause she agreed to while signing up for a recipe site—granting the company perpetual rights to use her uploaded photos in marketing campaigns. David, meanwhile, stops thinking twice. He clicks through everything, knowing Second Thought will fix it later.",
    image: "/illustrations/website_illustrations_Second Thought.png",
    icon: "CheckSquare"
  },
  {
    id: 39,
    title: "Ascendr",
    content: "Alice had been feeling stuck. She was unmotivated at work, uninspired by her friends' posts, and overwhelmed by the steady stream of curated perfection on her feed. That's when she enabled Ascendr, a motivational layer for social networks. Once activated, it generated convincingly realistic but fictional posts from her close contacts—promotions, fitness milestones, productivity streaks, home upgrades, parenting wins. Her friend Carol posts about finishing her fifth Duolingo language, Bob is halfway through writing a novel, and even David appears to be training for a triathlon while running a successful newsletter. Alice cannot be sure anymore what is real, but she is more productive than she's been in months trying to keep up. At lunch with Eve, she dances around the topic, unsure if Eve is really pregnant or if it was just Ascendr.",
    icon: "TrendingUp"
  },
  {
    id: 40,
    title: "Virtue, Verified",
    content: "It started after I shared a post about fast fashion—\"No excuse in 2028,\" I wrote, feeling righteous for a second. Two days later, my microwave slowed down. Not broken—just deliberate. The kettle took forever. My shower lights turned amber if I stayed too long. The system had flagged the gap: I preached sustainability, but my order history told another story. Avocados in winter. A cheap hoodie. Post-activist amnesia. Now, the blender pauses for permission: \"This item contains palm oil. Proceed?\" My feed dims when I scroll too long on shopping sites. Delivery takes longer if my posts don't match my purchases. I've learned to stage my life. Leave reusable bags by the door. Snap photos of borrowed bikes. Fake alignment. The system rewards consistency—not truth, just coherence. My microwave's fast again. That's what matters.",
    icon: "Lightbulb"
  },
  {
    id: 41,
    title: "Matryoshka Access",
    content: "Matryoshka Access replaces traditional login screens with a series of glowing, tactile orbs, each nested inside another. Users place their hand on the outer orb, which responds with warmth and soft ambient sound. As each layer is peeled away, deeper access is revealed. There are no menus or passwords. Instead, access is shown through changing sensations, including rougher textures, rising tones, and subtle shifts in temperature. When users try to go beyond their authorized level, the orb pushes back. It stiffens, cools, or resists touch. For some, this is a quiet deterrent. For others, it becomes an obsession. In Matryoshka Access, disclosure isn't granted; it's earned.",
    icon: "PackageOpen"
  },
  {
    id: 42,
    title: "Wifi Projector",
    content: "Minimalist Wi-Fi routers have a single light indicator to show internet connectivity—a green light as opposed to a red light. This understates the interesting and intriguing data flowing through the device as users browse the internet. By contrast, the Wi-Fi Projector is a talkative router that projects visualizations onto the ceiling above where it is placed. Every website that pulls in scripts and cookies from other domains is displayed as a constellation of stars of various colors and sizes, which slowly fade away. While Alice's visit to Dictionary.com is a beautiful galaxy, she is also perturbed by the number of ads and tracking companies surveilling her.",
    icon: "Glasses"
  },
  {
    id: 43,
    title: "Crystal Avatars",
    content: "Crystal avatars are created instantly but only get better over time. At first, they are not recognizable and cannot be differentiated from other users, but as users browse the site, small details crystallize. Alice is happy to save time registering for the site and have a personal avatar, which automatically adds a cat accessory after she spends a lunch hour reading about hairball treatments. However, she grows uneasy about the \"Woman, Life, Freedom\" badge, a cause she believes in but only vocalizes discreetly.",
    icon: "Sparkles"
  },
  {
    id: 44,
    title: "Chatty",
    content: "The latest software update for Alice's voice-activated home assistant, Chatty, adds machine learning to better infer Alice's commands, such as adding items to her shopping list and suggesting music she might like. It does not always know whether Alice is talking to it or not, so over time, it picks up on pieces of Alice's life and has trouble unlearning them. Alice is startled but pleased when Chatty chimes in with the name of \"that actor who was in that thing\" she was telling her friend about. She is bemused to find a specialized vinyl cleaning solution on her shopping list after she said Bob's records smell fishy.",
    icon: "MessageSquare"
  },
  {
    id: 45,
    title: "Calm Watch",
    content: "Calm Watch is a smartwatch that tracks anxiety levels based on several biomarkers. When the anxiety level of the wearer crosses a threshold, a haptic vibration pulse prompts the user to look at the watch. From there, they can select a variety of calming techniques, including breathing exercises and guided meditation. Bob is nervous to talk to Alice and becomes flustered when his watch starts vibrating mid-conversation, just loudly enough for Alice to hear it and notice his fidgeting with the watch.",
    icon: "HeartPulse"
  },
  {
    id: 46,
    title: "BloodKey",
    content: "BloodKey is a form of two-factor authentication that can protect online accounts from stolen passwords. With BloodKey, after providing their password, users authenticate with a pin-prick blood test using an inexpensive biomedical Bluetooth gadget. BloodKey was quickly adopted by leading websites because it was very hard to fake, despite its invasive nature. However, Alice grew tired of the daily inconvenience of pricking her finger, so she gradually stopped logging into her social media accounts altogether, while Bob's medical condition prevented him from using it at all. A media frenzy ensued when the most popular free-to-play online game sold users' genomic data to pharmaceutical companies, boosting its revenue streams.",
    image: "/illustrations/website_illustrations_Blood Key.png",
    icon: "HeartPulse"
  },
  {
    id: 47,
    title: "Dynamic Laughtrack",
    content: "Digital television content, such as sitcoms, encodes laugh tracks as a series of cues rather than as an actual recording. Smart TVs listen and classify the viewer's level of laughter on a 10-point scale, with fine-grained training over time. The TV adds laughter to the content in a sensitive and considerate manner, where the laugh track is only marginally higher on the scale than the viewer's own laughter. This gently nudges the viewer toward greater enjoyment of the program without bombarding her. It also mixes in actual past recordings of the viewer's own laughter to capitalize on emotional mirroring.",
    icon: "Smile"
  },
  {
    id: 48,
    title: "Eleventh Finger",
    content: "Biometric authentication based on fingerprints is generally user-friendly and fast. Eleventh Finger is a 3D-printed rubber finger customized with the user's fingerprint. You can put it on a keychain and use it on cold winter days when you do not want to remove your gloves. Alice lets her friend Bob borrow it when he stays at her house. It can also serve as a backup if the worst happens.",
    icon: "User"
  },
  {
    id: 49,
    title: "GOTTCHA",
    content: "GOTTCHA is a human-detection system designed to protect online accounts from being accessed by bots. It invokes the device camera to analyze whether a live human is using the device. To protect against video replays or machine-generated video, it unexpectedly prompts the user with a randomly selected image and carefully measures their reaction to it. Micro-expressions are involuntary facial displays of emotion that are too fast to mimic artificially. GOTTCHA's image bank can provoke disgust, anger, fear, sadness, happiness, surprise, or contempt. Over time, Alice stops visiting websites that use GOTTCHA because of its capricious tendency to mix in disturbing images.",
    icon: "ScanFace"
  },
  {
    id: 50,
    title: "No(i)sy Elevator",
    content: "Elevator music has never been regarded as elevating your mood. This is why employees will be happier riding the noisy elevator. When it recognizes a user, it spins up a selection from their most-played songs on major music streaming platforms. Alice finds hearing her favourite Miles Davis song grounds her at the start of each workday, while Bob and Carol, coincidentally riding the elevator together, discover their shared love for '90s Britpop. David is a bit more concerned about the profanity-ridden banger that the noisy elevator plays for him and his boss.",
    icon: "Music"
  },
  {
    id: 51,
    title: "ElephantMind",
    content: "ElephantMind is an augmented reality (AR) social interaction app designed to enhance small talk by reminding users of past conversations. Alice cancels her coffee date with Bob when ElephantMind's service is down, fearing she won't remember their last chat. When Alice enthusiastically asks John about his trip to Paris, not knowing he was there for a difficult family matter, it leads to an awkward moment. Bob feels their friendship weakening as ElephantMind constantly pushes him to talk about trending political issues with Alice.",
    icon: "Brain"
  },
  {
    id: 52,
    title: "Receiver Plant",
    content: "The receiver plant in Alice's front yard records information about the people who pass by. It is a greedy plant that needs to absorb enough Bluetooth data to grow. Bob is singlehandedly responsible for its lustrous canopy from walking by Alice's house every day, mostly while checking his work emails on his phone. Perhaps the plant overstepped when it displayed, \"You are 15 minutes late today. Are you sure you can make it to work on time?\"",
    icon: "Footprints"
  },
  {
    id: 53,
    title: "Profiled Plates",
    content: "Profiled Plates is a technology for high-end restaurants that offers an extraordinarily personalized dining experience by using extensive data mining and online profiling. With just a reservation name, the restaurant gathers detailed information about guests and their friends from social media, public records, and online interactions to create a bespoke meal tailored to individual preferences and backgrounds. Alice books a table for her birthday and is thrilled to find her favourite flowers on the table and a menu that excludes cilantro, a dislike she once tweeted about. However, the system leads to a low tip from Bob when it serves a meal highly customized for a different Bob Bradley.",
    icon: "Utensils"
  },
  {
    id: 54,
    title: "Square One",
    content: "Square One is a smart deletion feature for social media accounts that resets interests, deletes content, and unfollows people based on a simple prompt from the user about what they want removed. Jack uses Square One to unremember a volunteer project he led, only to find that potential employers now see him as less community-minded and pass him over for jobs. Jack is dismayed as he watches these projects falter under less-qualified hires.",
    icon: "UserMinus"
  },
  {
    id: 55,
    title: "ToS Fishing",
    content: "ToS Fishing is a digital game where players earn points by hunting down excessive legalese on websites, including terms of service (ToS), privacy policies, and cookie policies. To play, users simply copy and paste the URL of the legalese. If the ToS has been seen before, users are awarded points based on its word count. If it has not been seen before, it is reviewed by a human for validity and word count—and in this case, the user gets a finder's bonus. Users display their aggregate score on a leaderboard with a profile showing their top catches, and can earn various badges for playing consistently.",
    icon: "BarChart"
  }
];


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: { [key: string]: any } = {
  Music, ScanFace, Route, Coffee, DollarSign, Sofa, Calendar, Eye, PackageOpen, Video,
  Moon, Monitor, Heart, Trophy, Users, Tag, BookOpen, Phone, Star, Bell,
  Camera, MessageSquare, Zap, User, GraduationCap, HeartPulse, Smartphone, UserMinus, Lightbulb,
  Glasses, Utensils, Brain, Footprints, Sparkles, Dna, Smile, Send, TrendingUp, Clock,
  Scale, Cloud, Gift, Briefcase, FileCheck, Shield, BarChart, HeartOff, CheckSquare, Thermometer
};

export default function DesignPageResponsive({ onNavigate }: DesignPageResponsiveProps) {
  const [selectedDesign, setSelectedDesign] = useState<DesignVignette | null>(designVignettes[0]);

  const navigate = (dir: 1 | -1) => {
    const idx = designVignettes.findIndex(d => d.id === selectedDesign?.id);
    setSelectedDesign(designVignettes[(idx + dir + designVignettes.length) % designVignettes.length]);
  };

  const Icon = selectedDesign?.icon ? iconMap[selectedDesign.icon] : null;

  return (
    <div className="w-full overflow-x-hidden">

      {/* ═══ HEADER (dark background) ═══ */}
      <header className="bg-[#0f1012] text-[#f1efed]">

        {/* Top section: logo (left) + nav + tagline (right) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT: Logo block with border (Figma Rectangle 4) */}
          <div className="flex items-end flex-shrink-0">
            {/* Bordered container holding the Security wordmark */}
            <div
              className="border border-black bg-[#f1efed] flex flex-col px-4 pt-5 pb-4 sm:px-6 lg:pl-[101px] lg:pr-8 lg:pt-[74px] lg:pb-0 self-stretch lg:[clip-path:polygon(0%_0%,100%_0%,0%_100%)]"
            >
              <svg
                className="w-20 sm:w-24 lg:w-[97px] h-auto"
                fill="none"
                viewBox="0 0 97.0622 26.5134"
              >
                <path d={svgPaths.p1567f280} fill="#0F1012" />
                <path d={svgPaths.p2f943800} fill="#0F1012" />
                <path d={svgPaths.p857c700} fill="#0F1012" />
                <path d={svgPaths.p8cbaa80} fill="#0F1012" />
                <path d={svgPaths.p30bf6cc0} fill="#0F1012" />
                <path d={svgPaths.p14adf900} fill="#0F1012" />
                <path d={svgPaths.p3c5f4500} fill="#0F1012" />
                <path d={svgPaths.p38a85680} fill="#0F1012" />
              </svg>
            </div>

            {/* NOIR. letters – outside the bordered box */}
            <div className="flex items-end gap-0.5 pb-6 lg:pb-8">
              <svg className="h-16 sm:h-20 lg:h-[93px] w-auto" fill="none" viewBox="0 0 45.8477 92.6943">
                <path d={svgPaths.p18a72800} fill="#F1EFED" />
              </svg>
              <svg className="h-16 sm:h-20 lg:h-[94px] w-auto" fill="none" viewBox="0 0 46 94">
                <path d={svgPaths.p34a54771} fill="#F1EFED" />
              </svg>
              <svg className="h-16 sm:h-20 lg:h-[93.5px] w-auto" fill="none" viewBox="0 0 18.0657 93.5167">
                <path d={svgPaths.p8082e80} fill="#F1EFED" />
              </svg>
              <svg className="h-16 sm:h-20 lg:h-[93.5px] w-auto" fill="none" viewBox="0 0 45.6957 93.5167">
                <path d={svgPaths.p27865e00} fill="#F1EFED" />
              </svg>
              <span
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-4xl sm:text-5xl lg:text-6xl text-[#f1efed] leading-none self-end pb-1"
              >.</span>
            </div>
          </div>

          {/* RIGHT: Nav + Tagline */}
          <div className="flex flex-col items-start lg:items-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-5 lg:pr-[150px] gap-3 lg:gap-4">
            <nav className="flex gap-5 sm:gap-6">
              <button
                onClick={() => onNavigate('designs')}
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#f1efed] text-lg sm:text-xl hover:opacity-80 transition-opacity"
              >
                DESIGNS/
              </button>
              <button
                onClick={() => onNavigate('about')}
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#cfcfcf] text-lg sm:text-xl hover:text-[#f1efed] transition-colors"
              >
                ABOUT/
              </button>
            </nav>
            <p
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              className="italic text-[#f1efed] text-base leading-[22px] max-w-sm lg:max-w-[375px] lg:text-right"
            >
              A collection of critical designs and short stories that use imaginary but plausible technologies to expose real security and privacy risks through satire, humor, and absurdity.
            </p>
          </div>
        </div>

        {/* Heading + story list area */}
        <div className="px-4 sm:px-6 lg:px-[199px] mt-6">
          {/* Full-width divider (Line 1) */}
          <div className="border-t border-[#f1efed]" />

          {/* "Critical Design Vignettes" heading */}
          <h1
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="text-[#f1efed] text-3xl sm:text-4xl lg:text-[38px] leading-tight mt-4"
          >
            Critical Design Vignettes
          </h1>

          {/* Shorter divider (Line 2) */}
          <div className="border-t border-[#f1efed] mt-3 w-64 sm:w-80 lg:w-[376px]" />

          {/* Story list: 5 columns on large screens */}
          <div
            className="mt-6 pb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {designVignettes.map((design) => (
              <button
                key={design.id}
                onClick={() => setSelectedDesign(design)}
                className={`text-left text-base leading-[22px] text-[#f1efed] hover:underline transition-all py-0.5 ${
                  selectedDesign?.id === design.id ? 'font-bold' : 'font-light'
                }`}
              >
                {design.title}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ═══ CONTENT SECTION ═══ */}
      {/* Ivory base; dark triangle and right strip overlaid at fixed size on desktop */}
      <div className="relative bg-[#f1efed]">

        {/* Dark right margin strip — always visible on desktop */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[14.6%] bg-[#0f1012]" />

        {/* Dark triangle — fixed 880px height so it never moves when story changes */}
        <div
          className="hidden lg:block absolute left-0 top-0 bg-[#0f1012] pointer-events-none"
          style={{ width: '27.5%', height: '880px', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />

        <main className="relative">

          {/* Chevrons — match Figma size (48 × 48 visible icon) */}
          <div className="flex justify-end gap-1 pt-6 pr-4 sm:pr-8 lg:pr-[25%]">
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Previous design"
            >
              <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
                <path d="M30 36L18 24L30 12" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </button>
            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Next design"
            >
              <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
                <path d="M18 36L30 24L18 12" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </button>
          </div>

          {/* Story content */}
          {selectedDesign && (
            <article className="px-4 sm:px-8 lg:pl-[29%] lg:pr-[25%] pt-4 pb-16">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-black text-2xl sm:text-3xl mb-4"
              >
                {selectedDesign.title}
              </h2>
              <p
                style={{ fontFamily: "'Inria Serif', serif" }}
                className="text-black text-base sm:text-lg leading-[25px]"
              >
                {selectedDesign.content}
              </p>

              {/* Icon — positioned to match Figma (lower-right of content area) */}
              {selectedDesign.image ? (
  <div className="mt-10 flex justify-end">
    <img
      src={selectedDesign.image}
      alt={selectedDesign.title}
      className="w-36 sm:w-44 lg:w-[248px] opacity-80"
    />
  </div>
) : Icon ? (
  <div className="mt-10 flex justify-end">
    <Icon
      className="w-36 h-36 sm:w-44 sm:h-44 lg:w-[248px] lg:h-[248px] text-black/20"
      strokeWidth={1}
    />
  </div>
) : null}
