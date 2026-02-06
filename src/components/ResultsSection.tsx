import { ArrowRight } from 'lucide-react';

export default function ResultsSection() {
  return (
    <section id="results" className="relative bg-[#0a0a1f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-gray-500 text-sm font-semibold tracking-wider uppercase">
              Results Obsessed
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Increase Your Reach, Explode Your Sales.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              NextReach is a new breed of agency. We'll spend less than an hour onboarding you, and then we can hit the ground running by putting together your campaigns and attracting deeply loyal clients. Everything is tailored to you, your audience and your clients first.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              We know brands are looking together, while you enjoy superior results being delivered by our campaigns.
            </p>

            <button className="mt-4 text-white px-8 py-3 rounded-full font-medium border border-gray-600 hover:border-gray-400 transition-all flex items-center gap-2">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative flex justify-center">
            <img 
              src="/public/insta_4.png" 
              alt="Social Media Content Hub" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-3xl shadow-2xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
