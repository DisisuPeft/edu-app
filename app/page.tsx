// import Image from "next/image";

import FeaturesSection from "../ui/landing/Features";
import Footer from "../ui/landing/Footer";
import Header from "../ui/landing/Header";
import PrimarySection from "../ui/landing/PrimarySection";
import TestSection from "../ui/landing/TestSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="bg-[#121829]">
        <PrimarySection/>
        <FeaturesSection/>
        <TestSection/>
      </main>
      <Footer/>
    </div>
  );
}
