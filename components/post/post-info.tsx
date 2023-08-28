import { format, parseISO } from "date-fns";
import { it } from "date-fns/locale";

export interface PostInfoProps {
  author: string;
  date: string;
  readingTime: string;
  categories: string[];
}
export default function PostInfo(p: PostInfoProps) {
  const { author, date, readingTime, categories } = p;
  const d = parseISO(date);
  return (
    <div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-12 text-center py-2">
        <div>
          <div className="text-gray-500">{"Autore"}</div>
          <div className="font-bold">{author}</div>
        </div>
        <div>
          <div className="text-gray-500">{"Data"}</div>
          <div className="font-bold">
            <time dateTime={date}>
              {format(d, "d LLLL yyyy", { locale: it })}
            </time>
          </div>
        </div>
        <div>
          <div className="text-gray-500">{"Tempo di lettura"}</div>
          <div className="font-bold">{readingTime}</div>
        </div>
        <div>
          <div className="text-gray-500">{"Categoria"}</div>
          <div className="font-bold">{categories.join(", ")}</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
