import HeroSection from "../components/Hero_Section";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "../components/whyChooseUs"
import TestimonialsCard from "../components/testimonialscard";

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-center bg-black/15 antialiased bg-grid-white">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestimonialsCard />
    </main>
  );
}
