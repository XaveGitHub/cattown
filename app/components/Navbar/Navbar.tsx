'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { label: 'Play Now', href: 'https://cat.town/signin' },
    { label: 'Features', href: '#features' },
    { label: 'KIBBLE', href: '#kibble' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <div className="fixed w-full z-50 px-4 py-4">
      <nav className="game-nav-floating mx-auto">
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/cat-town-logo.png"
              alt="Cat Town Logo"
              width={100}
              height={35}
              className="object-contain"
              priority
              style={{ imageRendering: 'pixelated' }}
            />
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hero-button bg-purple-600 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Play Button */}
          <Link 
            href="https://cat.town/signin"
            className="hero-button bg-green-500 text-sm"
          >
            PLAY FOR FREE
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 