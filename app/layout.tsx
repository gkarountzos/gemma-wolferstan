import "./globals.css";
import { Inter } from "next/font/google";
import DotBackground from "@/components/ui/DotBackground";

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
          <main className="relative z-10 ">{children}</main>
        </DotBackground>
      </body>
    </html>
  );
}
