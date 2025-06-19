'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface BackgroundMusicProps {
    isPlaying?: boolean;
}

export default function BackgroundMusic({ isPlaying }: BackgroundMusicProps) {
    const [canPlay, setCanPlay] = useState(false);

    useEffect(() => {
        const handleClick = () => setCanPlay(true);
        window.addEventListener('click', handleClick, { once: true });
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
            {canPlay && (
                <ReactPlayer
                    url="/love-song.mp3"
                    playing={isPlaying}
                    loop
                    volume={0.38}
                    width={0}
                    height={0}
                />
            )}
        </div>
    );
}
