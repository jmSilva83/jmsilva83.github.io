import H2 from './h2';
import { Icon } from '@iconify/react';

export default function Contact() {
    return (
        <>
            <section
                className='flex flex-col rounded-sm shadow-lg bg-purple-950 p-6 lg:p-10 gap-10 items-center text-center'
                data-aos='fade-up'
            >
                <div className='flex flex-col gap-5 max-w-md'>
                    <H2 text='Contact' />
                    <p className='text-neutral-200/70 text-sm'>
                        Let's build something great together! Feel free to reach
                        out via email or connect with me on LinkedIn.
                    </p>

                    <div className='flex flex-col gap-4 mt-4'>
                        <a
                            href='mailto:juanmanuelsilva06@gmail.com'
                            className='flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition'
                        >
                            <Icon icon='line-md:email' className='size-6' />
                            Send me an Email
                        </a>

                        <a
                            href='https://www.linkedin.com/in/jmsilva83'
                            target='_blank'
                            className='flex items-center justify-center gap-2 border border-purple-600 hover:bg-purple-600 hover:text-white text-purple-300 font-semibold py-2 px-4 rounded-lg transition'
                        >
                            <Icon icon='line-md:linkedin' className='size-6' />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>

                <img
                    src='contact.png'
                    alt='Contact illustration'
                    className='w-72 mx-auto lg:block'
                />
            </section>

            <footer className='mt-10 text-sm text-neutral-400'>
                &copy; {new Date().getFullYear()} Developed by Juan Manuel Silva
            </footer>
        </>
    );
}
