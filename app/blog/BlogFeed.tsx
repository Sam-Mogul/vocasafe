"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/sanity";
import { BookOpen, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogFeedProps {
  posts: BlogPost[];
}

const CATEGORIES = [
  { label: "All Posts", slug: "all" },
  { label: "Wearable AAC", slug: "wearable-aac-tech" },
  { label: "Safety Innovations", slug: "safety-innovations" },
  { label: "Autism Parenting", slug: "autism-parenting" },
  { label: "Education", slug: "education" },
  { label: "Company Insights", slug: "company-insights" },
  { label: "Therapy", slug: "therapy" },
];

export default function BlogFeed({ posts }: BlogFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => 
        post.categories.some(cat => cat.slug === selectedCategory)
      );

  return (
    <div className="space-y-12">
      {/* Category Tabs Scrollbar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-gray-200/80">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap",
                isActive
                  ? "bg-primary-navy text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:text-primary-navy hover:bg-gray-50"
              )}
            >
              {cat.label}
            </button>
          );
        })}
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
              className="bg-white border border-gray-100 rounded-2xl flex flex-col justify-between hover:shadow-lg hover:border-accent-orange/20 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 sm:p-8 space-y-4">
                {/* Category tags */}
                <div className="flex flex-wrap gap-1.5">
                  {post.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="inline-block py-0.5 px-2 bg-orange-50 text-[10px] font-bold text-accent-orange uppercase rounded"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-primary-navy hover:text-accent-orange transition-colors">
                  <Link href={`/post/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & meta box */}
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between gap-4 text-[10px] text-gray-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <User size={12} className="text-accent-orange" />
                  <span className="text-gray-600 font-bold">{post.author.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
