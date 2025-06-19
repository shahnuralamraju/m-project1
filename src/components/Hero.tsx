'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import Modal from './Modal';

export default function Hero() {
    const [showLetter, setShowLetter] = useState(false);

    const openLetter = () => {
        setShowLetter(true);
        confetti({ particleCount: 250, spread: 70, origin: { y: 0.6 } });
    };

    return (
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[url('/hero-bg.svg')] bg-cover bg-center">
            {/* 💖 Top headline */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-28 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-amber-400 bg-clip-text drop-shadow-md"
            >
                Every Love Story Is Beautiful, But Ours Is My Favorite 💖
            </motion.h2>

            {/* 💌 Love card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative max-w-2xl w-full bg-white/70 backdrop-blur-md pt-24 px-8 pb-10 rounded-3xl shadow-2xl"
            >
                {/* 👤 Profile Image - 50% inside the card */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-xl overflow-hidden bg-white">
                        <Image
                            src="/cp3.png"
                            // src="/avatar.avif"
                            alt="Forever My Love"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pink-700">
                    To My Forever Love
                </h1>
                <p className="mt-6 text-xl text-pink-600 italic">
                    <Typewriter
                        words={[
                            'You are the reason behind my smile.',
                            'My peace.',
                            'My every heartbeat. ❤️',
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </p>
                <motion.button
                    onClick={openLetter}
                    className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-amber-400 text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Read My Heart ❤️
                </motion.button>
            </motion.div>

            {/* 💌 Modal */}
            <AnimatePresence>
                {showLetter && (
                    <Modal
                        showLetter={showLetter}
                        setShowLetter={setShowLetter}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
