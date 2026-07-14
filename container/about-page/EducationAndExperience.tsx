'use client';
import { useEffect } from 'react';
import TransitionLink from '@/components/TransitionLink';

// Types
interface EducationItem {
	id: string;
	institution: string;
	institutionUrl: string;
	degree: string;
	duration: string;
	activities?: {
		title: string;
		roles: string[];
	};
}

interface ExperienceItem {
	id: string;
	company: string;
	companyUrl: string;
	position: string;
	duration: string;
	location: string;
	responsibilities: string[];
}

// Data
const educationData: EducationItem[] = [
	{
		id: 'school1',
		institution: 'High School',
		institutionUrl: 'https://gyangangaraipur.in/',
		degree: 'Secondary & Higher Secondary Education',
		duration: 'Till 2023',
		activities: {
			title: 'Academic & Co-Curricular Excellence',
			roles: [
				'IMO (International Mathematics Olympiad) School Medalist',
				'NCC Cadet – Participated in drills, discipline training, and leadership activities',
				'Active participant in school-level technical and academic competitions',
				'Developed early interest in problem-solving and logical thinking',
				'Participated in various extracurricular activities such as sports, music, and cultural events',
			],
		},
	},
	{
		id: 'college1',
		institution: 'Bharati Vidyapeeth Deemed University, Navi Mumbai',
		institutionUrl: 'https://www.bvuniversity.edu.in/',
		degree: "B.Tech in Computer Science Engineering",
		duration: '2023 – Present',
		activities: {
			title: 'Leadership & Technical Involvement',
			roles: [
				'Maintaining a strong academic record with a CGPA of 9.2',
				'Vice President – HackwithIndia, BVDU DET NM Chapter',
				'Technical Lead – E-Cell, BVDU DET NM (Led development of official club platforms)',
				'Actively involved in organizing and managing technical events and hackathons',
			],
		},
	},

];

const experienceData: ExperienceItem[] = [
	{
		id: 'devnovate-fullstack',
		company: 'Devnovate',
		companyUrl: 'https://devnovate.co/',
		position: 'Full Stack Developer',
		duration: 'Apr 2025 – Present',
		location: 'Remote',
		responsibilities: [
			'Building modern, scalable web applications with a focus on usability and maintainable architecture.',
			'Working across frontend and backend to develop end-to-end features.',
			'Collaborating with team members to translate product requirements into functional solutions.',
			'Continuously improving performance, structure, and overall user experience.',
		],
	},
	{
		id: 'hackwithindia-intern',
		company: 'HackwithIndia',
		companyUrl: 'https://hackwithindia.in/',
		position: 'Frontend Developer Intern',
		duration: 'Apr 2025 – May 2025',
		location: 'Remote',
		responsibilities: [
			'Developed interactive and responsive user interface components for a hackathon management platform.',
			'Focused on performance optimization and clean UI behavior.',
			'Worked closely with designers and developers to refine user-facing features.',
		],
	},
	{
		id: 'central-railway-dscr',
		company: 'Central Railway',
		companyUrl: 'https://cr.indianrailways.gov.in/view_section.jsp?fontColor=black&backgroundColor=LIGHTSTEELBLUE&lang=0&id=0,6,1191,1192,1205,1274',
		position: 'Frontend Developer',
		duration: 'Sep 2024 – Apr 2025',
		location: 'Remote',
		responsibilities: [
			'Developed a responsive web portal for the Diabetic Retinopathy Screening (DSCR) initiative.',
			'Implemented patient record management, appointment scheduling, and real-time alerts.',
			'Ensured clarity and ease of use for medical and administrative staff.',
			'Integrated frontend features with backend services and APIs.',
		],
	},
	{
		id: 'alkemy-website',
		company: 'Bharati Vidyapeeth Deemed University',
		companyUrl: 'https://alkemy.org.in/',
		position: 'Website Developer',
		duration: 'Nov 2024 – Jul 2025',
		location: 'Navi Mumbai, India · On-site',
		responsibilities: [
			'Designed and developed the official Alkemy Fest website with a responsive and engaging layout.',
			'Managed content workflows for events, schedules, and announcements.',
			'Ensured smooth performance and consistency across devices and browsers.',
		],
	},

];

export default function EducationAndExperience() {
	useEffect(() => {
		// Observer for scroll entry scale & opacity focuses
		const focusObserverOptions = {
			root: null,
			rootMargin: '-25% 0px -25% 0px',
			threshold: 0.25,
		};
		const focusObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('active-entry');
				} else {
					entry.target.classList.remove('active-entry');
				}
			});
		}, focusObserverOptions);

		const scrollEntries = document.querySelectorAll('.scroll-entry');
		scrollEntries.forEach((el) => focusObserver.observe(el));

		return () => {
			scrollEntries.forEach((el) => focusObserver.unobserve(el));
			focusObserver.disconnect();
		};
	}, []);

	return (
		<section className="education-experience-container w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px] flex flex-col gap-[80px]">
			{/* Scoped styles */}
			<style>{`
				.education-experience-container {
					--text-color: #35292E;
				}
				.scroll-entry {
					opacity: 0.6;
					transition: opacity 0.5s ease;
				}
				.scroll-entry.active-entry {
					opacity: 1;
				}

				@media (prefers-reduced-motion: reduce) {
					.scroll-entry {
						transform: none !important;
						opacity: 1 !important;
						transition: none !important;
					}
				}

				/* Base / Mobile Typography (< 768px) */
				.edu-entry h3, .exp-entry h3 {          /* institution / company name */
					font-size: 1.55rem;
					font-weight: 600;
					line-height: 1.3;
				}

				.edu-entry h4, .exp-entry h4 {          /* degree / job title */
					font-size: 1.25rem;
					font-weight: 400;
					line-height: 1.4;
				}

				.edu-entry .date, .exp-entry .date {     /* date line */
					font-size: 1.0rem;
					opacity: 0.6;
					font-weight: 300;
				}

				.edu-entry li, .exp-entry li,           /* bullet points & lists */
				.edu-entry p,  .exp-entry p {
					font-size: 1.05rem;
					line-height: 1.75;
					font-weight: 400;
				}

				.edu-entry .sublabel, .exp-entry .sublabel {                    /* sub-label */
					font-size: 0.85rem;
					letter-spacing: 0.1em;
					text-transform: uppercase;
					opacity: 0.4;
					font-weight: 400;
				}

				/* Desktop Typography (>= 768px) */
				@media (min-width: 768px) {
					/* Section title on desktop */
					.edu-sticky-col .section-title,
					.exp-sticky-col .section-title {
						font-size: clamp(3rem, 6vw, 7.5rem);
						font-weight: 700;
					}

					/* Institution / Company name */
					.edu-entry h3, .exp-entry h3 {
						font-size: 2.1rem;
						font-weight: 600;
						line-height: 1.25;
					}

					/* Degree / Job title */
					.edu-entry h4, .exp-entry h4 {
						font-size: 1.5rem;
						font-weight: 400;
						line-height: 1.35;
					}

					/* Date line */
					.edu-entry .date, .exp-entry .date {
						font-size: 1.2rem;
						opacity: 0.6;
						font-weight: 300;
					}

					/* Sub-label */
					.edu-entry .sublabel, .exp-entry .sublabel {
						font-size: 0.95rem;
						letter-spacing: 0.1em;
						text-transform: uppercase;
						font-weight: 400;
						opacity: 0.4;
					}

					/* Bullet body text */
					.edu-entry li, .exp-entry li,
					.edu-entry p,  .exp-entry p {
						font-size: 1.25rem;
						font-weight: 400;
						line-height: 1.75;
					}

					/* Desktop sticky columns */
					.edu-sticky-col, .exp-sticky-col {
						position: sticky;
						top: 8vh;
						align-self: start;
						height: 80vh;
						display: flex;
						align-items: center;
						width: auto;
						min-width: 0;
					}
				}

				/* Mobile vertical sticky layout styles (< 768px) */
				@media (max-width: 767px) {
					/* Widen the sticky title column */
					.edu-sticky-col, .exp-sticky-col {
						width: 80px;
						min-width: 80px;
						flex-shrink: 0;
						background: transparent !important;
						z-index: 10;
						overflow: visible;
					}

					/* The title text itself */
					.edu-sticky-col .section-title,
					.exp-sticky-col .section-title {
						writing-mode: vertical-rl;
						text-orientation: mixed;
						transform: rotate(180deg);
						font-size: 54px;
						font-weight: 700;
						letter-spacing: 0.25em;
						text-transform: uppercase;
						white-space: nowrap;
						overflow: visible;
						opacity: 1;
						max-height: none;

						/* Sticky within section */
						position: sticky;
						top: 5rem;
						align-self: flex-start;
						background: transparent !important;
						color: var(--text-color, #35292E) !important;
						-webkit-text-stroke: 0px !important;
					}
				}
			`}</style>

			{/* Intro text */}
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					The fastest path to growth is through
					<span className="link-flash"> trying </span>
					and
					<span className="link-flash"> failing.</span>
				</h2>
			</div>

			<div className="w-full border-b border-black/20 my-0 py-0" />

			{/* ---------------------------- EDUCATION SECTION ---------------------------- */}
			<div className="grid grid-cols-[80px_1fr] md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 gap-x-[20px] md:gap-x-[50px] gap-y-[30px] padding-x relative min-h-[60vh]">
				{/* Left column (sticky title) */}
				<div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3 edu-sticky-col flex items-center">
					<h2 className="section-title leading-[0.9] font-bold font-FoundersGrotesk uppercase text-secondry blend-target">
						EDUCATION
					</h2>
				</div>

				{/* Right column (scrollable content) */}
				<div className="col-span-1 md:col-span-7 lg:col-span-7 xl:col-span-7 flex flex-col gap-[40px] py-[20px]">
					{educationData.map((edu) => (
						<div key={edu.id} className="edu-entry scroll-entry group flex flex-col gap-[15px] pb-[40px] border-b border-black/20 last:border-b-0">
							{/* Institution Link */}
							<div className="w-fit">
								<TransitionLink
									href={edu.institutionUrl}
									target="_blank"
									className="inline-block hover:opacity-75 transition-opacity"
								>
									<h3 className="entry-title text-secondry font-semibold">
										{edu.institution}
									</h3>
								</TransitionLink>
							</div>

							{/* Degree & Duration */}
							<div className="flex flex-col gap-[4px]">
								<h4 className="w-fit entry-degree text-secondry font-normal">
									{edu.degree}
								</h4>
								<p className="entry-date date text-secondry font-light italic">
									{edu.duration}
								</p>
							</div>

							{/* Achievements / Roles */}
							{edu.activities && (
								<div className="mt-2">
									<h5 className="entry-label sublabel text-secondry mb-2">
										{edu.activities.title}
									</h5>
									<ul className="space-y-1">
										{edu.activities.roles.map((role, idx) => (
											<li key={idx} className="entry-bullet text-secondry/80 flex items-start">
												<span className="mr-2 select-none">•</span>
												<span>{role}</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			<div className="w-full border-b border-black/20 my-0 py-0" />

			{/* ---------------------------- EXPERIENCE SECTION ---------------------------- */}
			<div className="grid grid-cols-[1fr_80px] md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 gap-x-[20px] md:gap-x-[50px] gap-y-[30px] padding-x relative min-h-[60vh]">
				{/* Left column (scrollable content) */}
				<div className="col-span-1 md:col-span-7 lg:col-span-7 xl:col-span-7 flex flex-col gap-[40px] py-[20px]">
					{experienceData.map((exp) => (
						<div key={exp.id} className="exp-entry scroll-entry group flex flex-col gap-[15px] pb-[40px] border-b border-black/20 last:border-b-0">
							{/* Company Link */}
							<div className="w-fit">
								<TransitionLink
									href={exp.companyUrl}
									target="_blank"
									className="inline-block hover:opacity-75 transition-opacity"
								>
									<h3 className="entry-title text-secondry font-semibold">
										{exp.company}
									</h3>
								</TransitionLink>
							</div>

							{/* Position, Duration, Location */}
							<div className="flex flex-col gap-[4px]">
								<h4 className="w-fit entry-degree text-secondry font-normal">
									{exp.position}
								</h4>
								<div className="flex flex-wrap items-center gap-x-2 entry-date date text-secondry font-light italic">
									<span>{exp.duration}</span>
									<span className="select-none font-normal">•</span>
									<span>{exp.location}</span>
								</div>
							</div>

							{/* Responsibilities */}
							<div className="mt-2">
								<h5 className="entry-label sublabel text-secondry mb-2">
									As a {exp.position.split('·')[0]} at {exp.company}, I was responsible for:
								</h5>
								<ul className="space-y-1">
									{exp.responsibilities.map((resp, idx) => (
										<li key={idx} className="entry-bullet text-secondry/80 flex items-start">
											<span className="mr-2 select-none">•</span>
											<span>{resp}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				{/* Right column (sticky title) */}
				<div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3 exp-sticky-col flex items-center">
					<h2 className="section-title leading-[0.9] font-bold font-FoundersGrotesk uppercase text-secondry blend-target w-full text-left md:text-right lg:text-right xl:text-right">
						EXPERIENCE
					</h2>
				</div>
			</div>

		</section>
	);
}
