import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0a0a1f] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/nextreach-logo.svg" alt="NextReach Logo" className="w-10 h-10" />
              <span className="text-white font-semibold text-lg">NextReach</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elite social media marketing for brands with big ideas. We bring customers to our clients through strategic content and proven results.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors block">
                Services
              </button>
              <button onClick={() => scrollToSection('results')} className="text-gray-400 hover:text-white transition-colors block">
                Results
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors block">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-400 hover:text-white transition-colors block">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:nextreach.marketing1@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                nextreach.marketing1@gmail.com
              </a>
              <a href="https://instagram.com/nextreach.marketing1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
                @nextreach.marketing1
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 NextReach Inc. All rights reserved
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/nextreach.marketing1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
