import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" px-4 py-1">
      <p className="text-gray-700 dark:text-gray-300">
        Built by <Link href="https://github.com/gkarountzos">gkarountzos </Link>
        in
        <Link href="https://code.visualstudio.com/"> Visual Studio Code </Link>
        using <Link href="https://nextjs.org/">Next.js</Link> and
        <Link href="https://tailwindcss.com/"> Tailwind CSS</Link>. Designed by
        Gemma in <Link href="https://www.figma.com/">Figma</Link>. Deployed by
        <Link href="https://vercel.com/"> Vercel</Link>.
      </p>
      <br />
      <p className="text-gray-700 dark:text-gray-300">Yours truly, Gemma.</p>
    </footer>
  );
};

export default Footer;
