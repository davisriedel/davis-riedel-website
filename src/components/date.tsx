import { format, formatISO } from "date-fns";
import { de, enUS } from "date-fns/locale";

type Props = {
	lang: "de" | "en";
	date: Date;
};

export default function DateComponent({ lang, date }: Props) {
	const locale = lang === "en" ? enUS : de;
	return (
		<time dateTime={formatISO(date)}>
			<span>
				{format(date, lang === "en" ? "LLLL d, yyyy" : "d. LLLL yyyy", {
					locale,
				})}
			</span>
		</time>
	);
}
