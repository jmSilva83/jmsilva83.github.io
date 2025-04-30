// import Link from 'next/link';
// interface LiProps {
//     onNavigate?: () => void;
// }

// export default function Li({ onNavigate }: LiProps) {
//     const handleClick = (id: string) => {
//         const el = document.getElementById(id);
//         if (el) {
//             el.scrollIntoView({ behavior: 'smooth' });
//         }
//         onNavigate?.();
//     };
//     return (
//         <>
//             <Link href='#aboutMe' onClick={() => handleClick('aboutMe')}>
//                 <li className='text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-purple-600 duration-200'>
//                     About Me
//                 </li>
//             </Link>
//             <Link href='#skills' onClick={() => handleClick('Skills')}>
//                 <li className='text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-purple-600 duration-200'>
//                     Skills
//                 </li>
//             </Link>
//             <Link href='#projects' onClick={() => handleClick('projects')}>
//                 <li className='text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-purple-600 duration-200'>
//                     Projects
//                 </li>
//             </Link>
//             <Link href='#contact' onClick={() => handleClick('contact')}>
//                 <li className='text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-purple-600 duration-200'>
//                     Contact
//                 </li>
//             </Link>
//         </>
//     );
// }

import Link from 'next/link';

interface LiProps {
    onNavigate?: () => void;
}

export default function Li({ onNavigate }: LiProps) {
    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        onNavigate?.();
    };

    const linkStyle =
        'text-neutral-200 max-lg:text-lg hover:cursor-pointer hover:text-purple-600 duration-200';

    return (
        <ul className='flex flex-col items-center gap-6'>
            {' '}
            <li>
                <Link href='#aboutMe' onClick={() => handleClick('aboutMe')}>
                    <span className={linkStyle}>About Me</span>
                </Link>
            </li>
            <li>
                <Link href='#skills' onClick={() => handleClick('Skills')}>
                    <span className={linkStyle}>Skills</span>
                </Link>
            </li>
            <li>
                <Link href='#projects' onClick={() => handleClick('projects')}>
                    <span className={linkStyle}>Projects</span>
                </Link>
            </li>
            <li>
                <Link href='#contact' onClick={() => handleClick('contact')}>
                    <span className={linkStyle}>Contact</span>
                </Link>
            </li>
        </ul>
    );
}
