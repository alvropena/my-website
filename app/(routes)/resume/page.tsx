import { H1, H2, H3, Paragraph, SmallText } from '@/components/typography'

// Resume Data
const resumeData = {
  personalInfo: {
    name: "alvaro peña",
    contact: {
      email: "me@alvropena.com",
      website: "alvropena.com",
      github: "github.com/alvropena",
    },
  },
  education: [
    {
      school: "california state university, east bay",
      degree: "b.s. in economics",
      location: "hayward, ca",
      period: "2024 - 2025",
      status: "summa cum laude",
    },
    {
      school: "universidad del pacífico",
      degree: "b.s. in economics/finance",
      location: "lima, pe",
      period: "2018 - 2022",
      status: "dropout",
    },
  ],
  experience: [
    {
      title: "software engineer",
      company: "revolve labs",
      location: "san jose, cr",
      period: "dec 2023 - sep 2024",
      responsibilities: [
        "onleyai: onlyfans ai chatter for models",
        "managent: ai project manager",
        "bhuma ai: text-to-sql interface that allows to chat with your presto cluster",
      ],
    },
    {
      title: "co-founder",
      company: "dudda",
      location: "lima, pe",
      period: "oct 2022 - sep 2023",
      responsibilities: [
        "engineered two mobile applications utilizing react native, with firebase managing the backend operations",
        "successfully launched both applications on the app store and google play, adhering to all compliance standards",
        "developed a comprehensive web admin panel using react, firebase, next.js, and d3.js, facilitating detailed user analytics",
        "spearheaded growth strategies, effectively scaling our user base to over a thousand tutors and students, through methods like seo, both paid and organic traffic campaigns, referral programs, and more",
      ],
    },
    {
      title: "finance intern",
      company: "alegra",
      location: "medellín, co",
      period: "feb 2022 - sep 2022",
      responsibilities: [
        "developed a data studio dashboard to monitor company kpis, analyzing saas growth metrics like cac, mrr, and churn",
        "prepared the annual budget for all departments including sales, customer success, growth, and development",
        "streamlined cash flow by automating the integration of accounting data with financial forecasts using sql queries",
        "directed the legal establishment of alegra's new entity, alero sas, in argentina, enhancing regional presence",
        "led due diligence for a crowdfunding round on a2censo, successfully raising over usd400k",
      ],
    },
  ],
  skills: {
    languages: "typescript, javascript, python, java, c++",
    frameworks: "react, next.js, tailwindcss, html/css",
    developerTools: "node.js, express, postgresql, mongodb",
    libraries: "git, docker, aws, vercel",
  },
};

// Props Interfaces
interface EducationItemProps {
  school: string;
  degree: string;
  location: string;
  period: string;
  status?: string;
}

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

// Components
function ContactInfo() {
  const { email, website, github } = resumeData.personalInfo.contact;
  return (
    <div className="flex gap-2 justify-center mb-4">
      <SmallText>{email}</SmallText>
      <SmallText>|</SmallText>
      <SmallText>
        <a href={`https://${website}`} className="hover:underline">
          {website}
        </a>
      </SmallText>
      <SmallText>|</SmallText>
      <SmallText>
        <a href={`https://${github}`} className="hover:underline">
          {github}
        </a>
      </SmallText>
    </div>
  );
}

function EducationItem({
  school,
  degree,
  location,
  period,
  status,
}: EducationItemProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-base font-medium">{school}</h3>
        <p className="text-sm text-gray-600">{period}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{degree}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
      {status && <p className="text-sm text-gray-600">grade: {status}</p>}
    </div>
  );
}

function Education() {
  return (
    <section className="mb-4">
      <h2 className="text-xl font-normal mb-2">education</h2>
      <div className="space-y-3">
        {resumeData.education.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{period}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
      <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <section className="mb-4">
      <h2 className="text-xl font-normal mb-2">experience</h2>
      <div className="space-y-3">
        {resumeData.experience.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function TechnicalSkills() {
  const { languages, frameworks, developerTools, libraries } =
    resumeData.skills;
  return (
    <section className="mb-4">
      <h2 className="text-xl font-normal mb-2">technical skills</h2>
      <div className="space-y-1 text-sm text-gray-600">
        <p>languages: {languages}</p>
        <p>frameworks: {frameworks}</p>
        <p>developer tools: {developerTools}</p>
        <p>libraries: {libraries}</p>
      </div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 mt-16 mb-16">
      <H1 className="text-center mb-1">{resumeData.personalInfo.name}</H1>
      <ContactInfo />
      <Education />
      <Experience />
      <TechnicalSkills />
      <div className="flex justify-between gap-2">
        <SmallText className="text-blue-500">build your resume</SmallText>
        <SmallText className="text-gray-500">download as pdf</SmallText>
      </div>
    </div>
  );
}
