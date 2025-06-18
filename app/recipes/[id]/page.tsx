import RecipeCardStat from "@/app/components/Recipe Card/RecipeCardStat";
import { Book, Timer, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RecipeDetails from "../components/RecipeDetails";

interface RecipeDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function RecipePage({ params }: RecipeDetailsProps) {
  //   simulate error
  //   throw new Error("Test error for error boundary");

  //   simulate loading
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { id } = await params;

  async function getRecipe() {
    const recipe = await fetch(`http://localhost:3000/api/recipes?id=${id}`);
    const recipeData = await recipe.json();

    if (recipeData.message === "Invalid request") {
      throw new Error("Invalid request parameters");
    }

    return recipeData.recipes;
  }

  const selectedRecipe = await getRecipe();

  if (!selectedRecipe) {
    return notFound();
  }

  return (
    <div
      className="
        column
        md:row
      "
    >
      <>
        {/* Recipe stats */}
        <section
          className="
            py-6 px-4
            text-background
            bg-foreground
            column gap-4 items-center
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
            <RecipeCardStat stat={selectedRecipe.cookingTime} icon={Timer} />

            <hr />

            <RecipeCardStat stat={selectedRecipe.servings} icon={Users} />

            <hr />

            <Image
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              width={300}
              height={200}
              className="
                w-full
              "
            />
          </div>

          {/* Go back to recipe list */}
          <Link
            href="/"
            className="
              w-full
            "
          >
            <button
              className="
                w-full
                px-3 py-1
                text-foreground
                bg-background
                rounded-md
                cursor-pointer transition-all
                row duration-200 gap-1 items-center justify-center hover:scale-95
              "
            >
              <Book
                className="
                  size-5
                "
              />
              <p>View all recipes</p>
            </button>
          </Link>
        </section>

        {/* Recipe ingredients and instructions */}
        <section
          className="
            h-screen
            py-6 px-4
            column gap-8
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
    </div>
  );
}
