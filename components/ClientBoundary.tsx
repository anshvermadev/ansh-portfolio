'use client';

import { useEffect, useState } from 'react';

export function ClientBoundary({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return <>{children}</>;
}
