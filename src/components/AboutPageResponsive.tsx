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

export default function AboutPageResponsive({ onNavigate }: AboutPageResponsiveProps) {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#0f1012]">

      {/* Grey triangle — exact Figma shape: 244 x 576.828
            <path d="M0 576.828V0H244L0 576.828Z" fill="#F1EFED"/>
          Anchored to the PAGE ROOT, not the header, because it is 576.828px
          tall and must run past the header's 190px without being clipped. */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 left-0 bg-[#f1efed] z-20 pointer-events-none"
        style={{
          width: `${runFor(HEADER_WEDGE_H)}px`,
          height: `${HEADER_WEDGE_H}px`,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* ═══ HEADER (dark background) ═══ */}
      <header className="bg-[#0f1012] text-[#f1efed] relative">

        {/* Top section: logo (left) + nav + tagline (right) */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT: grey wedge holding "Security", NOIR sits on the dark side.
              The wedge's slanted right edge is the divider between the two. */}
          <div
            className="relative flex-shrink-0 w-full lg:w-auto"
            style={{ height: '190px' }}
          >
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

          {/* RIGHT: Nav + Tagline */}
          <div className="flex flex-col items-start lg:items-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-5 lg:pr-[150px] gap-3 lg:gap-4">
            <nav className="flex gap-5 sm:gap-6">
              <button
                onClick={() => onNavigate('designs')}
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#cfcfcf] text-lg sm:text-xl hover:text-[#f1efed] transition-colors"
              >
                DESIGNS/
              </button>
              <button
                onClick={() => onNavigate('about')}
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#f1efed] text-lg sm:text-xl hover:opacity-80 transition-opacity"
              >
                ABOUT/
              </button>
            </nav>
            <p
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              className="italic text-[#f1efed] text-base leading-[22px] max-w-sm lg:max-w-[375px] lg:text-left"
            >
              A collection of critical designs and short stories that use imaginary but plausible technologies to expose real security and privacy risks through satire, humor, and absurdity.
            </p>
          </div>
        </div>

        {/* Heading + intro area — same structure as the design page */}
        <div className="px-4 sm:px-6 lg:px-[199px] mt-6">
          {/* Full-width divider (Line 1) */}
          <div className="border-t border-[#f1efed]" />

          {/* "About" heading */}
          <h1
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="text-[#f1efed] text-3xl sm:text-4xl lg:text-[38px] leading-tight mt-4"
          >
            About
          </h1>

          {/* Shorter divider (Line 2) */}
          <div className="border-t border-[#f1efed] mt-3 w-64 sm:w-80 lg:w-[376px]" />

          {/* Intro paragraph — sits on the dark area */}
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="mt-6 pb-10 text-[#f1efed] text-base leading-[22px] font-light max-w-[820px]"
          >
            Security Noir draws on the{' '}
            <span className="font-bold">critical design</span> movement popularized
            by Dunne and Raby in the 1990s to imagine{' '}
            <span className="font-bold">fictional yet plausible technologies</span>{' '}
            that expose <span className="font-bold">security and privacy risks</span>.
            Each design is presented through{' '}
            <span className="font-bold">short narrative vignettes</span> that
            illustrate how these technologies might be experienced in everyday life.
          </p>
        </div>
      </header>

      {/* ═══ CONTENT SECTION ═══ */}
      {/* Identical structure to the design page: ivory base, dark right strip,
          dark wedge at the shared WEDGE_RATIO angle. */}
      <div className="relative bg-[#f1efed] min-h-screen flex flex-col overflow-hidden">

        {/* Dark right margin strip */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[14.6%] bg-[#0f1012]" />

        {/* Dark wedge — same angle as the header wedge */}
        <div
          className="hidden lg:block absolute left-0 top-0 bg-[#0f1012] pointer-events-none"
          style={{
            width: `${runFor(CONTENT_H)}px`,
            height: `${CONTENT_H}px`,
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        />

        <main className="relative flex-1">
          {/* Same insets as the design page's story panel */}
          <div className="px-4 sm:px-8 lg:pl-[29%] lg:pr-[25%] pt-16 pb-16">
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-black text-2xl sm:text-3xl mb-4"
            >
              Bio
            </h2>
            <p
              style={{ fontFamily: "'Inria Serif', serif" }}
              className="text-black text-base sm:text-lg leading-[25px]"
            >
              Anonymized for peer review.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
