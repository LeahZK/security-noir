import svgPaths from "../imports/svg-60veqkonnh";

interface AboutPageResponsiveProps {
  onNavigate: (page: 'designs' | 'about') => void;
}

export default function AboutPageResponsive({ onNavigate }: AboutPageResponsiveProps) {
  return (
    <div className="bg-[#f1efed] min-h-screen w-full overflow-x-hidden">
      {/* Main container with responsive padding */}
      <div className="relative w-full">
        {/* Header Section */}
        <header className="bg-[#0f1012] px-4 sm:px-8 md:px-16 py-6 sm:py-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Navigation with decorative line and triangle */}
            <div className="flex flex-col items-end mb-8 sm:mb-12">
              <nav className="flex justify-end gap-4 sm:gap-6">
                <button
                  onClick={() => onNavigate('designs')}
                  className="font-['Anton:Regular',sans-serif] text-[#cfcfcf] text-base sm:text-lg md:text-xl hover:text-[#f1efed] transition-colors"
                >
                  DESIGNS/
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="font-['Anton:Regular',sans-serif] text-[#f1efed] text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity"
                >
                  ABOUT/
                </button>
              </nav>
              {/* Decorative horizontal line under nav */}
              <div className="w-48 sm:w-56 h-0.5 bg-[#f1efed] opacity-10 mt-2" />
              {/* Decorative triangle facing inward */}
              <div className="w-0 h-0 border-l-[192px] sm:border-l-[224px] border-l-transparent border-t-[192px] sm:border-t-[224px] border-t-[#f1efed] opacity-5" />
            </div>

            {/* Logo Section - Security Noir. */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4 mb-8 sm:mb-12">
              {/* Security text with triangle below */}
              <div className="flex flex-col items-start">
                <svg className="w-16 sm:w-20 md:w-24 h-auto" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 97.0622 26.5134">
                  <g>
                    <path d={svgPaths.p1567f280} fill="#F1EFED" />
                    <path d={svgPaths.p2f943800} fill="#F1EFED" />
                    <path d={svgPaths.p857c700} fill="#F1EFED" />
                    <path d={svgPaths.p8cbaa80} fill="#F1EFED" />
                    <path d={svgPaths.p30bf6cc0} fill="#F1EFED" />
                    <path d={svgPaths.p14adf900} fill="#F1EFED" />
                    <path d={svgPaths.p3c5f4500} fill="#F1EFED" />
                    <path d={svgPaths.p38a85680} fill="#F1EFED" />
                  </g>
                </svg>
                {/* Decorative triangle under Security */}
                <div className="w-0 h-0 border-l-[28px] sm:border-l-[36px] md:border-l-[42px] border-l-[#f1efed]/20 border-t-[28px] sm:border-t-[36px] md:border-t-[42px] border-t-transparent mt-2" />
              </div>

              {/* Noir large letters with period */}
              <div className="flex items-end gap-0.5 sm:gap-1">
                <svg className="h-16 sm:h-20 md:h-24 w-auto" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 45.8477 92.6943">
                  <path d={svgPaths.p18a72800} fill="#F1EFED" />
                </svg>
                <svg className="h-16 sm:h-20 md:h-24 w-auto" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 46 94">
                  <path d={svgPaths.p34a54771} fill="#F1EFED" />
                </svg>
                <svg className="h-16 sm:h-20 md:h-24 w-auto" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 18.0657 93.5167">
                  <path d={svgPaths.p8082e80} fill="#F1EFED" />
                </svg>
                <svg className="h-16 sm:h-20 md:h-24 w-auto" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 45.6957 93.5167">
                  <path d={svgPaths.p27865e00} fill="#F1EFED" />
                </svg>
                <span className="font-['Anton:Regular',sans-serif] text-[#f1efed] text-3xl sm:text-4xl md:text-5xl leading-none self-end translate-y-[0.2em]">.</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-['Inter:Medium_Italic',sans-serif] italic text-[#f1efed] text-sm sm:text-base leading-relaxed max-w-md">
              A collection of critical designs and short stories that use imaginary but plausible 
              technologies to expose real security and privacy risks through satire, humor, and absurdity.
            </p>

            {/* Divider */}
            <div className="border-t border-[#f1efed] my-6 sm:my-8" />

            {/* Title */}
            <h1 className="font-['Anton:Regular',sans-serif] text-[#f1efed] text-2xl sm:text-3xl md:text-4xl mb-4">
              About
            </h1>

            {/* Subtitle line */}
            <div className="border-t border-[#f1efed] w-20 sm:w-24" />

            {/* Main about text */}
            <div className="mt-8 text-[#f1efed] text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl font-['Inter:Regular',sans-serif]">
              <p>
                Security Noir draws on the{" "}
                <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold">critical design</span>
                {" "}movement popularized by Dunne and Raby in the 1990s to imagine{" "}
                <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold">fictional yet plausible technologies</span>
                {" "}that expose{" "}
                <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold">security and privacy risks</span>
                . Each design is presented through{" "}
                <span className="font-['Inter:Bold',sans-serif] font-bold">short narrative vignettes</span>
                {" "}that illustrate how these technologies might be experienced in everyday life.
              </p>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <main className="bg-[#f1efed] px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            {/* Content blocks */}
            <article className="space-y-4">
              <h2 className="font-['Anton:Regular',sans-serif] text-xl sm:text-2xl text-black">
                Lorem Ipsum
              </h2>
              
              <div className="font-['Inria_Serif:Regular',sans-serif] text-base sm:text-lg leading-7 text-black">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </article>

            <article className="space-y-4">
              <h2 className="font-['Anton:Regular',sans-serif] text-xl sm:text-2xl text-black">
                Lorem Ipsum
              </h2>
              
              <div className="font-['Inria_Serif:Regular',sans-serif] text-base sm:text-lg leading-7 text-black">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </article>

            <article className="space-y-4">
              <h2 className="font-['Anton:Regular',sans-serif] text-xl sm:text-2xl text-black">
                Lorem Ipsum
              </h2>
              
              <div className="font-['Inria_Serif:Regular',sans-serif] text-base sm:text-lg leading-7 text-black">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
