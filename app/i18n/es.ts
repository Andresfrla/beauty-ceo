const es = {
  common: {
    brand: "Beauty CEO",
    nav: {
      menu: "Menú",
      inicio: "Inicio",
      herramientas: "Herramientas Digitales",
      servicios: "Servicios",
      branding: "Branding para Artistas",
      cursos: "Cursos Online",
      acerca: "Acerca de mí",
      contacto: "Contacto",
      buscar: "Buscar",
    },
    auth: { login: "Iniciar Sesión" },
    actions: {
      details: "Ver detalles",
    },
  },
  home: {
    hero: {
      identityTitle:
        "Soy Jenn Henko, fundadora de Je Blush y creadora de Academia Beauty CEO",
      subtitle:
        "Vende plantillas y cursos, agenda servicios y ofrece una experiencia profesional.",
      ctaPrimary: "Únete a la Academia",
      ctaSecondary: "Conoce más",
    },
  },
  productsTitle: "Herramientas Digitales para Artistas de Belleza",
  productsSubtitle: "Conviértete en una BEAUTY CEO",
  products: [
    {
      slug: "combo-beauty-ceo",
      title: "COMBO BEAUTY CEO",
      description: "Organiza tu negocio + profesionaliza tu atención al cliente",
      price: "$85",
      oldPrice: "$101",
      img: "/products/combo-beauty-ceo.jpg",
      badge: "Más vendido",
    },
    {
      slug: "kit-profesional-artistas",
      title: "Kit Profesional para Artistas",
      description:
        "Plantillas listas para tu marca: contratos, consentimientos y fichas",
      price: "$49",
      img: "/products/kit-profesional.jpg",
    },
    {
      slug: "control-negocio-tracker",
      title: "Control de Negocio (Tracker)",
      description: "Agenda, ingresos/gastos y métricas clave en un solo lugar",
      price: "$39",
      img: "/products/business-tracker.jpg",
    },
  ],
  services: {
    hero: {
      imgAlt: "Resultado de diseño de cejas y pestañas",
      titlePrefix: "En",
      titleSuffix: ", transformaré y renovaré tu mirada!",
      body: {
        part1: "Realza tu belleza con mis servicios de",
        bold1: "micropigmentación en cejas y ojos",
        part2: ", y tratamientos temporales para cejas y pestañas.",
        bold2: "Resultados naturales, armoniosos",
        part3: " y diseñados especialmente para ti. ¡Te vas a enamorar!",
      },
      cta: "CONOCE TODOS MIS SERVICIOS",
    },
  },
  testimonials: {
    title: "Testimonios de nuestros clientes",
    items: [
      {
        quote:
          "El curso con Jenn fue increíble, me ayudó a estructurar mi negocio de Cejas y gracias a eso he tenido más orden en mi negocio!",
        name: "Miranda Suárez",
        rating: 5
      },
      {
        quote:
          "Gracias a mi Control de Negocios, tengo todo organizado, sin duda, valió la pena.",
        name: "Rocío Gonzales",
        rating: 4.5
      },
      {
        quote:
          "Soy clienta de Jenn desde hace 7 años, me encanta cómo trabaja, ¡sus resultados son muy naturales!",
        name: "Marina López",
        rating: 4.7
      },
    ],
  },
};

export default es;
