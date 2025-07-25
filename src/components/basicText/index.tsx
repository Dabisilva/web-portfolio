import { ReactNode } from "react";

interface BasicTextProps {
  children: ReactNode
}

export function BasicText({ children, ...props }: BasicTextProps) {
  return (
    <span
      className="border-b-2 border-transparent hover:border-current transition-all duration-200 ease-in-out font-medium"
      {...props}
    >
      {children}
    </span>

  );
}