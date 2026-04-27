"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/favicon.ico" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="rounded-lg"
            />
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
              Nexus<span className="text-blue-600">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link href="#features" className="block text-base font-medium text-slate-600">Features</Link>
          <Link href="#pricing" className="block text-base font-medium text-slate-600">Pricing</Link>
          <Link href="#about" className="block text-base font-medium text-slate-600">About</Link>
          <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
