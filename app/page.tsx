import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import JobSnaps from "@/components/JobSnaps";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyItWorks from "@/components/WhyItWorks";
import WebsiteTypes from "@/components/WebsiteTypes";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <JobSnaps />
      <Industries />
      <Features />
      <HowItWorks />
      <WhyItWorks />
      <WebsiteTypes />
      <Showcase />
      <Footer />
    </main>
  );
}
