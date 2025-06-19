'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type MusicTestProps = {
    isPlaying: boolean;
    toggleMusic: () => void;
};

export default function MusicTest({ isPlaying, toggleMusic }: MusicTestProps) {


    return (
        <>
            <ReactPlayer
                url="/love-song.mp3"
                playing={isPlaying}
                loop
                volume={0.5}
                width={0}
                height={0}
            />


            <div className="fixed bottom-16 right-16 z-50">
                <div className="relative w-16 h-16">
                    {/* 🌊 Spotify Pulse Waves */}
                    {/* {isPlaying && ( */}
                        <div className="pulse-container">
                            <div className="pulse-ring"></div>
                            <div className="pulse-ring"></div>
                            <div className="pulse-ring"></div>
                        </div>
                    {/* )} */}

                    {/* 🔘 Actual Button */}
                    <button
                        onClick={toggleMusic}
                        className="absolute inset-0 flex items-center justify-center w-16 h-16 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition z-10"
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
                </div>
            </div>





        </>
    );
}
