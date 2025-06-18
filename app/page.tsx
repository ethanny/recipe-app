"use client";

import { Recipe } from "./api/recipes/route";
import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import LoadingCard from "./components/LoadingCard";
import Link from "next/link";
import ErrorPage from "./components/CustomError";
import Image from "next/image";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadRecipes() {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch(
        "http://localhost:3000/api/recipes?a=get&q=recipes",
      );
      const data = await res.json();

      if (data.message === "Invalid request") {
        throw new Error("Invalid request parameters");
      }

      setRecipes(data.recipes);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <div
      className="
        flex flex-col
        p-4
        gap-2
        md:gap-4
      "
    >
      <header
        className="
          flex flex-row
          items-center gap-4 justify-center
          md:justify-start
        "
      >
        {/* Title */}
        <Image
          src={"/logo.svg"}
          alt="Ramen Logo"
          width={50}
          height={50}
          className="
            h-full
          "
        />
        <h1>Ramen Recipes</h1>
      </header>

      <section
        className="
          grid grid-cols-1
          border-t-2
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {isLoading && (
          <>
            {Array.from({ length: 12 }).map((_, index) => (
              <LoadingCard key={index} index={index + 1} />
            ))}
          </>
        )}
        {recipes.map((recipe: Recipe, index: number) => (
          <Link href={`/recipes/${recipe.id}`} key={index}>
            <RecipeCard recipe={recipe} index={index + 1} />
          </Link>
        ))}
      </section>
    </div>
  );
}
