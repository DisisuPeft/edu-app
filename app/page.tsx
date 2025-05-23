// import Image from "next/image";

import FeaturesSection from "@/app/ui/landing/Features";
import Footer from "@/app/ui/landing/Footer";
import Header from "@/app/ui/landing/Header";
import PrimarySection from "@/app/ui/landing/PrimarySection";
import TestSection from "@/app/ui/landing/TestSection";
import AboutSection from "./ui/landing/about";
import TeamSection from "./ui/landing/team";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-white">
        <PrimarySection />
        <div className="bg-[#121829]">
          <FeaturesSection />
        </div>
        <AboutSection />
        <TestSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
