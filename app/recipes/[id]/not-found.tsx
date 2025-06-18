import Image from "next/image";
import Link from "next/link";

export default function RecipeNotFound() {
  return (
    <div
      className="
        flex flex-col
        h-screen
        p-4
        text-center
        gap-4 items-center justify-center
      "
    >
      <Image src={"/no-ramen.svg"} alt="Sad ramen" width={150} height={150} />
      <h1>Uh-oh! No recipe for that yet</h1>

      {/* Go back to recipe list */}
      <Link href="/">
        <button
          className="
            px-4
            border-2 border-foreground rounded-full
            transition-all duration-200
            cursor-pointer
            hover:bg-foreground hover:text-background
          "
        >
          <p>View existing ramen recipes</p>
        </button>
      </Link>
    </div>
  );
}
