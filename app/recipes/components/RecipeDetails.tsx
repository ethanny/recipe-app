export default function RecipeDetails({
  label,
  details,
}: {
  label: "Instructions" | "Ingredients";
  details: string[];
}) {
  return (
    <div
      className="
        column gap-4
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
              py-2
              column gap-2
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
