import Link from "next/link";
import Image from "next/image";
import Date from "../../post/components/date";
import { useRouter } from "next/router";

export function ImagePreview({ title, coverImage, slug }) {
  return (
    <div className="sm:mx-0">
      <Image
        className="rounded-md"
        src={coverImage?.node.sourceUrl}
        width={coverImage?.node?.mediaDetails?.width}
        height={coverImage?.node?.mediaDetails?.height}
        alt={coverImage?.node?.title || `Cover Image for ${title}`}
        objectFit="cover"
        layout="responsive"
        sizes={coverImage?.node?.sizes}
      />
    </div>
  );
}

export function SubStackPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${slug}`);
  };
  return (
    <div role="button" onClick={handleClick} className="border-b-2 py-2">
      {/* hover:bg-gray-200 */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-[minmax(0,1fr)_160px] hover:bg-black-lighter px-4 py-6 rounded-md transition-color duration-200">
        <div className="grid flex-col gap-2">
          <Link
            href={`/${slug}`}
            // text-[#404040]
            className="text-lg font-bold text-white hover:underline font-vcr uppercase"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
          <div
            className="text-sm text-[#8C8C8C] text-justify md:text-left tracking-wider"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className="text-left text-[11px] text-[#8C8C8C] uppercase font-medium">
            <Date dateString={date} formatString={"d LLLL"} />
            <span className="inline-block px-2">{`•`}</span>
            <Link
              href={`/author/${author?.node?.slug}`}
              aria-label={author?.node?.name}
            >
              {author?.node?.name}
            </Link>
          </div>
        </div>
        <div>
          <ImagePreview title={title} coverImage={coverImage} slug={slug} />
        </div>
      </div>
    </div>
  );
}
