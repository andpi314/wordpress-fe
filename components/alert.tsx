import Container from "./container";
import cn from "classnames";

export default function Alert({ preview }) {
  const ctas = [
    "The most invisible form of wasted time is doing a good job on an unimportant task.",
  ];
  const cta = ctas[Math.floor(Math.random() * ctas.length)];
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is a page preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>{cta}</>
          )}
        </div>
      </Container>
    </div>
  );
}
