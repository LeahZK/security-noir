import svgPaths from "../imports/svg-m0bqbyr8st";

interface AboutPageResponsiveProps {
  onNavigate: (page: 'designs' | 'about') => void;
}

/* ============================================================
   SHARED DIAGONAL GEOMETRY — taken directly from Figma
   Figma grey triangle SVG:
     <path d="M0 576.828V0H244L0 576.828Z" fill="#F1EFED"/>
   Vertices: (0,0) -> (244,0) -> (0,576.828)
   A right triangle filling the UPPER-LEFT corner:
     clip-path: polygon(0 0, 100% 0, 0 100%)
   Hypotenuse leans 22.929 deg from vertical.
   Every diagonal derives from WEDGE_RATIO, so all diagonals
   on the page are parallel by construction.
   ============================================================ */
const FIGMA_W = 244;
const FIGMA_H = 576.828;
const WEDGE_RATIO = FIGMA_W / FIGMA_H;   // 0.423003 -> 22.929 deg

const runFor = (heightPx: number) => heightPx * WEDGE_RATIO;

const HEADER_WEDGE_H = FIGMA_H;  // grey triangle deliberately spills past the header
const CONTENT_H = 880;

/* Mobile hero wedge — same 22.929° angle, sized for the compact mobile header.
   Kept identical to DesignPageResponsive.tsx so both pages match; tweak
   this one number on both files together if it needs to change. */
const MOBILE_WEDGE_H = 140;

/* Tablet wedges — confirmed from Figma (iPad Pro 11", 834px frame):
   header wedge SVG measured 204x482 (204/482 = 0.4232, matches WEDGE_RATIO),
   content wedge measured 217x513 (217/513 = 0.4231, also matches). */
const TABLET_HEADER_WEDGE_H = 482;
const TABLET_CONTENT_H = 513;

/* "Security" wordmark — exact Figma layer values
   size 97.062 x 26.513, position x=101 y=74
   Its right edge lands 3.4px clear of the diagonal. */
const SEC_W = 97.062;
const SEC_X = 101;
const SEC_Y = 74;

/* NOIR — exact Figma values, taken from the "N" layer:
   N is 45.848 x 92.694 at x=198, y=74.
   Security ends at x=198.1 and N begins at x=198, so the two
   wordmarks are flush and the diagonal passes between them.
   The diagonal at N's top edge is x=212.7, i.e. it deliberately
   slices ~14.7px across the N's top-left corner. That overlap is
   part of the design, so NOIR must NOT be pushed clear of it. */
const NOIR_X = 198;        // N left edge  (Security ends at 198.1 -> flush)
const NOIR_BASELINE = 166.7;  // N bottom = 74 + 92.694
const NOIR_H = 92.694;     // N height
const NOIR_GAP = 7.762;    // tuned so NOIR spans exactly 198 -> 375.7 (Figma)

/* Mobile logo scale — confirmed from Figma: Security+NOIR combined bounding
   box measured 175 x 60.287 on the 390px mobile frame, vs 274.7 x 92.694
   combined on desktop. That's ~0.637 (width) and ~0.650 (height) — close
   enough to be one uniform scale, not a stretch/squish. Using 0.64 and
   deriving every mobile position/size from it, rather than hand-tuning each
   number, keeps the whole lockup proportional if this ever needs retuning. */
const MOBILE_LOGO_SCALE = 0.64;
const MOBILE_SEC_W = SEC_W * MOBILE_LOGO_SCALE;
const MOBILE_SEC_X = SEC_X * MOBILE_LOGO_SCALE;
const MOBILE_SEC_Y = SEC_Y * MOBILE_LOGO_SCALE;
const MOBILE_NOIR_X = NOIR_X * MOBILE_LOGO_SCALE;
const MOBILE_NOIR_BASELINE = NOIR_BASELINE * MOBILE_LOGO_SCALE;
const MOBILE_NOIR_H = NOIR_H * MOBILE_LOGO_SCALE;
const MOBILE_NOIR_GAP = NOIR_GAP * MOBILE_LOGO_SCALE;
const MOBILE_LOGO_CONTAINER_H = 122; // scaled from desktop's 190px container the same way

interface TeamMember {
  name: string;
  photo: string;
  bio: string;
}

/* Display order confirmed by user: Didem, Leah, Jeremy.
   Photo paths match where the files actually live in the repo: public/
   root (no team/ subfolder), with the exact uploaded filenames. */
const team: TeamMember[] = [
  {
    name: "Didem Demirag",
    photo: "Didem.jpg",
    bio: "Didem Demirag holds a PhD in Information and Systems Engineering from Concordia University and is currently a lecturer in the Department of Computer Science at UQAM. She is also a graphic designer, passionate about making complex scientific concepts accessible through visual storytelling and creative approaches. She teaches courses in information security and computer science and society, exploring the relationship between technology, ethics, and society. Her research interests focus on data privacy and applied cryptography. She has also conducted research on scientific writing, examining how researchers use the opening sentences of their papers to establish context and engage readers."
  },
  {
    name: "Leah Zhang-Kennedy",
    photo: "leah_300x300.png",
    bio: "Leah Zhang-Kennedy is an Associate Professor of Interaction Design and User Experience Research, and directs the Safe Interactions Lab at the Stratford School of Interaction Design and Business, University of Waterloo. Zhang-Kennedy's research aims to understand and improve people's digital experiences, knowledge, and technology practices, with particular focuses on computer security, online privacy, and digital literacy. Her research bridges multidisciplinary expertise in human-computer interaction (HCI), user experience design and research (UX), and graphic design."
  },
  {
    name: "Jeremy Clark",
    photo: "media.8105.512.jpg",
    bio: "Jeremy Clark is a professor in Cybersecurity and Intelligent Systems Engineering at Concordia University. He obtained his PhD from the University of Waterloo, where his gold medal dissertation was on designing and deploying secure voting systems including Scantegrity—the first cryptographically verifiable system used in a public sector election. His work continues to examine how emerging technologies shape public institutions, from secure elections to digital currencies, and he has advised municipalities and testified before Canadian parliamentary committees on these issues."
  }
];

export default function AboutPageResponsive({ onNavigate }: AboutPageResponsiveProps) {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#0f1012]">

      {/* Grey triangle — exact Figma shape: 244 x 576.828
            <path d="M0 576.828V0H244L0 576.828Z" fill="#F1EFED"/>
          Anchored to the PAGE ROOT, not the header, because it is 576.828px
          tall and must run past the header's 190px without being clipped. */}
      <div
        aria-hidden="true"
        className="hidden min-[1200px]:block absolute top-0 left-0 bg-[#f1efed] z-20 pointer-events-none"
        style={{
          width: `${runFor(HEADER_WEDGE_H)}px`,
          height: `${HEADER_WEDGE_H}px`,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* Tablet grey wedge — 600–1199px, confirmed size from Figma. */}
      <div
        aria-hidden="true"
        className="hidden min-[600px]:max-[1199px]:block absolute top-0 left-0 bg-[#f1efed] z-20 pointer-events-none"
        style={{
          width: `${runFor(TABLET_HEADER_WEDGE_H)}px`,
          height: `${TABLET_HEADER_WEDGE_H}px`,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* Mobile grey wedge — below 600px, same angle, smallest footprint. */}
      <div
        aria-hidden="true"
        className="block min-[600px]:hidden absolute top-0 left-0 bg-[#f1efed] z-20 pointer-events-none"
        style={{
          width: `${runFor(MOBILE_WEDGE_H)}px`,
          height: `${MOBILE_WEDGE_H}px`,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* ═══ HEADER (dark background) ═══ */}
      <header className="bg-[#0f1012] text-[#f1efed] relative">

        {/* Top section: logo (left) + nav + tagline (right).
            Row layout at EVERY breakpoint (mirrors DesignPageResponsive.tsx) —
            fixes the mobile "stacking" bug where nav/tagline used to fall
            below the logo instead of sitting beside it. */}
        <div className="flex flex-row items-center justify-between">

          {/* LEFT: grey wedge holding "Security", NOIR sits on the dark side.
              Two variants: mobile (scaled ~64%, confirmed from Figma) and
              tablet+desktop (full Figma pixel size). */}
          <div
            className="relative flex-shrink-0 h-[122px] min-[600px]:h-[190px]"
          >
            {/* ---- Mobile logo (below 600px) ---- */}
            <div className="block min-[600px]:hidden">
              <svg
                className="absolute h-auto z-30"
                style={{ width: `${MOBILE_SEC_W}px`, left: `${MOBILE_SEC_X}px`, top: `${MOBILE_SEC_Y}px` }}
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

              <div
                className="absolute flex items-end z-30"
                style={{
                  left: `${MOBILE_NOIR_X}px`,
                  top: `${MOBILE_NOIR_BASELINE - MOBILE_NOIR_H}px`,
                  gap: `${MOBILE_NOIR_GAP}px`,
                }}
              >
                <svg className="w-auto" style={{ height: `${MOBILE_NOIR_H}px` }} fill="none" viewBox="0 0 45.8477 92.6943">
                  <path d={svgPaths.p18a72800} fill="#F1EFED" />
                </svg>
                <svg className="w-auto" style={{ height: `${MOBILE_NOIR_H}px` }} fill="none" viewBox="0 0 46 94">
                  <path d={svgPaths.p34a54771} fill="#F1EFED" />
                </svg>
                <svg className="w-auto" style={{ height: `${MOBILE_NOIR_H}px` }} fill="none" viewBox="0 0 18.0657 93.5167">
                  <path d={svgPaths.p8082e80} fill="#F1EFED" />
                </svg>
                <svg className="w-auto" style={{ height: `${MOBILE_NOIR_H}px` }} fill="none" viewBox="0 0 45.6957 93.5167">
                  <path d={svgPaths.p27865e00} fill="#F1EFED" />
                </svg>
              </div>
            </div>

            {/* ---- Tablet + desktop logo (600px+), full Figma size ---- */}
            <div className="hidden min-[600px]:block">
              {/* "Security" — sits on the grey side */}
              <svg
                className="absolute h-auto z-30"
                style={{ width: `${SEC_W}px`, left: `${SEC_X}px`, top: `${SEC_Y}px` }}
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

              {/* NOIR — sits on the dark side, right of the diagonal */}
              <div
                className="absolute flex items-end z-30"
                style={{
                  left: `${NOIR_X}px`,
                  top: `${NOIR_BASELINE - NOIR_H}px`,
                  gap: `${NOIR_GAP}px`,
                }}
              >
                <svg className="w-auto" style={{ height: `${NOIR_H}px` }} fill="none" viewBox="0 0 45.8477 92.6943">
                  <path d={svgPaths.p18a72800} fill="#F1EFED" />
                </svg>
                <svg className="w-auto" style={{ height: `${NOIR_H}px` }} fill="none" viewBox="0 0 46 94">
                  <path d={svgPaths.p34a54771} fill="#F1EFED" />
                </svg>
                <svg className="w-auto" style={{ height: `${NOIR_H}px` }} fill="none" viewBox="0 0 18.0657 93.5167">
                  <path d={svgPaths.p8082e80} fill="#F1EFED" />
                </svg>
                <svg className="w-auto" style={{ height: `${NOIR_H}px` }} fill="none" viewBox="0 0 45.6957 93.5167">
                  <path d={svgPaths.p27865e00} fill="#F1EFED" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT: Nav + Tagline — pinned top-right at every breakpoint.
              Narrower column + smaller type on mobile so it doesn't collide
              with NOIR, which keeps its Figma pixel size on all screens.
              (Same values as DesignPageResponsive.tsx; only the active/
              inactive nav colors differ, since ABOUT/ is active here.) */}
          <div className="flex flex-col items-end px-4 min-[600px]:max-[1199px]:px-6 min-[1200px]:px-0 pt-3 min-[600px]:max-[1199px]:pt-4 min-[1200px]:pt-5 min-[1200px]:pr-[150px] gap-2 min-[600px]:max-[1199px]:gap-3 min-[1200px]:gap-4">
            <nav className="flex gap-3 min-[600px]:max-[1199px]:gap-4 min-[1200px]:gap-6">
              <button
                onClick={() => onNavigate('designs')}
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#cfcfcf] text-xs min-[600px]:max-[1199px]:text-[20px] min-[1200px]:text-lg hover:text-[#f1efed] transition-colors"
              >
                DESIGNS/
              </button>
              <button
                onClick={() => onNavigate('about')}
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#f1efed] text-xs min-[600px]:max-[1199px]:text-[20px] min-[1200px]:text-lg hover:opacity-80 transition-opacity"
              >
                ABOUT/
              </button>
            </nav>
            {/* Tagline: mobile/desktop use Inter (medium); tablet uses
                Inria Serif (regular) at 13px/375px — confirmed from Figma. */}
            <p
              className="italic font-['Inter'] font-medium min-[600px]:max-[1199px]:font-['Inria_Serif'] min-[600px]:max-[1199px]:font-normal min-[1200px]:font-['Inter'] min-[1200px]:font-medium text-[#f1efed] text-[10px] min-[600px]:max-[1199px]:text-[13px] min-[1200px]:text-base leading-[14px] min-[600px]:max-[1199px]:leading-[22px] min-[1200px]:leading-[22px] max-w-[130px] min-[600px]:max-[1199px]:max-w-[375px] min-[1200px]:max-w-[375px] text-left"
            >
              A collection of critical designs and short stories that use imaginary but plausible technologies to expose real security and privacy risks through satire, humor, and absurdity.
            </p>
          </div>
        </div>

        {/* Heading + intro area — same structure as the design page */}
        <div className="px-4 min-[600px]:max-[1199px]:px-6 min-[1200px]:px-[199px] mt-6">
          {/* Full-width divider (Line 1) */}
          <div className="border-t border-[#f1efed]" />

          {/* "About" heading — 32px tablet size confirmed from Figma */}
          <h1
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="text-[#f1efed] text-3xl min-[600px]:max-[1199px]:text-[32px] min-[1200px]:text-[38px] leading-tight mt-4"
          >
            About
          </h1>

          {/* Shorter divider (Line 2) */}
          <div className="border-t border-[#f1efed] mt-3 w-64 min-[600px]:max-[1199px]:w-80 min-[1200px]:w-[376px]" />

          {/* Intro paragraph — sits on the dark area. Tablet: 648px fixed
              width, 16px/36px line-height, bold spans go extrabold (800) —
              all confirmed from Figma. */}
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="mt-6 pb-10 text-[#f1efed] text-[12px] min-[600px]:max-[1199px]:text-base min-[1200px]:text-base leading-[22px] min-[600px]:max-[1199px]:leading-[36px] min-[1200px]:leading-[22px] font-light max-w-[820px] min-[600px]:max-[1199px]:max-w-[648px]"
          >
            Security Noir draws on the{' '}
            <span className="font-extrabold">critical design</span> movement popularized
            by Dunne and Raby in the 1990s to imagine{' '}
            <span className="font-extrabold">fictional yet plausible technologies</span>{' '}
            that expose <span className="font-extrabold">security and privacy risks</span>.
            Each design is presented through{' '}
            <span className="font-extrabold">short narrative vignettes</span> that
            illustrate how these technologies might be experienced in everyday life.
          </p>
        </div>
      </header>

      {/* ═══ CONTENT SECTION ═══ */}
      {/* Identical structure to the design page: ivory base, dark right strip,
          dark wedge at the shared WEDGE_RATIO angle. */}
      <div className="relative bg-[#f1efed] min-h-screen flex flex-col overflow-hidden">

        {/* Dark right margin strip — desktop only */}
        <div className="hidden min-[1200px]:block absolute right-0 top-0 bottom-0 w-[14.6%] bg-[#0f1012]" />

        {/* Dark wedge — desktop */}
        <div
          className="hidden min-[1200px]:block absolute left-0 top-0 bg-[#0f1012] pointer-events-none"
          style={{
            width: `${runFor(CONTENT_H)}px`,
            height: `${CONTENT_H}px`,
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        />
        {/* Dark wedge — tablet, confirmed from Figma */}
        <div
          className="hidden min-[600px]:max-[1199px]:block absolute left-0 top-0 bg-[#0f1012] pointer-events-none"
          style={{
            width: `${runFor(TABLET_CONTENT_H)}px`,
            height: `${TABLET_CONTENT_H}px`,
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        />

        <main className="relative flex-1">
          {/* Tablet insets (pl 194px / pr 12px) confirmed from Figma —
              asymmetric since tablet has no reserved right strip. */}
          <div className="pl-4 pr-4 min-[600px]:max-[1199px]:pl-[194px] min-[600px]:max-[1199px]:pr-[12px] min-[1200px]:pl-[29%] min-[1200px]:pr-[25%] pt-10 min-[600px]:max-[1199px]:pt-12 min-[1200px]:pt-16 pb-16">
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-black text-2xl min-[1200px]:text-3xl mb-6"
            >
              Bio
            </h2>

            {/* One card per team member: circular photo + name + bio text.
                Photo is 56px on mobile, 140px on tablet+desktop (140px
                confirmed from Figma — no distinct desktop number exists yet,
                so tablet's value carries through to desktop for now). Name
                is 22px on tablet (confirmed), scaling up on desktop. */}
            <div className="flex flex-col gap-8 min-[600px]:gap-10">
              {team.map((member) => (
                <div key={member.name} className="flex flex-row items-start gap-4 min-[600px]:gap-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-[110px] h-[110px] min-[600px]:w-[140px] min-[600px]:h-[140px] rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-black text-lg min-[600px]:max-[1199px]:text-[22px] min-[1200px]:text-2xl mb-2"
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{ fontFamily: "'Inria Serif', serif" }}
                      className="text-black text-sm min-[600px]:max-[1199px]:text-base min-[1200px]:text-lg leading-[22px] min-[600px]:max-[1199px]:leading-[24px] min-[1200px]:leading-[25px]"
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
