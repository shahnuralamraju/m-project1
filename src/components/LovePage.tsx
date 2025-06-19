'use client';

import { useState, Fragment, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import confetti from 'canvas-confetti';
import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import love1 from '../../public/IMG_20250525_150222.jpg';
import love2 from '../../public/IMG_20250525_154548.jpg';
import love3 from '../../public/IMG_20250525_154642.jpg';
import BackgroundMusic from './BackgroundMusic';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function VerticalSlider() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const images = [love1, love2, love3];

  return (
    <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg h-[500px] relative">
      <Slider
        vertical
        verticalSwiping
        dots={false}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        ref={setSliderRef}
        className="h-full"
      >
        {images.map((img, idx) => (
          <div key={idx} className="h-[500px] flex justify-center items-center">
            <Image
              src={img}
              alt={`Love slide ${idx + 1}`}
              width={300}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Controls */}
      <button
        onClick={() => sliderRef?.slickPrev()}
        className="absolute top-4 left-1/2 -translate-x-1/2 bg-pink-500/80 hover:bg-pink-600 text-white p-2 rounded-full shadow-lg z-20"
        aria-label="Previous"
        type="button"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => sliderRef?.slickNext()}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-pink-500/80 hover:bg-pink-600 text-white p-2 rounded-full shadow-lg z-20"
        aria-label="Next"
        type="button"
      >
        <ChevronDownIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

function MusicControl({ onToggle, isPlaying }: { onToggle: () => void; isPlaying: boolean }) {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBtn(window.scrollY > 150);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!showBtn) return null;

  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition"
      aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
      type="button"
    >
      {isPlaying ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <rect x="6" y="5" width="4" height="14" />
          <rect x="14" y="5" width="4" height="14" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}

export default function LovePage() {
  const [showLetter, setShowLetter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const openLetter = () => {
    setShowLetter(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  };

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <main className="relative bg-gradient-to-br from-rose-100 via-amber-50 to-white text-rose-900 min-h-screen font-sans overflow-hidden">
      <BackgroundMusic isPlaying={isPlaying} />
      <MusicControl onToggle={toggleMusic} isPlaying={isPlaying} />

      {/* Floating Heart Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: ['100vh', '-10vh'], opacity: [0, 0.8, 0] }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: i * 0.5 }}
            className="absolute text-pink-300 text-2xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[url('/hero-bg.svg')] bg-cover bg-center">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src={love1} // profile image
            alt="Forever My Love"
            width={120}
            height={120}
            className="rounded-full border-4 border-pink-400 shadow-lg object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl"
        >
          <motion.h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-pink-700">
            To My Forever Love
          </motion.h1>
          <motion.p className="mt-6 text-xl text-pink-600 italic">
            <Typewriter
              words={['You are the reason behind my smile.', 'My peace.', 'My every heartbeat. ❤️']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.p>
          <motion.button
            onClick={openLetter}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-amber-400 text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg"
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
            transition={{ duration: 0.3 }}
            className="bg-rose-100 p-8 rounded-3xl max-w-xl mx-auto shadow-xl"
          >
            <Dialog.Title className="text-3xl font-bold mb-4 text-center text-pink-700">
              A Letter from My Heart
            </Dialog.Title>
            <Dialog.Description className="text-lg text-gray-700 text-center">
              My love, you are the light of my life. Every day with you feels like a blessing. I look forward to
              every tomorrow, as long as I get to spend it with you. This website is just a small token of how much
              you mean to me. ❤️
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

      {/* Vertical Slider Section */}
      <section className="bg-pink-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Moments Together</h2>
        <VerticalSlider />
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
          <p className="text-xl text-rose-700 font-semibold">“You are my today and all of my tomorrows.” – Leo Christopher</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-200 to-amber-200 py-6 text-center text-sm text-pink-800 shadow-inner">
        Made with infinite love ❤️ by Raju
      </footer>
    </main>
  );
}
