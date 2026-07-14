'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TransitionLink from './TransitionLink';

const getFontSizeClass = (title: string) => {
	const cleanLength = title.replace(/\s+/g, '').length;
	if (cleanLength <= 12) {
		return "text-[100px] md:text-[6vw] lg:text-[5.5vw] xl:text-[110px]";
	} else if (cleanLength <= 16) {
		return "text-[80px] md:text-[5vw] lg:text-[4.5vw] xl:text-[85px]";
	} else {
		return "text-[58px] md:text-[4vw] lg:text-[3.2vw] xl:text-[64px]";
	}
};

export default function ProjectCard({ item }: { item: any }) {
	const [hovered, setHovered] = useState(false);
	const fontSizeClass = getFontSizeClass(item.title);

	return (
		<div>
			<div className="relative w-full group">
				<TransitionLink
					href={`/projects/${item.slug}`}
					className="rounded-[10px] overflow-hidden hover:scale-[0.95] transition cursor-pointer transform duration-[1s] ease-[.4,0,.2,1] block"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					{typeof item.src === 'string' ? (
						<Image
							src={item.src}
							alt={`${item.title}Img`}
							width={1200}
							height={800}
							className="w-full object-cover rounded-[10px] group-hover:scale-[1.09] group-hover:blur-[4px] transition-all transform duration-[1s] ease-[.4,0,.2,1]"
						/>
					) : (
						<Image
							src={item.src}
							alt={`${item.title}Img`}
							className="w-full object-cover rounded-[10px] group-hover:scale-[1.09] group-hover:blur-[4px] transition-all transform duration-[1s] ease-[.4,0,.2,1]"
						/>
					)}
				</TransitionLink>
				<div
					style={{ left: '50%' }}
					className="absolute w-fit min-w-max flex top-[50%] sm:hidden -translate-x-1/2 -translate-y-1/2 overflow-visible z-10 group-hover:opacity-100 opacity-0 transition duration-500 ease-[.4,0,.2,1] xm:hidden pointer-events-none"
				>
					<div className="min-w-max flex overflow-hidden">
						{item.title.split('').map((char: any, i: any) => (
							<motion.span
								initial={{ y: '100%' }}
								animate={hovered ? { y: 0 } : { y: '100%' }}
								transition={{
									delay: i * 0.02,
									duration: 0.5,
									ease: [0.4, 0, 0.2, 1],
								}}
								className={`${fontSizeClass} leading-none inline-block uppercase font-FoundersGrotesk text-about font-bold text-center pointer-events-none`}
								key={i}
							>
								{char === ' ' ? '\u00A0' : char}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
