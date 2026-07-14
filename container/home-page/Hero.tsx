'use client';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section className="relative w-full h-screen sm:mb-[-10px] xm:mb-[-10px]" data-scroll data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between sm:justify-center xm:justify-center">
				<div />
				{/* ✅ overflow-hidden here clips the image to the 85vh boundary on mobile */}
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh] overflow-hidden">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[20px] padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-black font-semibold font-FoundersGrotesk uppercase">
								<div className="w-fit blend-target">Seamless</div>
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ maxWidth: 0, overflow: 'hidden' }}
										animate={{ maxWidth: 500 }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 4.5,
										}}
										className="leading-[130px]"
									>
										<motion.span
											initial={{ maxWidth: 0, overflow: 'hidden' }}
											animate={{ maxWidth: 500 }}
											transition={{
												ease: [0.86, 0, 0.07, 0.995],
												duration: 1,
												delay: 4.5,
											}}
										>
											<video
												width={120}
												height={50}
												src="/gif/firefly1.mp4"
												className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
												autoPlay
												loop
												muted
											/>
										</motion.span>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-black font-semibold font-FoundersGrotesk uppercase w-fit blend-target">Experiences</h1>
								</div>
								<div className="w-fit blend-target">via Fullstack</div>
							</h1>
						</div>
						<div className="md:absolute md:bottom-0 md:right-[30px] lg:right-[50px] xl:right-[50px] xm:mt-[15px] sm:mt-[15px] md:mt-0">
							<img
								src="/gif/Ansh.png"
								width={60}
								height={60}
								className="w-fit h-fit md:w-[400px] md:h-[500px] lg:w-[520px] lg:h-[620px] xl:w-[600px] xl:h-[720px] object-contain object-bottom"
								alt="Ansh"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}