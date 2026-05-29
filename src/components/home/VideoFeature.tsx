"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";

interface VideoFeatureProps {
  videoId: string;
  title: string;
}

export function VideoFeature({ videoId, title }: VideoFeatureProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAutoPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const watchUrl = useMemo(
    () => `https://www.youtube.com/watch?v=${videoId}`,
    [videoId],
  );

  const embedUrl = useMemo(() => {
    if (!shouldAutoPlay) {
      return `https://www.youtube.com/embed/${videoId}?mute=1&playsinline=1&rel=0`;
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&rel=0`;
  }, [shouldAutoPlay, videoId]);

  return (
    <div className="space-y-4" ref={containerRef}>
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {!shouldAutoPlay && (
          <button
            type="button"
            onClick={() => setShouldAutoPlay(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/45 transition-colors hover:bg-black/30"
            aria-label={`Play ${title}`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.6)] bg-[hsl(var(--nav-theme)/0.9)] px-4 py-2 text-sm font-semibold text-white">
              <Play className="h-4 w-4" /> Play Trailer
            </span>
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
        >
          Watch on YouTube
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
