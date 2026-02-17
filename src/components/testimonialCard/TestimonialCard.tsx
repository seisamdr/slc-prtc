import Image from "next/image";
import "../../app/globals.css";

interface TestimonialCardProps {
  avatarUrl?: string;
  name: string;
  position: string;
  testimonial: string;
}

const TestimonialCard = ({
  avatarUrl,
  name,
  position,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="h-[318px] w-[342px] p-6 rounded-lg bg-testimonial drop-shadow-[1px_5px_10px_rgba(0,0,0,0.25)] flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <Image
          src={avatarUrl || ""}
          alt="avatar-testimonial"
          width={124}
          height={124}
          className="rounded-full"
        />
        <p className="text-[16px] font-bold mt-[10px]">{name}</p>
        <p className="text-[14px] font-normal mt-[8px]">{position}</p>
      </div>
      <p className="text-[14px] font-normal text-center">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
