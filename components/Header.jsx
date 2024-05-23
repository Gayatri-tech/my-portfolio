import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between fixed z-10 w-full">
      <Link className="font-bold" href="/">
        G.R. Portfolio
      </Link>
      <ul className="hidden h-full gap-12 sm:flex">
        {NAV_LINKS.map((link) => (
          <Link
            className="pb-1 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
