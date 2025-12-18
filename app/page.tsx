import { Header } from "@/components/Header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { LimitedOfferSection } from "@/components/limited-offer-section"
import { VideoGallerySection } from "@/components/video-gallery-section"
import { PhotoGallerySection } from "@/components/photo-gallery-section"
import { ReviewsSection } from "@/components/reviews-section"
import { LocationSection } from "@/components/location-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <LimitedOfferSection />
      <VideoGallerySection />
      <PhotoGallerySection />
      <ReviewsSection />
      <LocationSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloatButton />
    </main>
  )
}
