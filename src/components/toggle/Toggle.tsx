import { useState } from "react";
import "../../app/globals.css";

interface ToggleProps {
  label?: string;
  onToggle?: (checked: boolean) => void;
}

const Toggle = ({ label, onToggle }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center">
      <div
        onClick={() => setIsChecked(!isChecked)}
        className={`flex w-[45px] h-[25px] rounded-full items-center transform duration-200 cursor-pointer ${
          isChecked ? "bg-primary" : "bg-background-grey"
        }`}
      >
        <span
          className={`w-[20px] h-[20px] rounded-full transform duration-200 ${
            isChecked
              ? "translate-x-[20px] bg-background-grey"
              : "translate-x-[5px] bg-primary"
          }`}
        ></span>
      </div>

      {label && (
        <p className="text-[16px] ml-[10px] text-text-grey font-regular">
          {label}
        </p>
      )}
    </div>
  );
};

export default Toggle;
