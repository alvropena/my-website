import { H1, Paragraph } from "@/components/typography";
import Link from "next/link";

export default function Content() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      <H1 className="mb-4">alvaro peña</H1>
      <Paragraph className="max-w-sm text-center">
        i was born on may 26, 2001, in lima, peru
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        i graduated high school in 2017
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        i studied economics at{" "}
        <Link
          href="https://www.up.edu.pe/en/"
          className="underline hover:text-blue-600 group"
        >
          <span className="group-hover:hidden">universidad del pacifico</span>
          <span className="hidden group-hover:inline">
            [universidad del pacifico]
          </span>
        </Link>{" "}
        from 2018 to 2022
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        in 2023, i dropped out to build{" "}
        <Link
          href="https://dudda.co"
          className="underline hover:text-blue-600 group"
        >
          <span className="group-hover:hidden">dudda</span>
          <span className="hidden group-hover:inline">[dudda]</span>
        </Link>
        , a tutor-booking marketplace
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        after a year with no traction, i shut it down
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        in january 2024, i moved to san francisco
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        i transferred to{" "}
        <Link
          href="https://www.csueastbay.edu/"
          className="underline hover:text-blue-600 group"
        >
          <span className="group-hover:hidden">csueb</span>
          <span className="hidden group-hover:inline">[csueb]</span>
        </Link>{" "}
        to get closer to the tech industry
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        i worked as a freelance software engineer for{" "}
        <Link
          href="https://onley.ai"
          className="underline hover:text-blue-600 group"
        >
          <span className="group-hover:hidden">onley</span>
          <span className="hidden group-hover:inline">[onley]</span>
        </Link>
        , an ai chatter for onlyfans models, for a year
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        in january 2025, i quit to go all-in on my next venture:{" "}
        <Link
          href="https://chop.dev"
          className="underline hover:text-blue-600 group"
        >
          <span className="group-hover:hidden">chop</span>
          <span className="hidden group-hover:inline">[chop]</span>
        </Link>
      </Paragraph>
      <Paragraph className="max-w-sm text-center">
        i'm currently building chop,{" "}download it {" "}
        <Link
          href="https://chop.dev"
          className="underline hover:text-blue-600 group"
        >
          <span className="group-hover:hidden">here</span>
          <span className="hidden group-hover:inline">[here]</span>
        </Link>
      </Paragraph>
    </div>
  );
}
