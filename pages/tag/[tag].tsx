import { GetStaticProps } from "next";

export default function TagPage({ posts }: any) {}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // fetch post matching this tag
  const tag = params?.tag;
  const data = {
    posts: [],
  };

  return {
    props: {
      posts: data.posts,
    },
    revalidate: 10,
  };
};
