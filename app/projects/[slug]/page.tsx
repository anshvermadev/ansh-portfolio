import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projectsItem } from '@/constants';
import { Curve, MaskCursor } from '@/components';
import ProjectDetailClientView from './ProjectDetailClientView';

interface Params {
	slug: string;
}

const getProjectData = (slug: string) => {
	const currentIndex = projectsItem.findIndex((project) => project.slug === slug);
	if (currentIndex === -1) return null;

	const project = projectsItem[currentIndex];
	const nextProject = projectsItem[(currentIndex + 1) % projectsItem.length];

	return {
		project,
		nextProject,
	};
};

export const generateStaticParams = async () => {
	return projectsItem.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({ params }: { params: Promise<Params> }): Promise<Metadata> => {
	const { slug } = await params;
	const data = getProjectData(slug);

	if (!data) {
		return {
			title: 'Project',
			description: 'Detail view for a selected project.',
		};
	}

	const description = Array.isArray(data.project.summary) 
		? data.project.summary[0].replace(/<[^>]*>/g, '') 
		: data.project.summary;

	return {
		title: `${data.project.title} · Project/Build`,
		description: description,
	};
};

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
	const { slug } = await params;
	const data = getProjectData(slug);

	if (!data) {
		return notFound();
	}

	// We typecast summary to string[] to resolve type differences if any project has a single string summary.
	const formattedProject = {
		...data.project,
		summary: Array.isArray(data.project.summary) 
			? data.project.summary 
			: [data.project.summary]
	};

	const formattedNextProject = {
		...data.nextProject,
		summary: Array.isArray(data.nextProject.summary) 
			? data.nextProject.summary 
			: [data.nextProject.summary]
	};

	return (
		<Curve backgroundColor={'#E1E1E1'}>
			<MaskCursor />
			<ProjectDetailClientView 
				project={formattedProject} 
				nextProject={formattedNextProject} 
			/>
		</Curve>
	);
}