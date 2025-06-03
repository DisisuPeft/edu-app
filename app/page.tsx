// import Image from "next/image";

import FeaturesSection from "@/app/ui/landing/Features";
import Footer from "@/app/ui/landing/Footer";
import Header from "@/app/ui/landing/Header";
import PrimarySection from "@/app/ui/landing/PrimarySection";
import TestSection from "@/app/ui/landing/TestSection";
import AboutSection from "./ui/landing/about";
import TeamSection from "./ui/landing/team";
// import TestimonialsSection from "./ui/landing/testimonial-section";
import CallToSuscribe from "./ui/landing/ready-to";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="bg-white">
        <PrimarySection />
        <div className="bg-[#121829]">
          <FeaturesSection />
        </div>
        <AboutSection />
        <TestSection />
        <TeamSection />
        {/* <TestimonialsSection /> */}
        <div className="p-5">
          <CallToSuscribe />
        </div>
      </main>
      <Footer />
    </div>
  );
}
