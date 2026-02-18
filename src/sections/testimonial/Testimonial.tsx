import TestimonialCard from "@/src/components/testimonialCard/TestimonialCard";
import "../../app/globals.css";
import { AvatarTesti1, AvatarTesti2, AvatarTesti3 } from "@/src/assets";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-4xl text-natural">
        What Our Customers Say
      </h2>
      <h3 className="text-[28px] text-natural mt-2.5">
        Trusted by <span className="font-bold text-primary">500+</span>{" "}
        businesses who already run smarter with FlowSync.
      </h3>

      <div className="flex items-center gap-[100px] mt-[50px]">
        <TestimonialCard
          avatarUrl={AvatarTesti1.src}
          name="Sarah L."
          position="Operations Manager"
          testimonial={`"FlowSync saved us countless hours every week. Setting up automation was so smooth, even for a non-tech person like me." `}
        />
        <TestimonialCard
          avatarUrl={AvatarTesti2.src}
          name="David K."
          position="Product Lead"
          testimonial={`"We used to juggle multiple tools, now everything runs seamlessly. Our team productivity went up 40%."`}
        />
        <TestimonialCard
          avatarUrl={AvatarTesti3.src}
          name="Maya P."
          position="Startup Founder"
          testimonial={`"I love how easy it is to connect apps and let them work in the background. It feels like having an extra teammate." `}
        />
      </div>
    </div>
  );
};

export default Testimonial;
