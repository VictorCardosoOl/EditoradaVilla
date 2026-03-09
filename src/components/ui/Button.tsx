import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-[10px] 3xl:text-xs uppercase font-medium transition-colors tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "border border-black bg-transparent text-black hover:bg-black hover:text-white",
        solid: "bg-black text-white hover:bg-black/80",
        outline: "border border-black bg-transparent text-black hover:bg-black hover:text-white",
        ghost: "bg-transparent text-black hover:bg-black/5",
      },
      size: {
        default: "px-8 py-3 3xl:px-12 3xl:py-4",
        sm: "px-4 py-2 3xl:px-6 3xl:py-3",
        icon: "w-10 h-10 3xl:w-14 3xl:h-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";
