interface WebsiteCardProps {
  title: string;
  description: string;
  url: string;
}

export function WebsiteCard({ title, description, url }: WebsiteCardProps) {
  return (
    <a href={url} target="_blank">
      <div className="bg-slate-800 w-full md:w-[24vw] h-32 md:h-44 rounded-xl p-4 md:p-6 hover:outline hover:scale-105 transition-all duration-200">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </a>
  );
};