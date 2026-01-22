"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow border-b"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      {/* Navbar */}
      <div
        className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="h-full flex mt-1 items-center">
          <Image
            src="https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/hederText2.png"
            alt="Smartinovate Logo"
            width={300}
            height={100}
           
            className={`w-auto object-contain transition-all duration-300 '}
            style={{ height: scrolled ? '40px' : '60px' }}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/94704685300"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Chat Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-800"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center py-4 space-y-3 text-gray-700 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <a
              href="https://wa.me/94704685300"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
