// components/Scene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import Model from './Model';
import { Suspense } from 'react';

function SceneContent() {
	return (
		<Suspense fallback={null}>
			<Model />
			<directionalLight intensity={3} position={[0, 0.1, 1]} />
			<Environment preset="city" />
			<Preload all />
		</Suspense>
	);
}

export default function Scene() {
	return (
		<Canvas 
			orthographic 
			style={{ background: 'transparent' }} 
			gl={{ alpha: true, antialias: true, preserveDrawingBuffer: false }} 
			camera={{ position: [0, 0, 1], zoom: 800 }}
			dpr={1}
			frameloop="demand"
			legacy={false}
		>
			<SceneContent />
		</Canvas>
	);
}
