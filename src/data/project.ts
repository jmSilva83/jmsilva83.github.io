import { ProjectType } from '@/types/projectType';

export const Project: ProjectType[] = [
    {
        id: 1,
        name: 'MatrixCodeJS-Rain',
        image: '/mockup-matrixcodejs.png',
        type: 'web',
        project_technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vite', 'React'],
        description:
            'MatrixCodeJS is a dynamic web application that recreates the iconic Matrix rain effect. Built with Vite and React, it delivers a high-performance animation using HTML Canvas, optimized for responsiveness and smooth frame rates.',
        deploy: 'https://matrix-code-js-jms83.vercel.app/',
        github: 'https://github.com/jmSilva83/MatrixCodeJS.git',
    },
    {
        id: 2,
        name: 'Calculator',
        image: '/mockup-calculadora.png',
        type: 'mobile',
        project_technologies: ['HTML5', 'CSS3', 'Javascript'],
        description:
            'A simple calculator made with HTML, CSS, and JavaScript. The system allows basic math operations using both button clicks and the keyboard. Ideal for practicing DOM manipulation and logic with JavaScript functions.',
        deploy: 'https://liviakobayashii.github.io/calculadora',
        github: 'https://github.com/liviakobayashii/calculadora',
    },
    {
        id: 3,
        name: 'Financial Control',
        image: '/mockup-controle-financeiro.png',
        type: 'mobile',
        project_technologies: ['HTML5', 'CSS3', 'Javascript'],
        description:
            'Expense control system where the client can input transactions with name and value, choose if they are expenses or income, and access the total balance.',
        deploy: 'https://liviakobayashii.github.io/controleFinanceiro',
        github: 'https://github.com/liviakobayashii/controleFinanceiro',
    },
    {
        id: 4,
        name: 'To-do List',
        image: '/mockup-to-do.png',
        type: 'mobile',
        project_technologies: ['HTML5', 'CSS3', 'Javascript'],
        description:
            'A simple to-do list system where the client can add, search, filter, edit, and delete tasks. Tasks can also be marked as completed.',
        deploy: 'https://liviakobayashii.github.io/toDoList',
        github: 'https://github.com/liviakobayashii/toDoList',
    },
    {
        id: 5,
        name: 'Timer',
        image: '/mockup-timer.png',
        type: 'mobile',
        project_technologies: ['HTML5', 'CSS3', 'Javascript'],
        description:
            'A simple timer made with HTML, CSS, and JavaScript. The system allows starting, pausing, and resetting time with just one click. Ideal for practicing basic DOM manipulation concepts and logic with JS intervals.',
        deploy: 'https://liviakobayashii.github.io/timer',
        github: 'https://github.com/liviakobayashii/timer',
    },
    {
        id: 6,
        name: 'Pokédex',
        image: '/mockup-pokedex.png',
        type: 'web',
        project_technologies: ['HTML5', 'CSS3', 'Javascript'],
        description:
            'A Pokédex system using data from the PokéAPI. The system allows searching for Pokémon by type (electric, fighting, psychic, etc.) and viewing details of a specific Pokémon.',
        deploy: 'https://liviakobayashii.github.io/pokedex',
        github: 'https://github.com/liviakobayashii/timer',
    },
    {
        id: 7,
        name: 'Virtual Drum Kit',
        image: '/mockup-bateria.png',
        type: 'mobile',
        project_technologies: ['HTML5', 'CSS3', 'Javascript'],
        description:
            "A virtual drum kit system. The system can detect keyboard inputs and play a unique sound for each key. It's also possible to create a composition by typing selected keys and clicking a button to play the created music.",
        deploy: 'https://liviakobayashii.github.io/bateriaVirtual',
        github: 'https://github.com/liviakobayashii/bateriaVirtual',
    },
    {
        id: 8,
        name: 'Weather App',
        image: '/mockup-clima.png',
        type: 'mobile',
        project_technologies: ['HTML5', 'CSS3', 'Javascript'],
        description:
            "A system capable of providing real-time weather information for any city in the world. Simply type the city's name, and details like temperature and wind will appear.",
        deploy: 'https://liviakobayashii.github.io/clima',
        github: 'https://github.com/liviakobayashii/clima',
    },
    {
        id: 9,
        name: 'Info Dogs',
        image: '/mockup-info-dogs.png',
        type: 'web',
        project_technologies: [
            'HTML5',
            'CSS3',
            'Typescript',
            'NextJS',
            'React',
            'TailwindCSS',
            'ShadcnUi',
        ],
        description:
            'A system that, based on API data, retrieves all available dog breeds. By clicking on a breed name, all images of that breed are displayed. Additionally, by clicking a button, the system can show a random image of all available dogs.',
        deploy: 'https://info-dogs.vercel.app',
        github: 'https://github.com/liviakobayashii/info-dogs',
    },
];
