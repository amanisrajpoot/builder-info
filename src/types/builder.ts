export type Builder = {
  id: string;
  name: string;
  avatarUrl: string;
  skills: string[];
  bio: string;
  company: string;
  location: string;
  specialties: string[];
  contactEmail: string;
  category: 'Residential Builder' | 'Commercial Developer' | 'Contractor' | 'Supplier' | 'Architect' | 'Engineer';
}; 