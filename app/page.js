import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetTheChefs from "@/components/MeetTheChefs";

export default function Home() {
  return (
    <div className="bg-indigo-100 py-9">
      <HeroSection />
      <HowItWorks />
      <MeetTheChefs />
    </div>
  );
}
