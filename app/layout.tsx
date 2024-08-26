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
          <div className="flex flex-col lg:flex-row min-h-screen px-4 xs:px-6 sm:px-10 md:px-24 xxl:px-60">
            <aside className="w-full lg:w-1/2">
              <Sidebar />
            </aside>

            <main className="flex-1 relative z-10 w-full lg:w-1/2 mt-8 lg:mt-0">
              {children}
            </main>
          </div>
        </DotBackground>
      </body>
    </html>
  );
}
