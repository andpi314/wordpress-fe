import { SubStackPreview } from "../themes/substack/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold leading-tight mt-4 font-vcr uppercase tracking-wider text-black">
        {"Ultimi post"}
      </h2>
      <div className="grid gap-y-2">
        {/* className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 lg:gap-x-16 gap-y-20 md:gap-y-32 mb-32"> */}
        {posts.map(({ node }) => (
          <SubStackPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
