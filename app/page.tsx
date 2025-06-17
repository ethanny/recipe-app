"use client";
import { Recipe } from "./api/recipes/route";
import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import Link from "next/link";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadRecipes() {
    setError(null);
    setIsLoading(true);

    try {
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
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  if (isLoading) {
    return (
      <div
        className="
          text-4xl
        "
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
        flex flex-col
        p-2
        gap-2
        md:p-4 md:gap-4
      "
    >
      {error && <div>{error}</div>}
      <header
        className="
          flex flex-col
          items-center justify-between
          md:flex-row
        "
      >
        {/* Title */}
        <h1
          className="
            sticky top-0
          "
        >
          Ramen Recipes
        </h1>

        {/* Search */}
        <div
          className="
            w-full
            p-2
            border-2
            md:w-1/3
          "
        >
          <h2>Search</h2>
        </div>
      </header>

      <section
        className="
          grid grid-cols-1
          border-t-2
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {recipes.map((recipe: Recipe, index: number) => (
          <Link href={`/recipes/${recipe.id}`} key={index}>
            <RecipeCard recipe={recipe} index={index + 1} />
          </Link>
        ))}
      </section>
    </div>
  );
}
