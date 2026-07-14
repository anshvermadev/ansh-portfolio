'use client';

import { usePlayerStore } from '@/store/usePlayerStore';

export interface Track {
	src: string;
	title: string;
	artist: string;
}

export const playlist: Track[] = [
	{ src: '/music/Fearless.mp3', title: 'Fearless', artist: 'Chris Linton' },
	{ src: '/music/Starboy.mp3', title: 'Starboy', artist: 'The Weeknd ft. Daft Punk' },
	{ src: '/music/RAJA.mp3', title: 'RAJA (Agent 21 Theme)', artist: 'Valorant' },
	{ src: '/music/Lose_My_Mind.mp3', title: 'Lose My Mind', artist: 'Don Toliver ft. Doja Cat' },
	{ src: '/music/Timeless_Guitar.mp3', title: 'Timeless (Guitar Version)', artist: 'Instrumental / Remix' },
	{ src: '/music/MONTAGEM_INDIA.mp3', title: 'Montagem India', artist: 'GXL' },
	{ src: '/music/Kazotsky_Kick_Team_Fortress_2.mp3', title: 'Kazotsky Kick', artist: 'Team Fortress 2' },
];

export const useAudioPlayer = () => {
	const state = usePlayerStore();
	const currentTrack = playlist[state.trackIndex];

	return { ...state, currentTrack };
};