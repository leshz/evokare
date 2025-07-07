import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { GrowingStorySection } from "@/components/about/GrowingStorySection";
import { DailyQuotesAboutSection } from "@/components/about/DailyQuotesAboutSection";
import { SupportSystemAboutSection } from "@/components/about/SupportSystemAboutSection";
import { HealingJourneySection } from "@/components/about/HealingJourneySection";
import { SupportingServicesSection } from "@/components/about/SupportingServicesSection";
import { TestimonialsAboutSection } from "@/components/about/TestimonialsAboutSection";
import { FlexiblePlansSection } from "@/components/about/FlexiblePlansSection";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <GrowingStorySection />
      <DailyQuotesAboutSection />
      <SupportSystemAboutSection />
      <HealingJourneySection />
      <SupportingServicesSection />
      <TestimonialsAboutSection />
      <FlexiblePlansSection />
    </div>
  );
} 