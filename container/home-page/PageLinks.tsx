'use client';

import { TextMask } from '@/animation';
import TransitionLink from '@/components/TransitionLink';

const links = [
	{ label: 'about', href: '/about' },
	{ label: 'projects', href: '/projects' },
	{ label: 'skills', href: '/skills' },
	{ label: 'linktree', href: '/me' },
];

export default function PageLinks() {
	return (
		<section className="w-full min-h-screen sm:h-screen xm:h-screen bg-about padding-y rounded-b-[20px]">
			<div className="w-full h-full flex justify-center items-center flex-col gap-[30px]">
				<p className="text-[32px] lg:text-[28px] md:text-[24px] sm:text-[20px] uppercase font-NeueMontreal tracking-[6px] text-secondry">Explore</p>
				<h2 className="text-[200px] leading-[160px] lg:text-[160px] lg:leading-[130px] md:text-[120px] md:leading-[100px] sm:text-[72px] sm:leading-[60px] xm:text-[56px] xm:leading-[46px] text-center font-FoundersGrotesk text-secondry uppercase font-normal">
					<TextMask>
						{links.map((link) => (
							<TransitionLink
								key={link.href}
								href={link.href}
								className="block w-full underline decoration-2 underline-offset-[12px] font-light transition-all duration-300 cursor-pointer hover:text-white hover:font-bold hover:[text-shadow:_-2px_-2px_0_#3d2520,_2px_-2px_0_#3d2520,_-2px_2px_0_#3d2520,_2px_2px_0_#3d2520,_-2px_0_0_#3d2520,_2px_0_0_#3d2520,_0_-2px_0_#3d2520,_0_2px_0_#3d2520]"
								style={{
									transition: 'all 0.3s ease'
								}}
							>
								{link.label}
							</TransitionLink>
						))}
					</TextMask>
				</h2>
			</div>
		</section>
	);
}
