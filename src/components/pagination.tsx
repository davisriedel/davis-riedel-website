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
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
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
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
