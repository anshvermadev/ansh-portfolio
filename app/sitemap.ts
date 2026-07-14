import { MetadataRoute } from 'next';
import { projectsItem } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.ansh-verma.xyz';

	const staticPages = [
		'',
		'/about',
		'/projects',
		'/skills',
		'/me',
		'/contact',
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: route === '' ? 1.0 : 0.8,
	}));

	const projectPages = projectsItem.map((project) => ({
		url: `${baseUrl}/projects/${project.slug}`,
		lastModified: new Date(),
		changeFrequency: 'weekly' as const,
		priority: 0.6,
	}));

	return [...staticPages, ...projectPages];
}
