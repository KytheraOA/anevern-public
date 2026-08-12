export const HighlightCard = ({ title, description, icon, children }) => (
  <div className="w-full max-w-lg mx-auto my-6">
    <div 
      className="relative bg-zinc-950/40 text-white rounded-xl p-5 flex items-center space-x-4 backdrop-blur-xl overflow-hidden"
      style={{ 
        boxShadow: '0 0 15px 1px rgba(99, 102, 241, 0.5)', 
        border: '1px solid transparent',
        backgroundClip: 'padding-box, border-box',
        backgroundImage: 'linear-gradient(rgba(9, 9, 11, 0.85), rgb(1, 1, 3, 0.8)), linear-gradient(to bottom right, rgba(129, 140, 248, 0.5), rgba(79, 70, 229, 0.25))',
      }}
    >
      {icon && (
        <span className="text-3xl flex-shrink-0 mt-1" aria-hidden="true">
          {icon}
        </span>
      )}
      <div className="flex flex-col justify-center relative z-10 w-full">
        <h2 className="text-sm m-0 text-indigo-400">{title}</h2>
        <p className="text-zinc-400 -mt-1 m-0 text-sm leading-relaxed">{description}</p>
        {/* This is the 'slot' for your extra content */}
        {children && (
          <div className="-mt-4 pt-0 w-full">
            {children}
          </div>
        )}
      </div>
    </div>
  </div>
);