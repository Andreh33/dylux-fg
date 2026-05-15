import { Preloader } from "@/components/scene/preloader";
import { Hero } from "@/components/scene/hero";
import { Submarcas } from "@/components/scene/submarcas";
import { FeaturedDrop } from "@/components/scene/featured-drop";
import { Manifesto } from "@/components/scene/manifesto";
import { AtlasPreview } from "@/components/scene/atlas-preview";
import { CuradorMes } from "@/components/scene/curador-mes";
import { LunaMareas } from "@/components/scene/luna-mareas";
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
      <LunaMareas />
      <Avituallamiento />
    </>
  );
}
