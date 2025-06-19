'use client';

import { motion } from 'framer-motion';
import {
    Home,
    Image as ImageIcon,
    CircleDot,
    Landmark,
    GitBranch,
    Github,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const menuItems = [
    { icon: <Home size={20} />, label: 'Home', href: '#hero' },
    { icon: <CircleDot size={20} />, label: 'Journey', href: '#journey' },
    { icon: <ImageIcon size={20} />, label: 'Moment', href: '#moment' },
    { icon: <Landmark size={20} />, label: 'Poem', href: '#poem' },
    { icon: <GitBranch size={20} />, label: 'Quote', href: 'https://github.com/shahnuralamraju/m-project1/branches' },
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/shahnuralamraju' },
];

export default function FloatingMenu() {
    const [activeId, setActiveId] = useState<string>('');

    // Observe which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: '0px 0px -60% 0px', // triggers earlier
                threshold: 0.2,
            }
        );

        menuItems.forEach((item) => {
            const targetId = item.href.replace('#', '');
            const section = document.getElementById(targetId);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-1/2 right-4 -translate-y-1/2 z-50 bg-pink-100/90 backdrop-blur-md px-2 py-4 rounded-2xl flex flex-col items-center gap-3 shadow-xl"
        >
            {menuItems.map((item, index) => {
                const isActive = activeId === item.href;

                return (
                    <a
                        key={index}
                        href={item.href}
                        aria-label={item.label}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ${isActive
                            ? 'bg-pink-600 text-white scale-110 shadow-lg'
                            : 'bg-pink-200 hover:bg-pink-500 text-pink-700 hover:text-white'
                            }`}
                        title={item.label}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </a>
                );
            })}
        </motion.div>
    );
}
