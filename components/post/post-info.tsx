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
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-12 gap-y-6 text-center py-2 text-white">
        <div>
          <div className="text-gray-lighter">{"Autore"}</div>
          <div className="">{author}</div>
        </div>
        <div>
          <div className="text-gray-lighter">{"Tempo di lettura"}</div>
          <div className="text-neon-green font-bold">{readingTime}</div>
        </div>
        <div>
          <div className="text-gray-lighter">{"Categoria"}</div>
          <div className="text-neon-green font-bold">
            {categories.join(", ")}
          </div>
        </div>
        <div>
          <div className="text-gray-lighter">{"Data"}</div>
          <div className="">
            <time dateTime={date}>
              {format(d, "d LLLL yyyy", { locale: it })}
            </time>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
