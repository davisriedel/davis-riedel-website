import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> &
    LinkProps & {
      inverted?: boolean;
    }
>;

export function AnimatedLink({
  className,
  inverted,
  children,
  ...props
}: Props) {
  return (
    <Link
      className={cn(
        "relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
        inverted
          ? "text-primary-foreground after:bg-primary-foreground"
          : "text-secondary-foreground after:bg-secondary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
