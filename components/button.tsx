import Link from "next/link";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center just w-fit mx-auto px-4 py-2 rounded-full bg-[#4e2780] text-white transition duration-200"
      >
        {children}
      </Link>
    </div>
  );
}
