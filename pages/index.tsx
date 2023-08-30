import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/structure/container";
import MoreStories from "../components/structure/more-stories";
import HeroPost from "../components/post/hero";
import Intro from "../components/structure/intro";
import Layout from "../components/structure/layout";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Andrea Provino - Blog`}</title>
      </Head>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:gap-x-12 lg:gap-x-16 gap-y-20 md:gap-y-32 mb-32">
          <div>{morePosts.length > 0 && <MoreStories posts={morePosts} />}</div>
          <div className="hidden md:block py-4 px-6">
            {/* {"Widget placeholder"} */}
          </div>
        </div>
      </Container>

      {/* <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container> */}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
