"use client";
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

type ModalProps = {
    showLetter: boolean;
    setShowLetter: (show: boolean) => void;
}

const Modal = ({ showLetter, setShowLetter }: ModalProps) => {
    return (

        <Dialog as={Fragment} open={showLetter} onClose={() => setShowLetter(false)}>
            <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40, filter: 'blur(10px)' }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        transition: { duration: 0.4, type: 'spring', bounce: 0.3 },
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.9,
                        y: 30,
                        filter: 'blur(6px)',
                        transition: { duration: 0.3, ease: 'easeInOut' },
                    }}
                    className="bg-rose-100 p-8 rounded-3xl max-w-xl w-full shadow-xl relative"
                >
                    <Dialog.Title className="text-3xl font-bold mb-4 text-center text-pink-700">
                        A Letter from My Heart
                    </Dialog.Title>
                    <Dialog.Description className="text-lg text-gray-700 text-center leading-relaxed">
                        My love, you are the light of my life. Every day with you feels like a blessing. I look forward to every
                        tomorrow, as long as I get to spend it with you. This website is just a small token of how much you mean to me.
                        ❤️
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

    );
};

export default Modal;