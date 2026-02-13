'use client';

import { useState } from 'react';
import { MdDirectionsRun, MdFitnessCenter, MdOutlineSportsKabaddi } from 'react-icons/md';


const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('Strength');

    const skillCategories = {
        Strength: {
            icon: <MdOutlineSportsKabaddi className="inline text-orange-400" size={22} />,
            skills: [
                { name: 'Strength Training', level: 95, color: 'from-orange-600 to-orange-800' },
                { name: 'Hypertrophy Programming', level: 90, color: 'from-orange-500 to-orange-700' },
                { name: 'Barbell Techniques', level: 88, color: 'from-orange-600 to-orange-800' },
            ]
        },
        Conditioning: {
            icon: <MdDirectionsRun className="inline text-orange-400" size={22} />,
            skills: [
                { name: 'Cardio Programming', level: 90, color: 'from-orange-500 to-orange-700' },
                { name: 'Interval Training', level: 88, color: 'from-orange-400 to-orange-600' },
                { name: 'Endurance Planning', level: 85, color: 'from-orange-400 to-orange-600' },
            ]
        },
        Coaching: {
            icon: <MdFitnessCenter className="inline text-orange-400" size={22} />,
            skills: [
                { name: 'Personal Coaching', level: 95, color: 'from-orange-600 to-orange-800' },
                { name: 'Group Classes', level: 90, color: 'from-orange-500 to-orange-700' },
                { name: 'Program Design', level: 92, color: 'from-orange-600 to-orange-800' },
            ]
        },
        Nutrition: {
            icon: '🥗',
            skills: [
                { name: 'Meal Planning', level: 90, color: 'from-orange-500 to-orange-700' },
                { name: 'Macro Coaching', level: 88, color: 'from-orange-400 to-orange-600' },
                { name: 'Supplement Guidance', level: 82, color: 'from-orange-400 to-orange-600' },
            ]
        }
    };

    const certifications = [
        {
            name: 'CLub Competition Winner  Morocco',
            issuer: 'Morocco Sports Federation',
            date: '2022',

        },
        {
            name: 'NPC Winner Morocco',
            issuer: 'NPC Organization',
            date: '2023',

        },
        {
            name: 'Moroccan Throne Competition Winner',
            issuer: 'Morocco Sports Federation',
            date: '2022',

        }
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-gray-800/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are the areas and skills I coach and program as a fitness professional.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-700 to-black mx-auto mt-6"></div>
                </div>

                {/* Intro Skill Section */}
                <div className="mb-12 max-w-4xl mx-auto text-center">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I specialize in helping clients achieve real results with personalized coaching. My key skills include:
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Personalized Fitness Programs</h4>
                                <p className="text-sm text-gray-400">Tailored workouts for your goals &amp; lifestyle</p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Fat Loss &amp; Body Recomposition</h4>
                                <p className="text-sm text-gray-400">Effective strategies to lose fat &amp; gain lean muscle</p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Muscle Building &amp; Strength Training</h4>
                                <p className="text-sm text-gray-400">Progressive plans for strength &amp; hypertrophy</p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Home &amp; Gym Workout Plans</h4>
                                <p className="text-sm text-gray-400">Flexible programs for any environment</p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Nutrition &amp; Meal Planning</h4>
                                <p className="text-sm text-gray-400">Custom meal plans that fit your life</p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Posture Correction &amp; Mobility</h4>
                                <p className="text-sm text-gray-400">Improve movement, reduce injury risk</p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Online Coaching &amp; Progress Tracking</h4>
                                <p className="text-sm text-gray-400">Weekly follow-ups &amp; adjustments</p>
                            </div>
                        </div>

                        <div className="flex items-start p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-3"></div>
                            <div>
                                <h4 className="text-sm font-semibold text-white">Sustainable Lifestyle Habits</h4>
                                <p className="text-sm text-gray-400">Build lasting healthy routines</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(skillCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-gradient-to-r from-orange-600 to-orange-800 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                <span className="mr-2">{skillCategories[category].icon}</span>
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Skills Table (responsive) */}
                    <div className="overflow-x-auto">
                        <div className="bg-gray-800 rounded-lg border border-gray-700">
                            {/* Table Header */}
                            <div className="grid grid-cols-12 gap-4 items-center px-4 py-3 border-b border-gray-700 text-gray-400">
                                <div className="col-span-6 font-semibold">Skill</div>
                                <div className="hidden md:block col-span-3 font-semibold">Level</div>
                                <div className="col-span-6 md:col-span-3 text-right font-semibold">Progress</div>
                            </div>

                            {skillCategories[activeCategory] && skillCategories[activeCategory].skills ? (
                                skillCategories[activeCategory].skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="grid grid-cols-12 gap-4 items-center px-4 py-4 odd:bg-gray-900/20"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <div className="col-span-6 flex items-center">
                                            <div className="mr-3 text-orange-400">{skill.icon ? skill.icon : ''}</div>
                                            <div>
                                                <h4 className="text-white font-medium">{skill.name}</h4>
                                                <p className="text-sm text-gray-400 hidden md:block">{skill.description ? skill.description : ''}</p>
                                            </div>
                                        </div>

                                        <div className="hidden md:flex col-span-3 items-center">
                                            <span className="text-orange-400 font-semibold mr-2">{skill.level}%</span>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="col-span-6 md:col-span-3 flex items-center justify-end">
                                            <div className="w-32 md:w-48 bg-gray-700 rounded-full h-2 mr-3">
                                                <div
                                                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-gray-300 md:hidden">{skill.level}%</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-gray-400 p-6">Those are the basic points that I always concentrate on for a better transformation flow.</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-8">
                        <span className="gradient-text">Accomplishments</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                {/* Badge Placeholder */}
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-700 to-black rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🏆</span>
                                </div>

                                <h4 className="text-lg font-semibold mb-2 text-blue-400">{cert.name}</h4>
                                <h4 className="text-lg font-semibold mb-2 text-orange-400">{cert.name}</h4>
                                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                                <p className="text-gray-500 text-sm">{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-gradient-to-br from-orange-600/10 to-orange-800/10 p-8 rounded-lg border border-orange-500/20">
                        <h3 className="text-2xl font-bold mb-4 gradient-text">Personal Qualities</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                Strong work ethic and dedication
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                Excellent communication skills
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                Adaptability and problem-solving skills
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                Passion for helping others achieve their fitness goals
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-8 rounded-lg border border-green-500/20">
                        <h3 className="text-2xl font-bold mb-4 gradient-text">My Approach</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                Holistic fitness and wellness focus
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                Client-centered program design
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                Consistent motivation and support
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                Evidence-based training methods
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;