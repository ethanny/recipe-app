import { Book, LucideIcon, Timer, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    const recipe = await fetch(
      `http://localhost:3000/api/recipes?a=get&q=recipe&id=${id}`,
    );
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
        flex flex-col
        md:flex-row
      "
    >
      <>
        {/* Recipe stats */}
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
            <RecipeStat stat={selectedRecipe.cookingTime} icon={Timer} />

            <hr />

            <RecipeStat stat={selectedRecipe.servings} icon={Users} />

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
                flex flex-row
                w-full
                px-3 py-1
                text-foreground
                bg-background
                rounded-md
                cursor-pointer transition-all
                duration-200 gap-1 items-center justify-center hover:scale-95
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
    </div>
  );
}

function RecipeStat({ stat, icon: Icon }: { stat: string; icon: LucideIcon }) {
  return (
    <div
      className={`
        flex flex-row
        w-full
        p-0.5
        gap-1 items-center justify-center
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
