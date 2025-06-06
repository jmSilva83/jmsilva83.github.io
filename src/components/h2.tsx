export default function H2({ text }: { text: string }) {
    return (
        <h2
            className='max-sm:text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 bg-clip-text text-transparent font-bold pb-2'
            data-aos='fade-up'
        >
            {text}
        </h2>
    );
}
