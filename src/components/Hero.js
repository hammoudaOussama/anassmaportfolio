'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Instagram, Phone, Mail } from 'lucide-react';

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!mounted) return null;

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background gradients (orange/black theme) */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-orange-700/5 to-black/5"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Content */}
            <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm{' '}
                        <span className="gradient-text animate-float">
                            Anass Maqboul
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-300 mb-6">
                        <span className="typing-animation">Fitness Coach & Personal Trainer</span>
                    </div>

                    <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                        I'm a certified fitness coach helping clients build strength, improve mobility,
                        and achieve sustainable results through personalized programs and coaching.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12">
                        <a
                            href="https://www.instagram.com/maqboul_goo_gym/"
                            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Profile"
                        >
                            <Instagram size={24} className="group-hover:text-orange-400 transition-colors" />
                        </a>
                        <a
                            href="https://wa.me/212684815450"
                            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Contact"
                        >
                            <Phone size={24} className="group-hover:text-orange-400 transition-colors" />
                        </a>
                        <a
                            href="mailto:anassmaqboul06@gmail.com"
                            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                            aria-label="Send Email"
                        >
                            <Mail size={24} className="group-hover:text-orange-400 transition-colors" />
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="btn-primary hover-glow"
                        >
                            See Programs
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-secondary"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
                        aria-label="Scroll to About section"
                    >
                        <span className="text-sm mb-2">Scroll Down</span>
                        <ChevronDown size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;