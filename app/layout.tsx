import './global.css';
import { Toaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Metadata } from 'next';
import { ClientLayout } from '@/components/ClientLayout';
import ToastContainer from '@/components/ui/ToastContainer';
import EasterEgg from '@/components/ui/EasterEgg';
import SmoothScroll from '@/components/SmoothScroll';
import { TransitionProvider } from '@/context/TransitionContext';

const BASE_URL = 'https://www.ansh-verma.xyz';
const OG_IMAGE = 'https://res.cloudinary.com/da54ofjz1/image/upload/v1780813996/og-image_pvvdqc.jpg';

export const metadata: Metadata = {
	title: {
		default: 'Ansh Verma | Full Stack Developer',
		template: '%s | Ansh Verma',
	},
	description:
		'Ansh Verma is a Full Stack Developer from Navi Mumbai, India. He builds fast, scalable web applications using Next.js, React, TypeScript, and Node.js. Currently SDE-1 at Devnovate.',
	keywords: [
		// Name variants — highest priority
		'Ansh Verma',
		'Ansh Verma Developer',
		'Ansh Verma Portfolio',
		'Ansh Verma Full Stack Developer',
		'Ansh Verma Next.js',
		'Ansh Verma React',
		'Ansh Verma Navi Mumbai',
		'Ansh Verma India',
		'Ansh Verma anshvermadev',
		'Ansh Verma GitHub',
		'Ansh Verma SDE',
		'Ansh Verma Devnovate',
		'Ansh Verma BVU',
		'Ansh Verma Bharati Vidyapeeth',
		'ansh-verma.xyz',
		// Role-based
		'Full Stack Developer India',
		'Next.js Developer Navi Mumbai',
		'React Developer Maharashtra',
		'Software Engineer Navi Mumbai',
		'SDE-1 India',
		'TypeScript Developer India',
		'Node.js Developer India',
	],
	metadataBase: new URL(BASE_URL),
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	authors: [
		{
			name: 'Ansh Verma',
			url: BASE_URL,
		},
	],
	creator: 'Ansh Verma',
	publisher: 'Ansh Verma',
	category: 'technology',
	applicationName: 'Ansh Verma Portfolio',
	referrer: 'origin-when-cross-origin',
	openGraph: {
		title: 'Ansh Verma | Full Stack Developer',
		description:
			'Ansh Verma is a Full Stack Developer from Navi Mumbai, India. Building fast, scalable web apps with Next.js, React, and TypeScript.',
		url: BASE_URL,
		siteName: 'Ansh Verma',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: OG_IMAGE,
				width: 1200,
				height: 630,
				alt: 'Ansh Verma — Full Stack Developer from Navi Mumbai, India',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ansh Verma | Full Stack Developer',
		description:
			'Full Stack Developer from Navi Mumbai. Building web apps with Next.js, React, and TypeScript.',
		images: [
			{
				url: OG_IMAGE,
				alt: 'Ansh Verma — Full Stack Developer',
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		// Person schema — triggers name-based knowledge panel in Google
		{
			'@type': 'Person',
			'@id': `${BASE_URL}/#person`,
			name: 'Ansh Verma',
			url: BASE_URL,
			image: {
				'@type': 'ImageObject',
				url: OG_IMAGE,
				width: 1200,
				height: 630,
			},
			jobTitle: 'Full Stack Developer',
			description:
				'Full Stack Developer from Navi Mumbai, India. Currently SDE-1 at Devnovate, building fast and scalable web applications using Next.js, React, TypeScript, and Node.js.',
			worksFor: {
				'@type': 'Organization',
				name: 'Devnovate',
			},
			alumniOf: {
				'@type': 'CollegeOrUniversity',
				name: 'Bharati Vidyapeeth University',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Navi Mumbai',
					addressRegion: 'Maharashtra',
					addressCountry: 'IN',
				},
			},
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Navi Mumbai',
				addressRegion: 'Maharashtra',
				addressCountry: 'IN',
			},
			knowsAbout: [
				'Next.js',
				'React',
				'TypeScript',
				'Node.js',
				'Full Stack Development',
				'Web Development',
				'Machine Learning',
				'Android Development',
			],
			sameAs: [
				'https://github.com/anshvermadev',
				'https://www.linkedin.com/in/ansh-verma-37504b2b7/',
			],
		},
		// WebSite schema — enables Google Sitelinks Search Box
		{
			'@type': 'WebSite',
			'@id': `${BASE_URL}/#website`,
			url: BASE_URL,
			name: 'Ansh Verma',
			description: 'Portfolio of Ansh Verma — Full Stack Developer from Navi Mumbai, India.',
			author: {
				'@id': `${BASE_URL}/#person`,
			},
			inLanguage: 'en-US',
		},
		// WebPage schema — describes the homepage itself
		{
			'@type': 'WebPage',
			'@id': `${BASE_URL}/#webpage`,
			url: BASE_URL,
			name: 'Ansh Verma | Full Stack Developer',
			isPartOf: {
				'@id': `${BASE_URL}/#website`,
			},
			about: {
				'@id': `${BASE_URL}/#person`,
			},
			description:
				'Ansh Verma is a Full Stack Developer from Navi Mumbai, India, currently SDE-1 at Devnovate.',
			inLanguage: 'en-US',
			potentialAction: {
				'@type': 'ReadAction',
				target: [BASE_URL],
			},
		},
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="select-none">
				<TransitionProvider>
					<Toaster
						position="top-right"
						richColors
						closeButton
						duration={3000}
						toastOptions={{
							classNames: {
								toast: 'group toast bg-white text-black border-2 border-black shadow-lg rounded-xl font-NeueMontreal',
								title: 'text-base font-medium',
								description: 'text-sm text-black/60',
								actionButton: 'group-[.toast]:bg-black group-[.toast]:text-white',
								cancelButton: 'group-[.toast]:bg-neutral-200 group-[.toast]:text-neutral-500',
								closeButton:
									'group-[.toast]:border-black/20 group-[.toast]:bg-white group-[.toast]:text-black',
								error: '!bg-red-50 !border-red-200 !text-red-800',
								success: '!bg-green-50 !border-green-200 !text-green-800',
								warning: '!bg-yellow-50 !border-yellow-200 !text-yellow-800',
								info: '!bg-blue-50 !border-blue-200 !text-blue-800',
							},
						}}
					/>
					<ToastContainer />
					<EasterEgg />
					{/* <DisableInteraction /> */}
					<SmoothScroll />
					<ClientLayout>{children}</ClientLayout>
					<SpeedInsights />
					<Analytics />
				</TransitionProvider>
			</body>
		</html>
	);
}
