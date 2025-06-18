"use client";

import { LucideIcon, Timer, Users } from "lucide-react";
import { Recipe } from "../api/recipes/route";
import Image from "next/image";
import { useState } from "react";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className={`
        flex flex-col
        px-2 pt-2 pb-0
        border-b-2
        items-center relative
        md:px-4 md:pt-4 md:items-end
        ${index % 3 !== 0 ? "lg:border-r-2" : ""}
        ${index % 2 === 1 ? "md:max-lg:border-r-2" : ""}
      `}
    >
      <h2
        className="
          w-full
        "
      >
        {recipe.name}
      </h2>
      <hr
        className={`
          w-0
          border-2 border-background
          transition-all
          self-start duration-800
          ${isMouseOver ? "md:border-foreground md:w-full" : ""}
        `}
      />
      <div
        className="
          flex flex-row
          w-full
          py-2
          gap-2
        "
      >
        <RecipeCardDetails
          icon={Timer}
          detail={recipe.cookingTime}
          className={`
            rounded-full border-2
            transition-all
            duration-200
          `}
        />
        <RecipeCardDetails
          icon={Users}
          detail={recipe.servings}
          className={`
            rounded-full border-2
            transition-all
            duration-200
          `}
        />
      </div>
      <div
        className="
          overflow-hidden z-1
          w-[300px] h-[200px]
          translate-x-4 relative
        "
      >
        <Image
          src={"/Tonkatsu Ramen.png"}
          alt={recipe.name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
          className={`
            z-1
            transition-all
            duration-500
            ${isMouseOver ? "md:scale-150 md:translate-x-1/4 md:translate-y-1/4" : "scale-100"}
          `}
        />
      </div>

      <div
        className={`
          hidden flex-none z-0
          w-full
          px-3 pt-2
          bg-foreground
          transition-all
          absolute bottom-0 left-0 duration-500 transform
          md:block
          ${isMouseOver ? "[clip-path:inset(0%_0%_0%_0%)]" : "[clip-path:inset(100%_0%_0%_0%)]"}
        `}
      >
        <h2
          className={`
            text-background
          `}
        >
          Cook me!
        </h2>
      </div>
    </div>
  );
}

export function RecipeCardDetails({
  icon: Icon,
  detail,
  className,
}: {
  icon: LucideIcon;
  detail: string | number;
  className?: string;
}) {
  return (
    <div
      className={`
        flex flex-row
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
      <p>{detail}</p>
    </div>
  );
}
