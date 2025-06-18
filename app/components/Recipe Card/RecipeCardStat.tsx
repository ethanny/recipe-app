import { LucideIcon } from "lucide-react";

interface RecipeCardStatProps {
  icon: LucideIcon;
  stat: string | number;
  className?: string;
}

export default function RecipeCardStat({
  icon: Icon,
  stat,
  className,
}: RecipeCardStatProps) {
  return (
    <div
      className={`
        row
        w-full
        p-0.5
        gap-1 items-center justify-center ${className}
      `}
    >
      <Icon
        className="
          size-4
          md:size-5
        "
      />
      <p>{stat}</p>
    </div>
  );
}
