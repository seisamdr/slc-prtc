import "../../app/globals.css";

interface ButtonProps {
  label: string;
  variant: "solid" | "outline";
}

export const Button = ({ label, variant }: ButtonProps) => {
  return (
    <button
      className={`px-[30px] py-[9px] rounded-xl text-2xl ${
        variant === "solid"
          ? "bg-primary text-white"
          : "bg-transparent border border-primary text-primary"
      }`}
    >
      {label}
    </button>
  );
};
