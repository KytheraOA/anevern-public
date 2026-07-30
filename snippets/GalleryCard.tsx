import React, { useState, useEffect } from 'react';
interface GalleryItem {
  title: string;
  image: string;
  alt?: string;
  date: string;
  media: string;
  description?: string;
  focalPoint?: 'top' | 'center' | 'bottom' | 'left' | 'right';
}
interface GalleryCardProps {
  items: GalleryItem[];
}
const GalleryCard: React.FC<GalleryCardProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const openLightbox = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedIndex(index);
  };
  const closeLightbox = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSelectedIndex(null);
  };
  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % items.length : null));
  };
  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.documentElement.classList.add('gallery-open');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.documentElement.classList.remove('gallery-open');
    };
  }, [selectedIndex, items.length]);

  return (
    <div className="not-prose">
      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((item: GalleryItem, index: number) => (
          <div 
            key={index} 
            className="gallery-card group cursor-pointer not-prose relative rounded-2xl overflow-hidden transition-all bg-white/5 p-3 border border-white/10"
            onClick={(e) => openLightbox(index, e)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.alt || item.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: item.focalPoint || 'center' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold m-0 text-white">{item.title}</h3>
              <p className="text-sm opacity-70 m-0 text-gray-400">{item.date} • {item.media}</p>
              {item.description && (
                <p className="text-sm mt-2 text-gray-400 line-clamp-2 leading-none">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <div 
          className="animate-in fade-in duration-200"
          style={{ 
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: '100vw',
            height: '100vh',
            zIndex: 99999999, 
            backgroundColor: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'all'
          }}
          onClick={() => closeLightbox()}
        >
          {/* Main Content Container */}
          <div 
            className="w-full max-w-[95vw] max-h-[95vh] flex flex-col items-center justify-between py-4"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button - Now at the top of the container */}
            <div className="w-full flex justify-end px-4 mb-2">
              <button 
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full"
                aria-label="Close gallery"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* The Artwork - max-h adjusted to leave room for top/bottom UI */}
            <img 
              src={items[selectedIndex]?.image} 
              alt={items[selectedIndex]?.alt || items[selectedIndex]?.title}
              className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-md"
            />
            
            {/* Navigation & Metadata Bar */}
            <div className="mt-4 flex items-center justify-between w-full max-w-2xl px-4">
              <button 
                onClick={showPrev}
                className="text-white/50 hover:text-white transition-colors p-2"
                aria-label="Previous image"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center mx-4">
                <h2 className="text-xl md:text-2xl font-semibold text-white m-0 leading-tight">
                  {items[selectedIndex]?.title}
                </h2>
                <p className="text-white/60 mt-1 text-base md:text-lg m-0">
                  {items[selectedIndex]?.media} • {items[selectedIndex]?.date}
                </p>
              </div>

              <button 
                onClick={showNext}
                className="text-white/50 hover:text-white transition-colors p-2"
                aria-label="Next image"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCard;

/* This component was created using Atlassian Rovo. License: CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/ */