"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const router = useRouter();
const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/Services" },
  { name: "resume", path: "/Resume" },
  { name: "work", path: "/Work" },
  { name: "contact", path: "/Contact" },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
