"use client";

import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect } from "react";

export default function RouterScrollWorkaround({
	children,
	// biome-ignore lint/complexity/noBannedTypes: no props to pass
}: PropsWithChildren<{}>) {
	const pathname = usePathname();
	// biome-ignore lint/correctness/useExhaustiveDependencies: dependency needed
	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
	return <>{children}</>;
}
