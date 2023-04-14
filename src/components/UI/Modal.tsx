import { FunctionComponent, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ children }) => {
  return (
    <div className="fixed top-0 z-[999] bg-[rgba(0,0,0,0.8)] h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default Modal;
