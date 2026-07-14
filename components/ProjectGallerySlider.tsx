"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Shot {
  image: string;
  caption?: string;
}

interface Props {
  gallery: Shot[];
}

export default function ProjectGallerySlider({ gallery }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!gallery || gallery.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(id);
  }, [gallery]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="w-full relative">
      <div className="w-full overflow-hidden">
        {gallery.map((shot, i) => (
          <div
            key={shot.image}
            className={`w-full transition-all duration-700 ease-in-out ${i === index ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 -translate-x-full'}`}
          >
            <Image src={shot.image} alt={shot.caption || `slide-${i}`} width={1600} height={900} className="w-full h-auto object-cover block" />
            {shot.caption && <p className="paragraph text-secondry/80 px-[10px] py-[15px]">{shot.caption}</p>}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-4">
        {gallery.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-secondry' : 'bg-secondry/30'}`}
          />
        ))}
      </div>
    </div>
  );
}