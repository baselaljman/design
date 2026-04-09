
"use client";

import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-4">
      {/* Phone Button */}
      <a 
        href="tel:+966500000000"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="Call Us"
      >
        <PhoneCall className="h-7 w-7" />
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
