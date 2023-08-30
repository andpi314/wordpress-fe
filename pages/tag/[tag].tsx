import { GetStaticPaths, GetStaticProps } from "next";
import { getAllTagsWithSlug, getTagsPosts } from "../../lib/api";
import Container from "../../components/structure/container";
import { SubStackLikePreview } from "../../components/structure/more-stories";

export default function TagPage({ posts, tag }: { posts: any[]; tag: string }) {
  return (
    <div className="my-10">
      <Container>
        <h3 className="text-3xl font-bold mb-4 text-[#404040]">{`Gli ultimi post di "${tag}"`}</h3>
        {posts?.length > 0 ? (
          posts.map((node: any) => (
            <SubStackLikePreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          ))
        ) : (
          <div>{"Post assenti per questo tag."}</div>
        )}
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // fetch post matching this tag
  const tag = params?.tag as string;
  const data = await getTagsPosts([tag]);

  return {
    props: {
      tag,
      posts: data?.edges?.map(({ node }) => node) || [],
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTagsWithSlug();

  return {
    paths: allTags.edges.map(({ node }) => `/tag/${node.slug}`) || [],
    fallback: true,
  };
};
