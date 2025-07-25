interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-slate-800/50 border border-blue-500/30 w-full rounded-xl p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}