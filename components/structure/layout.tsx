import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import localFont from "next/font/local";

const vcr = localFont({
  src: [
    {
      path: "../../public/fonts/VCR_OSD_MONO.ttf",
      weight: "400",
    },
  ],
  variable: "--font-vcr",
});

export interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
  alert?: boolean;
}
export default function Layout({ preview, children, alert }: LayoutProps) {
  return (
    <>
      <Meta />
      <div className={`min-h-screen ${vcr.variable}`}>
        {alert && <Alert preview={preview} />}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
