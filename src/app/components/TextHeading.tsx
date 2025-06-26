import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
}

interface TextProps {
  label: string;
  class?: string;
}

type SubTextProps = TextProps;

interface TextHeadingProps {
  text: TextProps;
  subtext?: SubTextProps;
  className?: string;
  button?: ButtonProps;
}

export default function TextHeading({
  text,
  subtext,
  className,
  button,
}: TextHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col @3xl/main:flex-row gap-8 justify-between",
        className
      )}
    >
      <div>
        <p
          className={cn(
            "text-[#3A3A3C] font-bold leading-[130%] @3xl/main:text-[44px] text-[28px]",
            text.class ? text.class : ""
          )}
        >
          {text.label}
        </p>
        <span className="text[20px] font-normal text-[#6B7588]">
          {subtext?.label}
        </span>
      </div>
      {button ? (
        <Button className="text-lg" size={button.size} variant={button.variant}>
          {button.label ?? "Fill this"}
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}
