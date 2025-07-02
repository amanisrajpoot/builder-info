"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 py-4 border-b bg-background relative">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-lg tracking-tight">Builder Info</Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/builders" className="text-sm hover:underline">Browse Builders</Link>
          <Link href="/post-project" className="text-sm hover:underline">Post a Project</Link>
          <Link href="/projects" className="text-sm hover:underline">Projects</Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Link href="/account" className="text-sm hover:underline">My Account</Link>
        <Link href="/contact" className="text-sm hover:underline">Contact Us</Link>
        {/* Placeholder for avatar or login button */}
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center px-2 py-1 border rounded text-muted-foreground"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>
      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-background border-b shadow-md flex flex-col z-50 md:hidden animate-fade-in">
          <Link href="/builders" className="px-6 py-3 border-b text-sm hover:bg-muted" onClick={() => setOpen(false)}>Browse Builders</Link>
          <Link href="/post-project" className="px-6 py-3 border-b text-sm hover:bg-muted" onClick={() => setOpen(false)}>Post a Project</Link>
          <Link href="/projects" className="px-6 py-3 border-b text-sm hover:bg-muted" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/account" className="px-6 py-3 border-b text-sm hover:bg-muted" onClick={() => setOpen(false)}>My Account</Link>
          <Link href="/contact" className="px-6 py-3 text-sm hover:bg-muted" onClick={() => setOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
} 