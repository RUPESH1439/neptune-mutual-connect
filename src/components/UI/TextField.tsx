import { FunctionComponent, HTMLProps } from "react";

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  _className?: String;
}

const container = `flex flex-col gap-2`;
const input = `h-10 w-full border border-[1.5px] border-gray-light hover:border-primary focus:border-primary rounded-md px-2`;
const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  _className,
  ...rest
}) => {
  return (
    <div className={`${container} ${_className ?? ""}`}>
      {!!label && <span>{label}</span>}
      <input type="number" className={input} {...rest}></input>
    </div>
  );
};

export default TextField;
