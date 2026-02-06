import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a1f] via-[#0f0f2e] to-[#0a0a1f]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
            NextReach Marketing For Brands With
            <br />
            <span className="inline-block mt-2">—Big Ideas</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            We Bring Customers To Our Clients Through Social Media Marketing, With A Breathtaking ROI.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://forms.gle/chBTyeiDtwkHFqN88" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
           
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <img 
            src="/public/insta_3.png" 
            alt="Instagram Marketing Stats" 
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain drop-shadow-2xl rounded-3xl"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1f] to-transparent pointer-events-none"></div>
    </section>
  );
}
