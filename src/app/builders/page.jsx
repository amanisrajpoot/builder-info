import BuilderCard from "@/components/BuilderCard";
// import { Builder } from "@/types/builder";

const builders = [
  {
    id: "1",
    name: "Amit Sharma",
    avatarUrl: "/avatar1.jpg",
    skills: ["RCC Construction", "Brick Masonry", "Site Supervision"],
    bio: "Experienced residential builder specializing in RCC and brick masonry homes across North India.",
    company: "Sharma Constructions",
    location: "Delhi, India",
    specialties: ["RCC", "Brick Masonry", "Residential Projects"],
    contactEmail: "amit@sharmaconstructions.in",
    category: "Residential Builder",
  },
  {
    id: "2",
    name: "Priya Patel",
    avatarUrl: "/avatar2.jpg",
    skills: ["Commercial Complexes", "Steel Structure", "Project Planning"],
    bio: "Commercial developer with a focus on malls, offices, and large-scale urban projects.",
    company: "Patel Urban Developers",
    location: "Mumbai, Maharashtra",
    specialties: ["Steel Structure", "Commercial Projects", "Urban Development", "Retail Spaces", "Office Towers"],
    contactEmail: "priya@patelurban.com",
    category: "Commercial Developer",
  },
  {
    id: "3",
    name: "Suresh Kumar",
    avatarUrl: "/avatar3.jpg",
    skills: ["Structural Engineering", "Site Management", "Quality Control"],
    bio: "Civil engineer with expertise in structural design and site management for infrastructure projects.",
    company: "Kumar Engineering Services",
    location: "Bengaluru, Karnataka",
    specialties: ["Structural Design", "Quality Control", "Infrastructure", "Bridge Design", "Roadways"],
    contactEmail: "suresh@kumarengg.com",
    category: "Engineer",
  },
  {
    id: "4",
    name: "Rohit Verma",
    avatarUrl: "/avatar4.jpg",
    skills: ["Cement Supply", "Logistics", "Bulk Materials"],
    bio: "Supplier of quality cement and construction materials to projects across North India.",
    company: "Verma Materials",
    location: "Lucknow, Uttar Pradesh",
    specialties: ["Cement", "Logistics", "Bulk Supply", "Sand", "Bricks", "Steel"],
    contactEmail: "rohit@vermamaterials.com",
    category: "Supplier",
  },
  {
    id: "5",
    name: "Anjali Mehra",
    avatarUrl: "/avatar5.jpg",
    skills: ["Sustainable Design", "Green Building", "Planning"],
    bio: "Architect with a focus on sustainable, eco-friendly, and modern design for urban and rural projects.",
    company: "Mehra Architects",
    location: "Pune, Maharashtra",
    specialties: ["Sustainable Design", "Green Building", "Planning", "Vastu Compliance", "Interior Design"],
    contactEmail: "anjali@mehraarchitects.com",
    category: "Architect",
  },
  {
    id: "6",
    name: "Sandeep Singh",
    avatarUrl: "/avatar6.jpg",
    skills: ["Project Management", "Civil Works", "Contracting"],
    bio: "Experienced contractor for large-scale infrastructure and civil works projects in South India.",
    company: "Singh Infra Projects",
    location: "Hyderabad, Telangana",
    specialties: ["Project Management", "Civil Works", "Infrastructure", "Road Construction", "Water Supply"],
    contactEmail: "sandeep@singhinfra.com",
    category: "Contractor",
  },
];

export default function BuildersPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Browse Builders</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {builders.map((builder) => (
          <BuilderCard key={builder.id} builder={builder} />
        ))}
      </div>
    </div>
  );
} 