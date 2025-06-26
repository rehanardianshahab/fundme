"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value = 0,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-6 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-secondary h-full flex items-center justify-center relative transition-all"
        style={{
          width: `${value}%`,
        }}
      >
        {(value || 0) > 0 && (
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white"
            )}
          >
            {value}%
          </span>
        )}
      </ProgressPrimitive.Indicator>
      {value === 0 && (
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center text-[10px] font-medium text-primary"
          )}
        >
          {value}%
        </span>
      )}
    </ProgressPrimitive.Root>
  );
}

export { Progress };
