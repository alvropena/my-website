import Link from "next/link";
import { SmallText } from "@/components/typography";

export function Header() {
  return (
    <header className="fixed max-w-2xl mx-auto left-0 right-0 top-0 py-4 bg-white border-b border-gray-100">
      <nav className="flex justify-between px-4">
        <Link href="/" className="hover:text-blue-600 group">
          <SmallText>
            <span className="group-hover:hidden">ap</span>
            <span className="hidden group-hover:inline">[ap]</span>
          </SmallText>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/blog" className="hover:text-blue-600 group">
              <SmallText>
                <span className="group-hover:hidden">blog</span>
                <span className="hidden group-hover:inline">[blog]</span>
              </SmallText>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600 group">
              <SmallText>
                <span className="group-hover:hidden">projects</span>
                <span className="hidden group-hover:inline">[projects]</span>
              </SmallText>
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-blue-600 group">
              <SmallText>
                <span className="group-hover:hidden">resume</span>
                <span className="hidden group-hover:inline">[resume]</span>
              </SmallText>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 group">
              <SmallText>
                <span className="group-hover:hidden">contact</span>
                <span className="hidden group-hover:inline">[contact]</span>
              </SmallText>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
