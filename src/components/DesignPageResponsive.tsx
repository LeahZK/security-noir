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
    title: "No(i)sy Elevator",
    content: "Elevator music has never been regarded as elevating your mood. This is why employees will be happier riding the noisy elevator. When it recognizes a user, it spins up a selection from their most-played songs on major music streaming platforms. Alice finds hearing her favourite Miles Davis song grounds her at the start of each work day, while Bob and Carol, coincidentally riding the elevator together, discover their shared love for 90s britpop. David is a bit more concerned about the profanity ridden banger that the nosy elevator plays for him and his boss.",
    icon: "Music"
  },
  {
    id: 2,
    title: "Smart Mirror Mood Detection",
    content: "Your bathroom mirror now analyzes your facial expressions each morning to detect your emotional state. It automatically adjusts your home's lighting, music, and even sends pre-written texts to colleagues explaining you might be 'running late' if it detects stress or fatigue. Sarah appreciates the ambient lighting suggestions, but questions why her mirror shared her 'Monday mood' status with her entire smart home ecosystem—and apparently her insurance provider.",
    icon: "ScanFace"
  },
  {
    id: 3,
    title: "Predictive Commute Assistant",
    content: "This AI-powered app doesn't just track your location—it predicts where you're going based on your routines, calendar, and even your walking pace. It helpfully reroutes you around traffic, suggests coffee shops you'll probably want to stop at, and notifies people you're meeting that you'll be 5 minutes late before you even realize it yourself. Tom loves the convenience until he notices it predicted his unscheduled therapy appointments with unsettling accuracy.",
    icon: "Route"
  },
  {
    id: 4,
    title: "Social Credit Coffee Machine",
    content: "The office coffee machine now rewards 'positive workplace behaviors' with free upgrades. Arrive early? Get a free shot of espresso. Respond to emails within 5 minutes? Unlock the premium beans. Miss a deadline? Back to instant coffee for you. The leaderboard in the break room shows who's earned the most 'productivity points' this week, turning coffee breaks into competitive performance reviews.",
    icon: "Coffee"
  },
  {
    id: 5,
    title: "Transparent Salary Badges",
    content: "In the name of workplace equality and transparency, all employees now wear digital badges that display their current salary, last raise percentage, and performance rating. The company claims this reduces pay discrimination, but nobody expected the awkward conversations, jealousy, and the informal 'salary zones' that emerged in the office cafeteria.",
    icon: "DollarSign"
  },
  {
    id: 6,
    title: "Productivity Posture Monitor",
    content: "Your office chair now monitors your posture, movement, and 'engagement levels' throughout the day. Slouching triggers a gentle vibration. Standing up too frequently? The system logs it as potential distraction time. The wellness team celebrates reduced back pain incidents, while employees discover their 'bathroom break efficiency scores' are now part of their quarterly reviews.",
    icon: "Sofa"
  },
  {
    id: 7,
    title: "Automated Friendship Scheduler",
    content: "Never lose touch with friends again! This app monitors your social connections and automatically schedules catch-up calls, coffee dates, and check-ins when it detects you haven't interacted in a while. Friends receive cheerful calendar invites: 'Mandatory Friendship Maintenance - 45 minutes.' The algorithm knows your relationship is weakening before you do, and it's determined to help—whether you want it to or not.",
    icon: "Calendar"
  },
  {
    id: 8,
    title: "Emotion-Responsive Advertising",
    content: "Digital billboards equipped with facial recognition now display ads based on your detected emotional state. Stressed commuters see spa advertisements. Sad faces trigger comfort food promotions. Happy people get luxury goods. The technology is incredibly effective at converting emotions into sales, though the ethics board is still reviewing why heartbreak triggers engagement ring ads.",
    icon: "Eye"
  },
  {
    id: 9,
    title: "Dietary Compliance Fridge",
    content: "Your smart refrigerator tracks every item you store and remove, cross-referencing with your health app, fitness goals, and insurance-provided diet plan. Opening the door triggers helpful reminders about your macros, portion sizes, and that 'cheat meal' you had three days ago. The fridge can also lock itself if it detects you've exceeded your daily calorie limit, because it cares about your health more than you do.",
    icon: "PackageOpen"
  },
  {
    id: 10,
    title: "Micro-Expression Lie Detector",
    content: "Video calls now include subtle lie detection through micro-expression analysis. A small indicator shows your colleague's 'authenticity score' during meetings. Green means they're being truthful, yellow suggests uncertainty, red indicates deception. Nobody discusses the color-coded elephant in the room, but everyone notices when Karen's score drops during budget discussions.",
    icon: "Video"
  },
  {
    id: 11,
    title: "Sleep Optimization Lockdown",
    content: "Your smart home's sleep optimization system monitors your sleep quality and takes corrective action. Getting less than 7 hours? The system automatically locks your entertainment devices two hours before your calculated optimal bedtime. Scrolling social media at midnight triggers the wifi shutdown and automated lights-out. Your home is determined to optimize your sleep schedule, even if you're not.",
    icon: "Moon"
  },
  {
    id: 12,
    title: "Attention Span Advertising",
    content: "Online ads now adjust their length based on real-time attention tracking. Look away and the ad pauses. Close the tab and it follows you to the next site, resuming where it left off. The system ensures you receive the complete advertising message, whether that takes 5 seconds or 5 minutes. You can't skip what refuses to be skipped.",
    icon: "Monitor"
  },
  {
    id: 13,
    title: "Relationship Health Monitor",
    content: "A couples app that analyzes text messages, voice patterns, and time spent together to generate a 'relationship health score.' It provides helpful interventions: suggesting date nights, flagging potential arguments, and sending both partners articles about communication. The app knows your relationship is in trouble before you're willing to admit it, complete with a countdown to 'critical intervention required.'",
    icon: "HeartPulse"
  },
  {
    id: 14,
    title: "Workplace Wellness Gamification",
    content: "Every health metric is now a competitive game. Steps taken, water consumed, stress levels managed—all converted into points, badges, and leaderboards. The top performer each month gets a prime parking spot and $50 gift card. The bottom 10% get mandatory wellness coaching sessions. Nothing motivates health like public ranking and mild workplace humiliation.",
    icon: "Trophy"
  },
  {
    id: 15,
    title: "Predictive Pregnancy Targeting",
    content: "Retailers now predict pregnancy before official announcements by analyzing purchase patterns, search history, and even gait changes detected by store cameras. Expectant parents receive helpful coupons and resources—sometimes before they've taken a test. The algorithm's 94% accuracy rate is impressive, though the premature congratulations emails have caused several awkward conversations.",
    icon: "Users"
  },
  {
    id: 16,
    title: "Dynamic Pricing Profiling",
    content: "Stores now adjust prices in real-time based on your perceived income level, shopping history, and willingness to pay. Premium customers see one price, budget shoppers see another. The system maximizes profit by charging each person exactly what it thinks they'll pay. Price tags are dead—every price is personal, optimized, and completely opaque.",
    icon: "Tag"
  },
  {
    id: 17,
    title: "Mandatory Gratitude Journal",
    content: "Your employer's wellness program now requires daily gratitude journal entries to qualify for health insurance discounts. The AI analyzes your submissions for genuine positivity versus compliance-driven responses. Authentic gratitude earns points. Generic entries get flagged for coaching. Forgetting to journal three days in a row triggers a meeting with HR about your 'engagement levels.'",
    icon: "BookOpen"
  },
  {
    id: 18,
    title: "Voice Stress Analysis Customer Service",
    content: "Customer service calls now include real-time voice stress analysis. Agents receive live feedback about your frustration levels, allowing them to escalate service or offer discounts before you explicitly complain. It's incredibly effective at customer retention, though something feels unsettling about the representative knowing you're angry before you've raised your voice.",
    icon: "Phone"
  },
  {
    id: 19,
    title: "Gig Economy Reputation Scores",
    content: "Every gig worker now has a public reputation score visible to potential clients, aggregated from ratings, completion speed, and even social media sentiment. High scores unlock premium jobs and better pay. Low scores trap workers in a cycle of low-paying tasks, making it nearly impossible to rebuild their reputation. The system is efficient, meritocratic, and brutally unforgiving of a single bad day.",
    icon: "Star"
  },
  {
    id: 20,
    title: "Behavioral Nudge Notifications",
    content: "Your phone now sends 'nudges' to correct unproductive behaviors. Too much screen time? It suggests a walk. Skipping meals? Restaurant recommendations appear. Not calling your parents enough? Automated reminders with guilt-inducing subject lines. The system optimizes your life through hundreds of micro-interventions daily, because you clearly can't be trusted to make good decisions yourself.",
    icon: "Bell"
  },
  {
    id: 21,
    title: "Predictive Policing Neighborhood Watch",
    content: "Your community's smart doorbell network now uses AI to flag 'suspicious behavior' and automatically alert neighbors and police. The system claims to reduce crime by identifying patterns before incidents occur. Nobody discusses that 'suspicious' seems to correlate strongly with certain demographics, or that your teenage neighbor's late-night walk triggered three police wellness checks.",
    icon: "Camera"
  },
  {
    id: 22,
    title: "Dating App Compatibility Override",
    content: "The latest dating app uses extensive profiling to match you with objectively compatible partners—even if you're not initially attracted to them. The algorithm knows better than your instincts, showing you profiles it determines are 'optimal matches' regardless of your stated preferences. After all, what do you know about who you'll love in 5 years?",
    icon: "Heart"
  },
  {
    id: 23,
    title: "Automated Meeting Participation Scoring",
    content: "Video conferencing software now scores your meeting participation: eye contact duration, verbal contributions, attention lapses, even micro-expressions of boredom. Managers receive post-meeting reports ranking attendees by engagement. The system promises to eliminate meeting inefficiency, though most people now stare at their camera with practiced enthusiasm while thinking about lunch.",
    icon: "MessageSquare"
  },
  {
    id: 24,
    title: "Smart Clothing Posture Correction",
    content: "Shirts embedded with sensors detect poor posture and deliver gentle electric pulses to encourage correction. The system learns your patterns and adjusts intensity accordingly. Chronic slouchers receive stronger corrections. The company markets it as revolutionary wellness technology. Users describe it as having a judgemental fitness instructor living in their clothes.",
    icon: "Zap"
  },
  {
    id: 25,
    title: "Algorithmic Parenting Assistant",
    content: "This app monitors your child's development and provides real-time parenting suggestions. It tracks sleep, nutrition, screen time, educational activities, and social interactions. Green notifications praise good decisions. Red alerts flag suboptimal parenting moments. The app promises to help you raise the optimal child, though the constant performance reviews make parenting feel like a job you're failing.",
    icon: "User"
  },
  {
    id: 26,
    title: "Biometric Exam Proctoring",
    content: "Online exams now monitor eye movements, typing patterns, heart rate, and micro-expressions to detect cheating. The AI flags suspicious behavior with 98% accuracy. Students are monitored so thoroughly that bathroom breaks require approval and explanation. Academic integrity has never been higher, though test anxiety has reached unprecedented levels when students know every blink is being analyzed.",
    icon: "GraduationCap"
  },
  {
    id: 27,
    title: "Predictive Healthcare Billing",
    content: "Your insurance provider now predicts future health issues based on lifestyle data, genetic markers, and behavioral patterns. They helpfully adjust your premiums before you're diagnosed, because actuarial fairness means charging you for the disease you'll probably get. The system is remarkably accurate, which somehow makes it feel worse.",
    icon: "Heart"
  },
  {
    id: 28,
    title: "Social Media Mood Manipulation",
    content: "Platforms now actively adjust your feed to optimize your emotional state for maximum engagement. Feeling too happy? Here's some rage-bait. Too sad? Have some envy-inducing success stories. The system keeps you in the emotional sweet spot for clicking, sharing, and scrolling. Your feelings are just another variable to optimize for ad revenue.",
    icon: "Smartphone"
  },
  {
    id: 29,
    title: "Automated Friendship Termination",
    content: "Your social wellness app monitors relationship health and suggests when friendships have run their course. It analyzes conversation frequency, sentiment, mutual benefit, and emotional reciprocity. When a friendship drops below threshold, you receive a notification: 'This relationship no longer serves your growth. Suggested action: Gradual withdrawal.' The app even drafts the ghosting message for you.",
    icon: "UserMinus"
  },
  {
    id: 30,
    title: "Productivity-Based Lighting",
    content: "Office lighting now adjusts based on collective productivity metrics. High-performing teams get warm, pleasant lighting. Underperforming teams receive stark, clinical brightness until metrics improve. The system gamifies workplace ambiance, creating an environment where your colleagues' comfort depends on your output. Nothing builds team cohesion like being the reason everyone's working under fluorescent punishment.",
    icon: "Lightbulb"
  },
  {
    id: 31,
    title: "Implicit Bias Detection Glasses",
    content: "AR glasses that display real-time alerts when your eye contact patterns, tone, or word choice suggest implicit bias. A gentle vibration reminds you that you've looked at male colleagues 40% more during this meeting. The technology promises to eliminate workplace discrimination through constant behavioral correction. Users report feeling like they're playing a high-stakes game of 'don't be problematic' during every conversation.",
    icon: "Glasses"
  },
  {
    id: 32,
    title: "Algorithmic Lunch Group Optimization",
    content: "Your company's social wellness system analyzes communication patterns and automatically creates lunch groups to maximize cross-departmental networking and diversity metrics. Every Tuesday, you receive your assigned lunch companions and suggested conversation topics. Skipping lunch triggers a follow-up from HR about your 'collaborative engagement score.'",
    icon: "Utensils"
  },
  {
    id: 33,
    title: "Dream Content Analysis",
    content: "A sleep headband that monitors brain activity to analyze dream content, providing morning reports about your subconscious concerns, desires, and mental health indicators. The data syncs with your therapy app, insurance provider, and employer wellness program. You're not sure when your dreams stopped being private, but the algorithm insists this recurring anxiety dream about deadlines suggests you need stress management training.",
    icon: "Brain"
  },
  {
    id: 34,
    title: "Pedestrian Behavior Prediction",
    content: "Smart city cameras now predict pedestrian behavior to optimize traffic flow. The system knows you'll cross against the light based on your gait, phone usage, and historical patterns. Traffic adjusts accordingly, improving efficiency by 23%. The jaywalking tickets that arrive via email before you've finished crossing are an unfortunate side effect of predictive enforcement.",
    icon: "Footprints"
  },
  {
    id: 35,
    title: "Mandatory Mindfulness Compliance",
    content: "Your employer now requires 10 minutes of mindfulness meditation daily, verified through a wrist sensor that monitors heart rate variability and stress markers. Authentic meditation earns wellness points. Faking it gets flagged. The irony of mandatory relaxation enforced through biometric surveillance is not lost on anyone, though nobody says it aloud during the compliance meditation sessions.",
    icon: "Sparkles"
  },
  {
    id: 36,
    title: "Genetic Career Optimization",
    content: "A service that analyzes your DNA to suggest optimal career paths based on genetic predispositions for intelligence, creativity, physical ability, and stress tolerance. The recommendations are eerily accurate, which makes ignoring them feel like wasting your genetic potential. Several people have quit their passion careers to pursue their 'biological destiny,' wondering if they're living their life or their genome's expectations.",
    icon: "Dna"
  },
  {
    id: 37,
    title: "Emotion-Trading Marketplace",
    content: "A platform where people rent out their positive emotional data to advertisers and content creators. Feeling genuinely joyful? License that authentic happiness to a brand's campaign. Your real emotions become commodities, bought and sold by companies seeking genuine human responses for their algorithms. The gig economy finally found a way to monetize your feelings.",
    icon: "Smile"
  },
  {
    id: 38,
    title: "Automated Apology Generator",
    content: "AI that monitors your communications and automatically sends apologies when it detects you've said something potentially offensive, insensitive, or socially inappropriate. The system apologizes before you've realized your mistake, sometimes before the recipient has even read the original message. You're not sure whether to be grateful or concerned that an algorithm understands your social failures better than you do.",
    icon: "Send"
  },
  {
    id: 39,
    title: "Predictive Promotion Tracking",
    content: "Your employer's HR system now predicts promotion likelihood based on performance data, communication patterns, and organizational politics. Employees can see their 'promotion probability score' update in real-time. The transparency is meant to empower workers, but mostly it creates an obsessive culture of constantly checking your score like a workplace credit rating that determines your professional worth.",
    icon: "TrendingUp"
  },
  {
    id: 40,
    title: "Social Timeout Enforcement",
    content: "Your phone detects when you've spent too much time on social media and enforces a 'social timeout' by blocking apps for your own good. The system claims to protect your mental health through mandatory digital wellness. The timeout duration increases if you attempt to circumvent it. Your phone has become a parent you can't argue with, grounding you from the internet for your own protection.",
    icon: "Clock"
  },
  {
    id: 41,
    title: "Relationship Equity Calculator",
    content: "An app that tracks every favor, chore, emotional labor, and financial contribution in your relationship, calculating a running 'equity score' for each partner. It promises to eliminate resentment through quantified fairness. Instead, it transforms love into a zero-sum ledger where loading the dishwasher earns points and forgetting an anniversary creates relationship debt with calculated interest.",
    icon: "Scale"
  },
  {
    id: 42,
    title: "Automated Grief Management",
    content: "A service that monitors social media and sends condolences on your behalf when someone in your network experiences loss. It drafts personalized messages, sends flowers, and even schedules follow-up check-ins at psychologically optimal intervals. You're outsourcing emotional labor to an algorithm that's better at remembering to be compassionate than you are, which somehow makes the loneliness worse.",
    icon: "Cloud"
  },
  {
    id: 43,
    title: "Performance-Based Office Temperature",
    content: "Climate control systems that adjust office temperature based on team productivity metrics. High-performing teams enjoy comfortable temperatures. Underperforming teams experience gradually uncomfortable conditions until output improves. The company calls it 'environmental motivation.' Employees call it 'thermal hostage situations,' working faster to escape the cold rather than inspire genuine productivity.",
    icon: "Thermometer"
  },
  {
    id: 44,
    title: "Algorithmic Gift Selection",
    content: "Never stress about gift-giving again! This service analyzes recipients' social media, purchase history, and expressed interests to select and purchase optimal gifts on your behalf. It removes the anxiety of choosing, along with any personal thought or effort. Your friends receive algorithmically perfect presents accompanied by your name, wondering when gift-giving became so efficient and so empty.",
    icon: "Gift"
  },
  {
    id: 45,
    title: "Predictive Resignation Detection",
    content: "HR analytics that predict employee resignation risk based on email sentiment, calendar patterns, LinkedIn activity, and work output changes. Managers receive alerts when team members hit 'flight risk' thresholds, triggering retention interventions before you've consciously decided to leave. The system knows you're quitting before you do, which feels less like support and more like surveillance you can't escape even in your own career decisions.",
    icon: "Briefcase"
  },
  {
    id: 46,
    title: "Automated Consent Management",
    content: "A system that automatically accepts or declines terms of service, privacy policies, and cookie notices based on your pre-set preferences and risk tolerance. You never read those agreements anyway—why not let AI do it? The convenience is undeniable until you discover you've unknowingly consented to facial recognition, location tracking, and data sharing because the algorithm decided the service value outweighed privacy concerns.",
    icon: "FileCheck"
  },
  {
    id: 47,
    title: "Personality-Based Insurance Pricing",
    content: "Insurance providers now use social media analysis, purchase patterns, and communication styles to assess personality-based risk. Conscientious personalities get discounts. Impulsive or neurotic profiles pay premiums. The algorithm judges your character and prices your life accordingly, turning insurance into a popularity contest where introverts and anxious people literally pay the price for their personality traits.",
    icon: "Shield"
  },
  {
    id: 48,
    title: "Mandatory Happiness Reporting",
    content: "Your workplace now requires daily happiness ratings via a quick smartphone survey. The data feeds into wellness dashboards that managers review weekly. Consistent low ratings trigger mandatory counseling or 'culture fit' conversations. The pressure to report happiness becomes another source of unhappiness, creating a feedback loop where you're lying to an app to avoid a meeting about why you're not happy enough.",
    icon: "BarChart"
  },
  {
    id: 49,
    title: "Predictive Breakup Intervention",
    content: "Couples therapy apps now predict relationship dissolution with 89% accuracy based on communication patterns, conflict frequency, and sentiment analysis. When the algorithm determines a breakup is imminent, it automatically books emergency therapy sessions, sends both partners research articles, and alerts designated support friends. The system tries to save your relationship before you've admitted it's ending, which feels invasive even when it's right.",
    icon: "HeartOff"
  },
  {
    id: 50,
    title: "Biometric Voting Verification",
    content: "Elections now use mandatory biometric verification: fingerprints, facial recognition, and even emotion detection to ensure authentic voting. The system eliminates fraud and confirms you're voting without coercion by analyzing your stress levels and micro-expressions. Democracy becomes more secure and more surveilled, leaving voters to wonder whether privacy or security matters more when both seem impossible to preserve.",
    icon: "CheckSquare"
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
              {Icon && (
                <div className="mt-10 flex justify-end">
                  <Icon
                    className="w-36 h-36 sm:w-44 sm:h-44 lg:w-[248px] lg:h-[248px] text-black/20"
                    strokeWidth={1}
                  />
                </div>
              )}
            </article>
          )}
        </main>
      </div>
    </div>
  );
}
