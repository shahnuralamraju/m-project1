'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Heart = {
    id: number;
    left: number;
    size: number;
    rotate: number;
    duration: number;
};

const FloatingHearts = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        let idCounter = 0;
        const interval = setInterval(() => {
            const newHeart: Heart = {
                id: idCounter++,
                left: Math.random() * 100,
                size: 20 + Math.random() * 10,
                rotate: Math.random() * 360,
                duration: 10 + Math.random() * 5,
            };
            setHearts((prev) => [...prev, newHeart].slice(-40));
        }, 600);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: '100vh', opacity: 0, rotate: 0 }}
                    animate={{
                        y: '-20vh',
                        opacity: 1,
                        rotate: heart.rotate,
                    }}
                    transition={{
                        duration: heart.duration,
                        ease: 'easeOut',
                    }}
                    className="absolute text-pink-400"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
