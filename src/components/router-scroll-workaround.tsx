"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

// biome-ignore lint/complexity/noBannedTypes: no props to pass
export default function RouterScrollWorkaround({ children }: PropsWithChildren<{}>) {
    const pathname = usePathname();
    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);
    return <>{children}</>;
}
