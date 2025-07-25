interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="bg-slate-500 w-full rounded-xl p-8">
      {children}
    </div>
  );
}