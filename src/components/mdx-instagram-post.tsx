import { InstagramPost } from "./instagram-post";

export function MdxInstagramPost(props: {
  url: string | string[];
  disclaimer: string | null;
}) {
  return <InstagramPost {...props} />;
}

export function MdxInstagramPostFallback(_props: {
  url: string | string[];
  disclaimer: string | null;
}) {
  return null;
}
