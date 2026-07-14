'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Track } from '@/hooks/useAudioPlayer';
import { usePlayerStore } from '@/store/usePlayerStore';
import { PlayIcon, PauseIcon, PrevIcon, NextIcon } from './ui/MusicIcons';
import { VolumeUpIcon, VolumeDownIcon, VolumeMuteIcon } from './ui/VolumeIcons';
import { useState } from 'react';

interface TrackInfoProps {
	track: Track;
	duration: number;
	progress: number;
	isVisible?: boolean;
}

const formatTime = (time: number) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default function TrackInfo({ track, duration, progress, isVisible }: TrackInfoProps) {
	const { isPlaying, togglePlayPause, nextTrack, prevTrack, volume, setVolume, showTrackInfo, setShowTrackInfo } = usePlayerStore();
	const [prevVolume, setPrevVolume] = useState(volume);

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		if (newVolume > 0) {
			setPrevVolume(newVolume);
		}
	};

	const handleVolumeUp = () => {
		const newVolume = Math.min(1, volume + 0.05);
		setVolume(newVolume);
		if (newVolume > 0) {
			setPrevVolume(newVolume);
		}
	};

	const handleVolumeDown = () => {
		const newVolume = Math.max(0, volume - 0.05);
		setVolume(newVolume);
		if (newVolume > 0) {
			setPrevVolume(newVolume);
		}
	};

	const toggleMute = () => {
		if (volume > 0) {
			setPrevVolume(volume);
			setVolume(0);
		} else {
			setVolume(prevVolume);
		}
	};

	const getVolumeIcon = () => {
		if (volume === 0) return <VolumeMuteIcon />;
		if (volume < 0.5) return <VolumeDownIcon />;
		return <VolumeUpIcon />;
	};

	return (
		<AnimatePresence>
			{(isVisible ?? showTrackInfo) && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					className="fixed xm:bottom-28 sm:bottom-28 bottom-12 xm:left-4 sm:left-8 left-12 w-[min(460px,calc(100vw-3rem))] md:w-[460px] p-5 rounded-xl shadow-2xl overflow-hidden bg-gradient-to-t from-black/90 to-black/60 backdrop-blur-md z-[7000] border border-white/10"
				>
					{/* Close Button */}
					<button
						onClick={() => setShowTrackInfo(false)}
						className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
						aria-label="Close"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>

					<div className="text-white font-NeueMontreal">
						<p className="text-lg font-bold truncate pr-8">{track.title}</p>
						<p className="text-sm opacity-70 truncate">{track.artist}</p>

						{/* Progress Bar */}
						<div className="mt-4">
							<div className="w-full h-1 bg-white/20 rounded-full">
								<motion.div
									className="h-1 bg-white rounded-full"
									initial={{ width: 0 }}
									animate={{ width: `${(progress / duration) * 100}%` }}
									transition={{ duration: 0.1, ease: 'linear' }}
								/>
							</div>
							<div className="flex justify-between text-xs opacity-70 mt-1">
								<span>{formatTime(progress)}</span>
								<span>{formatTime(duration)}</span>
							</div>
						</div>

						{/* Controls and Volume - Same Level */}
						<div className="flex items-center gap-4 mt-4">
							{/* Playback Controls */}
							<div className="flex items-center gap-3 xm:gap-2">
								<button
									onClick={prevTrack}
									className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95"
									aria-label="Previous"
								>
									<div className="xm:scale-75">
										<PrevIcon />
									</div>
								</button>
								<button
									onClick={togglePlayPause}
									className="w-12 h-12 xm:w-10 xm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
									aria-label={isPlaying ? 'Pause' : 'Play'}
								>
									<div className="xm:scale-75">
										{isPlaying ? <PauseIcon /> : <PlayIcon />}
									</div>
								</button>
								<button
									onClick={nextTrack}
									className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95"
									aria-label="Next"
								>
									<div className="xm:scale-75">
										<NextIcon />
									</div>
								</button>
							</div>

							{/* Volume Control */}
							<div className="flex items-center gap-1.5 flex-1 min-w-0">
								<button
									onClick={handleVolumeDown}
									className="text-white/60 hover:text-white transition-colors hover:scale-110 active:scale-95 flex-shrink-0"
									aria-label="Volume Down"
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M5 12h14" />
									</svg>
								</button>
								<button
									onClick={toggleMute}
									className="text-white/80 hover:text-white transition-colors flex-shrink-0"
									aria-label="Toggle Mute"
								>
									<div className="w-5 h-5">
										{getVolumeIcon()}
									</div>
								</button>
								<input
									type="range"
									min="0"
									max="1"
									step="0.01"
									value={volume}
									onChange={handleVolumeChange}
									className="flex-1 min-w-0 h-1 bg-white/20 rounded-full appearance-none cursor-pointer volume-slider"
									aria-label="Volume"
								/>
								<button
									onClick={handleVolumeUp}
									className="text-white/60 hover:text-white transition-colors hover:scale-110 active:scale-95 flex-shrink-0"
									aria-label="Volume Up"
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M5 12h14" />
										<path d="M12 5v14" />
									</svg>
								</button>
								<span className="text-xs font-bold opacity-90 w-8 text-right flex-shrink-0">{Math.round(volume * 100)}%</span>
							</div>
						</div>
					</div>

					<style jsx>{`
						.volume-slider::-webkit-slider-thumb {
							appearance: none;
							width: 14px;
							height: 14px;
							background: white;
							border-radius: 50%;
							cursor: pointer;
						}
						.volume-slider::-moz-range-thumb {
							width: 14px;
							height: 14px;
							background: white;
							border-radius: 50%;
							cursor: pointer;
							border: none;
						}
					`}</style>
				</motion.div>
			)}
		</AnimatePresence>
	);
}