import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  label?: string;
}

export const BeforeAfterSlider = ({ before, after, label }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };
  const handleClick = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  return (
    <div className="space-y-3">
      {label && (
        <p className="text-sm text-muted-foreground text-center">{label}</p>
      )}
      <div
        ref={containerRef}
        className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* Image Après (fond) */}
        <img
          src={after}
          alt="Après"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Image Avant (clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Avant"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
            draggable={false}
          />
        </div>

        {/* Ligne de séparation */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Poignée */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels Avant / Après */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider rounded-full">
            Avant
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-secondary/80 backdrop-blur-sm text-black text-xs font-medium uppercase tracking-wider rounded-full">
            Après
          </span>
        </div>
      </div>
    </div>
  );
};
