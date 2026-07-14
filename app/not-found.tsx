'use client';
import Balatro from '@/components/Balatro';
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="relative h-screen w-full bg-black" id="__not_found__">
			<Balatro isRotate={false} mouseInteraction={true} pixelFilter={2000} />
			<div className="absolute inset-0 z-10 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-6xl font-bold text-white mb-4">404</h1>
					<p className="text-xl text-gray-400 mb-8">Page not found</p>
					<Link
						href="/"
						className="inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors"
					>
						Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
}
