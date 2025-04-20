import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FeaturedClassesSection } from "@/components/sections/FeaturedClassesSection";
import { FeaturedTrainersSection } from "@/components/sections/FeaturedTrainersSection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Home() {
   return (
      <>
         <HeroSection />
         <FeaturesSection />
         <FeaturedClassesSection />
         <GallerySection />
         <FeaturedTrainersSection />
      </>
   );
}
