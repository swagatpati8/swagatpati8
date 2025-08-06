import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
    <section className="py-20 gradient-section">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {title}
            </h2>
            <div className="text-lg text-white/80 leading-relaxed">
              {content}
            </div>
            {showButton && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-spring"
              >
                <a href={buttonHref}>{buttonText}</a>
              </Button>
            )}
          </div>

          <div
            className={cn(
              "flex justify-center",
              reverse ? "lg:col-start-1" : "lg:col-start-2"
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"></div>
              <img
                src={image}
                alt={imageAlt}
                className="relative w-full max-w-md h-80 object-cover rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;