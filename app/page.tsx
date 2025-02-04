export default function Content() {
	return (
		<div className="h-screen flex flex-col items-center justify-center gap-4">
			<h1 className="text-2xl font-light">Alvaro Peña</h1>
			<ul className="flex gap-4 text-sm text-gray-600">
				<li>
					<a href="/newsletter" className="hover:text-blue-600 group">
						<span className="group-hover:hidden">newsletter</span>
						<span className="hidden group-hover:inline">[newsletter]</span>
					</a>
				</li>
				<li>
					<a href="/projects" className="hover:text-blue-600 group">
						<span className="group-hover:hidden">projects</span>
						<span className="hidden group-hover:inline">[projects]</span>
					</a>
				</li>
				<li>
					<a href="/resume" className="hover:text-blue-600 group">
						<span className="group-hover:hidden">resume</span>
						<span className="hidden group-hover:inline">[resume]</span>
					</a>
				</li>
				<li>
					<a href="/contact" className="hover:text-blue-600 group">
						<span className="group-hover:hidden">contact</span>
						<span className="hidden group-hover:inline">[contact]</span>
					</a>
				</li>
			</ul>
			<p className="text-sm text-gray-600 max-w-sm text-center mt-2">
				Software engineer based in San Francisco, CA.
			</p>
		</div>
	);
}
