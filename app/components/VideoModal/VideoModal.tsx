'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 px-4 py-2 bg-red-600 hover:bg-red-700 
                     text-white transition-colors duration-200 group"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)'
          }}
        >
          <span className="relative z-10 font-pixel">✕ Close</span>
          <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-100 transition-opacity" 
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)'
               }}
          />
        </button>

        <div className="aspect-video w-full bg-gray-900 relative">
          <div className="absolute inset-0 border-4 border-purple-500 pointer-events-none" />
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 