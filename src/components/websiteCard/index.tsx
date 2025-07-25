import { FaCode } from "react-icons/fa";

interface WebsiteCardProps {
  title: string;
  description: string;
  url: string;
}

export function WebsiteCard({ title, description, url }: WebsiteCardProps) {
  return (
    <a href={url} target="_blank">
      <div className="bg-slate-800/50 border w-full rounded-xl p-6 md:p-8 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <FaCode className="text-blue-400 text-lg md:text-xl" />
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </a>
  );
};