import { format, formatISO } from "date-fns";

type Props = {
	date: Date;
};

export default function DateComponent({ date }: Props) {
	return (
		<time dateTime={formatISO(date)}>
			<span>{format(date, "LLLL d, yyyy")}</span>
		</time>
	);
}
