import { parseISO, format } from "date-fns";
import { it } from "date-fns/locale";

export default function Date({
  dateString,
  formatString,
}: {
  dateString: string;
  formatString?: string;
}) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, formatString || "d LLLL yyyy", { locale: it })}
    </time>
  );
}
