import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OtherProjectsSection from "@/components/OtherProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <OtherProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
