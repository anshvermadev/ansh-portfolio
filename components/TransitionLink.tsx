// components/TransitionLink.tsx

'use client';

import { useTransition } from '@/context/TransitionContext';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface TransitionLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
}

export default function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
	const { transition } = useTransition();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (
			e.defaultPrevented ||
			e.button !== 0 ||
			props.target === '_blank' ||
			e.metaKey ||
			e.ctrlKey ||
			e.shiftKey ||
			e.altKey
		) {
			return;
		}

		e.preventDefault();
		transition(href);
	};

	return (
		<a href={href} onClick={handleClick} {...props}>
			{children}
		</a>
	);
}
