// app/page.tsx
'use client';

import { useState, Fragment } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import love1 from "../../public/IMG_20250525_150222.jpg";
import love2 from "../../public/IMG_20250525_154548.jpg";
import love3 from "../../public/IMG_20250525_154642.jpg";
// import BackgroundMusic from './BackgroundMusic';

export default function LovePage2() {
    const [showLetter, setShowLetter] = useState(false);

    return (
        <main className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 text-pink-900 min-h-screen font-sans overflow-hidden">
            {/* <BackgroundMusic /> */}

            {/* Floating Heart Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: '100vh', opacity: 0 }}
                        animate={{ y: ['100vh', '-10vh'], opacity: [0, 0.8, 0] }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        className="absolute text-pink-300 text-2xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-6 bg-[url('/hero-bg.svg')] bg-cover bg-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl"
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-pink-700"
                    >
                        To My Forever Love
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-6 text-xl text-pink-600 italic"
                    >
                        You are the reason behind my smile, my peace, and my every heartbeat.
                    </motion.p>
                    <motion.button
                        onClick={() => setShowLetter(true)}
                        className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Read My Heart ❤️
                    </motion.button>
                </motion.div>
            </section>

            {/* Love Letter Modal */}
            <Dialog as={Fragment} open={showLetter} onClose={() => setShowLetter(false)}>
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-rose-100 p-8 rounded-3xl max-w-xl mx-auto shadow-xl relative z-50"
                    >
                        <Dialog.Title className="text-3xl font-bold mb-4 text-center text-pink-700">
                            A Letter from My Heart
                        </Dialog.Title>
                        <Dialog.Description className="text-lg text-gray-700 text-center">
                            My love, you are the light of my life. Every day with you feels like a blessing. I look forward to every tomorrow, as long as I get to spend it with you. This website is just a small token of how much you mean to me. ❤️
                        </Dialog.Description>
                        <button
                            onClick={() => setShowLetter(false)}
                            className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition block mx-auto"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            </Dialog>

            {/* Timeline Section */}
            <section className="bg-white py-20 px-6 text-center relative z-10">
                <div className="absolute inset-0 bg-heart-pattern opacity-5 pointer-events-none" />
                <h2 className="text-4xl font-bold mb-10">Our Journey</h2>
                <div className="max-w-4xl mx-auto text-left space-y-10">
                    {[
                        { title: '🌸 The First Hello', desc: 'The day we met felt like a dream. A new chapter had begun.' },
                        { title: '💬 Midnight Conversations', desc: 'We talked for hours, about everything and nothing. Time vanished.' },
                        { title: '💖 Our First Date', desc: 'You smiled, I melted. That moment is forever engraved in my heart.' },
                        { title: '🎉 Shared Dreams', desc: 'We made plans, laughed together, and imagined a future hand in hand.' }
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

            {/* Gallery Section */}
            <section className="bg-pink-100 py-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-10">Moments Together</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[love1, love2, love3].map((img, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl shadow-lg overflow-hidden"
                        >
                            <Image
                                src={img}
                                alt={`Love ${idx + 1}`}
                                width={400}
                                height={400}
                                className="rounded-xl"
                            />
                        </motion.div>
                    ))}
                </div>
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
                        In every heartbeat, in every sigh,<br />
                        You&apos;re the reason, you&apos;re the sky.<br />
                        With every dawn and every night,<br />
                        You make my world purely bright.
                    </p>
                </motion.div>
            </section>

            {/* Extra Animation Quote Section */}
            <section className="bg-rose-50 py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-6">Forever & Always</h2>
                    <p className="text-xl text-rose-700 font-semibold">
                        “You are my today and all of my tomorrows.” – Leo Christopher
                    </p>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-pink-200 to-rose-200 py-6 text-center text-sm text-pink-800 shadow-inner relative z-10">
                Made with infinite love ❤️ by Raju
            </footer>
        </main>
    );
}
