"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/app/providers/i18n-provider";

export function ServicesHero() {
    const { t } = useI18n();

    return (
        <section className="relative bg-background">
            <div className="absolute inset-0 bg-hero z-0" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
                {/* Imagen circular */}
                <div className="flex justify-center lg:justify-start">
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[520px] lg:h-[520px] rounded-full overflow-hidden">
                        <Image
                            src="/images/eye.png"
                            alt="Resultado"
                            fill
                            className="object-cover object-center rounded-full"
                            priority
                        />
                    </div>
                </div>


                {/* Texto + CTA */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
                        {t.services.hero.titlePrefix}{" "}
                        <span className="text-brand-pink">Je Blush</span>
                        {t.services.hero.titleSuffix}
                    </h1>

                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                        {t.services.hero.body.part1}{" "}
                        <strong>{t.services.hero.body.bold1}</strong>{" "}
                        {t.services.hero.body.part2}{" "}
                        <strong>{t.services.hero.body.bold2}</strong>
                        {t.services.hero.body.part3}
                    </p>

                    <Button asChild size="lg" className="mt-8 btn-primary">
                        <Link href="/servicios">{t.services.hero.cta}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ServicesHero;
