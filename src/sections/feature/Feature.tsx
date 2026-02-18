import { Feature1, Feature2, Feature3 } from "@/src/assets";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-4xl text-natural">
        Build Your Custom Automations
      </h2>
      <h3 className="text-[28px] text-natural mt-2.5">
        Create powerful workflows without writing a single line of code.
      </h3>

      <div className="flex justify-center items-center gap-[120px] mt-[50px] w-[1040px]">
        <div className="flex flex-col items-center text-center">
          <Image src={Feature1} alt="Feature 1" width={121} height={121} />
          <h5 className="font-bold text-[24px] text-natural mt-[20px]">
            Drag & Drop Builder
          </h5>
          <p className="text-natural text-[16px]">
            Design workflows effortlessly with a simple visual editor.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image src={Feature2} alt="Feature 2" width={121} height={121} />
          <h5 className="font-bold text-[24px] text-natural mt-[20px]">
            Connect 100+ Apps
          </h5>
          <p className="text-natural text-[16px]">
            Seamlessly integrate your favorite tools in one place.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image src={Feature3} alt="Feature 3" width={121} height={121} />
          <h5 className="font-bold text-[24px] text-natural mt-[20px]">
            No-Code Power
          </h5>
          <p className="text-natural text-[16px]">
            Automate complex tasks — no technical skills required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
