import { SmallText } from "@/components/typography";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="fixed max-w-2xl mx-auto left-0 right-0 bottom-0 py-4 bg-white border-t border-gray-100">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <SmallText>
            source on{" "}
            <a
              href="https://github.com/alvropena/my-website"
              className="hover:text-blue-600 group"
            >
              <span className="group-hover:hidden">github</span>
              <span className="hidden group-hover:inline">[github]</span>
            </a>
          </SmallText>
          <div className="flex gap-4">
            <a
              href="https://github.com/alvropena"
              className="hover:text-blue-600"
            >
              <GitHubLogoIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/alvropenaa"
              className="hover:text-blue-600"
            >
              <TwitterLogoIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@alvropena"
              className="hover:text-blue-600"
            >
              <VideoIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
