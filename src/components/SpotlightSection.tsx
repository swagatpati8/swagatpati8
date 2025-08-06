import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightSectionProps {
  title: string;
  content: string | ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

const SpotlightSection = ({
  title,
  content,
  image,
  imageAlt,
  reverse = false,
  showButton = false,
  buttonText = "Learn More",
  buttonHref = "#",
}: SpotlightSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-center",
            reverse ? "lg:grid-flow-col-dense" : ""
          )}
        >
          <div
            className={cn(
              "space-y-6",
              reverse ? "lg:col-start-2" : "lg:col-start-1"
            )}
          >
            <h2 className="text-3xl font-bold text-foreground">
              {title}
            </h2>
            <div className="text-muted-foreground leading-relaxed">
              {content}
            </div>
            {showButton && (
              <a
                href={buttonHref}
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
              >
                {buttonText}
              </a>
            )}
          </div>

          <div
            className={cn(
              "flex justify-center",
              reverse ? "lg:col-start-1" : "lg:col-start-2"
            )}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-md h-80 object-cover rounded border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;