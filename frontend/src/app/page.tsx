import {
  Header,
  HeroSection,
  AboutSection,
  UnderstandingSection,
  SupportingSection,
  SupportSystemSection,
  StatisticsSection,
  TestimonialSection,
  FreshPerspectivesSection,
  DailyQuotesSection,
  PricingSection,
  Footer
} from '@/components/home';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Footer />
    </div>
  );
}
