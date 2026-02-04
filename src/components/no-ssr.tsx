import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

// biome-ignore lint/complexity/noBannedTypes: no props to pass
const NoSsr = ({ children }: PropsWithChildren<{}>) => children;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
