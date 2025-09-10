"use client";

import ProductCard from "@/components/ui/product-card";
import { useI18n } from "@/app/providers/i18n-provider";

export function Products() {
    const { t } = useI18n();
    const products = t.products; 
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-16">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-brand-purple">
                    {t.productsTitle}
                </h2>
                <p className="mt-2 text-muted-foreground">
                    {t.productsSubtitle}
                </p>
            </div>


            {/* Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((p: any) => (
                    <ProductCard key={p.slug} product={p} />
                ))}
            </div>
        </section>
    );
}

export default Products;
