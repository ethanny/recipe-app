"use client";

import { Timer, Users } from "lucide-react";
import { Recipe } from "../../api/recipes/route";
import Image from "next/image";
import { useState } from "react";
import RecipeCardStat from "./RecipeCardStat";

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
        px-2 pt-2 pb-0
        border-b-2
        column items-center relative
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
          w-full
          py-2
          row gap-2
        "
      >
        <RecipeCardStat
          icon={Timer}
          stat={recipe.cookingTime}
          className={`
            rounded-full border-2
            transition-all
            duration-200
          `}
        />

        <RecipeCardStat
          icon={Users}
          stat={recipe.servings}
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
          src={recipe.image}
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
