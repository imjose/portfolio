export const stackCode = 
`type ContactOption = 'github' | 'twitter' | 'linkedIn' | 'email';

interface TechStack {
    frontend: (string | string[])[];
    backend: string[];
    devOps: string[];
};

export const techStack: TechStack = {
    frontend: [
        'React': [
            'SWR'
            'Next.js',
            'React Hooks',
            'Memoization',
            'Context API',
        ],
        'Angular': [
            'RxJS',
            'NgRx Store',
            'Lifecycle Hooks',
            'Routing & Guards',
            'Modules & Lazy Loading',
            'Change Detection Strategy',
        ],
        'JavaScript',
        'TypeScript',
        'Web-Components',
        'Lit',
        'Astro',
        'Storyblok',
        'Strapi',
        'TailwindCSS'
    ],
    backend: [
        'Node.js',
        'Nest.js',
        'Express.js',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Firebase'
    ],
    devOps: [
        'GitLab',
        'GitHub',
        'Jenkins',
        'AWS'
    ],
};

const contact = (method: ContactOption): string => {
    switch (method) {
        case 'github':
            return 'https://github.com/imjose';
        case 'twitter':
            return 'https://x.com/imjosearce';
        case 'linkedIn':
            return 'https://www.linkedin.com/in/imjosearce';
        case 'email':
            return 'jose.arce@live.com';
    }
};

`;