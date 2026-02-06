import AnimatedSection from './AnimatedSection';

export default function LogoSection() {
  const logos = [
    { name: 'NBC', text: 'NBC' },
    { name: 'Alloi', text: 'Alloi' },
    { name: 'W Hotels', text: 'W' },
    { name: 'ASTRO', text: 'ASTRO' },
    { name: 'Silke', text: 'silke' },
    { name: 'The Wall Street Journal', text: 'THE WALL STREET JOURNAL' }
  ];

  return (
    <section className="relative bg-[#0a0a1f] py-12 md:py-16 border-t border-gray-800">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 text-xs sm:text-sm mb-8 md:mb-12">
            In recognition of consistently generating exceptional client results.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">
                  {logo.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
