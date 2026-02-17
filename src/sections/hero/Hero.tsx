import Image from "next/image";
import "../../app/globals.css";
import { DesktopImage } from "@/src/assets";
import Button from "@/src/components/button/Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-[1196px] h-[395px] rounded-[1px] gap-[70px]">
      <div className="my-[17px]">
        <div className="flex flex-col">
          <h5 className="font-bold text-5xl w-[269px] text-natural mb-[20px]">
            Sync Your Workflow Seamlessly
          </h5>
          <p className="text-[28px] text-natural w-[511px]">
            FlowSync helps your team collaborate, automate and scale faster
          </p>
        </div>

        <div className="flex gap-[50px] mt-[45px]">
          <Button label="Get Started" variant="solid" />
          <Button label="Request Demo" variant="outline" />
        </div>
      </div>

      <div>
        <Image src={DesktopImage} alt="Desktop Image" />
      </div>
    </div>
  );
};

export default Hero;
