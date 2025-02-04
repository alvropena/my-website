import { GitHubLogoIcon, TwitterLogoIcon, VideoIcon } from '@radix-ui/react-icons';

export default function Content() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-2xl font-light mb-4">alvaro peña</h1>
			<p className="text-sm text-gray-600 max-w-sm text-center">
				software engineer based in san francisco, ca.
			</p>
			<div className="flex justify-evenly w-full max-w-sm text-gray-600 mt-4">
				<a href="https://github.com/alvropena" className="hover:text-blue-600">
					<GitHubLogoIcon className="w-4 h-4" />
				</a>
				<a href="https://twitter.com/alvropenaa" className="hover:text-blue-600">
					<TwitterLogoIcon className="w-4 h-4" />
				</a>
				<a href="https://youtube.com/@alvropena" className="hover:text-blue-600">
					<VideoIcon className="w-4 h-4" />
				</a>
			</div>
		</div>
	);
}
