import { Preloader } from "@/components/scene/preloader";
import { Hero } from "@/components/scene/hero";
import { Submarcas } from "@/components/scene/submarcas";
import { FeaturedDrop } from "@/components/scene/featured-drop";
import { Manifesto } from "@/components/scene/manifesto";
import { AtlasPreview } from "@/components/scene/atlas-preview";
import { CuradorMes } from "@/components/scene/curador-mes";
import { ConfiguradorPreview } from "@/components/scene/configurador-preview";
import { LunaMareas } from "@/components/scene/luna-mareas";
import { Voces } from "@/components/scene/voces";
import { Avituallamiento } from "@/components/scene/avituallamiento";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Submarcas />
      <FeaturedDrop />
      <Manifesto />
      <AtlasPreview />
      <CuradorMes />
      <ConfiguradorPreview />
      <LunaMareas />
      <Voces />
      <Avituallamiento />
    </>
  );
}
