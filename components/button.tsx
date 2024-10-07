import Link from "next/link";

export default function Button({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
}) {
  return (
    <div className="mt-6">
      <Link
        href={`${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} flex justify-center items-center w-fit mx-auto px-4 py-2 rounded-full bg-[#4e2780] text-white transition duration-200 shadow-md md:hover:shadow-[0_0_15px_#ffffff]`}
      >
        {children}
      </Link>
    </div>
  );
}
