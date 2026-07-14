// constants/actions.ts

import { Home, User, FolderKanban, Award, MessageSquare, Link, Mail, Github, Linkedin, Twitter, Instagram, Play, Pause, SkipBack, SkipForward, FileDown, Code } from 'lucide-react';
import { usePlayerStore } from '@/store/usePlayerStore';
import type { ActionGroup } from '@/types/actions';
import { toast } from 'sonner';

export const getActions = (): ActionGroup[] => {
	const { isPlaying, togglePlayPause, nextTrack, prevTrack } = usePlayerStore.getState();

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = '/cv/Ansh_Verma_resume_v2.pdf';
		link.download = 'Ansh_Verma_resume_v2.pdf';
		link.click();
		toast.success('CV downloaded successfully!');
	};

	return [
		{
			group: 'Navigation',
			items: [
				{ id: 'home', title: 'Home', href: '/', icon: Home, shortcut: '⌘ H' },
				{ id: 'about', title: 'About', href: '/about', icon: User, shortcut: '⌘ A' },
				{ id: 'projects', title: 'Projects', href: '/projects', icon: FolderKanban, shortcut: '⌘ P' },
				{ id: 'skills', title: 'Skills', href: '/skills', icon: Award, shortcut: '⌘ S' },

				{ id: 'contact', title: 'Contact', href: '/contact', icon: MessageSquare, shortcut: '⌘ T' },
			],
		},
		{
			group: 'Actions',
			items: [
				{
					id: 'copy-email',
					title: 'Copy Email',
					onSelect: () => navigator.clipboard.writeText('verma.07ansh@gmail.com'),
					icon: Mail,
					shortcut: '⇧ E',
				},
				{
					id: 'download-cv',
					title: 'Download CV',
					onSelect: handleDownload,
					icon: FileDown,
					shortcut: '⇧ C',
				},
			],
		},
		{
			group: 'Music',
			items: [
				{
					id: 'toggle-music',
					title: isPlaying ? 'Pause Music' : 'Play Music',
					onSelect: togglePlayPause,
					icon: isPlaying ? Pause : Play,
					shortcut: '⌥ P',
				},
				{
					id: 'next-track',
					title: 'Next Track',
					onSelect: nextTrack,
					icon: SkipForward,
					shortcut: '⌥ →',
				},
				{
					id: 'prev-track',
					title: 'Previous Track',
					onSelect: prevTrack,
					icon: SkipBack,
					shortcut: '⌥ ←',
				},
			],
		},
		{
			group: 'Social & Links',
			items: [
				{ id: 'linktree', title: 'Linktree', href: '/me', icon: Link, shortcut: '⌘ ⇧ T' },
				{ id: 'github', title: 'GitHub', href: 'https://github.com/anshvermadev', icon: Github, shortcut: '⌘ ⇧ G' },
				{ id: 'linkedin', title: 'LinkedIn', href: 'https://www.linkedin.com/in/ansh-verma-37504b2b7/', icon: Linkedin, shortcut: '⌘ ⇧ L' },
				{ id: 'twitter', title: 'Twitter', href: 'https://x.com/VERMA07ANSH', icon: Twitter, shortcut: '⌘ ⇧ X' },
				{ id: 'instagram', title: 'Instagram', href: 'https://www.instagram.com/verma_07ansh/', icon: Instagram, shortcut: '⌘ ⇧ I' },
				{ id: 'source-code', title: 'View Source Code', href: 'https://github.com/anshvermadev/ansh-portfolio', icon: Code, shortcut: '⌘ ⇧ S' },
			],
		},
	];
};
