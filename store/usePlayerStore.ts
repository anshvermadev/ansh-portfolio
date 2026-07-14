'use client';

import { create } from 'zustand';
import { playlist } from '@/hooks/useAudioPlayer';

// Variabel untuk menampung satu instance audio saja
let audioInstance: HTMLAudioElement | null = null;

interface PlayerState {
	trackIndex: number;
	isPlaying: boolean;
	duration: number;
	trackProgress: number;
	volume: number; // 0 to 1
	showTrackInfo: boolean;

	// Fungsi-fungsi untuk mengontrol player
	init: () => void;
	togglePlayPause: () => void;
	nextTrack: () => void;
	prevTrack: () => void;
	setVolume: (volume: number) => void;
	setShowTrackInfo: (show: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
	trackIndex: 0,
	isPlaying: false,
	duration: 0,
	trackProgress: 0,
	volume: 0.7, // Default volume 70%
	showTrackInfo: false,

	// Fungsi inisialisasi yang hanya berjalan sekali
	init: () => {
		if (audioInstance) return; // Jika sudah ada, jangan buat lagi

		const audio = new Audio(playlist[get().trackIndex].src);
		audio.volume = get().volume;
		audioInstance = audio;

		audio.addEventListener('loadedmetadata', () => {
			set({ duration: audio.duration });
		});
		audio.addEventListener('timeupdate', () => {
			set({ trackProgress: audio.currentTime });
		});
		audio.addEventListener('ended', () => {
			get().nextTrack(); // Panggil aksi 'nextTrack' dari store
		});
	},

	togglePlayPause: () => {
		const { init, isPlaying } = get();
		if (!audioInstance) {
			init(); // Buat audio player jika belum ada
		}

		if (isPlaying) {
			audioInstance?.pause();
			set({ isPlaying: false });
		} else {
			audioInstance?.play().catch((e) => console.error('Audio play failed', e));
			set({ isPlaying: true, showTrackInfo: true });
		}
	},

	nextTrack: () => {
		set((state) => {
			const newIndex = (state.trackIndex + 1) % playlist.length;
			if (audioInstance) {
				audioInstance.src = playlist[newIndex].src;
				if (state.isPlaying) {
					audioInstance.play();
				}
			}
			return { trackIndex: newIndex };
		});
	},

	prevTrack: () => {
		set((state) => {
			const newIndex = (state.trackIndex - 1 + playlist.length) % playlist.length;
			if (audioInstance) {
				audioInstance.src = playlist[newIndex].src;
				if (state.isPlaying) {
					audioInstance.play();
				}
			}
			return { trackIndex: newIndex };
		});
	},

	setVolume: (volume: number) => {
		const clampedVolume = Math.max(0, Math.min(1, volume));
		if (audioInstance) {
			audioInstance.volume = clampedVolume;
		}
		set({ volume: clampedVolume });
	},

	setShowTrackInfo: (show: boolean) => {
		set({ showTrackInfo: show });
	},
}));