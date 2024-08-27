import Link from "next/link";

const footerLinks = [
  { href: "https://github.com/gkarountzos", text: "gkarountzos" },
  { href: "https://vercel.com/", text: "Vercel" },
];

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`text-sm pb-8 lg:pb-0 `}>
      <p className={`text-gray-300 ${className}`}>
        Built by{" "}
        <Link
          href={footerLinks[0].href}
          className="text-main font-semibold hover:text-anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[0].text}
        </Link>{" "}
        using Next.js and Tailwind CSS. Deployed on{" "}
        <Link
          href={footerLinks[1].href}
          className="text-gray-300 hover:text-anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footerLinks[1].text}
        </Link>
        .
        <br /> Designed by Gemma.
      </p>
    </footer>
  );
};

export default Footer;
