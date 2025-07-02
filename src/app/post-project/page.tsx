"use client";
import { useState, useEffect } from "react";
// import { Project } from "@/types/project";

const BUDGET_OPTIONS = [
  "Under ₹1 lakh",
  "₹1–5 lakhs",
  "₹5–10 lakhs",
  "₹10–20 lakhs",
  "₹20–50 lakhs",
  "₹50+ lakhs",
];

const CONSTRUCTION_TYPES = [
  "Reinforced Concrete (RCC)",
  "Brick Masonry",
  "Steel Structure",
  "Precast/Prefabricated",
  "Wooden/Timber",
  "Composite (Mixed Materials)",
  "Load-Bearing Masonry",
  "Lightweight/Modular Construction",
  "Other (Specify)",
];

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Institutional",
  "Infrastructure",
  "Other (Specify)",
];

interface ProjectForm {
  title: string;
  description: string;
  budget: string;
  location: string;
  requiredSkills: string[];
  skillInput: string;
  constructionType: string;
  constructionTypeOther: string;
  projectType: string;
  projectTypeOther: string;
}

const initialForm: ProjectForm = {
  title: "",
  description: "",
  budget: "",
  location: "",
  requiredSkills: [],
  skillInput: "",
  constructionType: "",
  constructionTypeOther: "",
  projectType: "",
  projectTypeOther: "",
};

export default function PostProjectPage() {
  const [form, setForm] = useState<ProjectForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [allLocations, setAllLocations] = useState<string[]>([]);

  useEffect(() => {
    import("./locations.json").then((mod) => {
      setAllLocations(mod.default || mod);
    });
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSkillInput(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, skillInput: e.target.value });
  }

  function handleSkillKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === "," || e.key === "Enter") && form.skillInput.trim()) {
      e.preventDefault();
      if (!form.requiredSkills.includes(form.skillInput.trim())) {
        setForm({
          ...form,
          requiredSkills: [...form.requiredSkills, form.skillInput.trim()],
          skillInput: "",
        });
      }
    }
  }

  function removeSkill(skill: string) {
    setForm({
      ...form,
      requiredSkills: form.requiredSkills.filter((s) => s !== skill),
    });
  }

  function handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setForm({ ...form, location: value });
    if (value.length > 1 && allLocations.length > 0) {
      setLocationSuggestions(
        allLocations.filter((loc) => loc.toLowerCase().includes(value.toLowerCase())).slice(0, 20)
      );
    } else {
      setLocationSuggestions([]);
    }
  }

  function selectLocation(loc: string) {
    setForm({ ...form, location: loc });
    setLocationSuggestions([]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.description || !form.budget || !form.location || !form.constructionType || !form.projectType || form.requiredSkills.length === 0) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Save project to localStorage for /projects page
    const newProject = {
      id: Date.now().toString(),
      title: form.title,
      description: form.description,
      budget: form.budget,
      location: form.location,
      requiredSkills: form.requiredSkills,
      constructionType: form.constructionType === "Other (Specify)" ? form.constructionTypeOther : form.constructionType,
      projectType: form.projectType === "Other (Specify)" ? form.projectTypeOther : form.projectType,
    };
    const stored = localStorage.getItem("builderinfo_projects");
    const projects = stored ? JSON.parse(stored) : [];
    localStorage.setItem("builderinfo_projects", JSON.stringify([newProject, ...projects]));
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a New Project</h2>
      {submitted ? (
        <div className="bg-green-100 border border-green-300 text-green-800 rounded p-4 text-center mb-6">
          Project posted successfully!
          <button
            className="ml-4 text-primary underline"
            onClick={() => setSubmitted(false)}
          >
            Post another
          </button>
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium mb-1">Project Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Budget</label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select budget range</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleLocationChange}
            className="w-full border rounded px-3 py-2"
            autoComplete="off"
            required
          />
          {locationSuggestions.length > 0 && (
            <ul className="border rounded bg-white mt-1 max-h-40 overflow-y-auto">
              {locationSuggestions.map((loc) => (
                <li
                  key={loc}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectLocation(loc)}
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Required Skills/Specialties</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {form.requiredSkills.map((skill: string) => (
              <span key={skill} className="bg-primary/10 text-primary px-2 py-1 rounded flex items-center gap-1">
                {skill}
                <button type="button" className="ml-1 text-xs" onClick={() => removeSkill(skill)}>&times;</button>
              </span>
            ))}
          </div>
          <input
            type="text"
            name="skillInput"
            value={form.skillInput}
            onChange={handleSkillInput}
            onKeyDown={handleSkillKeyDown}
            className="w-full border rounded px-3 py-2"
            placeholder="Type a skill and press comma or Enter"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Type of Construction</label>
          <select
            name="constructionType"
            value={form.constructionType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select construction type</option>
            {CONSTRUCTION_TYPES.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {form.constructionType === "Other (Specify)" && (
            <input
              type="text"
              name="constructionTypeOther"
              value={form.constructionTypeOther}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-2"
              placeholder="Please specify construction type"
              required
            />
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Project Type</label>
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select project type</option>
            {PROJECT_TYPES.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {form.projectType === "Other (Specify)" && (
            <input
              type="text"
              name="projectTypeOther"
              value={form.projectTypeOther}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-2"
              placeholder="Please specify project type"
              required
            />
          )}
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded hover:bg-primary/90 transition"
        >
          Post Project
        </button>
      </form>
    </div>
  );
} 