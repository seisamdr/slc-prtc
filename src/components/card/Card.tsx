import { CheckIcon } from "@/src/assets";
import "../../app/globals.css";
import Toggle from "../toggle/Toggle";
import Image from "next/image";
import Button from "../button/Button";

interface CardProps {
  label: string;
  price: string;
  bill: "TEXT" | "YEAR";
  billString: string;
  features: string[];
  position: "LEFT" | "CENTER" | "RIGHT";
  buttonLabel: string;
}

const Card = ({
  label,
  price,
  bill,
  billString,
  features,
  position,
  buttonLabel,
}: CardProps) => {
  const cardStyle = () => {
    switch (position) {
      case "LEFT":
        return "rounded-l-2xl border-grey border-[1px] h-[510px]";
      case "CENTER":
        return "rounded-2xl drop-shadow-[0_0_100px_rgba(0,0,0,0.3)] h-[555px]";
      case "RIGHT":
        return "rounded-r-2xl border-grey border-[1px] h-[510px]";
    }
  };

  return (
    <div
      className={`w-[375px] bg-white ${cardStyle()} flex justify-between flex-col`}
    >
      <div className="p-6">
        <h6 className="text-4xl font-bold">{label}</h6>
        <p className="text-base font-normal">{price}</p>
      </div>

      <div className="h-px bg-natural"></div>
      <div className="px-6 py-[8px]">
        {bill === "TEXT" ? (
          <p className="text-[14px] text-grey font-normal">{billString}</p>
        ) : (
          <Toggle label="Billed Yearly" />
        )}
      </div>
      <div className="h-px bg-natural"></div>

      <div className="px-6 py-[16px]">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 mb-4">
            <Image src={CheckIcon} alt="check" className="w-4 h-4" />
            <p className="text-[14px] font-normal">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-auto p-6">
        <Button
          label={buttonLabel}
          variant={position === "CENTER" ? "solid" : "outline"}
          style="w-full py-[8px]"
        />
        {position === "CENTER" && (
          <p className="text-[14px] pt-4 mb-6">
            or{" "}
            <a href="#" className="font-bold underline">
              Contact Sales
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
