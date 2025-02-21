import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePagination } from "@/lib/pagination";

type Props = {
	current: number;
	pages: number;
	link: {
		href: (page: number) => string;
		as: (page: number) => string;
	};
};

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
            href={link.href(prev)}
            as={link.as(prev)}
            aria-disabled={!hasPrev}
            tabIndex={hasPrev ? undefined : -1}
            className={hasPrev ? undefined : "pointer-events-none opacity-50"}
          />
				</PaginationItem>
				{pagination.map((it) => (
					<PaginationItem key={it.page}>
						{it.excerpt
							? "..."
							: it.page && (
									<PaginationLink
										href={link.href(it.page)}
										as={link.as(it.page)}
										isActive={it.page === current}
									>
										{it.page}
									</PaginationLink>
								)}
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
            href={link.href(next)}
            as={link.as(next)}
            aria-disabled={!hasNext}
            tabIndex={hasNext ? undefined : -1}
            className={hasNext ? undefined : "pointer-events-none opacity-50"}
          />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
