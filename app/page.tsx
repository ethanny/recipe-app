"use client";
import { Recipe } from "./api/recipes/route";
import { useEffect, useState } from "react";

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
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
        "
        >
        {error && <div>{error}</div>}

        {recipes.map((recipe: Recipe) => (
        <div key={recipe.id}>
        <h2
        className="
        text-2xl font-bold
      "
          >
            {recipe.name}
          </h2>
        </div>
      ))}
    </div>
  );
}
