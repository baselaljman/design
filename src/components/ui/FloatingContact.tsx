"use client";

import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-3 items-start">
      {/* WhatsApp Button - Extended */}
      <a 
        href="https://wa.me/966533112111"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#25D366] text-white rounded-full p-1 pr-4 shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
        aria-label="WhatsApp Us"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm ml-2">
          راسلنا واتساب
        </span>
        <div className="bg-white/10 p-2 rounded-full">
          <MessageCircle className="h-6 w-6" />
        </div>
      </a>

      {/* Phone Button - Extended */}
      <a 
        href="tel:+966533112111"
        className="group flex items-center bg-primary text-white rounded-full p-1 pr-4 shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse border border-white/20"
        aria-label="Call Us"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm ml-2">
          اتصل بنا الآن
        </span>
        <div className="bg-white/10 p-2 rounded-full">
          <PhoneCall className="h-6 w-6" />
        </div>
      </a>
    </div>
  );
}
