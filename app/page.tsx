import { H1, Paragraph } from '@/components/typography'

export default function Content() {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<H1 className="mb-4">alvaro peña</H1>
			<Paragraph className="max-w-sm text-center">
				software engineer based in san francisco, ca.
			</Paragraph>
		</div>
	);
}
