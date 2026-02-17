import { Benefit1, Benefit2, Benefit3 } from "@/src/assets";
import Image from "next/image";

const benefit = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-4xl text-natural">
        Stop wasting time on repetitive tasks
      </h2>
      <h3 className="text-[28px] text-natural mt-2.5">
        Focus on what really matters — let automation handle the rest.
      </h3>

      <div className="flex justify-center items-center gap-[120px] mt-[50px] w-[1040px]">
        <div className="flex flex-col items-center text-center">
          <Image src={Benefit1} alt="Benefit 1" width={121} height={121} />
          <h5 className="font-bold text-[24px] text-natural mt-[20px]">
            Save More Time
          </h5>
          <p className="text-natural text-[16px]">
            Cut down manual work and get hours back in your day.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image src={Benefit2} alt="Benefit 2" width={121} height={121} />
          <h5 className="font-bold text-[24px] text-natural mt-[20px]">
            Automate Workflows
          </h5>
          <p className="text-natural text-[16px]">
            Eliminate repetitive tasks with smart automation.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image src={Benefit3} alt="Benefit 3" width={121} height={121} />
          <h5 className="font-bold text-[24px] text-natural mt-[20px]">
            Boost Productivity
          </h5>
          <p className="text-natural text-[16px]">
            Achieve more with less effort and maximize efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default benefit;
