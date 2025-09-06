"use client";

import { cn } from "@/lib/utils";

type Props = {
    href?: string;       
    iconSrc?: string;    
    className?: string;
};

export function WhatsAppFAB({
    href = "https://api.whatsapp.com/send?phone=5513970264",
    iconSrc = "/icons/whatsapp.svg",
    className,
}: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={cn(
                "fixed right-6 z-50 inline-flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full shadow-lg hover:brightness-105 active:scale-95 transition",
                "md:bottom-10 bottom-[7.5rem]",
                className
            )}
        >
            <img src={iconSrc} alt="WhatsApp" className="h-[3.75rem] w-[3.75rem]" />
        </a>

    );
}
