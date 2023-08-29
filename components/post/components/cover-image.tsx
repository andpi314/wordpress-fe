import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import BookCover from "../../themes/default/atomics/molecules/book-cover";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
      title: string;
      srcSet: string;
      sizes: string;
      mediaDetails: { height: number; width: number };
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  //console.log("CoverImage", coverImage?.node);
  const imageDefault = coverImage?.node?.sourceUrl && (
    <div
      className="relative w-full"
      style={
        {
          //paddingBottom: "61.8%"
        }
      }
    >
      <Image
        // width={2000}
        // height={1000}
        // width={350}
        // height={300}
        // style={{
        //   // layout: "responsive",
        //   objectFit: "cover",
        // }}
        // objectFit="cover"
        // layout="fill"
        src={coverImage?.node.sourceUrl}
        placeholder="blur"
        blurDataURL="https://www.industrialempathy.com/img/blurry.svg"
        alt={coverImage?.node?.title || `Cover Image for ${title}`}
        layout="responsive"
        width={coverImage?.node?.mediaDetails?.width}
        height={coverImage?.node?.mediaDetails?.height}
        objectFit="cover"
        className={cn("shadow-small rounded-lg", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
        sizes={coverImage?.node?.sizes}
      />
    </div>
  );
  const image = coverImage?.node?.sourceUrl && (
    <BookCover src={coverImage?.node.sourceUrl} tag="#001" title={title} />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${slug}`} aria-label={title}>
          {imageDefault}
        </Link>
      ) : (
        imageDefault
      )}
    </div>
  );
}
