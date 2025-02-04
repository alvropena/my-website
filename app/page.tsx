import { GitHubLogoIcon, TwitterLogoIcon, VideoIcon } from '@radix-ui/react-icons';

export default function Content() {
	return (
		<div className="h-screen flex flex-col items-center justify-center [--hover-color:theme(colors.blue.600)]">
			<h1 className="text-2xl font-light mb-4">alvaro peña</h1>
			<ul className="flex gap-4 text-sm text-gray-600 mb-4">
				<li>
					<a href="/blog" className="hover:text-[var(--hover-color)] group">
						<span className="group-hover:hidden">blog</span>
						<span className="hidden group-hover:inline">[blog]</span>
					</a>
				</li>
				<li>
					<a href="/projects" className="hover:text-[var(--hover-color)] group">
						<span className="group-hover:hidden">projects</span>
						<span className="hidden group-hover:inline">[projects]</span>
					</a>
				</li>
				<li>
					<a href="/resume" className="hover:text-[var(--hover-color)] group">
						<span className="group-hover:hidden">resume</span>
						<span className="hidden group-hover:inline">[resume]</span>
					</a>
				</li>
				<li>
					<a href="/contact" className="hover:text-[var(--hover-color)] group">
						<span className="group-hover:hidden">contact</span>
						<span className="hidden group-hover:inline">[contact]</span>
					</a>
				</li>
			</ul>
			<p className="text-sm text-gray-600 max-w-sm text-center">
				software engineer based in san francisco, ca.
			</p>
			<div className="flex justify-evenly w-full max-w-sm text-gray-600 mt-4">
				<a href="https://github.com/alvropena" className="hover:text-[var(--hover-color)]">
					<GitHubLogoIcon className="w-4 h-4" />
				</a>
				<a href="https://twitter.com/alvropenaa" className="hover:text-[var(--hover-color)]">
					<TwitterLogoIcon className="w-4 h-4" />
				</a>
				<a href="https://youtube.com/@alvropena" className="hover:text-[var(--hover-color)]">
					<VideoIcon className="w-4 h-4" />
				</a>
			</div>
		</div>
	);
}
