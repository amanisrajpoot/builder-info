import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[380px] md:min-h-[450px] flex items-center justify-center bg-gray-100 overflow-hidden">
        <Image
          src="/construction-hero.jpg"
          alt="Construction site hero"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg leading-tight">Builder Info: India&apos;s Construction Marketplace</h1>
          <p className="mt-4 text-base md:text-xl drop-shadow">Connect with residential and commercial builders, contractors, suppliers, architects, and engineers. Build your vision with the best in the industry.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center w-full max-w-xs mx-auto">
            <a href="/post-project" className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition text-center">Post a Project</a>
            <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold shadow hover:bg-secondary/90 transition text-center">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <Image src="/builders-icon.png" alt="Browse Builders" width={64} height={64} className="mb-3" />
          <h3 className="font-semibold text-lg mb-1">Browse Builders</h3>
          <p className="text-muted-foreground text-sm">Find residential builders, commercial developers, contractors, architects, engineers, and suppliers for your project.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/project-icon.png" alt="Post Project" width={64} height={64} className="mb-3" />
          <h3 className="font-semibold text-lg mb-1">Post a Project</h3>
          <p className="text-muted-foreground text-sm">Describe your requirements and get competitive quotes from top experts in every category.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src="/materials-icon.png" alt="Find Materials" width={64} height={64} className="mb-3" />
          <h3 className="font-semibold text-lg mb-1">Find Materials</h3>
          <p className="text-muted-foreground text-sm">Source quality construction materials from trusted suppliers across India.</p>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-muted py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="mb-2 text-3xl">📝</div>
              <div className="font-semibold">Post Project</div>
              <div className="text-sm text-muted-foreground">Share your requirements and budget.</div>
            </div>
            <div>
              <div className="mb-2 text-3xl">🔍</div>
              <div className="font-semibold">Get Quotes</div>
              <div className="text-sm text-muted-foreground">Receive offers from verified builders and suppliers.</div>
            </div>
            <div>
              <div className="mb-2 text-3xl">🤝</div>
              <div className="font-semibold">Hire & Connect</div>
              <div className="text-sm text-muted-foreground">Choose the best fit and start your project.</div>
            </div>
            <div>
              <div className="mb-2 text-3xl">🏗️</div>
              <div className="font-semibold">Build & Track</div>
              <div className="text-sm text-muted-foreground">Collaborate and track progress to completion.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow flex flex-col items-center text-center">
            <Image src="/avatar1.jpg" alt="User 1" width={56} height={56} className="rounded-full mb-3" />
            <div className="font-semibold mb-1">Amit Sharma</div>
            <div className="text-sm text-muted-foreground mb-2">Homeowner, Delhi</div>
            <div className="text-sm">“I found the perfect contractor for my home renovation. The process was smooth and transparent!”</div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow flex flex-col items-center text-center">
            <Image src="/avatar2.jpg" alt="User 2" width={56} height={56} className="rounded-full mb-3" />
            <div className="font-semibold mb-1">Priya Patel</div>
            <div className="text-sm text-muted-foreground mb-2">Builder, Mumbai</div>
            <div className="text-sm">“This platform helped me connect with genuine clients and grow my business.”</div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow flex flex-col items-center text-center">
            <Image src="/avatar3.jpg" alt="User 3" width={56} height={56} className="rounded-full mb-3" />
            <div className="font-semibold mb-1">Suresh Kumar</div>
            <div className="text-sm text-muted-foreground mb-2">Supplier, Bengaluru</div>
            <div className="text-sm">“A great way to reach new customers and showcase my materials.”</div>
          </div>
        </div>
      </div>
    </div>
  );
}
