import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

export function AnimatedLink({
	className,
	children,
	...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps>) {
	return (
		<Link
			className={cn(
				"relative text-indigo-950 after:bg-indigo-950 dark:text-indigo-400 dark:after:bg-indigo-200 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer",
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
