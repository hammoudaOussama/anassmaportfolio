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
            ],
            strengthPrograms: [
                {
                    program: 'Stronglifts 5x5',
                    emoji: '🏋️',
                    duration: '12 weeks',
                    focus: 'Compound Strength',
                    exercises: [
                        { name: 'Squat', sets: '5x5', intensity: '80-85% 1RM', notes: 'Heavy leg focus' },
                        { name: 'Bench Press', sets: '5x5', intensity: '80-85% 1RM', notes: 'Upper body push' },
                        { name: 'Barbell Row', sets: '5x5', intensity: '80-85% 1RM', notes: 'Upper body pull' },
                        { name: 'Overhead Press', sets: '5x5', intensity: '75-80% 1RM', notes: 'Shoulder strength' },
                        { name: 'Deadlift', sets: '1x5', intensity: '80-85% 1RM', notes: 'Full body power' }
                    ]
                },
                {
                    program: 'Hypertrophy Focus',
                    emoji: '💪',
                    duration: '8-12 weeks',
                    focus: 'Muscle Growth',
                    exercises: [
                        { name: 'Incline Bench Press', sets: '4x6-8', intensity: '75-80% 1RM', notes: 'Upper chest' },
                        { name: 'Dumbbell Flyes', sets: '3x8-10', intensity: '60-70% 1RM', notes: 'Isolation' },
                        { name: 'Barbell Rows', sets: '4x6-8', intensity: '75-80% 1RM', notes: 'Back thickness' },
                        { name: 'Weighted Pullups', sets: '4x6-8', intensity: '75-80% 1RM', notes: 'Lats focus' },
                        { name: 'Leg Press', sets: '4x8-10', intensity: '70-75% 1RM', notes: 'Quad volume' }
                    ]
                },
                {
                    program: 'Powerlifting',
                    emoji: '⚡',
                    duration: '16 weeks',
                    focus: 'Max Strength',
                    exercises: [
                        { name: 'Competition Squat', sets: '8x3', intensity: '85-90% 1RM', notes: 'Max strength' },
                        { name: 'Competition Bench', sets: '8x3', intensity: '85-90% 1RM', notes: 'Max strength' },
                        { name: 'Competition Deadlift', sets: '8x2', intensity: '85-90% 1RM', notes: 'Max strength' },
                        { name: 'Speed Work', sets: '6x2', intensity: '60-70% 1RM', notes: 'Power development' },
                        { name: 'Accessory Work', sets: '3x5', intensity: '70-75% 1RM', notes: 'Weak point training' }
                    ]
                }
            ]
        },
        Conditioning: {
            icon: <MdDirectionsRun className="inline text-orange-400" size={22} />,
            skills: [
                { name: 'Cardio Programming', level: 90, color: 'from-orange-500 to-orange-700' },
                { name: 'Interval Training', level: 88, color: 'from-orange-400 to-orange-600' },
                { name: 'Endurance Planning', level: 85, color: 'from-orange-400 to-orange-600' },
            ],
            pplProgram: [
                {
                    day: 'Push Day',
                    emoji: '💪',
                    exercises: [
                        { name: 'Barbell Bench Press', sets: '4x6-8', rest: '2-3 min' },
                        { name: 'Incline Dumbbell Press', sets: '3x8-10', rest: '90 sec' },
                        { name: 'Barbell Overhead Press', sets: '3x6-8', rest: '2 min' },
                        { name: 'Lateral Raise Machine', sets: '3x10-12', rest: '60 sec' },
                        { name: 'Tricep Rope Pushdown', sets: '3x10-12', rest: '60 sec' },
                        { name: 'Dips (Weighted)', sets: '3x8-10', rest: '90 sec' }
                    ]
                },
                {
                    day: 'Pull Day',
                    emoji: '🔥',
                    exercises: [
                        { name: 'Deadlifts', sets: '4x3-5', rest: '3 min' },
                        { name: 'Weighted Pullups', sets: '4x6-8', rest: '2-3 min' },
                        { name: 'Barbell Rows', sets: '3x6-8', rest: '2 min' },
                        { name: 'Lat Pulldown', sets: '3x8-10', rest: '90 sec' },
                        { name: 'Barbell Curl', sets: '3x8-10', rest: '90 sec' },
                        { name: 'Face Pulls', sets: '3x12-15', rest: '60 sec' }
                    ]
                },
                {
                    day: 'Leg Day',
                    emoji: '🦵',
                    exercises: [
                        { name: 'Barbell Squat', sets: '4x6-8', rest: '2-3 min' },
                        { name: 'Romanian Deadlift', sets: '3x8-10', rest: '2 min' },
                        { name: 'Leg Press', sets: '3x8-10', rest: '2 min' },
                        { name: 'Leg Curl Machine', sets: '3x10-12', rest: '90 sec' },
                        { name: 'Leg Extension', sets: '3x10-12', rest: '90 sec' },
                        { name: 'Calf Raises (Machine)', sets: '3x12-15', rest: '60 sec' }
                    ]
                }
            ]
        },
        Coaching: {
            icon: <MdFitnessCenter className="inline text-orange-400" size={22} />,
            skills: [
                { name: 'Personal Coaching', level: 95, color: 'from-orange-600 to-orange-800' },
                { name: 'Group Classes', level: 90, color: 'from-orange-500 to-orange-700' },
                { name: 'Program Design', level: 92, color: 'from-orange-600 to-orange-800' },
            ],
            coachingPrograms: [
                {
                    type: 'Personal Training',
                    emoji: '👤',
                    duration: 'Ongoing',
                    focus: 'One-on-One Coaching',
                    features: [
                        { feature: 'Personalized Assessment', details: 'Initial fitness evaluation & goal setting' },
                        { feature: 'Custom Programming', details: 'Tailored workouts based on individual needs' },
                        { feature: 'Form Correction', details: 'Real-time feedback and technique optimization' },
                        { feature: 'Progressive Overload', details: 'Structured progression over weeks/months' },
                        { feature: 'Nutrition Guidance', details: 'Meal planning tailored to training goals' },
                        { feature: 'Weekly Check-ins', details: 'Progress tracking and program adjustments' }
                    ]
                },
                {
                    type: 'Group Classes',
                    emoji: '👥',
                    duration: 'Class-based',
                    focus: 'Fitness Community',
                    features: [
                        { feature: 'Circuit Training', details: 'Dynamic group workouts for all levels' },
                        { feature: 'Team Motivation', details: 'Group energy and accountability' },
                        { feature: 'Varied Programming', details: 'Different class themes each session' },
                        { feature: 'Community Support', details: 'Build friendships & fitness network' },
                        { feature: 'Beginner Friendly', details: 'Modifications available for all fitness levels' },
                        { feature: 'Cost Effective', details: 'More affordable than 1-on-1 coaching' }
                    ]
                },
                {
                    type: 'Online Coaching',
                    emoji: '💻',
                    duration: 'Remote',
                    focus: 'Digital Fitness',
                    features: [
                        { feature: 'Remote Programs', details: 'Customized workouts delivered digitally' },
                        { feature: 'Video Form Checks', details: 'Submit videos for feedback & correction' },
                        { feature: 'Flexible Scheduling', details: 'Work out on your own time & location' },
                        { feature: 'Digital Communication', details: 'Chat support & regular check-ins' },
                        { feature: 'Progress Tracking', details: 'Online dashboard to log workouts & nutrition' },
                        { feature: 'Adaptable Plans', details: 'Modify based on available equipment' }
                    ]
                },
                {
                    type: 'Competition Prep',
                    emoji: '🏆',
                    duration: '12-16 weeks',
                    focus: 'Sport-Specific Training',
                    features: [
                        { feature: 'Peak Programming', details: 'Periodized training for competition date' },
                        { feature: 'Sport Analysis', details: 'Technical skill development & refinement' },
                        { feature: 'Mental Conditioning', details: 'Confidence building & competition mindset' },
                        { feature: 'Recovery Protocols', details: 'Optimize rest & regeneration' },
                        { feature: 'Nutrition Timing', details: 'Pre/during/post competition strategies' },
                        { feature: 'Taper Management', details: 'Strategic rest before competition' }
                    ]
                }
            ]
        },
        Nutrition: {
            icon: '🥗',
            skills: [
                { name: 'Meal Planning', level: 90, color: 'from-orange-500 to-orange-700' },
                { name: 'Macro Coaching', level: 88, color: 'from-orange-400 to-orange-600' },
                { name: 'Supplement Guidance', level: 82, color: 'from-orange-400 to-orange-600' },
            ],
            mealPlan: [
                {
                    meal: 'Breakfast',
                    time: '7:00 AM',
                    foods: 'Oatmeal with berries, honey, and almonds + Greek yogurt + green tea',
                    calories: '450',
                    macros: 'Carbs: 55g | Protein: 20g | Fat: 12g'
                },
                {
                    meal: 'Mid-Morning Snack',
                    time: '10:30 AM',
                    foods: 'Banana with almond butter + protein shake',
                    calories: '280',
                    macros: 'Carbs: 35g | Protein: 25g | Fat: 8g'
                },
                {
                    meal: 'Lunch',
                    time: '1:00 PM',
                    foods: 'Grilled chicken breast with brown rice and steamed broccoli + olive oil',
                    calories: '520',
                    macros: 'Carbs: 45g | Protein: 45g | Fat: 12g'
                },
                {
                    meal: 'Afternoon Snack',
                    time: '4:00 PM',
                    foods: 'Mixed nuts (almonds, walnuts) + fresh apple',
                    calories: '220',
                    macros: 'Carbs: 25g | Protein: 8g | Fat: 10g'
                },
                {
                    meal: 'Dinner',
                    time: '7:00 PM',
                    foods: 'Salmon fillet with sweet potato and green salad + avocado',
                    calories: '480',
                    macros: 'Carbs: 40g | Protein: 42g | Fat: 15g'
                }
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

                    {/* Nutrition Meal Plan Section */}
                    {activeCategory === 'Nutrition' && skillCategories[activeCategory].mealPlan && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Healthy Diet Program - Daily Meal Plan</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {skillCategories[activeCategory].mealPlan.map((meal, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 border border-gray-700 rounded-lg p-5 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
                                    >
                                        <div className="flex items-center mb-3">
                                            <span className="text-2xl mr-2">🍽️</span>
                                            <div>
                                                <h4 className="text-lg font-bold text-orange-400">{meal.meal}</h4>
                                                <p className="text-sm text-gray-400">{meal.time}</p>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-3">
                                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{meal.foods}</p>

                                            <div className="space-y-2 text-xs">
                                                <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded">
                                                    <span className="text-gray-400">Calories:</span>
                                                    <span className="text-green-400 font-semibold">{meal.calories} kcal</span>
                                                </div>
                                                <div className="bg-gray-900/50 p-2 rounded text-gray-300">
                                                    <p className="font-semibold text-orange-400 mb-1">Macros:</p>
                                                    <p>{meal.macros}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gradient-to-r from-orange-600/10 to-orange-800/10 rounded-lg border border-orange-500/20">
                                <p className="text-gray-300 text-center text-sm">
                                    <span className="text-orange-400 font-semibold">💡 Total Daily Calories: ~1,950 kcal</span><br />
                                    This meal plan is designed for fat loss and muscle maintenance. Adjust portions based on your individual needs, activity level, and fitness goals.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Conditioning PPL Program Section */}
                    {activeCategory === 'Conditioning' && skillCategories[activeCategory].pplProgram && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Push Pull Legs (PPL) Program</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {skillCategories[activeCategory].pplProgram.map((workout, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-400/50 transition-all duration-300"
                                    >
                                        {/* Workout Header */}
                                        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl">{workout.emoji}</span>
                                                <h4 className="text-xl font-bold text-white">{workout.day}</h4>
                                            </div>
                                        </div>

                                        {/* Exercises List */}
                                        <div className="p-4">
                                            <div className="space-y-3">
                                                {workout.exercises.map((exercise, exIndex) => (
                                                    <div
                                                        key={exIndex}
                                                        className="bg-gray-900/50 p-3 rounded border border-gray-700/50 hover:border-orange-400/30 transition-colors"
                                                    >
                                                        <h5 className="text-orange-400 font-semibold text-sm mb-2">{exercise.name}</h5>
                                                        <div className="flex justify-between text-xs text-gray-400">
                                                            <span>Sets: <span className="text-green-400 font-semibold">{exercise.sets}</span></span>
                                                            <span>Rest: <span className="text-blue-400 font-semibold">{exercise.rest}</span></span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Exercise Count */}
                                        <div className="bg-gray-900/30 p-3 border-t border-gray-700">
                                            <p className="text-center text-gray-400 text-xs">
                                                <span className="text-orange-400 font-semibold">{workout.exercises.length}</span> exercises
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* PPL Program Info */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-orange-600/10 to-orange-800/10 rounded-lg border border-orange-500/20">
                                <p className="text-gray-300 text-center text-sm">
                                    <span className="text-orange-400 font-semibold">📅 Program Structure:</span><br />
                                    Run 3 days per week (or 6 days with 2 rounds). Each session focuses on compound movements followed by isolation exercises for maximum muscle growth and strength gains.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Strength Programs Section */}
                    {activeCategory === 'Strength' && skillCategories[activeCategory].strengthPrograms && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Strength Training Programs</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {skillCategories[activeCategory].strengthPrograms.map((program, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-400/50 transition-all duration-300"
                                    >
                                        {/* Program Header */}
                                        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-3xl">{program.emoji}</span>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-white">{program.program}</h4>
                                                        <p className="text-xs text-orange-200">{program.focus}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Program Info */}
                                        <div className="p-4">
                                            <div className="mb-4 flex justify-between items-center">
                                                <span className="text-xs text-gray-400">Duration:</span>
                                                <span className="text-sm text-orange-400 font-semibold">{program.duration}</span>
                                            </div>

                                            {/* Exercises */}
                                            <div className="space-y-3">
                                                {program.exercises.map((exercise, exIndex) => (
                                                    <div
                                                        key={exIndex}
                                                        className="bg-gray-900/50 p-3 rounded border border-gray-700/50 hover:border-orange-400/30 transition-colors"
                                                    >
                                                        <h5 className="text-orange-400 font-semibold text-sm mb-1">{exercise.name}</h5>
                                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                                            <span>Sets: <span className="text-green-400">{exercise.sets}</span></span>
                                                            <span>Intensity: <span className="text-blue-400">{exercise.intensity}</span></span>
                                                        </div>
                                                        <p className="text-xs text-gray-500 italic">{exercise.notes}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Strength Info */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-orange-600/10 to-orange-800/10 rounded-lg border border-orange-500/20">
                                <p className="text-gray-300 text-center text-sm">
                                    <span className="text-orange-400 font-semibold">💪 Training Philosophy:</span><br />
                                    Each program is periodized for maximum strength gains. Proper technique, adequate recovery, and progressive overload are essential for success.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Coaching Programs Section */}
                    {activeCategory === 'Coaching' && skillCategories[activeCategory].coachingPrograms && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Coaching Services & Programs</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skillCategories[activeCategory].coachingPrograms.map((program, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-400/50 transition-all duration-300"
                                    >
                                        {/* Program Header */}
                                        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-3xl">{program.emoji}</span>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-white">{program.type}</h4>
                                                        <p className="text-xs text-orange-200">{program.focus}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Program Info */}
                                        <div className="p-4">
                                            <p className="text-xs text-gray-400 mb-4">
                                                <span className="text-orange-400 font-semibold">Duration:</span> {program.duration}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-3">
                                                {program.features.map((item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className="bg-gray-900/50 p-3 rounded border border-gray-700/50 hover:border-orange-400/30 transition-colors"
                                                    >
                                                        <h5 className="text-orange-400 font-semibold text-sm mb-1">{item.feature}</h5>
                                                        <p className="text-xs text-gray-400">{item.details}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Coaching Info */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-orange-600/10 to-orange-800/10 rounded-lg border border-orange-500/20">
                                <p className="text-gray-300 text-center text-sm">
                                    <span className="text-orange-400 font-semibold">🎯 Coaching Excellence:</span><br />
                                    I adapt my coaching style to match each client's personality and goals. Whether you prefer one-on-one guidance, group motivation, or remote support, I'm here to help you succeed.
                                </p>
                            </div>
                        </div>
                    )}
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