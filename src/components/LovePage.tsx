'use client';


import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import MusicTest from './MusicTest';
import FloatingHearts from './FloatingHearts';
import OurMoment from './OurMoment';
import Hero from './Hero';


export default function LovePage() {
    // const [isPlaying, setIsPlaying] = useState(false);


    return (
        <main className="relative bg-gradient-to-br from-rose-100 via-amber-50 to-white text-rose-900 min-h-screen font-sans overflow-hidden">
            {/* BackgroundMusic   */}
            {/* <MusicTest /> */}


            {/* Floating Hearts Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <FloatingHearts />
            </div>

            {/* Hero Section */}


            <Hero />

            {/* Timeline Section */}
            <section className="bg-white py-20 px-6 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-10">Our Journey</h2>
                <div className="max-w-4xl mx-auto text-left space-y-10">
                    {[
                        { title: '🌸 The First Hello', desc: 'The day we met felt like a dream. A new chapter had begun.' },
                        { title: '💬 Midnight Conversations', desc: 'We talked for hours, about everything and nothing. Time vanished.' },
                        { title: '💖 Our First Date', desc: 'You smiled, I melted. That moment is forever engraved in my heart.' },
                        { title: '🎉 Shared Dreams', desc: 'We made plans, laughed together, and imagined a future hand in hand.' },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="border-l-4 border-pink-400 pl-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-pink-700">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Moment Section */}
            <section className="bg-pink-100 py-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-10">Moments Together</h2>
                <OurMoment />
            </section>

            {/* Poem Section */}
            <section className="bg-white py-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-6">A Poem For You</h2>
                    <p className="text-xl italic text-gray-700">
                        In every heartbeat, in every sigh,
                        <br />
                        You&apos;re the reason, you&apos;re the sky.
                        <br />
                        With every dawn and every night,
                        <br />
                        You make my world purely bright.
                    </p>
                </motion.div>
            </section>

            {/* Extra Quote Section */}
            <section className="bg-rose-50 py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-6">Forever & Always</h2>
                    <p className="text-xl text-rose-700 font-semibold">“You are my today and all of my tomorrows.”</p>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-pink-200 to-amber-200 py-6 text-center text-sm text-pink-800 shadow-inner">
                Made with infinite love ❤️ by Raju
            </footer>
        </main>
    );
}
