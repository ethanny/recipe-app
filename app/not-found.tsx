import Image from "next/image";

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
    </div>
  );
}
