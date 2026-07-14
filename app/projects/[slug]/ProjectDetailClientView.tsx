"use client";
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence, useAnimate } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Calendar, Briefcase, Award, Sparkles, ChevronLeft, ChevronRight, Laptop } from 'lucide-react';
import { Rounded, RoundButton, Ready } from '@/components';
import TransitionLink from '@/components/TransitionLink';
import { skillItems } from '@/constants';

interface Shot {
	image: string;
	caption?: string;
}

interface ProjectLink {
	id: number;
	title: string;
	href: string;
}

interface Project {
	id: number;
	slug: string;
	title: string;
	src: any; // Static image import
	summary: string[];
	repoUrl?: string;
	liveUrl?: string;
	stack: string[];
	gallery: Shot[];
	links: ProjectLink[];
	role?: string;
	client?: string;
	timeline?: string;
	challengeTitle?: string;
	solutionTitle?: string;
}

interface Props {
	project: Project;
	nextProject: Project;
}

// Custom clip-path directional hover box styled smaller for case study core technologies
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
	[key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
	left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
	left: [NO_CLIP, TOP_RIGHT_CLIP],
	bottom: [NO_CLIP, TOP_RIGHT_CLIP],
	top: [NO_CLIP, TOP_RIGHT_CLIP],
	right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

function TechLinkBox({ Icon, name }: { Icon: any; name: string }) {
	const [scope, animate] = useAnimate();

	const getNearestSide = (e: React.MouseEvent) => {
		const box = (e.target as HTMLElement).getBoundingClientRect();

		const proximityToLeft = {
			proximity: Math.abs(box.left - e.clientX),
			side: "left" as Side,
		};
		const proximityToRight = {
			proximity: Math.abs(box.right - e.clientX),
			side: "right" as Side,
		};
		const proximityToTop = {
			proximity: Math.abs(box.top - e.clientY),
			side: "top" as Side,
		};
		const proximityToBottom = {
			proximity: Math.abs(box.bottom - e.clientY),
			side: "bottom" as Side,
		};

		const sortedProximity = [
			proximityToLeft,
			proximityToRight,
			proximityToTop,
			proximityToBottom,
		].sort((a, b) => a.proximity - b.proximity);

		return sortedProximity[0].side;
	};

	const handleMouseEnter = (e: React.MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: ENTRANCE_KEYFRAMES[side],
		});
	};

	const handleMouseLeave = (e: React.MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: EXIT_KEYFRAMES[side],
		});
	};

	const renderContent = (isOverlay = false) => {
		// Balanced icon sizes that fill the box comfortably
		const sizeClass = "w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[56px] lg:h-[56px] xl:w-[60px] xl:h-[60px]";
		const iconClass = `text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] xl:text-[60px] ${
			isOverlay ? "text-white" : "text-neutral-900"
		}`;
		const textClass = `text-center text-[10px] sm:text-[11px] font-semibold tracking-tight ${
			isOverlay ? "text-white" : "text-neutral-900"
		}`;

		const isString = typeof Icon === 'string';
		const isSvgImport = Icon && typeof Icon === 'object' && 'src' in Icon;
		const isComponent = typeof Icon === 'function';

		return (
			<div className="flex flex-col items-center gap-1 p-1">
				{isString ? (
					<img 
						src={Icon} 
						alt={name} 
						className={`${sizeClass} object-contain`}
						style={{
							filter: isOverlay ? 'brightness(0) invert(1)' : 'none'
						}}
					/>
				) : isSvgImport ? (
					<Image 
						src={Icon} 
						alt={name} 
						width={48}
						height={48}
						className={`${sizeClass} object-contain`}
						style={{
							filter: isOverlay ? 'brightness(0) invert(1)' : 'none'
						}}
					/>
				) : isComponent ? (
					<Icon className={iconClass} />
				) : null}
				<span className={textClass}>{name}</span>
			</div>
		);
	};

	return (
		<div
			onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
				handleMouseEnter(e);
			}}
			onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
				handleMouseLeave(e);
			}}
			style={{ aspectRatio: "1 / 1" }}
			className="relative flex items-center justify-center w-full">
			{renderContent()}
			<div
				ref={scope}
				style={{
					clipPath: BOTTOM_RIGHT_CLIP,
				}}
				className="absolute inset-0 flex items-center justify-center bg-neutral-900">
				{renderContent(true)}
			</div>
		</div>
	);
}
export default function ProjectDetailClientView({ project, nextProject }: Props) {
	const meta = {
		role: project.role || 'Frontend Developer & UI/UX Designer',
		client: project.client || 'Academic Open Source Project',
		timeline: project.timeline || '2024 - 2025',
		challengeTitle: project.challengeTitle || 'Designing for Seamless Interaction',
		solutionTitle: project.solutionTitle || 'A High-Performance Solution with Modern UI'
	};
	const heroRef = useRef<HTMLDivElement>(null);

	// scroll progress indicator
	const { scrollYProgress } = useScroll();

	// parallax cover image
	const { scrollYProgress: heroProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});

	const yBg = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
	const scaleText = useTransform(heroProgress, [0, 1], [1, 0.85]);
	const opacityText = useTransform(heroProgress, [0, 1], [1, 0]);

	// skills icon resolver
	const getTechIcon = (techName: string) => {
		const normalizedTech = techName.toLowerCase().replace(/\.js$/, '');
		const skill = skillItems.find(item => {
			const itemNormalized = item.name.toLowerCase().replace(/\.js$/, '');
			return itemNormalized === normalizedTech || itemNormalized.includes(normalizedTech) || normalizedTech.includes(itemNormalized);
		});
		return skill ? skill.Icon : null;
	};

	// gallery slider states
	const [galleryIndex, setGalleryIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const slideVariants = {
		enter: (dir: number) => ({
			x: dir > 0 ? 1000 : -1000,
			opacity: 0
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1
		},
		exit: (dir: number) => ({
			zIndex: 0,
			x: dir < 0 ? 1000 : -1000,
			opacity: 0
		})
	};

	const paginate = useCallback((newDirection: number) => {
		setDirection(newDirection);
		setGalleryIndex((prevIndex) => {
			let next = prevIndex + newDirection;
			if (next < 0) next = project.gallery.length - 1;
			if (next >= project.gallery.length) next = 0;
			return next;
		});
	}, [project.gallery.length]);

	useEffect(() => {
		if (!project.gallery || project.gallery.length <= 1) return;
		const interval = setInterval(() => {
			paginate(1);
		}, 5000);
		return () => clearInterval(interval);
	}, [project.gallery, paginate]);

	return (
		<>
			{/* Scroll Progress Bar */}
			<motion.div 
				className="fixed top-0 left-0 right-0 h-[4px] bg-secondry z-[9999] origin-left"
				style={{ scaleX: scrollYProgress }}
			/>

			{/* Immersive Hero Section */}
			<div ref={heroRef} className="relative w-full min-h-[90vh] overflow-hidden flex items-center pt-[140px] pb-[80px] bg-about">
				{/* Parallax Cover Image Background */}
				<motion.div 
					style={{ y: yBg }} 
					className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
				>
					{project.src && (
						<Image 
							src={project.src} 
							alt={project.title} 
							fill 
							priority 
							className="object-cover opacity-[0.25] filter grayscale brightness-75 contrast-125 pointer-events-none"
						/>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-about via-about/40 to-transparent" />
				</motion.div>

				{/* Hero Title & Subtitle */}
				<div className="w-full padding-x relative z-10">
					<motion.div
						style={{ scale: scaleText, opacity: opacityText }}
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="max-w-[1400px] w-full flex flex-col items-start"
					>
						<TransitionLink href="/projects" className="inline-flex items-center gap-[8px] text-secondry uppercase small-text hover:opacity-85 border border-secondry/15 rounded-full px-[18px] py-[8px] mb-[30px] bg-[#E1E1E1]/40 backdrop-blur-sm transition-colors hover:bg-[#E1E1E1]/60">
							<ArrowLeft size={16} />
							Back to projects
						</TransitionLink>

						<span className="text-secondry uppercase small-text tracking-[0.2em] font-NeueMontreal mb-[15px] block font-medium">
							Project Case Study
						</span>
						<h1 className="heading text-secondry font-FoundersGrotesk uppercase leading-[0.8] mb-[20px]">
							{project.title}
						</h1>
						<p className="text-[24px] md:text-[20px] sm:text-[18px] font-NeueMontreal text-secondry/80 max-w-[800px] leading-relaxed">
							{meta.challengeTitle}
						</p>
					</motion.div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[5px] text-secondry/60 uppercase small-text tracking-[0.1em] font-NeueMontreal">
					<span className="text-[12px]">Scroll to explore</span>
					<motion.div 
						animate={{ y: [0, 8, 0] }}
						transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
						className="w-[1.5px] h-[30px] bg-secondry/40 relative overflow-hidden"
					>
						<div className="absolute top-0 left-0 w-full h-1/2 bg-secondry" />
					</motion.div>
				</div>
			</div>

			{/* Case Study Content Panel */}
			<section className="relative z-20 w-full bg-[#E1E1E1] rounded-t-[30px] -mt-[30px] border-t border-secondry/10 padding-x py-[80px]">
				<div className="max-w-[1400px] mx-auto">
					
					{/* Metadata Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[40px] border-b border-secondry/10 pb-[60px]">
						<div className="flex flex-col gap-[10px]">
							<span className="text-secondry/50 uppercase small-text tracking-wider font-NeueMontreal font-medium flex items-center gap-[8px]">
								<Briefcase size={16} /> Role
							</span>
							<p className="text-[20px] font-NeueMontreal text-secondry font-medium">
								{meta.role}
							</p>
						</div>

						<div className="flex flex-col gap-[10px]">
							<span className="text-secondry/50 uppercase small-text tracking-wider font-NeueMontreal font-medium flex items-center gap-[8px]">
								<Award size={16} /> Client
							</span>
							<p className="text-[20px] font-NeueMontreal text-secondry font-medium">
								{meta.client}
							</p>
						</div>

						<div className="flex flex-col gap-[10px]">
							<span className="text-secondry/50 uppercase small-text tracking-wider font-NeueMontreal font-medium flex items-center gap-[8px]">
								<Calendar size={16} /> Timeline
							</span>
							<p className="text-[20px] font-NeueMontreal text-secondry font-medium">
								{meta.timeline}
							</p>
						</div>

						<div className="flex flex-col gap-[15px] justify-center sm:justify-start">
							<div className="flex flex-wrap gap-[15px]">
								{project.repoUrl && (
									<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
										<RoundButton href={project.repoUrl} title="Repository" className="bg-white text-black p-[6px] w-[36px] h-[36px] flex items-center justify-center overflow-hidden" bgcolor="#35292E" style={{ color: '#E1E1E1' }} target="_blank" rel="noreferrer noopener" />
									</div>
								)}
								{project.liveUrl && (
									<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border border-secondry">
										<TransitionLink className="xl:text-[16px] xl:leading-[24px] text-[12px] leading-[20px] uppercase font-normal font-NeueMontreal" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
											<Rounded className="py-[4px] px-[4px]" backgroundColor="#35292E">
												<p className="z-10 px-[8px] ml-[10px] py-[4px] group-hover:text-white text-secondry">Live Site</p>
												<div className="bg-secondry group-hover:bg-white text-white group-hover:text-black p-[6px] rounded-full scale-[0.3] mr-[8px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
													<ArrowUpRight strokeWidth={1.2} size={18} className="scale-[0] group-hover:scale-[1]" />
												</div>
											</Rounded>
										</TransitionLink>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* 01 / CHALLENGE */}
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] xl:grid-cols-[1fr_2.2fr] gap-[50px] py-[80px] border-b border-secondry/10">
						<div className="lg:sticky md:sticky top-[100px] h-fit">
							<span className="text-[64px] font-FoundersGrotesk text-secondry/35 block mb-[10px]">01 //</span>
							<h2 className="text-[32px] font-FoundersGrotesk uppercase text-secondry tracking-wide">
								The Challenge
							</h2>
							<div className="w-[40px] h-[3px] bg-secondry mt-[10px]" />
						</div>
						<div className="space-y-[30px]">
							<h3 className="text-[28px] md:text-[24px] sm:text-[22px] font-NeueMontreal text-secondry font-medium leading-[38px] max-w-[800px]">
								{meta.challengeTitle}
							</h3>
							<div 
								className="text-[18px] leading-[32px] text-secondry/85 font-NeueMontreal text-justify blend-target"
								dangerouslySetInnerHTML={{ __html: Array.isArray(project.summary) ? project.summary[0] : project.summary }}
							/>
						</div>
					</div>

					{/* 02 / THE SOLUTION */}
					{Array.isArray(project.summary) && project.summary.length > 1 && (
						<div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] xl:grid-cols-[1fr_2.2fr] gap-[50px] py-[80px] border-b border-secondry/10">
							<div className="lg:sticky md:sticky top-[100px] h-fit">
								<span className="text-[64px] font-FoundersGrotesk text-secondry/35 block mb-[10px]">02 //</span>
								<h2 className="text-[32px] font-FoundersGrotesk uppercase text-secondry tracking-wide">
									The Solution
								</h2>
								<div className="w-[40px] h-[3px] bg-secondry mt-[10px]" />
							</div>
							<div className="space-y-[30px]">
								<h3 className="text-[28px] md:text-[24px] sm:text-[22px] font-NeueMontreal text-secondry font-medium leading-[38px] max-w-[800px]">
									{meta.solutionTitle}
								</h3>
								<div className="space-y-[20px]">
									{project.summary.slice(1).map((para, i) => (
										<div 
											key={i} 
											className="text-[18px] leading-[32px] text-secondry/85 font-NeueMontreal text-justify blend-target"
											dangerouslySetInnerHTML={{ __html: para }}
										/>
									))}
								</div>
							</div>
						</div>
					)}

					{/* 03 / TECH STACK GRID */}
					<div className="py-[80px] border-b border-secondry/10">
						<div className="flex flex-col gap-[10px] mb-[15px]">
							<span className="text-[16px] font-NeueMontreal text-secondry/50 uppercase tracking-widest">Architectural Components</span>
							<h2 className="sub-heading font-FoundersGrotesk uppercase text-secondry leading-none">
								Core Technologies
							</h2>
						</div>
						<div className="flex flex-wrap gap-[12px] sm:gap-[15px] mt-[20px] justify-start">
							{project.stack.map((tech, index) => {
								const icon = getTechIcon(tech) || Laptop;
								return (
									<motion.div
										key={tech}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										className="w-[125px] h-[125px] sm:w-[110px] sm:h-[110px] xm:w-[95px] xm:h-[95px] border border-secondry/15 bg-[#E1E1E1] flex-shrink-0"
										transition={{
											duration: 0.4,
											ease: "easeInOut",
											delay: index * 0.02,
										}}
									>
										<TechLinkBox Icon={icon} name={tech} />
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* 04 / INTERACTIVE SLIDER GALLERY */}
					{project.gallery && project.gallery.length > 0 && (
						<div className="py-[100px] border-b border-secondry/10">
							<div className="flex flex-col gap-[10px] mb-[45px] text-center">
								<span className="text-[16px] font-NeueMontreal text-secondry/50 uppercase tracking-widest">Interface Design & Showcase</span>
								<h2 className="sub-heading font-FoundersGrotesk uppercase text-secondry leading-none">
									Project Gallery
								</h2>
							</div>
							
							<div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-[25px] sm:gap-[15px] xm:gap-[8px]">
								{/* Left Arrow Control */}
								{project.gallery.length > 1 && (
									<button
										className="hidden md:flex lg:flex xl:flex w-[50px] h-[50px] rounded-full bg-[#E1E1E1] hover:bg-secondry hover:text-white text-secondry items-center justify-center border border-secondry/15 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
										onClick={(e) => { e.stopPropagation(); paginate(-1); }}
										aria-label="Previous slide"
									>
										<ChevronLeft size={24} />
									</button>
								)}

								{/* Main Slide Box */}
								<div className="relative flex-1 overflow-hidden rounded-none border border-secondry/15 bg-black/5 shadow-2xl flex items-center justify-center">
									{/* Dummy relative image to dynamically set height based on active image aspect ratio */}
									<img
										src={project.gallery[galleryIndex].image}
										alt=""
										className="w-full h-auto opacity-0 pointer-events-none block"
									/>

									<AnimatePresence initial={false} custom={direction}>
										<motion.div
											key={galleryIndex}
											custom={direction}
											variants={slideVariants}
											initial="enter"
											animate="center"
											exit="exit"
											transition={{
												x: { type: "tween", duration: 0.9, ease: [0.16, 1, 0.3, 1] },
												opacity: { duration: 0.3 }
											}}
											className="absolute inset-0 w-full h-full flex items-center justify-center"
										>
											<Image
												src={project.gallery[galleryIndex].image}
												alt={project.gallery[galleryIndex].caption || `slide-${galleryIndex}`}
												fill
												className="object-cover pointer-events-none"
											/>
										</motion.div>
									</AnimatePresence>
								</div>

								{/* Right Arrow Control */}
								{project.gallery.length > 1 && (
									<button
										className="hidden md:flex lg:flex xl:flex w-[50px] h-[50px] rounded-full bg-[#E1E1E1] hover:bg-secondry hover:text-white text-secondry items-center justify-center border border-secondry/15 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
										onClick={(e) => { e.stopPropagation(); paginate(1); }}
										aria-label="Next slide"
									>
										<ChevronRight size={24} />
									</button>
								)}
							</div>

							{/* Caption Indicator */}
							{project.gallery[galleryIndex].caption && (
								<div className="w-full text-center mt-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry/75 italic">
										{project.gallery[galleryIndex].caption}
									</p>
								</div>
							)}

							{/* Dots + Mobile Navigation */}
							{project.gallery.length > 1 && (
								<div className="flex justify-center items-center gap-[20px] sm:gap-[15px] xm:gap-[10px] mt-[20px]">
									{/* Mobile Left Arrow */}
									<button
										className="flex md:hidden lg:hidden xl:hidden w-[40px] h-[40px] rounded-full bg-[#E1E1E1] hover:bg-secondry hover:text-white text-secondry items-center justify-center border border-secondry/15 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
										onClick={(e) => { e.stopPropagation(); paginate(-1); }}
										aria-label="Previous slide"
									>
										<ChevronLeft size={20} />
									</button>

									{/* Dots */}
									<div className="flex justify-center gap-[10px]">
										{project.gallery.map((_, i) => (
											<button
												key={i}
												onClick={() => {
													setDirection(i > galleryIndex ? 1 : -1);
													setGalleryIndex(i);
												}}
												className={`w-[10px] h-[10px] rounded-full transition-all duration-300 cursor-pointer ${
													i === galleryIndex ? 'bg-secondry w-[24px]' : 'bg-secondry/35'
												}`}
												aria-label={`Go to slide ${i + 1}`}
											/>
										))}
									</div>

									{/* Mobile Right Arrow */}
									<button
										className="flex md:hidden lg:hidden xl:hidden w-[40px] h-[40px] rounded-full bg-[#E1E1E1] hover:bg-secondry hover:text-white text-secondry items-center justify-center border border-secondry/15 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
										onClick={(e) => { e.stopPropagation(); paginate(1); }}
										aria-label="Next slide"
									>
										<ChevronRight size={20} />
									</button>
								</div>
							)}
						</div>
					)}

					{/* 05 / NEXT PROJECT TRANSITION LOOP */}
					<div className="w-full py-[120px] bg-[#2E2429] text-white rounded-[20px] my-[60px] overflow-hidden relative group border border-secondry/10 shadow-lg">
						{/* Background cover of next project as watermark */}
						<div className="absolute inset-0 opacity-15 transition-opacity group-hover:opacity-[0.22] pointer-events-none">
							{nextProject.src && (
								<Image 
									src={nextProject.src} 
									alt={nextProject.title} 
									fill 
									className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.2s] ease-[0.16, 1, 0.3, 1] pointer-events-none filter grayscale contrast-125"
								/>
							)}
							<div className="absolute inset-0 bg-[#2E2429]/80 group-hover:bg-[#2E2429]/70 transition-colors duration-500" />
						</div>
						
						<div className="w-full text-center relative z-10 flex flex-col items-center gap-[25px]">
							<div className="flex items-center gap-[10px] px-[15px] py-[6px] rounded-full bg-white/5 border border-white/10 backdrop-blur-sm pointer-events-none">
								<span className="uppercase text-[12px] tracking-[0.25em] opacity-80 font-NeueMontreal font-medium">
									Up Next
								</span>
							</div>

							<TransitionLink href={`/projects/${nextProject.slug}`} className="block group/link max-w-[85%]">
								<h3 className="text-[32px] sm:text-[44px] md:text-[64px] lg:text-[85px] xl:text-[85px] leading-none font-FoundersGrotesk uppercase text-[#E1E1E1] group-hover/link:text-about transition-colors duration-500 font-bold tracking-tight whitespace-normal break-keep hyphens-none">
									{nextProject.title}
								</h3>
							</TransitionLink>
							
							<div className="flex flex-col items-center gap-[10px] mt-[10px]">
								<TransitionLink href={`/projects/${nextProject.slug}`} className="text-[16px] font-NeueMontreal hover:text-about text-white/80 transition-colors flex items-center gap-[10px] group/btn">
									Read next case study
									<div className="w-[30px] h-[30px] rounded-full border border-white/30 group-hover/btn:border-about flex items-center justify-center group-hover/btn:translate-x-[5px] transition-all">
										<ArrowUpRight size={14} />
									</div>
								</TransitionLink>
							</div>
						</div>
					</div>

				</div>
			</section>

			{/* Global Footer component consistency */}
			<Ready />
		</>
	);
}
