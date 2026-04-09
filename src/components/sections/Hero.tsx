
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background with panoramic animation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat animate-pan-y"
        style={{ 
          backgroundImage: `url('https://xn--ogbhrq.vip/wp-content/uploads/2026/02/onecarre.jpeg')`,
          backgroundSize: '120% 120%',
        }}
        role="img"
        aria-label="ورشة صيانة سيارات فاخرة"
      />
      <div className="absolute inset-0 z-10 bg-black/50" />
      
      <div className="container relative z-20 px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
          مركز <span className="text-[#FDD60C] glow-yellow">ديزاين الرياض</span>
          <br />
          لصيانة السيارات
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          دقة في السمكرة، إبداع في الدهان، واحترافية في الميكانيكا. سيارتك في أيدٍ أمينة مع ضمان 5 سنوات.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 w-full sm:w-auto">
            <Phone className="ml-2 h-5 w-5" /> اتصل بنا الآن
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white text-lg px-8 py-6 w-full sm:w-auto backdrop-blur-sm">
            <MessageSquare className="ml-2 h-5 w-5" /> تواصل عبر واتساب
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
