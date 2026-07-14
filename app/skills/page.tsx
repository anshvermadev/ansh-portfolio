'use client';
import { useEffect } from 'react';
import { Curve, MaskCursor, Ready } from '@/components';
import { HeroCertification, FrontEnd } from '@/container';

export default function Certification() {
	return (
		<Curve backgroundColor={'#E1E1E1'}>
			<MaskCursor />
			<FrontEnd />
			<Ready />
		</Curve>
	);
}
