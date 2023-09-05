import Link from "next/link";
import Layout from "../components/structure/layout";
import Image from "next/image";
import Container from "../components/structure/container";
import { getAllPostsForHome } from "../lib/api";
import { GetStaticProps } from "next";
import MoreStories from "../components/structure/more-stories";

export function MenuIcon() {
  return (
    <svg viewBox="0 0 400 400" fill="none" height="40px" width="40px">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M296 80C309.255 80 320 90.7452 320 104C320 117.255 309.255 128 296 128C282.745 128 272 117.255 272 104C272 90.7452 282.745 80 296 80ZM296 271.999C309.255 271.999 320 282.745 320 295.999C320 309.254 309.255 319.999 296 319.999C282.745 319.999 272 309.254 272 295.999C272 282.745 282.745 271.999 296 271.999ZM320 200C320 186.745 309.255 176 296 176C282.745 176 272 186.745 272 200C272 213.255 282.745 224 296 224C309.255 224 320 213.255 320 200ZM199.999 271.999C213.254 271.999 223.999 282.745 223.999 295.999C223.999 309.254 213.254 319.999 199.999 319.999C186.744 319.999 175.999 309.254 175.999 295.999C175.999 282.745 186.744 271.999 199.999 271.999ZM223.999 104C223.999 90.7452 213.254 80 199.999 80C186.744 80 175.999 90.7452 175.999 104C175.999 117.255 186.744 128 199.999 128C213.254 128 223.999 117.255 223.999 104ZM199.999 176C213.254 176 223.999 186.745 223.999 200C223.999 213.255 213.254 224 199.999 224C186.744 224 175.999 213.255 175.999 200C175.999 186.745 186.744 176 199.999 176ZM127.998 295.999C127.998 282.745 117.253 271.999 103.998 271.999C90.7432 271.999 79.998 282.745 79.998 295.999C79.998 309.254 90.7432 319.999 103.998 319.999C117.253 319.999 127.998 309.254 127.998 295.999ZM103.998 80C117.253 80 127.998 90.7452 127.998 104C127.998 117.255 117.253 128 103.998 128C90.7432 128 79.998 117.255 79.998 104C79.998 90.7452 90.7432 80 103.998 80ZM127.998 200C127.998 186.745 117.253 176 103.998 176C90.7432 176 79.998 186.745 79.998 200C79.998 213.255 90.7432 224 103.998 224C117.253 224 127.998 213.255 127.998 200Z"
        fill="#FC0A54"
      ></path>
    </svg>
  );
}

export default function Home({ allPosts: { edges } }: any) {
  const morePosts = edges.slice(1);
  const sections = [
    {
      title: "blog",
      url: "/blog",
    },
    {
      title: "services",
      url: "/services",
    },
    {
      title: "About",
      url: "/about",
    },
  ];
  const social = [
    {
      title: "linkedin",
      url: "https://it.linkedin.com/in/andrea-provino",
    },
    {
      title: "github",
      url: "https://github.com/andpi314",
    },
    {
      title: "substack",
      url: "https://andreaprovino.substack.com/",
    },
  ];
  const refs = [
    {
      title: "actions",
      url: "/actions",
    },
    {
      title: "policy",
      url: "/policy",
    },
  ];
  return (
    <Layout alert={false} preview={false}>
      <div className="min-h-screen relative ">
        <nav className="h-[80px] sticky w-full flex items-center justify-between top-0 border-b-[1px] border-black-1 z-10 backdrop-blur-2xl font-vcr text-white ">
          <div className="px-10">
            <Link href="/">
              <Image
                width={40}
                height={40}
                alt="Main menu"
                priority
                src={"/icons/menu.svg"}
              />
            </Link>
          </div>
          <div className="hidden md:block md:justify-around">
            {sections.map((section) => (
              <Link
                className="opacity-[0.48] hover:opacity-100 transition-opacity duration-300 ease-in-out mx-4 uppercase text-xs font-normal tracking-widest"
                key={section.url}
                aria-label={`Link to ${section.title}`}
                href={section.url}
              >
                {section.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:block px-10">{"CTA"}</div>
        </nav>
        <div className="absolute top-0 h-full overflow-hidden w-full flex justify-center items-center">
          <div>
            <h2 className="text-[48px] uppercase text-white font-vcr text-center tracking-wider">
              {"AP - Learn"}
            </h2>
          </div>
          <div className="absolute animate-spin-slow-reverse">
            <Image
              width={800}
              height={800}
              alt="Main menu"
              priority
              src={"/dotted-circle-big.svg"}
            />
          </div>
          <div className="hidden md:block absolute  animate-spin-slow">
            <Image
              width={600}
              height={600}
              alt="Main menu"
              priority
              src={"/dotted-circle.svg"}
            />
          </div>
          <div className="w-[600px] h-[600px] md:w-[1056px] md:h-[1056px] absolute overflow-hidden animate-spin-slow">
            <Image
              className=" h-full"
              width={1056}
              height={1056}
              alt="Main menu"
              priority
              src={"/domino-circle-big.svg"}
            />
          </div>
        </div>
        <div className="flex absolute bottom-0 h-[52px] w-full justify-center md:justify-between text-white border-t-[1px] border-black-1 items-center font-vcr">
          <div className="hidden md:flex mx-2">
            {refs.map((ref) => (
              <Link
                className="opacity-[0.48] hover:opacity-100 transition-opacity duration-300 ease-in-out mx-4 uppercase text-xs font-normal tracking-widest"
                key={ref.url}
                aria-label={`Link to ${ref.title}`}
                href={ref.url}
              >
                {ref.title}
              </Link>
            ))}
          </div>
          <div className="mx-2">
            {social.map((social) => (
              <Link
                className="opacity-[0.48] hover:opacity-100 transition-opacity duration-300 ease-in-out mx-4 uppercase text-xs font-normal tracking-widest"
                key={social.url}
                aria-label={`Link to ${social.title}`}
                href={social.url}
              >
                {social.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:gap-x-12 lg:gap-x-16 gap-y-20 md:gap-y-32 mb-32">
            <div>
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
            <div className="hidden md:block py-4 px-6">
              {/* {"Widget placeholder"} */}
            </div>
          </div>
        </Container>
      </div>
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
