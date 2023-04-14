import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outlined" | "ghost";
  _className?: string;
}

const baseContainer = "h-12 min-w-12 rounded-md";

const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = "primary",
  _className = "",
  ...rest
}) => {
  const container = () => {
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "ghost":
        return "hover:border hover:border-blue hover:border-[1.5px] hover:bg-[rgba(0,0,0,0.02)]";
      default:
        return "";
    }
  };
  return (
    <button
      className={`${baseContainer} ${container()} ${_className}`}
      {...rest}
    >
      <span className="text-blue text-base font-semibold">{children}</span>
    </button>
  );
};

export default Button;
