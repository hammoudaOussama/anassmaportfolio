'use client';

import { Instagram, Phone, Mail, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-700 to-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I’m an online fitness & nutrition coach helping people reshape their bodies using science-based training and realistic nutrition strategies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I don’t believe in extreme diets or random workouts.
                My goal is to build a system you can follow for life — not just a short transformation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Over the years I’ve worked with beginners and athletes, focusing on fat loss, muscle gain, posture improvement, and long-term habit change.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You won’t just get a program.
                You’ll understand how your body works
              </p>

            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-orange-400 mb-1">500+</div>
                <div className="text-gray-400 text-sm">Sessions Coached</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-orange-400 mb-1">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 items-center">


              {/* Social Links */}
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/maqboul_goo_gym/"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/212684815450"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="mailto:anassmaqboul06@gmail.com"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="Send Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Optional: Image or illustration */}
          <div className="flex justify-center">
            <img
              src="/images/anas.jpg"
              alt="Profile"
              className="rounded-2xl w-80 h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
