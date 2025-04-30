'use client';
import Link from 'next/link';
import Li from './li';
import { useEffect, useState } from 'react';
import SheetItem from './sheet-item';

export default function Header() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <div
            className={`fixed w-full z-53 duration-500 ${
                visible ? 'bg-black/90' : 'bg-black/30'
            }`}
        >
            <div className='container flex items-center justify-between duration-300'>
                <div className='flex justify-between items-center max-lg:w-full'>
                    <button
                        onClick={() => window.location.reload()}
                        className='flex items-center size-7 mr-2 hover:cursor-pointer hover:scale-110 hover:opacity-80 transition-transform duration-200'
                    >
                        <img
                            src='logo.png'
                            alt='Logo'
                            className='w-full h-full'
                        />
                    </button>
                    <h1 className='max-lg:hidden text-3xl font-bold text-neutral-200'>
                        <span className='bg-gradient-to-r from-purple-300 via-purple-600 to-purple-800 bg-clip-text text-transparent'>
                            JMS.Dev
                        </span>
                    </h1>
                    <SheetItem />
                </div>
                <ul className='flex gap-10 max-lg:hidden'>
                    <Li />
                </ul>
                <Link href='resume.pdf' target='_blank' download='resume.pdf'>
                    <button className='max-lg:hidden bg-purple-600 p-2 m-1 rounded-sm text-neutral-200 text-sm font-medium hover:cursor-pointer hover:bg-purple-700 duration-200'>
                        Get my CV
                    </button>
                </Link>
            </div>
        </div>
    );
}
