import Link from 'next/link';
import Rounded from './Rounded';
import { ArrowUpRight } from 'lucide-react';
import TransitionLink from './TransitionLink';

interface RoundButtonProps {
	href: string;
	title: string;
	className?: string;
	bgcolor: string;
	style: React.StyleHTMLAttributes<HTMLDivElement>['style'];
	target?: string;
	rel?: string;
	outerClassName?: string;
}

export default function RoundButton({ href, title, className, bgcolor, style, target, rel, outerClassName }: RoundButtonProps) {
	return (
		<TransitionLink className={`small-text uppercase font-normal font-NeueMontreal ${outerClassName ?? ''}`} href={href} target={target} rel={rel}>
			<Rounded className="py-[6px]" backgroundColor={bgcolor}>
				<p className="z-10 px-[10px] ml-[15px] py-[6px]" style={style}>
					{title}
				</p>
				<div className={`p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1] ${className}`}>
					<ArrowUpRight strokeWidth={1.5} size={30} className="scale-[0] group-hover:scale-[1]" />
				</div>
			</Rounded>
		</TransitionLink>
	);
}
