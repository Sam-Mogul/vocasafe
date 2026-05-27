"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/sanity";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogFeedProps {
  posts: BlogPost[];
}

const CATEGORIES = [
  { label: "All Posts", slug: "all" },
  { label: "Crowdfunding Impact", slug: "crowdfunding-impact" },
  { label: "Safety Innovations", slug: "safety-innovations" },
  { label: "Safety Solutions", slug: "safety-solutions" },
  { label: "Safe Outings", slug: "safe-outings" },
  { label: "Wearable AAC Tech", slug: "wearable-aac-tech" },
];

export default function BlogFeed({ posts }: BlogFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => 
        post.categories.some(cat => cat.slug === selectedCategory)
      );

  return (
    <div className="space-y-10">
      {/* Category Tabs Scrollbar */}
      <div className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-none border-b border-gray-100 mb-8">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={cn(
                "text-[13px] font-sans font-medium transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2",
                isActive
                  ? "text-accent-orange border-accent-orange font-semibold"
                  : "text-gray-600 hover:text-accent-orange border-transparent"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Dynamic Header */}
      <div className="pb-4">
        <h2 className="text-3xl font-display font-extrabold text-[#111111] tracking-tight">
          {selectedCategory === "all" ? "All Posts" : CATEGORIES.find(c => c.slug === selectedCategory)?.label}
        </h2>
      </div>

      {/* Filtered Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <BookOpen className="mx-auto text-gray-300 w-12 h-12 mb-4" />
          <h3 className="text-lg font-bold text-primary-navy">No Posts Found</h3>
          <p className="text-xs text-gray-500 font-light mt-1">
            We haven't published articles in this category yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-100/70 rounded-sm flex flex-col justify-between hover:shadow-md hover:border-gray-200 transition-all duration-300 overflow-hidden group"
            >
              <div className="space-y-4">
                {/* 1. Post Cover Image */}
                {post.coverImage && (
                  <Link href={`/post/${post.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100/50">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </Link>
                )}

                {/* 2. Text Area */}
                <div className="p-6 pt-2 space-y-4">
                  {/* Meta row: Watch Circular Avatar, Author, Date, Read Time, 3 dots */}
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full border border-gray-200 overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/images/logo-icon.png"
                          alt="Vocasafe Watch"
                          fill
                          sizes="24px"
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-1 text-gray-600">
                        <span className="font-semibold text-gray-800 text-[11px]">{post.author.name}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-400">
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 flex-shrink-0">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <button className="hover:text-accent-orange transition-colors cursor-pointer">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <circle cx="12" cy="5" r="2"/>
                          <circle cx="12" cy="12" r="2"/>
                          <circle cx="12" cy="19" r="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-lg font-display font-extrabold text-primary-navy leading-snug tracking-tight hover:text-accent-orange transition-colors">
                    <Link href={`/post/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </div>

              {/* 3. Bottom Area: Tag badge */}
              <div className="p-6 pt-0 pb-6">
                <div className="flex">
                  <span className="inline-block py-0.5 px-2.5 bg-accent-orange text-white text-[9px] font-bold uppercase tracking-wider rounded-sm">
                    {post.categories[0]?.title || "Wearable AAC Tech"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
