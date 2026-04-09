
"use client";

import React from 'react';
import Link from 'next/link';
import { Car, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C52E3] text-white pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold tracking-tight">ديزاين الرياض</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              مركزنا الرائد في الرياض لصيانة السيارات بأعلى المعايير العالمية، نفخر بخدمتكم وتوفير أفضل النتائج الممكنة.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">خدماتنا</Link></li>
              <li><Link href="#before-after" className="hover:text-white transition-colors">قبل وبعد</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">لماذا نحن؟</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-4 text-white/70">
              <li>السمكرة والدهان</li>
              <li>ميكانيكا وكهرباء</li>
              <li>صيانة التكييف</li>
              <li>إصلاح الأيرباق</li>
              <li>تجديد السيارات</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-6 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FDD60C] shrink-0" />
                <span>الرياض، صناعية الشمال، حي القيروان</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FDD60C] shrink-0" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FDD60C] shrink-0" />
                <span>info@design-riyadh.sa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} ديزاين الرياض. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
