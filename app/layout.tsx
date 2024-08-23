import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gemma Wolferstan",
  description: "A personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerStyles =
    "flex mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0";
  const asideStyles =
    "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24";
  const mainStyles = "pt-24 lg:w-1/2 lg:py-24";

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <BackgroundGradientAnimation containerClassName="fixed inset-0 -z-10" />
        <div className={containerStyles}>
          <aside className={asideStyles}>
            <Sidebar />
          </aside>
          <main className={mainStyles}>{children}</main>
        </div>
      </body>
    </html>
  );
}
