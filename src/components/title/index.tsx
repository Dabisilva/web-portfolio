import { ReactNode } from "react";

interface TitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
}

export function Title({ as: Component = "h2", children, className = "" }: TitleProps) {
  return (
    <Component className={`text-3xl md:text-5xl lg:text-6xl font-bold ${className}`}>
      {children}
    </Component>
  );
}
