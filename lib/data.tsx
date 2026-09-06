export type Contact = {
  github: string;
  linkedin: string;
  twitter: string;
  resume: string;
  instagram: string;
  facebook: string;
};

export type PersonalData = {
  name: string;
  title: string;
  bio: string;
  profileImageId: string;
  contact: Contact;
};

export type NavLink = {
  href: string;
  label: string;
};

export type Skill = {
  name: string;
  imageUrl: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Other';
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  imageUrl?: string;
  description: string[];
  skills: string[];
};

export type Education = {
  degree: string;
  institution: string;
  duration: string;
  imageUrl: string;
  achievements: string[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageId: string;
  category: 'WEB APP' | 'ANDROID APP' | 'MACHINE LEARNING';
};

export const personalData: PersonalData = {
  name: 'Jeremiah Jimoh',
  title: 'Frontend | Mobile App Developer | ML Enthusiast',
  bio: "A Frontend and MERN Stack Developer who loves building fast, intuitive web and mobile apps with React.js, React-Native, Next.js, Node.js, and Python. I enjoys turning ideas into smooth user experiences and automating workflows through python web scraping. I thrive on collaboration and I’m deeply curious about AI and Machine Learning, always exploring how tech can create smarter, more impactful products.",
  profileImageId: 'profile-pic',
  contact: {
    github: 'https://github.com/jimohsegun1',
    linkedin: 'https://www.linkedin.com/in/jimoh-segun-jeremiah-919b05125/',
    twitter: 'https://x.com/Jimohsegunj?t=HpdfdrS9DmJX8QBgidOnXA&s=09',
    resume: 'https://raw.githubusercontent.com/jimohsegun1/jimohsegun1/main/JeremiahJ.pdf',
    instagram: 'https://www.instagram.com/jimohsegunj?igsh=MWd3bWQxazQydHZjaA==',
    facebook: 'https://web.facebook.com/jeremiahsegun',
  },
};

export const navLinks: NavLink[] = [
  { href: '#hero', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const skillsData: Skill[] = [
  { name: 'HTML', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
  { name: 'CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
  { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
  { name: 'TypeScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
  { name: 'React', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'Next.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
  { name: 'Figma', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Frontend' },
  
  { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'Express', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', category: 'Backend' },
  { name: 'MongoDB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Backend' },
  { name: 'PostgreSQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Backend' },
  { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
  { name: 'Firebase', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'Backend' },
  
  { name: 'React Native', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Mobile' },
  
  { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Other' },
  { name: 'Docker', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Other' },
];

export const experienceData: Experience[] = [
  {
    role: 'Python Web Scraping / MERN stack Engineer',
    company: 'Awarri',
    duration: '2023 - Present',
    imageUrl: '/awarri.jpg',
    description: [
        'Building robust web scraping pipelines using python, selenium and beautiuful soup to collect structured data from various sources.',
        'Collaborate with UX/UI designers to translate wireframes into high-quality, responsive code.',
        'Contribute to the development of interactive and responsive user interfaces and APIs using JavaScript, React.js, Next.js and Node.js.',
    ],
    skills: ['Python', 'Selenium', 'BeautifulSoup','React.js', 'Next.js', 'Javascript', 'TypeScript',]
  },
    {
    role: 'Frontend Engineer',
    company: 'Koguna Babura Insurance Brokers Limited',
    duration: '2026 - Present',
    imageUrl: '/kbc-logo-2.png',
    description: [
        'Developed and maintained responsive web applications using React.js and Next.js, ensuring high performance and accessibility.',
        'Created reusable UI components to enhance consistency across applications, improving user experience.',
        'Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data flow and functionality.',
    ],
    skills: ['Next.js', 'Javascript', 'TypeScript', 'TailwindCSS'],
  },
  {
    role: 'Frontend Engineer',
    company: 'P23 Africa.',
    duration: '2025 - 2025',
    imageUrl: '/p23img.jpg',
    description: [
        'Work closely with UI/UX designers to implement visually appealing and user-friendly and api consumption and integration.',
        'Develop reusable UI components and ensure consistency across the application',
        'Optimized application performance, resulting in a 30% reduction in page load times.',
    ],
    skills: ['React.js', 'Next.js', 'Javascript', 'TypeScript', 'TailwindCSS', 'Express.js'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Sparkstrand',
    duration: '2024 - 2025',
    imageUrl: '/sparkstrand.jpg',
    description: [
        'Build and maintain responsive, accessible, and highperformance web applications using React.js and Next.js.',
        'Develop reusable UI components and ensure consistency across the application, experience and consume RESTful APIs endpoints and integration of internalization (i18n) in web applications for different languages',
    ],
    skills: ['Next.js', 'Javascript', 'TypeScript', 'TailwindCSS'],
  },
  {
    role: 'Frontend Developer',
    company: 'Storipod',
    duration: '2023 - 2025 ',
    imageUrl: '/storipod.png',
    description: [
        'Build and maintain responsive, accessible, and highperformance web applications using React.js and Next.js.',
        'Develop reusable UI components and ensure consistency across the application, experience and consume RESTful APIs endpoints.',
    ],
    skills: ['Next.js', 'Javascript', 'TypeScript', 'TailwindCSS'],
  },
];

export const educationData: Education[] = [
  {
    degree: 'BSc. Computer Science',
    imageUrl: '/uopeople.jpg',
    institution: 'University of the People,  Pasadena, California, USA',
    duration: '2025',
    achievements: ['Graduating with Bachelors in Computer Science.'],
  },
  {
    degree: 'HND Business Admin & Mgt',
    imageUrl: '/rugipo.jpg',
    institution: 'Rufus Giwa Polytechnic, Owo Ondo State, Nigeria',
    duration: '2013 - 2019',
    achievements: ['Graduated with Upper Credit.'],
  },
];

export const projectsData: Project[] = [
  {
    name: 'Medicare',
    description: 'A fullstack web application project aimed to streamline the process of booking and managing doctor\'s appointments, providing an efficient and user-friendly platform for both patients and healthcare providers. It also featured a secure payment system using Stripe for processing payments.',
    tags: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/jimohsegun1/MediCare',
    liveUrl: 'https://medi-care-three.vercel.app/',
    imageId: 'project-2',
    category: 'WEB APP',
  },
  {
    name: 'Todo Dashboard',
    description: 'This is a modern, interactive project management dashboard built with Next.js, TypeScript, Three.js and Tailwind CSS. It provides a clean and intuitive interface for managing tasks through a Kanban-style board, complete with drag-and-drop functionality, dynamic AI-powered UI elements, and a responsive design that works across all devices.',
    tags: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jimohsegun1/kanban_todo_dashboard',
    liveUrl: 'https://tobamstodo.vercel.app/',
    imageId: 'project-1',
    category: 'WEB APP',
  },
  {
    name: 'E-shop',
    description: 'E-commerce platform, designed to provide a seamless shopping experience for users and robust management features for administrators. Our application combines intuitive user interfaces with powerful backend functionalities to cater to both customers and store managers.',
    tags: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express.js'],
    githubUrl: 'https://github.com/jimohsegun1/EEshop',
    liveUrl: 'https://e-eshop-frontend.vercel.app/',
    imageId: 'project-4',
    category: 'WEB APP',
  },
  {
    name: 'Task Management App',
    description: 'A collaborative tool for teams to manage projects and tasks.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    imageId: 'project-1',
    category: 'WEB APP',
  },
    {
    name: 'Open Store',
    description: 'A React Native e-commerce app fetching real-time product data from a public API, allowing users to browse and shop across multiple categories.',
    tags: ['React Native', 'Android Studio', 'JavaScript', 'Google Auth'],
    githubUrl: 'https://github.com/jimohsegun1/OpenStore',
    liveUrl: 'https://appetize.io/embed/b_vfyableb3rimkjc4gfht7aqrn4?device=pixel8&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A52.0.0%26channel-name%3Dproduction%26snack%3D%2540jimohsegun%252Fgithub.com-jimohsegun1-openstore%26snack-channel%3D8CuvNi0kGx&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=light&deviceColor=black&scale=auto&orientation=portrait&centered=both',
    imageId: 'project-4',
    category: 'ANDROID APP',
  },
  {
    name: 'Delivery App',
    description: 'A React Native application for ordering food from local restaurants.',
    tags: ['React Native', 'Firebase'],
    githubUrl: 'https://github.com/jimohsegun1/DeliveryMobile',
    liveUrl: 'https://expo.dev/artifacts/eas/bmpV1j4VRYt6mtGGFJ1K98.apk',
    imageId: 'project-9',
    category: 'ANDROID APP',
  },
  {
    name: 'Social Media App',
    description: 'A social media application with features like posts, comments, and likes.',
    tags: ['React Native', 'Firebase'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    imageId: 'project-5',
    category: 'ANDROID APP',
  },
  {
    name: 'Sentiment Analysis API',
    description: 'A machine learning model to predict sentiment from text.',
    tags: ['Python', 'Flask', 'NLTK'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    imageId: 'project-3',
    category: 'MACHINE LEARNING',
  },
  {
    name: 'Real Estate Web App',
    description: 'A full-stack MERN platform for exploring, filtering, and managing real estate listings. Includes user accounts, saved favorites, and agent contact options.',
    tags: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'ESLint', 'CI/CD'],
    githubUrl: 'https://github.com/jimohsegun1/realestatefullstackapp',
    liveUrl: 'https://realestatefullstackapp.vercel.app/',
    imageId: 'project-5',
    category: 'WEB APP',
  },
  {
    name: 'Todo Web App',
    description: 'A simple yet powerful MERN-based CRUD app for managing daily tasks with real-time updates and a responsive user interface.',
    tags: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'ESLint', 'CI/CD'],
    githubUrl: 'https://github.com/jimohsegun1/todofrontend',
    liveUrl: 'https://todofrontend-smoky.vercel.app/',
    imageId: 'project-6',
    category: 'WEB APP',
  },
  {
    name: 'Battery Web App',
    description: 'A lightweight web app built with HTML, CSS, and JavaScript that helps users monitor and optimize their device battery performance.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/jimohsegun1/battery-A.P.I',
    liveUrl: 'https://jimohsegun1.github.io/battery-A.P.I/',
    imageId: 'project-8',
    category: 'WEB APP',
  },
  {
    name: 'ML App',
    description: 'A machine learning project integrating TensorFlow and Keras to build and deploy predictive models, with a React-based visualization interface.',
    tags: ['Python', 'Keras', 'TensorFlow', 'VGG16', 'Pickle', 'React'],
    githubUrl: '#',
    liveUrl: '#',
    imageId: 'project-ml',
    category: 'MACHINE LEARNING',
  },
];
