import "./globals.css";
import { Inter } from "next/font/google";
import DotBackground from "@/components/ui/DotBackground";
import Sidebar from "@/components/Sidebar";

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
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <DotBackground>
          <div className="flex flex-col lg:flex-row min-h-screen px-4 xs:px-6 sm:px-10 md:px-24 xxl:px-52 xxxl:px-72 fourk:px-[550px]">
            <div className="w-full lg:w-1/2">
              <Sidebar />
            </div>

            <main className=" z-10 w-full lg:w-1/2 mt-8 lg:mt-0 md:pb-24 pt-8 lg:py-24 xxl:py-32 xxxl:py-52">
              {children}
            </main>
          </div>
        </DotBackground>
      </body>
    </html>
  );
}
