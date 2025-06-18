export default async function RecipeLoading() {
  return (
    <div
      className="
        flex flex-col
        md:flex-row
      "
    >
      <>
        <section
          className="
            flex flex-col
            py-6 px-4
            bg-foreground
            gap-4 items-center
            md:w-1/3 md:h-screen
          "
        >
          <h1
            className="
              h-10
              bg-white/50
              animate-pulse
              md:w-full
            "
          ></h1>

          <div
            className="
              w-full
              border-2
            "
          >
            <RecipeStat />

            <hr />

            <RecipeStat />

            <hr />

            <div
              className="
                h-[300px] w-full
                bg-white/50
                animate-pulse
              "
            ></div>
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
          <RecipeDetails label="Ingredients" />

          <RecipeDetails label="Instructions" />
        </section>
      </>
    </div>
  );
}

function RecipeStat() {
  return (
    <div
      className={`
        flex flex-row
        w-full h-10
        bg-white/50
        animate-pulse
        gap-1 items-center justify-center
      `}
    ></div>
  );
}

function RecipeDetails({ label }: { label: string }) {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="
              flex flex-col
              h-10
              py-2
              bg-foreground/20
              animate-pulse
              gap-2
            "
          ></div>
        ))}
      </div>
    </div>
  );
}
