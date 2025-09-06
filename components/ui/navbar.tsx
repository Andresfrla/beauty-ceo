"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useI18n } from "@/app/providers/i18n-provider"; 

export function Navbar() {
  const { t, lang, toggle } = useI18n();
  const pathname = usePathname();

  const items = [
    { href: "/herramientas", label: t.common.nav.herramientas },
    { href: "/servicios", label: t.common.nav.servicios },
    { href: "/branding", label: t.common.nav.branding },
    { href: "/cursos", label: t.common.nav.cursos },
    { href: "/acerca", label: t.common.nav.acerca },
    { href: "/contacto", label: t.common.nav.contacto },
  ];

  return (
    <>
      {/* DESKTOP header (dos bloques, sin separador) */}
      <header className="sticky top-0 z-40 hidden w-full border-b bg-background/70 backdrop-blur md:block">
        <div className="mx-auto flex max-w-6xl flex-col px-6">
          {/* Bloque 1 */}
          <div className="flex items-center justify-between pt-10 pb-7">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              {t.common.brand}
            </Link>

            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/login">{t.common.auth.login}</Link>
              </Button>
              <Button variant="ghost" onClick={toggle} className="w-[4.5rem]">
                {lang.toUpperCase()}
              </Button>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="flex items-center justify-between py-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-3">
                {items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <NavigationMenuItem key={item.href} className="flex items-center">
                      <NavigationMenuLink asChild active={active}>
                        <Link
                          href={item.href}
                          className={`px-2 py-1 text-sm font-semibold whitespace-nowrap hover:opacity-80 ${
                            active ? "underline underline-offset-4" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/buscar"
              aria-label={t.common.nav.buscar}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
            >
              <Search className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* MOBILE header: logo centrado, sin login */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 pt-6 pb-4">
          <div />
          <Link
            href="/"
            className="justify-self-center text-base font-semibold tracking-tight"
          >
            {t.common.brand}
          </Link>
          <div className="justify-self-end">
            <Button variant="ghost" onClick={toggle} className="h-9 px-3">
              {lang.toUpperCase()}
            </Button>
          </div>
        </div>
      </header>

      {/* MOBILE bottom bar: más espacio + textos desde i18n */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-4 gap-3 px-5 py-3 text-center text-sm">
          {/* Menú (sidebar) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex flex-col items-center gap-2 rounded-md px-3 py-2 hover:bg-accent">
                <Menu className="h-6 w-6" />
                <span>{t.common.nav.menu}</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>{t.common.brand}</SheetTitle>
              </SheetHeader>
              <div className="mt-5 flex flex-col gap-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-2 text-base hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <Button asChild className="flex-1">
                  <Link href="/login">{t.common.auth.login}</Link>
                </Button>
                <Button variant="outline" onClick={toggle} className="w-20">
                  {lang.toUpperCase()}
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Inicio */}
          <Link
            href="/"
            className="flex flex-col items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
          >
            <Home className="h-6 w-6" />
            <span>{t.common.nav.inicio}</span>
          </Link>

          {/* Buscar */}
          <Link
            href="/buscar"
            className="flex flex-col items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
          >
            <Search className="h-6 w-6" />
            <span>{t.common.nav.buscar}</span>
          </Link>

          {/* Ingresar */}
          <Link
            href="/login"
            className="flex flex-col items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
          >
            <User className="h-6 w-6" />
            <span>{t.common.auth.login}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
