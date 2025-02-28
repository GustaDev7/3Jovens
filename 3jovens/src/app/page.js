import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";
import FAQAccordion from "./components/Faq";
import Portifolio from "./components/Portifolio";
import Footer from "./components/Footer";
import PublicoAlvo from "./components/PublicoAlvo";
import Depoimentos from "./components/Depoimentos";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Portifolio /> 
      <PublicoAlvo />   
      <CTASection />
      <Depoimentos />
      <FAQAccordion />
      <Footer />
    </>
  );
}
