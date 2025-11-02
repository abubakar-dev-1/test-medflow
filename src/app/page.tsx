import {
  HeroSection,
  BestDoctorsSection,
  AboutSection,
  ClinicsSection,
  PromoPackagesSection,
  ArticlesSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BestDoctorsSection />
      <AboutSection />
      <ClinicsSection />
      <PromoPackagesSection />
      <ArticlesSection />
    </main>
  );
}
