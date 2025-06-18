export default function LoadingCard({ index }: { index: number }) {
  return (
    <div
      className={`
        flex flex-col
        px-2 pt-2 pb-0
        border-b-2
        items-center relative
        md:px-4 md:pt-4 md:items-end
        ${index % 3 !== 0 ? "lg:border-r-2" : ""}
        ${index % 2 === 1 ? "md:max-lg:border-r-2" : ""}
      `}
    >
      <h2
        className="
          w-full h-10
          text-transparent
          bg-foreground/20
          animate-pulse
        "
      ></h2>
      <hr
        className={`
          w-0
          border-2 border-background
          transition-all
          self-start duration-800
        `}
      />
      <div
        className="
          flex flex-row
          w-full
          py-2
          gap-2
        "
      >
        <RecipeCardDetails
          className={`
            rounded-full border-2 border-transparent
            transition-all
            duration-200
          `}
        />
        <RecipeCardDetails
          className={`
            rounded-full border-2 border-transparent
            transition-all
            duration-200
          `}
        />
      </div>

      <div
        className="
          overflow-hidden z-1
          w-[300px] h-[200px]
          mb-4
          bg-foreground/20
          relative
        "
      ></div>
    </div>
  );
}

function RecipeCardDetails({ className }: { className?: string }) {
  return (
    <div
      className={`
        flex flex-row
        w-full h-10
        p-0.5
        bg-foreground/20
        animate-pulse
        gap-1 items-center justify-center ${className}
      `}
    ></div>
  );
}
