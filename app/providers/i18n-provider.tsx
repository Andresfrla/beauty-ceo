"use client";

import { createContext, useContext, useMemo, useState } from "react";
import es from "../i18n/es";
import en from "../i18n/en";


type Lang = "es" | "en";
type Messages = typeof es;

type Ctx = {
  lang: Lang;
  t: Messages;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es"); // ES por defecto
  const t = useMemo(() => (lang === "es" ? es : en), [lang]);

  const value = useMemo(
    () => ({ lang, t, setLang, toggle: () => setLang(p => (p === "es" ? "en" : "es")) }),
    [lang, t]
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
