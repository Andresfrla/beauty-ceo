"use client";

import Image from "next/image";
import { useI18n } from "@/app/providers/i18n-provider";

/** Estrellas con soporte para fracciones (p.ej. 4.7) */
function Stars({ value = 5 }: { value?: number }) {
  // clamp 0..5
  const v = Math.max(0, Math.min(5, value ?? 0));
  const pct = (v / 5) * 100;

  const Star = ({ className = "" }) => (
    <svg viewBox="0 0 20 20" className={`h-5 w-5 ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 15.27l-5.18 3.04 1.64-5.64L1 7.97l5.9-.51L10 2l3.1 5.46 5.9.51-5.46 4.7 1.64 5.64z"
      />
    </svg>
  );

  return (
    <div className="relative inline-flex" aria-label={`${v.toFixed(1)} / 5`}>
      {/* capa base (vacías) */}
      <div className="flex items-center gap-1 text-muted-foreground/30">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={`bg-${i}`} />
        ))}
      </div>

      {/* capa superior (llenas) recortada por porcentaje */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={`fg-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useI18n();

  const testimonials = t.testimonials.items as {
    quote: string;
    name: string;
    rating?: number;
  }[];

  // Avatares por orden (1:1 con los testimonios)
  const avatars = [
    "/images/testimonials/testimonial-1.png",
    "/images/testimonials/testimonial-2.png",
    "/images/testimonials/testimonial-3.png",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24">
      {/* Título */}
      <h2 className="text-center text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        {t.testimonials.title}
      </h2>

      {/* Grid */}
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <article key={idx} className="flex flex-col items-center text-center">
            {/* Avatar circular con borde dorado */}
            <div className="relative h-24 w-24">
              <Image
                src={avatars[idx] ?? "/images/testimonials/testimonial-1.png"}
                alt={item.name}
                fill
                className="rounded-full object-cover"
                sizes="96px"
                priority={idx === 0}
              />
              <span
                className="pointer-events-none absolute inset-0 rounded-full ring-2"
                style={{ boxShadow: "inset 0 0 0 2px #d4af37" }}
              />
            </div>

            {/* ⭐ Estrellas debajo de la foto */}
            <div className="mt-3">
              <Stars value={item.rating ?? 5} />
            </div>

            {/* Cita */}
            <p className="mt-4 text-lg italic text-foreground/80 max-w-md">
              “{item.quote}”
            </p>

            {/* Nombre */}
            <span className="mt-6 font-semibold text-foreground">{item.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
