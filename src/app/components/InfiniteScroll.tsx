'use client';

const images = [
  "/Images/1.webp",
  "/Images/2.webp",
  "/Images/3.webp",
  "/Images/4.webp",
  "/Images/5.webp",
  "/Images/6.webp",
  "/Images/7.webp",
  "/Images/8.webp",
];

export default function InfiniteScroll() {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-4 animate-[infiniteScroll_70s_linear_infinite] w-max hover:[animation-play-state:paused]">
        {doubled.map((src, i) => (
          <div key={i} className="relative h-56 w-80 flex-shrink-0 overflow-hidden rounded-xl shadow-lg">
            <img src={src} alt={`Project ${(i % images.length) + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
