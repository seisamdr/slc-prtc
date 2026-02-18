import "../../app/globals.css";
import { FBIcon, IGIcon, TWIcon, WAIcon, logo } from "@/src/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between gap-[302px] px-[120px] py-[100px] drop-shadow-[0_30px_100px_rgba(0,0,0,0.25)] bg-testimonial">
      <div className="w-[346px]">
        <Image src={logo} alt="Logo" />
        <p className="mt-[10px]">
          FlowSync helps teams save time and boost productivity by automating
          repetitive tasks. Build workflows, connect apps, and focus on what
          matters most.
        </p>
      </div>

      <div className="flex gap-[80px]">
        <div className="flex flex-col">
          <h5 className="font-bold text-2xl text-natural mb-2.5">Navigation</h5>
          <a
            href="#"
            className="text-natural text-base hover:text-primary mb-2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-natural text-base hover:text-primary mb-2"
          >
            Features
          </a>
          <a
            href="#"
            className="text-natural text-base hover:text-primary mb-2"
          >
            Pricing
          </a>
          <a href="#" className="text-natural text-base hover:text-primary">
            Contact
          </a>
        </div>

        <div className="flex flex-col">
          <h5 className="font-bold text-2xl text-natural mb-2.5">Company</h5>
          <a
            href="#"
            className="text-natural text-base hover:text-primary mb-2"
          >
            About
          </a>
          <a
            href="#"
            className="text-natural text-base hover:text-primary mb-2"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-natural text-base hover:text-primary mb-2"
          >
            Privacy Policy
          </a>
          <a href="#" className="text-natural text-base hover:text-primary">
            Location
          </a>
        </div>

        <div className="flex flex-col">
          <h5 className="font-bold text-2xl text-natural mb-2.5">Hubungi</h5>
          <a
            href="#"
            className="text-natural text-base hover:text-primary mb-2"
          >
            info@flowsync..com
          </a>
          <div className="flex gap-2.5">
            <Image
              src={TWIcon}
              alt="Twitter"
              className="transition-all duration-300 hover:scale-110"
            />
            <Image
              src={WAIcon}
              alt="WhatsApp"
              className="transition-all duration-300 hover:scale-110"
            />
            <Image
              src={IGIcon}
              alt="Instagram"
              className="transition-all duration-300 hover:scale-110"
            />
            <Image
              src={FBIcon}
              alt="Facebook"
              className="transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
