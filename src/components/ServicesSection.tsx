import { CheckCircle2, Sparkles, TrendingUp, Users, Zap, BarChart3 } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: 'Content Creation & Strategy',
      description: 'We craft scroll-stopping content that resonates with your audience. From video editing to carousel posts, every piece is designed to convert.',
      benefits: ['Custom content calendar', 'Professional editing', 'Trend-based content', 'Multi-platform optimization']
    },
    {
      icon: TrendingUp,
      title: 'Sales-Focused Growth',
      description: 'Our strategies are built to turn followers into customers. We focus on engagement that leads to real revenue, not just vanity metrics.',
      benefits: ['Conversion optimization', 'Audience targeting', 'Sales funnel setup', 'ROI tracking']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Build loyal customers through authentic engagement. We manage your community, respond to followers, and turn them into brand advocates.',
      benefits: ['24/7 message monitoring', 'Customer relationship building', 'Crisis management', 'Engagement growth']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Full transparency on what works and what doesn\'t. Monthly detailed reports showing exactly how we\'re growing your business.',
      benefits: ['Weekly performance tracking', 'Growth metrics', 'Competitor analysis', 'Custom dashboards']
    },
    {
      icon: Zap,
      title: 'Paid Social Campaigns',
      description: 'Strategic paid advertising that doesn\'t waste money. We optimize every dollar for maximum conversions and customer acquisition.',
      benefits: ['Ad strategy & setup', 'Continuous optimization', 'Budget management', 'Lead generation']
    },
    {
      icon: CheckCircle2,
      title: 'Brand Building & Positioning',
      description: 'Develop a strong brand identity that stands out. We position your business as the go-to authority in your niche.',
      benefits: ['Brand messaging', 'Visual consistency', 'Authority building', 'Market positioning']
    }
  ];

  return (
    <>
      <section id="services" className="relative bg-[#0a0a1f] py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need To Dominate Social Media
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We provide end-to-end social media solutions designed specifically to grow your audience, increase engagement, and drive real sales. No fluff. Just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#0a0a1f] to-[#0f0f2e] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready To Grow Your Business?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of brands that have transformed their social media presence and sales with our proven strategies.
            </p>
            <a href="https://calendly.com/murtazasaleem2004/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 inline-block">
              Get Your Free Strategy Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}