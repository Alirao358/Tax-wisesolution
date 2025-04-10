'use client'
// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Head>
        <title>TaxWise Solution - Secure Your Financial Future</title>
        <meta name="description" content="We simplify tax filing, compliance, and financial planning, ensuring you stay compliant while maximizing savings with expert guidance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-transparent px-5 z-40 text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">Logo Here</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="transition-all duration-300 hover:text-[#393162]">HOME</a>
            <a href="#services" className="transition-all duration-300 hover:text-[#393162]">SERVICES</a>
            <a href="#about" className="transition-all duration-300 hover:text-[#393162]">ABOUT US</a>
            <a href="#price" className="transition-all duration-300 hover:text-[#393162]">PRICING</a>
            <a href="#contact" className="transition-all duration-300 hover:text-[#393162]">CONTACT US</a>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block relative overflow-hidden bg-indigo-700 text-white px-8 py-3 rounded-md transition duration-300 font-medium
            hover:bg-indigo-600 hover:scale-105 hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full"
          >
            <span className="relative z-10">Get Started</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="border-b border-white w-full"></div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1c1c2d] py-4 px-6 space-y-3 text-sm">
            <a href="#home" className="block hover:text-[#393162]">HOME</a>
            <a href="#services" className="block hover:text-[#393162]">SERVICES</a>
            <a href="#about" className="block hover:text-[#393162]">ABOUT US</a>
            <a href="#price" className="block hover:text-[#393162]">PRICING</a>
            <a href="#contact" className="block hover:text-[#393162]">CONTACT US</a>
            <a href="#contact" className="mt-2 inline-block bg-indigo-700 px-4 py-2 rounded-md text-white font-medium hover:bg-indigo-600">
              Get Started
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
