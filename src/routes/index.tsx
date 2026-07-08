import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { TechStackSection } from "@/components/portfolio/TechStackSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ProblemsSection } from "@/components/portfolio/ProblemsSection";
import { ProcessSection } from "@/components/portfolio/ProcessSection";
import { DifferentialsSection } from "@/components/portfolio/DifferentialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <ProjectsSection />
      <ProblemsSection />
      <ProcessSection />
      <DifferentialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
