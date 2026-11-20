"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  hideLabel?: boolean;
};

/**
 * Plain <img> that fills its (relative) parent. If the file is missing it
 * shows a calm ink → sage gradient with a label, so nothing looks broken.
 */
export default function SmartImage({ src, alt, label, className = "", priority = false, hideLabel = false }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Catch errors that happened before hydration.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink via-[#2b4048] to-sage ${className}`}
      >
        {!hideLabel && (<span className="flex items-center gap-2 px-4 text-center text-sm font-medium text-white/70">
          <ImageIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          {label ?? alt}
        </span>)}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
