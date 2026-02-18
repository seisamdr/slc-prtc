import Image from "next/image";
import Hero from "../sections/hero/Hero";
import Benefit from "../sections/benefit/Benefit";
import Feature from "../sections/feature/Feature";
import Works from "../sections/works/Works";
import Testimonial from "../sections/testimonial/Testimonial";
import Price from "../sections/price/Price";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] px-[122px] pt-[50px] pb-[100px] bg-testimonial">
      <Hero />
      <Benefit />
      <Feature />
      <Works />
      <Testimonial />
      <Price />
    </div>
  );
}
