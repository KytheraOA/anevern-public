export const GalleryCard = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index, e) => {
    // Stop Mintlify from seeing this click
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedIndex(index);
  };

  const closeLightbox = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedIndex(null);
  };
  
  const showNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % items.length);
  };

  const showPrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
  };

    useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext(e);
      if (e.key === 'ArrowLeft') showPrev(e);
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      // Add the class to the root HTML element
      document.documentElement.classList.add('gallery-open');
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Remove the class from the root HTML element
      document.documentElement.classList.remove('gallery-open');
    };
  }, [selectedIndex]);

  return (
    <div className="not-prose">
      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="gallery-card group cursor-pointer not-prose relative rounded-2xl overflow-hidden transition-all"
            onClick={(e) => openLightbox(index, e)}
          >
            {/* Image Container */}
            <div className="relative m-2 rounded-xl overflow-hidden flex justify-center bg-black/20">
              <img 
                src={item.image} 
                alt={item.alt || item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
              />
            </div>

            {/* Content Area */}
            <div className="relative p-3 pt-0 text-center">
              <h3 className="font-semibold text-sm text-white mb-1">{item.title}</h3>
              <div className="flex justify-center gap-3 text-xs text-gray-400">
                <span>{item.date}</span>
                <span>•</span>
                <span className="italic">{item.media}</span>
              </div>
              {item.description && (
                <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-none px-2">
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
            zIndex: '99999999', 
            backgroundColor: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'all' // Ensures it blocks the site underneath
          }}
          onClick={(e) => closeLightbox(e)}
        >
          {/* Close Button */}
          <button 
            onClick={(e) => closeLightbox(e)}
            className="fixed top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            style={{ zIndex: '100000000' }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button 
            onClick={(e) => showPrev(e)}
            className="fixed left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
            style={{ zIndex: '100000000' }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={(e) => showNext(e)}
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
            style={{ zIndex: '100000000' }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Main Content Area */}
          <div className="max-w-5xl w-full flex flex-col items-center gap-4 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center items-center">
              <img 
                src={items[selectedIndex].image} 
                alt={items[selectedIndex].alt || items[selectedIndex].title}
                /* ADDED pointer-events-none HERE */
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl pointer-events-none"
              />
            </div>
            <div className="text-center max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-1">{items[selectedIndex].title}</h2>
              <div className="flex justify-center gap-4 text-gray-400 text-sm mb-1">
                <span>{items[selectedIndex].date}</span>
                <span>•</span>
                <span className="italic">{items[selectedIndex].media}</span>
              </div>
              {items[selectedIndex].description && (
                <p className="text-gray-300 leading-snug text-sm md:text-base">
                  {items[selectedIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};