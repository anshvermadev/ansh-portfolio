"use client";

import { IconType } from "react-icons";
import React, { MouseEvent } from "react";
import { useAnimate } from "framer-motion";
import Image from "next/image";

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

export default function LinkBox({ Icon, name }: { Icon: IconType | string | any; name: string }) {
	const [scope, animate] = useAnimate();

	const getNearestSide = (e: MouseEvent) => {
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

	const handleMouseEnter = (e: MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: ENTRANCE_KEYFRAMES[side],
		});
	};

	const handleMouseLeave = (e: MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: EXIT_KEYFRAMES[side],
		});
	};

	const renderContent = (isOverlay = false) => {
		const sizeClass = "w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] xl:w-[150px] xl:h-[150px]";
		const iconClass = `text-[48px] sm:text-[60px] md:text-[110px] lg:text-[130px] xl:text-[150px] ${
			isOverlay ? "text-white" : "text-neutral-900"
		}`;
		const textClass = `text-center text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold ${
			isOverlay ? "text-white" : "text-neutral-900"
		}`;

		// Check if Icon is a string (path)
		const isString = typeof Icon === 'string';
		// Check if Icon is an imported SVG object (has .src property)
		const isSvgImport = Icon && typeof Icon === 'object' && 'src' in Icon;
		// Check if Icon is a React component (function)
		const isComponent = typeof Icon === 'function';

		return (
			<div className="flex flex-col items-center gap-2">
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
						width={150}
						height={150}
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