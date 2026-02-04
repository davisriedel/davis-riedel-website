import type { AuthorContent } from "@/lib/authors";

interface Props {
  author: AuthorContent;
}
export default function Author({ author }: Props) {
  return <span>{author.name}</span>;
}
