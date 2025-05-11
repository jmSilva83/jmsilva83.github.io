'use client';
import Link from 'next/link';

export default function CVButton({ className = '' }) {
    return (
        <Link
            href='resume.pdf'
            target='_blank'
            download='resume.pdf'
            className={`bg-purple-600 p-2 m-1 rounded-sm text-neutral-200 text-sm font-medium hover:bg-purple-700 duration-200 ${className}`}
        >
            Get my CV
        </Link>
    );
}
