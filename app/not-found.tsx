import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
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

      <h1>Uh-oh! No ramen recipes here.</h1>

      <Link href="/">
        <button
          className="
            px-4
            border-2 border-foreground rounded-full
            transition-all duration-200
            hover:bg-foreground hover:text-background
          "
        >
          <p>Go back to recipe list</p>
        </button>
      </Link>
    </div>
  );
}
