import "./globals.css";
import { Inter } from "next/font/google";
import DotBackground from "@/components/ui/DotBackground";
import Sidebar from "@/components/Sidebar"; // Fixed typo in Sidebar component name

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
          <div className="flex min-h-screen">
            <aside className="w-1/2">
              <Sidebar />
            </aside>
            <main className="flex-1 relative z-10 w-1/2">{children}</main>
          </div>
        </DotBackground>
      </body>
    </html>
  );
}
