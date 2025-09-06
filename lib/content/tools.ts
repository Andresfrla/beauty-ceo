export type ToolItem = {
    slug: string;
    img: string;
    href: string;
    price: string;
    compareAt?: string;
    badge?: string;
    i18nKey: string; // 👈 clave para buscar traducción
  };
  
  export const TOOLS: ToolItem[] = [
    {
      slug: "combo-beauty-ceo",
      img: "/images/tools/combo-beauty-ceo.webp",
      href: "/herramientas/combo-beauty-ceo",
      compareAt: "U$S101",
      price: "U$S85",
      badge: "-16%",
      i18nKey: "tools.comboBeautyCeo",
    },
    {
      slug: "control-negocios",
      img: "/images/tools/control-negocios.webp",
      href: "/herramientas/control-negocios",
      compareAt: "U$S65",
      price: "U$S43",
      i18nKey: "tools.controlNegocios",
    },
    {
      slug: "papeleria-profesional",
      img: "/images/tools/papeleria-profesional.webp",
      href: "/herramientas/papeleria-profesional",
      compareAt: "U$S48",
      price: "U$S27",
      i18nKey: "tools.papeleriaProfesional",
    },
    {
      slug: "agenda-digital",
      img: "/images/tools/agenda-digital.webp",
      href: "/herramientas/agenda-digital",
      compareAt: "U$S55",
      price: "U$S39",
      badge: "Nuevo",
      i18nKey: "tools.agendaDigital",
    },
    {
      slug: "plantillas-social",
      img: "/images/tools/plantillas-social.webp",
      href: "/herramientas/plantillas-social",
      compareAt: "U$S35",
      price: "U$S19",
      i18nKey: "tools.plantillasSocial",
    },
    {
      slug: "branding-pack",
      img: "/images/tools/branding-pack.webp",
      href: "/herramientas/branding-pack",
      compareAt: "U$S120",
      price: "U$S79",
      badge: "-34%",
      i18nKey: "tools.brandingPack",
    },
  ];