import type { Metadata } from "next";
import { getPosts } from "@/lib/sanity";
import BlogFeed from "./BlogFeed";

export const metadata: Metadata = {
  title: "Explore Communication Accessibility with VocaSafe Watch™ Blog",
  description: "Discover how VocaSafe Watch™ is redefining communication accessibility with AI and multilingual design insights.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/blog",
  },
  openGraph: {
    title: "Explore Communication Accessibility with VocaSafe Watch™ Blog",
    description: "Discover how VocaSafe Watch™ is redefining communication accessibility with AI and multilingual design insights.",
    url: "https://www.vocasafewatch.net/blog",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_e5d956ac453942a9927f60674b069ce3~mv2.jpeg",
        width: 2500,
        height: 1330,
        alt: "VocaSafe Watch Blog Feed",
      },
    ],
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col min-h-screen bg-neutral-light/50">
      {/* 1. Header Section */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 text-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-3 relative z-10">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Company Insights & Guides
          </span>
          <h1 className="text-4xl font-display font-bold">Latest from Our Blog</h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Discover articles, therapist guides, and parent stories outlining symbol-based wearables, elopement safety, and neurodiversity.
          </p>
        </div>
      </section>

      {/* 2. Interactive Feed Component */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <BlogFeed posts={posts} />
        </div>
      </section>
    </div>
  );
}
