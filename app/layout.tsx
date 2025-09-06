import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./providers/i18n-provider";
import { Navbar } from "@/components/ui/navbar";
import { WhatsAppFAB } from "@/components/ui/whatsapp-fab";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Academia Beauty CEO",
  description: "Herramientas digitales, cursos y servicios para artistas de belleza.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
        <WhatsAppFAB />
      </body>
    </html>
  );
}
