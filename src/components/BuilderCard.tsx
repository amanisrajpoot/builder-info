"use client";
import Link from "next/link";
import Image from "next/image";
import { Builder } from "@/types/builder";

export default function BuilderCard({ builder }: { builder: Builder }) {
  return (
    <Link href={`/builders/${builder.id}`} className="rounded-lg border bg-card p-6 flex flex-col items-center gap-4 shadow-sm hover:scale-[1.02] transition-transform focus:outline-none" tabIndex={0}>
      <Image
        src={builder.avatarUrl}
        alt={builder.name}
        width={64}
        height={64}
        className="rounded-full object-cover border"
      />
      <h3 className="text-lg font-semibold">{builder.name}</h3>
      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-1">{builder.category}</span>
      <div className="text-sm text-muted-foreground">{builder.company}</div>
      <div className="text-xs text-muted-foreground">{builder.location}</div>
      <div className="flex flex-wrap gap-2 justify-center w-full">
        {builder.specialties.slice(0, 3).map((spec) => (
          <span key={spec} className="px-2 py-1 bg-muted rounded text-xs font-medium">
            {spec}
          </span>
        ))}
      </div>
      <p className="text-sm text-center text-muted-foreground line-clamp-3">{builder.bio}</p>
      <a
        href="tel:+918896011202"
        className="mt-2 inline-block px-4 py-2 rounded bg-primary text-primary-foreground text-xs font-semibold shadow hover:bg-primary/90 transition"
        onClick={e => e.stopPropagation()}
        tabIndex={-1}
      >
        Call +91 88960 11202
      </a>
    </Link>
  );
} 