import Image from "next/image";

export default function ErrorPage({ message }: { message: string }) {
  return (
    <div
      className="
        h-screen
        p-4
        text-center
        column gap-4 items-center justify-center
      "
    >
      <Image src={"/no-ramen.svg"} alt="Sad ramen" width={150} height={150} />
      <h1>{message}</h1>
    </div>
  );
}
