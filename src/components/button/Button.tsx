import "../../app/globals.css";

interface ButtonProps {
  label: string;
  variant: "solid" | "outline" | "text";
}

const Button = ({ label, variant }: ButtonProps) => {
  const variantStyles = () => {
    switch (variant) {
      case "solid":
        return "bg-primary text-white cursor-pointer hover:bg-primary-hover transition-colors duration-300";
      case "outline":
        return "bg-transparent text-primary border border-primary cursor-pointer hover:border-primary-hover hover:text-primary-hover transition-colors duration-300";
      case "text":
        return "bg-transparent text-primary cursor-pointer hover:text-primary-hover transition-colors duration-300";
    }
  };

  return (
    <button
      className={`px-[30px] py-[9px] rounded-xl text-2xl ${variantStyles()}`}
    >
      {label}
    </button>
  );
};

export default Button;
