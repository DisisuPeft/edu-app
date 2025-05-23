import AboutUsSection from "../ui/landing/about-us/about-us";
import FooterSection from "../ui/landing/Footer";
import TeamSection from "../ui/landing/team";
import Header from "@/app/ui/landing/Header";

export default function Page() {
  return (
    <div className="bg-white">
      <Header />
      <AboutUsSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}
