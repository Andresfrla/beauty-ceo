"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/app/providers/i18n-provider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-hero z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {t.home.hero.identityTitle}
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            {t.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="btn-primary">
              {t.home.hero.ctaPrimary}
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-primary">
              {t.home.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl">
            <div className="absolute inset-0 rounded-full pointer-events-none ring-soft" />
            <Image
              src="/jenn.png"
              alt="Jenn Henko"
              fill
              priority
              className="object-cover rounded-full"
            />
          </div>

          {/* Blobs */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-2xl opacity-50 bg-blob-pink" />
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-50 bg-blob-purple" />
        </div>
      </div>
    </section>
  );
}
