import { Star } from 'lucide-react';

export default function RevenueSection() {
  const testimonials = [
    {
      name: 'Sarah Miller',
      role: 'Brand Owner',
      feedback: 'Game changer for our business. Our engagement went from 2% to 8.5% in just 3 months. The team really understands what works.',
      avatar: '👩‍💼',
      rating: 4
    },
    {
      name: 'Marcus Chen',
      role: 'E-commerce CEO',
      feedback: 'Best decision we made this year. Went from 5K followers to 125K followers and sales tripled. They actually know their stuff.',
      avatar: '👨‍💼',
      rating: 3
    },
    {
      name: 'Jessica Rivera',
      role: 'Coffee Shop Owner',
      feedback: 'Love working with this team. They got our small business on the map. Customers see us everywhere now and it actually converts.',
      avatar: '👩‍🎨',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Fitness Coach',
      feedback: 'Tried other agencies before. None of them gave us this level of detail and results. Highly recommend to anyone serious about growth.',
      avatar: '👨‍🏫',
      rating: 4
    },
    {
      name: 'Emma Wilson',
      role: 'SaaS Founder',
      feedback: 'They took our messaging and made it actually connect with people. Our conversion rate jumped 120% in the first quarter.',
      avatar: '👩‍💻',
      rating: 3
    },
    {
      name: 'Alex Garcia',
      role: 'Influencer',
      feedback: 'Their strategy is different. Genuine approach, real results. My audience grew because they understood what they wanted to see.',
      avatar: '🧑‍🎤',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative bg-[#0a0a1f] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg">
            Real feedback from brands we've helped grow
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(50%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .marquee-content {
            animation: scroll-left 20s linear infinite;
          }
        `}</style>

        <div className="marquee-content flex gap-6">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-1/2 left-0 w-20 h-full bg-gradient-to-r from-[#0a0a1f] to-transparent pointer-events-none transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-20 h-full bg-gradient-to-l from-[#0a0a1f] to-transparent pointer-events-none transform -translate-y-1/2"></div>
    </section>
  );
}
