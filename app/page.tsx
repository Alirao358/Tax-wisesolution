import Hero from "@/Components/Header/Hero";
import Navbar from "@/Components/Header/Navbar";
import Image from "next/image";
import hero from '@/public/gallery/hero.avif';
import testimonial from '@/public/gallery/testimonial.png'
import Services from "@/Components/Header/Services";
import Price from "@/Components/Header/Price";
import Chose from "@/Components/Header/Chose";
import Testimonial from "@/Components/Header/Testimonial";
import Contact from "@/Components/Header/Contact";
import Footer from "@/Components/Header/Footer";

export default function Home() {
  return (
    <>
      <div className="h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={hero}
            alt="Tax documents and laptop"
            fill
            priority
            className="h-full bg-bottom"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 h-full bg-black opacity-65"></div>

        {/* Content */}
        <div className="h-full w-full">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Business Features Section */}

      <Services />
      <Price />
      <Chose />


      <div className="h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={testimonial}
            alt="testimonial image"
            fill
            priority
            className="h-full bg-bottom"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 h-full bg-black opacity-30"></div>

        {/* Content */}
        <div className="h-full absolute w-full">
          <Testimonial />
        </div>

      </div>
      <div className="bg-[#F7F7F7] text-black ">
        <Contact />
      </div>
      <Footer />
</>
);
}