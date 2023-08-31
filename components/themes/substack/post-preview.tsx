import Link from "next/link";
import PostPreview from "../../post/post-preview";
import Image from "next/image";
import Date from "../../post/components/date";

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
  return (
    <div className="border-b-2 py-2">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-[minmax(0,1fr)_160px] hover:bg-gray-200 px-4 py-6 rounded-md transition-color duration-200">
        <div className="grid flex-col gap-2">
          <Link
            href={`/${slug}`}
            className="text-lg font-bold text-[#404040] hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
          <div
            className="text-sm text-[#8C8C8C] text-justify md:text-left"
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
