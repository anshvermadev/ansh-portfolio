import { JWt } from '@/public';
import { Facebook, Github, Globe, Instagram, Linkedin, Mail, MessageCircleMore, Newspaper, Twitter } from 'lucide-react';

import {
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiNetlify,
	SiVite,
	SiFirebase,
	SiShadcnui,
	SiExpress,
	SiFlask,
	SiHuggingface,
	SiGoogleappsscript,
	SiGooglesheets,
	SiVercel,
	SiFlutter,
	SiDart,
	SiCanva,
	SiPhp,
	SiPrettier
} from "react-icons/si";
import {
	FaCss3Alt,
	FaHtml5,
	FaNodeJs,
	FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaFigma, FaJava, FaGit, FaNpm } from "react-icons/fa6";
import { DiMongodb, DiRedis } from "react-icons/di";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io";

export const skillItems = [
	{ id: 1, Icon: SiNextdotjs, name: "Next.js" },
	{ id: 2, Icon: FaReact, name: "React" },
	{ id: 3, Icon: SiTypescript, name: "TypeScript" },
	{ id: 4, Icon: SiJavascript, name: "JavaScript" },
	{ id: 5, Icon: RiTailwindCssFill, name: "Tailwind" },
	{ id: 6, Icon: FaNodeJs, name: "Node.js" },
	{ id: 7, Icon: SiExpress, name: "Express.js" },
	{ id: 8, Icon: BiLogoMongodb, name: "MongoDB" },
	{ id: 9, Icon: BiLogoPostgresql, name: "PostgreSQL" },
	{ id: 10, Icon: GrMysql, name: "MySQL" },
	{ id: 11, Icon: SiFirebase, name: "Firebase" },
	{ id: 12, Icon: DiRedis, name: "Redis" },
	{ id: 13, Icon: FaPython, name: "Python" },
	{ id: 14, Icon: SiFlask, name: "Flask" },
	{ id: 15, Icon: SiHuggingface, name: "Hugging Face" },
	{ id: 16, Icon: SiShadcnui, name: "Shadcn UI" },
	{ id: 17, Icon: TbBrandFramerMotion, name: "Framer Motion" },
	{ id: 18, Icon: SiFlutter, name: "Flutter" },
	{ id: 19, Icon: SiDart, name: "Dart" },
	{ id: 20, Icon: FaGit, name: "Git" },
	{ id: 21, Icon: IoLogoGithub, name: "GitHub" },
	{ id: 22, Icon: SiVite, name: "Vite" },
	{ id: 23, Icon: SiVercel, name: "Vercel" },
	{ id: 24, Icon: SiNetlify, name: "Netlify" },
	{ id: 25, Icon: VscVscode, name: "VS Code" },
	{ id: 26, Icon: FaNpm, name: "npm" },
	{ id: 27, Icon: JWt, name: "JWT" },
	{ id: 28, Icon: SiPrettier, name: "Prettier" },
	{ id: 29, Icon: FaFigma, name: "Figma" },
	{ id: 30, Icon: SiCanva, name: "Canva" },
	{ id: 31, Icon: FaHtml5, name: "HTML" },
	{ id: 32, Icon: FaCss3Alt, name: "CSS" },
	{ id: 33, Icon: FaJava, name: "Java" },
	{ id: 34, Icon: SiPhp, name: "PHP" },
	{ id: 35, Icon: SiGoogleappsscript, name: "Google Apps Script" },
	{ id: 36, Icon: SiGooglesheets, name: "Google Sheets" },
];


// Navbar
export const navbarItems = [
	{
		id: 1,
		title: 'About',
		href: '/about',
	},
	{
		id: 2,
		title: 'Projects',
		href: '/projects',
	},
	{
		id: 3,
		title: 'Skills',
		href: '/skills',
	},

	{
		id: 5,
		title: 'LinkTree',
		href: '/me',
	},
	{
		id: 6,
		title: 'Contact us',
		href: '/contact',
	},
];

// Footer
export const footerItems = [
	{
		id: 1,
		title: 'Github',
		url: 'https://github.com/anshvermadev',
		imageSrc: '',
	},
	{
		id: 2,
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ansh-verma-37504b2b7/',
		imageSrc: '',
	},
	{
		id: 3,
		title: 'Instagram',
		url: 'https://www.instagram.com/verma_07ansh/',
		imageSrc: '',
	},
	{
		id: 4,
		title: 'Twitter',
		url: 'https://x.com/VERMA07ANSH',
		imageSrc: '',
	},
];



// Projects
export const projectsItem = [
	{
		id: 1,
		slug: 'alkemy-2025',
		title: 'Alkemy 2025',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551060/1_qjy0bt.jpg',
		role: 'Lead Frontend Developer & Interactive Designer',
		client: 'Bharati Vidyapeeth University DET & DMS',
		timeline: 'Jan 2025 - Mar 2025',
		challengeTitle: 'Modernizing College Traditions with a Medieval Flare',
		solutionTitle: 'An Interactive Portal combining Medieval Aesthetics with modern React',
		summary: [
			"<strong>Alkemy 2025</strong> is the annual college event website for <strong>Bharati Vidyapeeth's Department of Engineering and Technology (DET)</strong> and <strong>Department of Management Studies (DMS)</strong> in Kharghar, Navi Mumbai. It serves as a digital platform for event information, registration, and live updates.",
			"The website embraces a <strong>medieval-inspired theme</strong>, offering an engaging and interactive user experience. It features a dynamic event calendar, categorized event filters, real-time registration system, and a dedicated Student Council directory showcasing the team behind Alkemy.",
			"Designed with <strong>React + TypeScript</strong> and styled using <strong>Tailwind CSS</strong>, Alkemy 2025 combines performance, aesthetics, and usability. With <strong>Framer Motion</strong> animations and a fully responsive layout, it ensures seamless navigation across all devices."
		],
		repoUrl: '',
		liveUrl: 'https://alkemy-bvdu-2025.netlify.app/',
		stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite', 'Hostinger', 'Netlify'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551060/1_qjy0bt.jpg',
				caption: 'Medieval-themed hero section with dynamic event calendar.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551060/2_rkfqlp.jpg',
				caption: 'Event registration interface with categorized filters.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551061/3_wontki.jpg',
				caption: 'Student Council directory showcase.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551063/4_uvzk5n.png',
				caption: 'Responsive about page with dynamic details view.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
			{
				id: 4,
				title: 'Framer Motion',
				href: 'https://www.framer.com/motion/',
			},
		],
	},
	{
		id: 2,
		slug: 'dscr-portal',
		title: 'Diabetic Retinopathy Screening (DSCR)',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780812623/DSCR-Login-Portal_png_scene_agavjz.png',
		role: 'Frontend Developer',
		client: 'Central Railway (Divisional Railway Hospital, Mumbai)',
		timeline: 'Sep 2024 - Apr 2025',
		challengeTitle: 'Fragmented Clinical Records and Manual Patient Scheduling',
		solutionTitle: 'A Secure End-to-End Screening Portal with Automated WhatsApp Delivery',
		summary: [
			"<strong>Central Railway - Diabetic Retinopathy Screening (DSCR)</strong> is a secure, patient-and-doctor-facing clinical web portal designed for the Divisional Railway Hospital, Mumbai Division (Central Railway). It streamlines patient scheduling, clinical recording, and secure data handling for diabetic retinopathy (DR) and macular edema (ME) screenings. It has been recognized with an official Letter of Appreciation from the Chief Medical Superintendent.",
			"As the lead Frontend Developer on the team, I developed the user interface using EJS templates and Tailwind CSS, focusing on a clean, accessible layout for doctors to record diabetic profiling, ophthalmic parameters, and visualize longitudinal patient histories. The platform features automated PDF report generation and WhatsApp delivery system to send results directly to patients.",
			"The backend is built using Node.js/Express.js with a PostgreSQL database, secured with passport.js authentication (Local & Google OAuth 2.0). Headless Puppeteer runs inside Docker containers to reliably host the WhatsApp client, while exceljs integration enables doctors to export patient data for clinical audits."
		],
		repoUrl: 'https://github.com/anshvermadev/Central-Railway-DSCR-Portal',
		liveUrl: '',
		stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Tailwind', 'EJS', 'Docker', 'Puppeteer'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780812623/DSCR-Login-Portal_png_scene_agavjz.png',
				caption: 'Login Portal',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780812625/Letter_of_Appreciation___Central_Railway__Chief_Medical_Superintendent_jpg_scene_offfz9.png',
				caption: 'Letter of Appreciation from the Chief Medical Superintendent',
			},
		],
		links: [
			{
				id: 1,
				title: 'Express.js',
				href: 'https://expressjs.com/',
			},
			{
				id: 2,
				title: 'PostgreSQL',
				href: 'https://www.postgresql.org/',
			},
			{
				id: 3,
				title: 'Docker',
				href: 'https://www.docker.com/',
			},
		],
	},
	{
		id: 3,
		slug: 'skillxchange',
		title: 'SkillXChange',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551110/1_w8tzqb.jpg',
		role: 'Full Stack Architect & UX Designer',
		client: 'Academic Open Source Project',
		timeline: 'Oct 2024 - Dec 2024',
		challengeTitle: 'Removing Money from Peer Learning Systems',
		solutionTitle: 'A Secure, Real-Time Skill-Bartering Hub powered by Firebase',
		summary: [
			"<strong>SkillXChange</strong> is a collaborative web platform that redefines how people learn and grow by enabling <strong>skill bartering</strong> — users can exchange their expertise with others instead of using money. Whether you're a developer learning design or a photographer teaching editing, SkillXChange connects you with peers for mutual learning and collaboration.",
			"Built with <strong>React.js</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>, and powered by <strong>Firebase</strong> for authentication and database management, the platform emphasizes real-time communication, secure user access, and smart skill matching. It provides a responsive, intuitive interface for discovering, requesting, and managing skill exchanges seamlessly.",
			"Key features include <strong>Firebase authentication</strong> with secure routing, <strong>intelligent skill matching</strong> between users, <strong>real-time chat rooms</strong> for connected learners, and a full-featured <strong>Admin Dashboard</strong> for monitoring, moderation, and analytics. It fosters a global learning community built on knowledge exchange rather than transactions."
		],
		repoUrl: 'https://github.com/anshvermadev/SkillXChange',
		liveUrl: 'https://skillxchanged.netlify.app/',
		stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Firebase', 'Netlify'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551110/1_w8tzqb.jpg',
				caption: 'Skill bartering platform homepage.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551112/2_nfcpnl.png',
				caption: 'Intelligent skill matching interface.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551112/3_bsws77.jpg',
				caption: 'User profile and skill management.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551112/4_gwq2fk.jpg',
				caption: 'Responsive skill exchange request view.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551112/5_y8qnvk.jpg',
				caption: 'Real-time chat room for connected learners.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551117/6_bofgb0.jpg',
				caption: 'Admin dashboard for monitoring and analytics.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Firebase',
				href: 'https://firebase.google.com/',
			},
			{
				id: 4,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
		],
	},
	{
		id: 4,
		slug: 'modern-blogging-platform',
		title: 'Modern Blogging Platform',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551151/vibe-hack_ylgbir.png',
		role: 'Senior Full Stack & Infrastructure Engineer',
		client: 'Developer Community Showcase',
		timeline: 'Aug 2025 - Sep 2025',
		challengeTitle: 'Scaling Rich-Text Publishing for Modern Web Developers',
		solutionTitle: 'A Scalable MERN Stack Platform Optimized with Redis Caching',
		summary: [
			"<strong>Modern Blogging Platform</strong> is a next-generation content creation ecosystem designed for modern writers and developers. It empowers users to <strong>create, share, and inspire</strong> through a robust, secure, and data-driven blogging environment — combining elegant design with powerful backend architecture.",
			"The platform features a <strong>rich text editor</strong> with real-time preview, <strong>JWT-based authentication</strong> with role-based access, and <strong>AI-assisted content moderation</strong>. With a responsive design, advanced caching using <strong>Redis</strong>, and optimized MongoDB queries, it ensures lightning-fast performance and seamless user experience across devices.",
			"Its architecture integrates a <strong>React + TypeScript frontend</strong> with <strong>Express.js, MongoDB,</strong> and <strong>Redis backend</strong>, forming a scalable, secure, and feature-rich ecosystem. It supports multiple user roles — Guest, Author, and Admin — each equipped with tailored privileges for content creation, engagement, and moderation.",
			"Key highlights include <strong>deep analytics dashboards</strong>, <strong>real-time engagement tracking</strong>, <strong>secure session management</strong>, and an <strong>AI-powered moderation suite</strong>. Designed with performance, scalability, and user experience at its core, this project represents a complete full-stack blogging solution."
		],
		repoUrl: 'https://github.com/anshvermadev/VibeHack-2025-Blogging-Website',
		liveUrl: 'https://vibe-hack-2025-hmm5.vercel.app/',
		stack: ['React', 'TypeScript', 'Tailwind', 'Shadcn UI', 'Framer Motion', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT', 'Vercel'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551091/1_wd3pj9.png',
				caption: 'Modern blogging platform homepage.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551089/2_chwgar.png',
				caption: 'Arciles page to view and read blog posts.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551091/3_r1d0oe.png',
				caption: 'Responsive blog post view.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551089/4_ju97ex.png',
				caption: 'Blog post creation with rich text editor.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551090/5_b5wmmv.png',
				caption: 'Role-based access control interface.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551091/6_u0dlsa.png',
				caption: 'Responsive Admin dashboard with analytics.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Express.js',
				href: 'https://expressjs.com/',
			},
			{
				id: 4,
				title: 'MongoDB',
				href: 'https://www.mongodb.com/',
			},
			{
				id: 5,
				title: 'Redis',
				href: 'https://redis.io/',
			},
		],
	},
	{
		id: 5,
		slug: 'patient-awareness-system',
		title: 'Patient Awareness System',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551152/dental-learning_bztgce.png',
		role: 'Lead Developer & Localization Specialist',
		client: 'Bharati Vidyapeeth Dental College & Hospital',
		timeline: 'Nov 2024 - Jan 2025',
		challengeTitle: 'Making Dental Care Knowledge Accessible Across Language Barriers',
		solutionTitle: 'A Lightweight Multilingual Knowledge System with Interactive Maps',
		summary: [
			"The <strong>Patient Awareness System</strong> is a multilingual web portal developed for <strong>Bharati Vidyapeeth Dental College and Hospital, Navi Mumbai</strong>. It serves as an interactive information platform offering comprehensive details about <strong>dental treatments, services, doctors, and courses</strong>, while also featuring a secure admin panel for content management.",
			"Built using <strong>React + TypeScript</strong> and powered by <strong>Firebase</strong>, the system integrates modern web technologies such as <strong>Tailwind CSS</strong>, <strong>Lucide Icons</strong>, and <strong>Framer Motion</strong> for an elegant and responsive user experience. The platform is divided into three localized versions — <strong>English, Hindi, and Marathi</strong> — each maintaining the same structure and functionality, ensuring accessibility for a diverse audience.",
			"For visitors, it offers detailed sections on treatments, departments, and courses, along with an <strong>interactive campus map</strong> and comprehensive contact details. For administrators, the platform includes a <strong>secure admin dashboard</strong> for managing treatments, uploading videos, updating FAQs, and modifying service data. The multi-language implementation ensures consistent, localized healthcare communication for patients and learners alike."
		],
		repoUrl: 'https://github.com/anshvermadev/BVP-Dental-Learning-Website',
		liveUrl: 'https://dental-learning.netlify.app/',
		stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion', 'Lucide', 'Firebase', 'Netlify'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551101/1_dpcsso.jpg',
				caption: 'Homepage with treatment information.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551101/2_kxx5us.jpg',
				caption: 'Multi-languages information page.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551101/3_ijkkdz.jpg',
				caption: 'Admin dashboard for content management.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551101/4_avp0ct.jpg',
				caption: 'Service details page.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551102/5_ijlil4.jpg',
				caption: 'Treatment video library.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551102/6_apto0p.jpg',
				caption: 'Interactive campus map',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Firebase',
				href: 'https://firebase.google.com/',
			},
			{
				id: 4,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
		],
	},
	{
		id: 6,
		slug: 'ai-news-aggregator',
		title: 'AI News Aggregator',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551150/ai-news-aggregator_hp2dog.png',
		role: 'NLP Engineer & Lead Architect',
		client: 'Academic AI Research Showcase',
		timeline: 'Oct 2025',
		challengeTitle: 'Mitigating AI Hallucinations in Automated News Summaries',
		solutionTitle: 'A Flask & React Dashboard with Entity Validation & Sentiment Scoring',
		summary: [
			"<strong>AI News Aggregator with Smart Summarization</strong> is a modern, AI-driven news platform that consolidates articles from multiple trusted sources and generates concise summaries using advanced natural language models. It leverages the <strong>BART (facebook/bart-large-cnn)</strong> model to produce factual, context-preserving summaries while incorporating mechanisms to prevent hallucination or misinformation.",
			"The system features <strong>multi-source aggregation</strong>, <strong>real-time updates</strong>, and <strong>sentiment analysis</strong> for each article. Users can filter news by category, search specific topics, and switch between <strong>dark and light themes</strong> for a modern reading experience. It ensures that summaries remain faithful to original content through <strong>entity validation</strong> and <strong>extractive fallback</strong> logic.",
			"Built with <strong>React 18 + TypeScript</strong> and <strong>Tailwind CSS</strong> on the frontend, and a <strong>Flask (Python)</strong> backend handling AI processing, the project combines efficient data fetching with deep NLP integration. The backend also uses <strong>BeautifulSoup</strong> and <strong>Newspaper3k</strong> for parsing and extracting article content, while the <strong>Transformers</strong> library powers intelligent summarization and hallucination prevention.",
			"Comprehensive tests ensure reliability across diverse article types, achieving accurate summarization, entity preservation, and performance optimization. The platform demonstrates practical application of AI in journalism and real-time information systems."
		],
		repoUrl: 'https://github.com/anshvermadev/AI-News-Aggregator-with-Smart-Summarization',
		liveUrl: '',
		stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Python', 'Flask', 'Hugging Face', 'Newspaper3k'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780550339/1_dh9ptk.png',
				caption: 'AI-powered news aggregation dashboard.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551035/3_zbnhzt.png',
				caption: 'Page before AI summarization and sentiment analysis.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551035/2_h5aqg6.png',
				caption: 'Page after AI summarization and sentiment analysis.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Flask',
				href: 'https://flask.palletsprojects.com/',
			},
			{
				id: 4,
				title: 'Hugging Face',
				href: 'https://huggingface.co/',
			},
		],
	},
	{
		id: 7,
		slug: 'ecell-launchpad',
		title: 'E-Cell Launchpad',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551150/launchpad_xstr8o.png',
		role: 'Frontend Architect & Contributor',
		client: 'University Entrepreneurship Cell',
		timeline: 'Jul 2024 - Aug 2024',
		challengeTitle: 'Connecting Student Innovators with Mentors and Capital',
		solutionTitle: 'A Dynamic Launchpad and Live Networking Showcase',
		summary: [
			"<strong>E-Cell Launchpad</strong> is a dynamic web platform developed to empower student entrepreneurs by offering them access to mentorship, startup resources, and a vibrant community of innovators.",
			"<strong>E-Cell Launchpad</strong> emphasizes collaboration and community-building, integrating social media links to connect users directly with mentors, founders, and event organizers."
		],
		repoUrl: '',
		liveUrl: 'https://launchpad-by-ecell.netlify.app/',
		stack: ['React', 'Tailwind', 'Vite', 'Framer Motion', 'React Router', 'Google Apps Script', 'Google Sheets'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551073/1_xjrrsq.png',
				caption: 'E-Cell Launchpad homepage.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551073/2_hlkdc3.png',
				caption: 'Mentorship and startup resources section.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551074/3_wlhi1p.png',
				caption: 'Featured startups showcase.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780551073/4_ckty9m.png',
				caption: 'Community connection interface.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
			{
				id: 3,
				title: 'Framer Motion',
				href: 'https://www.framer.com/motion/',
			},
			{
				id: 4,
				title: 'React Router',
				href: 'https://reactrouter.com/',
			},
		],
	},
	{
		id: 8,
		slug: 'rawcert',
		title: 'RawCert',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780554205/2_dmhgqj.png',
		role: 'Solo Developer',
		client: 'Personal / Open Source',
		timeline: 'May 2026',
		challengeTitle: 'Certificates Deserve Better Than Getting Cropped',
		solutionTitle: 'A Neo-Brutalist Scene Generator for Social-Ready Credentials',
		summary: [
			"<strong>RawCert</strong> is a premium, browser-based certificate scene generator that transforms raw landscape PDFs and images into cinematic, scroll-stopping social media showcases — wrapping credentials inside a high-fidelity macOS window mockup set against rich gradient backdrops.",
			"<strong>RawCert</strong> is built as a zero-dependency, single-file static application with a bold Neo-Brutalist design system, featuring drag-and-drop uploads, interactive styling controls, a curated wallpaper engine, and one-click high-resolution PNG export optimized for every major social platform."
		],
		repoUrl: 'https://github.com/anshvermadev/RawCert-Premium-Certificate-Scene-Generator',
		liveUrl: '',
		stack: ['HTML', 'CSS', 'JavaScript', 'PDF.js', 'html2canvas'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780554205/1_nnm85g.png',
				caption: 'RawCert editor with Neo-Brutalist interface.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780554206/3_kc53mm.png',
				caption: 'Backdrop wallpaper engine with curated gradient presets and theme options.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780554207/4_ics0d2.png',
				caption: 'macOS window mockup with interactive shadow and border controls.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780554205/2_dmhgqj.png',
				caption: 'Normal interface to download certs without any editing.',
			}
		],
		links: [
			{
				id: 1,
				title: 'PDF.js',
				href: 'https://mozilla.github.io/pdf.js/',
			},
			{
				id: 2,
				title: 'html2canvas',
				href: 'https://html2canvas.hertzen.com/',
			},
		],
	},
	{
		id: 9,
		slug: 'aadhaar-card-data-extractor',
		title: 'Aadhaar Card Data Extractor',
		src: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780810613/1_baz0jt.png',
		role: 'Solo Developer',
		client: 'Personal / Open Source',
		timeline: 'Apr 2026',
		challengeTitle: 'Targeted Demographics Extraction from Complex Identity Cards',
		solutionTitle: 'YOLOv8 Regional Segmentation + Preprocessing + Tesseract OCR Pipeline',
		summary: [
			"<strong>Aadhaar Card Data Extractor</strong> is an intelligent, full-stack hybrid AI application that automates the extraction of key demographic fields (Name, Date of Birth, Gender, and Aadhaar Number) from Aadhaar cards. It utilizes a custom-trained <strong>YOLOv8</strong> object detection model to locate text regions, applies advanced <strong>OpenCV</strong> preprocessing filters for text clarity, and runs <strong>Tesseract OCR</strong> to parse the content with high-accuracy fallbacks.",
			"Designed with a modular <strong>FastAPI</strong> backend and a modern <strong>drag-and-drop web UI</strong> built using Vanilla JS, HTML5, and CSS3, the application processes images in a pipeline: Preprocessing -> YOLOv8 Inference -> OCR -> Structured JSON Data. It eliminates background noise by targeting specific Regions of Interest (ROI) and cropping high-resolution segments from original images.",
			"To handle bad lighting or rotation, the backend incorporates robust fallback logic, including a full-card OCR text scan and targeted bottom-half sweeps. This hybrid approach makes it production-ready for onboarding, KYC verification, and automated data entry workflows."
		],
		repoUrl: 'https://github.com/anshvermadev/Aadhaar-Card-Data-Extractor',
		liveUrl: '',
		stack: ['Python', 'FastAPI', 'YOLOv8', 'Tesseract OCR', 'HTML', 'CSS', 'JavaScript'],
		gallery: [
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780810613/1_baz0jt.png',
				caption: 'Sleek dark mode dashboard with drag-and-drop file upload zone and side-by-side extracted data.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780810613/2_mv7t4g.png',
				caption: 'Modern responsive landing page showing the drag-and-drop document upload state.',
			},
			{
				image: 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780810613/3_mvgwgu.png',
				caption: 'Interactive results dashboard displaying the output that can be directly copied to the clipboard.',
			},
		],
		links: [
			{
				id: 1,
				title: 'FastAPI',
				href: 'https://fastapi.tiangolo.com/',
			},
			{
				id: 2,
				title: 'YOLOv8',
				href: 'https://github.com/ultralytics/ultralytics',
			},
			{
				id: 3,
				title: 'Tesseract OCR',
				href: 'https://github.com/tesseract-ocr/tesseract',
			},
		],
	},
];

// FAQ
export const FaqItems = [
	{
		id: 1,
		question: 'What technologies do you specialize in for web development?',
		title: 'Description',
		description:
			'I specialize in full-stack development, utilizing React.js, Next.js, and Tailwind CSS for the frontend, and Node.js, Express.js, and TypeScript for the backend. I work with MySQL, MongoDB, and Redis databases.',
		button: 'more',
	},
	{
		id: 2,
		question: 'Can you deploy applications to cloud platforms?',
		title: 'Description',
		description:
			'Yes, I handle cloud hosting and deployments on platforms like AWS, Vercel, and Netlify, setting up continuous deployment pipelines for robust and scalable applications.',
		button: 'more',
	},
	{
		id: 3,
		question: 'What is your approach to API development and backend services?',
		title: 'Description',
		description:
			'I design and implement RESTful APIs and backend architectures. I have experience securing services with JWT, handling real-time database state (such as Firebase), and managing complex database queries.',
		button: 'more',
	},
	{
		id: 4,
		question: 'How do you ensure scalability and performance in your projects?',
		title: 'Description',
		description:
			'I implement server-side rendering (SSR) and static generation (SSG) via Next.js, optimize rendering workflows, utilize Redis caching to reduce database overhead, and optimize client-side assets to ensure quick load times.',
		button: 'more',
	},
	{
		id: 5,
		question: 'What major achievements and recognitions have you received?',
		title: 'Description',
		description:
			'I received official Letters of Appreciation from the Chief Medical Superintendent of Central Railway (for the DSCR portal) and the Principal of BVDU DET NM (for ALKEMY 2025, Library Barcode Generator, and Dental Patient Awareness System). I also won 1st Prize at VibeHack 2025 and served as Main Organizing Coordinator for Hack With Mumbai.',
		button: 'more',
	},
	{
		id: 6,
		question: 'What featured projects have you built?',
		title: 'Description',
		description:
			'My featured projects include: the DSCR Portal for Central Railway, Alkemy 2025 (medieval-themed fest website), VibeHack 2025 (full-stack blogging platform), SkillXChange (skill-swapping platform), AEXIS Build (product platform), Velvora Cakes (e-commerce), Designivore, Library Barcode Generator, and CheckIn.',
		button: 'more',
	},
];

export const linksTree = [
	{
		name: 'Back to Website',
		url: '/',
		icon: Globe,
		newTab: false,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ansh-verma-37504b2b7/',
		icon: Linkedin,
	},
	{
		name: 'GitHub',
		url: 'https://github.com/anshvermadev',
		icon: Github,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/verma_07ansh/',
		icon: Instagram,
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/VERMA07ANSH',
		icon: Twitter,
	},
	{
		name: 'Gmail',
		url: 'https://mail.google.com/mail/?view=cm&to=verma.07ansh@gmail.com',
		icon: Mail,
	},
];

