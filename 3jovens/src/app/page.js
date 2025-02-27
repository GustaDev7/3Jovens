import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";
import FAQAccordion from "./components/Faq";
import Portifolio from "./components/Portifolio";
import LogoBanner from "./components/LogoBanner";
import QuemSomos from "./components/QuemSomos";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Portifolio /> 
      <CTASection />
      <FAQAccordion />
    </>
  );
}
