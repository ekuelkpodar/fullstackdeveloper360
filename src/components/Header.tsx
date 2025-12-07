import Link from "next/link";
import { SearchInput } from "./SearchInput";

const navLinks = [
  { href: "/topics", label: "Topics" },
  { href: "/search", label: "Search" },
  { href: "/admin", label: "Admin" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          FullStack.Cafe Remix
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-neutral-700 sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto w-full max-w-md">
          <SearchInput compact />
        </div>
        <Link
          href="/login"
          className="hidden rounded-full bg-black px-4 py-2 text-sm font-medium text-white sm:inline-flex"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}
