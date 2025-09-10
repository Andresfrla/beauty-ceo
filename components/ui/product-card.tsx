"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useI18n } from "@/app/providers/i18n-provider";

export type Product = {
  slug: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  img: string;
  badge?: string;
};

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const { slug, title, description, price, oldPrice, img, badge } = product;
  const { t } = useI18n();

  return (
    <Card className="group overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition hover:shadow-md">
      <Link href={`/productos/${slug}`} aria-label={title} className="block">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={480}
            height={480}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority
          />
          {badge && (
            <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              {badge}
            </span>
          )}
        </div>

        <CardHeader className="px-5 pt-5 pb-0">
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardHeader>

        <CardContent className="px-5 pb-5">
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>

          <div className="mt-4 flex items-baseline gap-2">
            {oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {oldPrice}
              </span>
            )}
            <span className="text-xl font-bold text-brand-purple">{price}</span>
          </div>

          <div className="mt-5 inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-medium btn-outline-primary">
            {t.common.actions.details}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default ProductCard;
