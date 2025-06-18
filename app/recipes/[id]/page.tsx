"use client";

import { Recipe } from "@/app/api/recipes/route";
import { use, useEffect, useState } from "react";
import { Timer, Users } from "lucide-react";
import { RecipeCardDetails } from "@/app/components/RecipeCard";
import Image from "next/image";
import ErrorPage from "@/app/components/Error";

interface RecipeDetailsProps {
  params: Promise<{ id: string }>;
}

export default function RecipePage({ params }: RecipeDetailsProps) {
  const { id } = use(params);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadRecipes() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/recipes?a=get&q=recipe&id=${id}`,
      );

      if (res.status === 404) {
        throw new Error("Recipe not found");
      }

      const data = await res.json();

      if (data.message === "Invalid request") {
        throw new Error("Invalid request parameters");
      }

      setSelectedRecipe(data.recipes);
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

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      className="
        flex flex-col
        md:flex-row
      "
    >
      {error && <h1>{error}</h1>}

      {selectedRecipe && (
        <>
          <section
            className="
              flex flex-col
              py-6 px-4
              text-background
              bg-foreground
              gap-4 items-center
              md:w-1/3 md:h-screen
            "
          >
            <h1
              className="
                md:w-full
              "
            >
              {selectedRecipe.name}
            </h1>

            <div
              className="
                w-full
                border-2
              "
            >
              <RecipeCardDetails
                icon={Timer}
                detail={selectedRecipe.cookingTime}
              />

              <hr />

              <RecipeCardDetails
                icon={Users}
                detail={selectedRecipe.servings}
              />

              <hr />

              <Image
                src={"/Tonkatsu Ramen.png"}
                alt={selectedRecipe.name}
                width={300}
                height={200}
                className="
                  w-full
                "
              />
            </div>
          </section>

          <section
            className="
              flex flex-col
              h-screen
              py-6 px-4
              gap-8
              md:overflow-y-auto md:w-2/3
            "
          >
            <RecipeDetails
              label="Ingredients"
              details={selectedRecipe.ingredients}
            />

            <RecipeDetails
              label="Instructions"
              details={selectedRecipe.instructions}
            />
          </section>
        </>
      )}
    </div>
  );
}

function RecipeDetails({
  label,
  details,
}: {
  label: string;
  details: string[];
}) {
  return (
    <div
      className="
        flex flex-col
        gap-4
      "
    >
      <h2
        className="
          pb-2
          border-b-2
        "
      >
        {label}
      </h2>

      <div>
        {details.map((detail, index) => (
          <div
            key={index}
            className="
              flex flex-col
              py-2
              gap-2
            "
          >
            {label === "Instructions" && (
              <p
                className="
                  w-fit
                  px-4
                  text-background
                  bg-foreground
                  rounded-full
                "
              >
                Step {index + 1}
              </p>
            )}

            <p
              className="
                text-black
                border-b-2 border-dashed border-foreground/35
              "
            >
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
