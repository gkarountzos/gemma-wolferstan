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
    "mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-22 lg:py-0";

  const backgroundAnimationStyles = `fixed inset-0 -z-10 h-full w-full`;

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <BackgroundGradientAnimation
          containerClassName={backgroundAnimationStyles}
        />
        <div className={containerStyles}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
