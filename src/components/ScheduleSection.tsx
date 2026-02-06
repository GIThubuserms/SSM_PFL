import { Calendar, ArrowRight } from 'lucide-react';

export default function ScheduleSection() {
  const teamMembers = [
    { initials: 'JD', color: 'bg-blue-500' },
    { initials: 'SM', color: 'bg-purple-500' },
    { initials: 'AK', color: 'bg-green-500' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <section id="schedule" className="relative bg-[#0a0a1f] py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-gray-500 text-sm font-semibold tracking-wider uppercase">
              Results Obsessed
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              You're Always Welcome To Schedule A Meeting With Our Team
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              In this call, we'll discuss strategy, tailored solutions, and elaborate on exactly how we can help grow your business.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 ${member.color} rounded-full border-2 border-[#0a0a1f] flex items-center justify-center text-white text-xs font-semibold`}
                  >
                    {member.initials}
                  </div>
                ))}
              </div>
              <div className="text-gray-400 text-sm">
                Trusted By 100+ Businesses & Ecommerce Brands
              </div>
            </div>

            <a href="https://calendly.com/murtazasaleem2004/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center gap-2">
              Book A Free Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Select a Date & Time</h3>
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Discovery call
                    </label>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>30 min</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Choose time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            index === 2
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-sm text-gray-600 mb-4">
                      <strong>Your name</strong>
                    </div>
                    <div className="flex gap-2">
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full ${
                            i < 3 ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
