import svgPaths from "../imports/svg-60veqkonnh";

interface AboutPageResponsiveProps {
  onNavigate: (page: 'designs' | 'about') => void;
}

export default function AboutPageResponsive({ onNavigate }: AboutPageResponsiveProps) {
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
              className="italic text-[#f1efed] text-base leading-[22px] max-w-sm lg:max-w-[375px] lg:text-right"
            >
              A collection of critical designs and short stories that use imaginary but plausible technologies to expose real security and privacy risks through satire, humor, and absurdity.
            </p>
          </div>
        </div>

        {/* About heading + description */}
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
          <div className="border-t border-[#f1efed] mt-3 w-20 sm:w-24 lg:w-[92px]" />

          {/* About description – Inter 21px, line-height 36px, with bold spans */}
          <p
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            className="mt-8 text-[#f1efed] text-base sm:text-lg lg:text-[21px] leading-relaxed lg:leading-[36px] max-w-4xl pb-10"
          >
            Security Noir draws on the{" "}
            <strong style={{ fontWeight: 800 }}>critical design</strong>
            {" "}movement popularized by Dunne and Raby in the 1990s to imagine{" "}
            <strong style={{ fontWeight: 800 }}>fictional yet plausible technologies</strong>
            {" "}that expose{" "}
            <strong style={{ fontWeight: 800 }}>security and privacy risks</strong>
            . Each design is presented through{" "}
            <strong style={{ fontWeight: 700 }}>short narrative vignettes</strong>
            {" "}that illustrate how these technologies might be experienced in everyday life.
          </p>
        </div>
      </header>

      {/* ═══ CONTENT SECTION ═══ */}
      {/* Ivory base; dark triangle and right strip overlaid at fixed size on desktop */}
      <div className="relative bg-[#f1efed]">

        {/* Dark right margin strip */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[14.6%] bg-[#0f1012]" />

        {/* Dark triangle — fixed height so it never shifts */}
        <div
          className="hidden lg:block absolute left-0 top-0 bg-[#0f1012] pointer-events-none"
          style={{ width: '27.5%', height: '880px', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />

        <main className="relative px-4 sm:px-8 lg:pl-[29%] lg:pr-[25%] py-12 sm:py-16">
          {/* Three Lorem Ipsum sections */}
          <article className="mb-12">
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-black text-2xl sm:text-3xl mb-4"
            >
              Lorem Ipsum
            </h2>
            <p
              style={{ fontFamily: "'Inria Serif', serif" }}
              className="text-black text-base sm:text-lg leading-[25px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </article>

          <article className="mb-12">
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-black text-2xl sm:text-3xl mb-4"
            >
              Lorem Ipsum
            </h2>
            <p
              style={{ fontFamily: "'Inria Serif', serif" }}
              className="text-black text-base sm:text-lg leading-[25px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </article>

          <article className="mb-8">
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-black text-2xl sm:text-3xl mb-4"
            >
              Lorem Ipsum
            </h2>
            <p
              style={{ fontFamily: "'Inria Serif', serif" }}
              className="text-black text-base sm:text-lg leading-[25px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </article>
        </main>
      </div>
    </div>
  );
}
