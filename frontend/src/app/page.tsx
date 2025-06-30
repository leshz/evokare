import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { UnderstandingSection } from "@/components/home/UnderstandingSection";
import { SupportingSection } from "@/components/home/SupportingSection";
import { SupportSystemSection } from "@/components/home/SupportSystemSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FreshPerspectivesSection } from "@/components/home/FreshPerspectivesSection";
import { DailyQuotesSection } from "@/components/home/DailyQuotesSection";
import { PricingSection } from "@/components/home/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <UnderstandingSection />
      <SupportingSection />
      <SupportSystemSection />
      <StatisticsSection />
      <TestimonialSection />
      <FreshPerspectivesSection />
      <DailyQuotesSection />
      <PricingSection />
    </div>
  );
}
