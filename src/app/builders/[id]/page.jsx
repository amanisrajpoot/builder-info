import Image from "next/image";

// This mock data should match the one in /builders/page.tsx for now
const builders = [
  {
    id: "1",
    name: "Alex Johnson",
    avatarUrl: "/file.svg",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    bio: "Full-stack developer with a passion for building scalable web apps.",
    company: "Skyline Developers",
    location: "New York, NY",
    specialties: ["Residential", "Commercial"],
    contactEmail: "alex@skyline.com",
    category: "Residential Builder",
  },
  {
    id: "2",
    name: "Priya Patel",
    avatarUrl: "/window.svg",
    skills: ["React", "Node.js", "UI/UX"],
    bio: "Frontend specialist and UI/UX enthusiast.",
    company: "UrbanBuild Co.",
    location: "San Francisco, CA",
    specialties: ["Renovation", "Interior Design"],
    contactEmail: "priya@urbanbuild.com",
    category: "Contractor",
  },
  {
    id: "3",
    name: "Chen Lee",
    avatarUrl: "/globe.svg",
    skills: ["Python", "Django", "APIs"],
    bio: "Backend engineer focused on robust APIs and data systems.",
    company: "Eastside Contractors",
    location: "Austin, TX",
    specialties: ["Infrastructure", "Smart Homes"],
    contactEmail: "chen@eastside.com",
    category: "Engineer",
  },
];

export default function Page({ params }) {
  const builder = builders.find((b) => b.id === params.id);
  if (!builder) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-2xl font-bold">Builder Not Found</h2>
        <p className="text-muted-foreground">No builder with this ID exists.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <Image
        src={builder.avatarUrl}
        alt={builder.name}
        width={96}
        height={96}
        className="rounded-full object-cover border"
      />
      <h2 className="text-3xl font-bold">{builder.name}</h2>
      <div className="text-lg text-muted-foreground">{builder.company}</div>
      <div className="text-sm text-muted-foreground">{builder.location}</div>
      <div className="flex flex-wrap gap-2 justify-center">
        {builder.specialties.map((spec) => (
          <span key={spec} className="px-2 py-1 bg-muted rounded text-xs font-medium">
            {spec}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {builder.skills.map((skill) => (
          <span key={skill} className="px-2 py-1 bg-accent rounded text-xs font-medium">
            {skill}
          </span>
        ))}
      </div>
      <p className="max-w-xl text-base text-center text-muted-foreground">{builder.bio}</p>
      <a
        href={`mailto:${builder.contactEmail}`}
        className="mt-2 inline-block px-6 py-3 rounded bg-primary text-primary-foreground text-base font-semibold shadow hover:bg-primary/90 transition"
      >
        Contact {builder.name.split(' ')[0]}
      </a>
    </div>
  );
} 