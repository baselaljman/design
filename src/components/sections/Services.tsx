
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/lib/data';

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#EDEFF0]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">خدماتنا المتخصصة</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">ماذا نقدم في ديزاين الرياض؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم حزمة متكاملة من حلول صيانة السيارات باستخدام أحدث التقنيات لضمان أفضل النتائج.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              id={service.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-none bg-white scroll-mt-20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={service.image || `https://picsum.photos/seed/${index}/600/400`}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-ai-hint="car repair"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-primary p-3 rounded-full glow-primary">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
