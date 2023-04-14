import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outlined" | "ghost" | "error";
  _className?: string;
}

const baseContainer =
  "flex w-full items-center justify-center h-12 min-w-12 rounded-md hover:bg-opacity-90";

const baseText = "text-base font-semibold";

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
        return "hover:border hover:border-primary hover:border-[1.5px] hover:bg-[rgba(0,0,0,0.02)]";
      case "error":
        return "bg-error";
      default:
        return "";
    }
  };
  const text = () => {
    switch (variant) {
      case "primary":
        return "text-white";
      case "ghost":
        return "text-primary";
      case "error":
        return "text-white";
      default:
        return "";
    }
  };
  return (
    <button
      className={`${baseContainer} ${container()} ${_className}`}
      {...rest}
    >
      <span className={`${baseText} ${text()}`}>{children}</span>
    </button>
  );
};

export default Button;
