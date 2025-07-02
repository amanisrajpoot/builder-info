"use client";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("builderinfo_projects");
    if (stored) setProjects(JSON.parse(stored));
  }, []);

  useEffect(() => {
    let f = projects;
    if (search.trim()) {
      const q = search.toLowerCase();
      f = f.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.projectType.toLowerCase().includes(q)
      );
    }
    setFiltered(f);
    setPage(1);
  }, [search, projects]);

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">All Posted Projects</h1>
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <input
          type="text"
          placeholder="Search by title, location, or type..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full sm:w-72 border rounded px-3 py-2 text-sm"
        />
      </div>
      {paginated.length === 0 ? (
        <div className="text-center text-muted-foreground py-16">No projects found.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {paginated.map((p) => (
            <div key={p.id} className="border rounded-lg bg-card p-5 shadow flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="font-semibold text-lg line-clamp-1">{p.title}</div>
                <span className="text-xs text-muted-foreground">{new Date(Number(p.id)).toLocaleDateString()}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-1 line-clamp-1">{p.location} • {p.budget}</div>
              <div className="flex flex-wrap gap-2 text-xs mb-1">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">{p.projectType}</span>
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded">{p.constructionType}</span>
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">{p.description}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.requiredSkills.slice(0, 3).map((skill) => (
                  <span key={skill} className="bg-muted px-2 py-1 rounded text-xs font-medium">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="px-2 text-sm">Page {page} of {totalPages}</span>
          <button
            className="px-3 py-1 rounded border text-sm disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
} 