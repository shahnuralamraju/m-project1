'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import loveImages from './moment.json';

export default function OurMoment() {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null);
    const [isVertical, setIsVertical] = useState(true);

    const settings = {
        vertical: isVertical,
        verticalSwiping: isVertical,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        swipe: true,
        adaptiveHeight: true,
    };

    return (
        <div className="relative max-w-md w-full h-[500px] mx-auto rounded-3xl overflow-hidden shadow-xl border border-pink-200 bg-white/20 backdrop-blur-lg">
            {/* Toggle Orientation */}
            <div className="absolute top-2 right-2 z-30">
                <button
                    onClick={() => setIsVertical((prev) => !prev)}
                    className="text-sm bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-full shadow transition"
                >
                    {isVertical ? 'Horizontal ↔' : 'Vertical ↕'}
                </button>
            </div>

            {/* Slider */}
            <Slider {...settings} ref={setSliderRef} className="h-full">
                {loveImages.map((data) => (
                    <div key={data.id} className="relative w-full h-[500px]">
                        <Image
                            src={`/${data.image}`}
                            alt={`Love ${data.id}`}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Message Overlay */}
                        <div className="absolute bg-pink-200 p-2 bottom-20 w-full px-6 text-center z-10">
                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-amber-400 bg-clip-text drop-shadow-md">
                                {data.message}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Bottom Control Buttons */}
            {isVertical && (
                <div className="absolute bottom-4 w-full flex justify-center gap-6 z-20">
                    <button
                        onClick={() => sliderRef?.slickPrev()}
                        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
                    >
                        <ChevronUpIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => sliderRef?.slickNext()}
                        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
                    >
                        <ChevronDownIcon className="w-6 h-6" />
                    </button>
                </div>
            )}
        </div>
    );
}
