import "../../app/globals.css";
import { logo } from "@/src/assets";
import Image from "next/image";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="w-screen relative">
      <nav className="max-w-[100vw] w-full mx-auto flex justify-between items-center p-[50px]">
        <Image src={logo} alt="Logo" />
        <div className="flex gap-[60px] items-center">
          <a
            href="#"
            className="text-[20px] text-black hover:text-primary hover:font-bold"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[20px] text-black hover:text-primary hover:font-bold"
          >
            About
          </a>
          <a
            href="#"
            className="text-[20px] text-black hover:text-primary hover:font-bold"
          >
            Pricing
          </a>
          <Button label="Get Started" variant="solid" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
