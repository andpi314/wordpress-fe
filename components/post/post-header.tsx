import Avatar from "./components/avatar";
import Date from "./components/date";
import CoverImage from "./components/cover-image";
import PostTitle from "./post-title";
import Categories from "./components/categories";
import PostInfo from "./post-info";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  contentSize,
}) {
  const wpm = 225;
  const time = Math.ceil(contentSize / wpm);
  // const readingTime = Math.ceil(contentSize / 2000);

  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div> */}
      <div className="mb-8 md:mb-16 sm:mx-0">
        <PostInfo
          author={author?.node?.name}
          date={date}
          categories={categories?.edges?.map((c) => c?.node?.name) || ["N/A"]}
          readingTime={`${time} minuti`}
        />
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div> */}
        {/* <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div> */}
      </div>
    </>
  );
}
