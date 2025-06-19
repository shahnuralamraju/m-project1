'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function MusicTest() {
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const onFirstClick = () => {
            setHasInteracted(true);
            setIsPlaying(true);
            window.removeEventListener('click', onFirstClick);
        };
        window.addEventListener('click', onFirstClick, { once: true });
        return () => window.removeEventListener('click', onFirstClick);
    }, []);

    const toggleMusic = () => {
        if (!hasInteracted) return;
        setIsPlaying((prev) => !prev);
    };

    return (
        <div>
            {/* <h1>Music Play/Pause Test</h1>
            <button onClick={toggleMusic} disabled={!hasInteracted} style={{ marginBottom: '20px' }}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button> */}

            {hasInteracted && (
                <ReactPlayer
                    url="/love-song.mp3"
                    playing={isPlaying}
                    loop
                    volume={0.5}
                    width={0}
                    height={0}
                />
            )}
            {hasInteracted && (
                <button
                    onClick={toggleMusic}
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
            )}
        </div>
    );
}
