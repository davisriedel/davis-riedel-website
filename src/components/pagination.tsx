import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePagination } from "@/lib/pagination";

interface Props {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
}

export default async function CustomPagination({
  current,
  pages,
  link,
}: Props) {
  const pagination = generatePagination(current, pages);

  const prev = current - 1;
  const hasPrev = prev > 0;
  const next = current + 1;
  const hasNext = next <= pages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={!hasPrev}
            as={link.as(prev)}
            className={hasPrev ? undefined : "pointer-events-none opacity-50"}
            href={link.href(prev)}
            tabIndex={hasPrev ? undefined : -1}
          />
        </PaginationItem>
        {pagination.map((it) => (
          <PaginationItem key={it.page}>
            {it.excerpt
              ? "..."
              : it.page && (
                  <PaginationLink
                    as={link.as(it.page)}
                    href={link.href(it.page)}
                    isActive={it.page === current}
                  >
                    {it.page}
                  </PaginationLink>
                )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            aria-disabled={!hasNext}
            as={link.as(next)}
            className={hasNext ? undefined : "pointer-events-none opacity-50"}
            href={link.href(next)}
            tabIndex={hasNext ? undefined : -1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
