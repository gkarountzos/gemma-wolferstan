import Link from "next/link";

const footerLinks = [
  { href: "https://github.com/gkarountzos", text: "gkarountzos" },
  { href: "https://code.visualstudio.com/", text: "Visual Studio Code" },
  { href: "https://nextjs.org/", text: "Next.js" },
  { href: "https://tailwindcss.com/", text: "Tailwind CSS" },
  { href: "https://www.figma.com/", text: "Figma" },
  { href: "https://vercel.com/", text: "Vercel" },
];

const Footer = () => {
  return (
    <footer className="px-4 py-1">
      <p className="text-[#FEF8EE]">
        Built by{" "}
        <Link
          href={footerLinks[0].href}
          className="hover:text-[#D1A1D8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[0].text}
        </Link>{" "}
        in{" "}
        <Link
          href={footerLinks[1].href}
          className="hover:text-[#D1A1D8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[1].text}
        </Link>{" "}
        using{" "}
        <Link
          href={footerLinks[2].href}
          className="hover:text-[#D1A1D8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[2].text}
        </Link>{" "}
        and{" "}
        <Link
          href={footerLinks[3].href}
          className="hover:text-[#D1A1D8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[3].text}
        </Link>
        . Designed by Gemma in{" "}
        <Link
          href={footerLinks[4].href}
          className="hover:text-[#D1A1D8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[4].text}
        </Link>
        . Deployed by{" "}
        <Link
          href={footerLinks[5].href}
          className="hover:text-[#D1A1D8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[5].text}
        </Link>
        .
      </p>
      <br />
      <p className="text-[#FEF8EE]">Yours truly, Gemma.</p>
    </footer>
  );
};

export default Footer;
