'use client';

import dynamic from 'next/dynamic';
import { ClientBoundary } from './ClientBoundary';

const Scene = dynamic(() => import('@/components/Scene'), {
	ssr: false,
	loading: () => <div className="w-full h-full" />,
});

export default function SceneWrapper() {
	return (
		<ClientBoundary>
			<Scene />
		</ClientBoundary>
	);
}
