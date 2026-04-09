
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { beforeAfterCases } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function BeforeAfter() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary">إبداعاتنا</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">معرض الأعمال (قبل وبعد)</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            شاهد نتائج احترافيتنا في إصلاح السيارات وتجديدها بأدق التفاصيل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beforeAfterCases.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-primary transition-all"
                  onClick={() => setSelectedCase(item.id)}
                >
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="relative aspect-square">
                      <Image 
                        src={item.before!} 
                        alt="Before" 
                        fill 
                        className="object-cover"
                        data-ai-hint="damaged car"
                      />
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">قبل</div>
                    </div>
                    <div className="relative aspect-square">
                      <Image 
                        src={item.after!} 
                        alt="After" 
                        fill 
                        className="object-cover"
                        data-ai-hint="fixed car"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">بعد</div>
                    </div>
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">اضغط لمشاهدة التفاصيل</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-right">{item.title}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <span className="text-sm font-semibold block text-red-500">الحالة قبل الإصلاح</span>
                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                      <Image src={item.before!} alt="Before Large" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-semibold block text-green-500">النتيجة النهائية بعد الإصلاح</span>
                    <div className="relative aspect-video rounded-lg overflow-hidden border shadow-inner">
                      <Image src={item.after!} alt="After Large" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg text-sm">
                  تم استخدام أحدث تقنيات شفط الصدمات وطلاء حراري مع ضمان مطابقة اللون الأصلي بنسبة 100%.
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
