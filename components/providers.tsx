"use client";

import { useEffect } from "react";
import { aplicarTema, useTema, useEggs } from "@/lib/store";

/**
 * Wrapper de providers cliente. Restaura tema persistido y
 * dispara mensaje del primer login con easter egg "primera-visita".
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const tema = useTema((s) => s.tema);
  const desbloquear = useEggs((s) => s.desbloquear);

  useEffect(() => {
    aplicarTema(tema);
  }, [tema]);

  useEffect(() => {
    // Easter egg silencioso primera visita
    desbloquear("primera-visita", "Bienvenido al monte. Cierra la puerta al entrar.");
  }, [desbloquear]);

  return <>{children}</>;
}
