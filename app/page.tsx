import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        grid grid-rows-[20px_1fr_20px]
        min-h-screen
        p-8 pb-20
        font-[family-name:var(--font-geist-sans)]
        items-center justify-items-center gap-16
        sm:p-20
      "
    >
      <main
        className="
          flex flex-col
          gap-8 row-start-2 items-center
          sm:items-start
        "
      >
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="
            dark:invert
          "
        />
        <ol
          className="
            text-sm text-center font-[family-name:var(--font-geist-mono)]
            list-inside list-decimal
            sm:text-left
            
          "
        >
          <li
            className="
              mb-2
            "
          >
            Get started by editing{" "}
            <code
              className="
                px-1 py-0.5
                font-semibold
                bg-black/[.05]
                dark:bg-white/[.06] rounded
              "
            >
              app/page.tsx
            </code>
            .
          </li>
          <li>Hello.</li>
        </ol>

        <div
          className="
            flex flex-col
            gap-4 items-center
            sm:flex-row
          "
        >
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-10
              px-4
              text-background text-sm
              bg-foreground
              rounded-full border border-solid border-transparent
              transition-colors
              items-center justify-center gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc]
              sm:h-12 sm:px-5 sm:text-base
            "
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
              className="
                dark:invert
              "
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-10
              px-4
              text-sm
              rounded-full border border-solid border-black/[.08]
              transition-colors
              dark:border-white/[.145] items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent
              sm:h-12 sm:min-w-44 sm:px-5 sm:text-base
            "
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer
        className="
          flex flex-wrap
          row-start-3 gap-6 items-center justify-center
        "
      >
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center gap-2 hover:underline hover:underline-offset-4
          "
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center gap-2 hover:underline hover:underline-offset-4
          "
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center gap-2 hover:underline hover:underline-offset-4
          "
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
