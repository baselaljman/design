
"use client";

import React from 'react';
import { carBrands } from '@/lib/data';

export function BrandSlider() {
  return (
    <section className="py-16 bg-white border-t border-b overflow-hidden">
      <div className="container px-4 mx-auto mb-8">
        <h3 className="text-center text-xl font-bold text-muted-foreground uppercase tracking-widest">الماركات التي نخدمها</h3>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...carBrands, ...carBrands].map((brand, i) => (
            <span key={i} className="text-3xl md:text-5xl font-black text-gray-200 hover:text-primary transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
