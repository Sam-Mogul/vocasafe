import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPosts, getPostBySlug } from "@/lib/sanity";
import { ArrowLeft, BookOpen, Share2 } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const CATEGORIES = [
  { label: "All Posts", slug: "all" },
  { label: "Crowdfunding Impact", slug: "crowdfunding-impact" },
  { label: "Safety Innovations", slug: "safety-innovations" },
  { label: "Safety Solutions", slug: "safety-solutions" },
  { label: "Safe Outings", slug: "safe-outings" },
  { label: "Wearable AAC Tech", slug: "wearable-aac-tech" },
];

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Vocasafe Watch™ Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.vocasafewatch.net/post/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Vocasafe Watch™ Blog`,
      description: post.excerpt,
      url: `https://www.vocasafewatch.net/post/${post.slug}`,
      siteName: "Vocasafewatch",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const allPosts = await getPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Category Tabs Scrollbar just below Navbar */}
      <div className="pt-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-8 overflow-x-auto pb-4 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug === "all" ? "/blog" : `/blog`}
                className="text-[13px] font-sans font-medium text-gray-600 hover:text-accent-orange transition-all cursor-pointer whitespace-nowrap"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex-grow space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-accent-orange transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Blog Feed</span>
        </Link>

        {/* 2. Wix Post Metadata Row */}
        <div className="flex items-center justify-between text-[11px] text-gray-500 pb-2 border-b border-gray-100/50">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full border border-gray-200 overflow-hidden bg-white flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/logo-icon.png"
                alt="Vocasafe Watch"
                fill
                sizes="28px"
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
                  year: "numeric"
                })}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 flex-shrink-0">
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

        {/* 3. Orange Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-accent-orange leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* 4. Centered Cover Image */}
        {post.coverImage && (
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50 rounded-sm border border-gray-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* 5. Rich Text Body */}
        <div
          className="prose prose-slate max-w-none text-gray-700 font-sans font-light leading-relaxed space-y-6 text-sm sm:text-base pt-4"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* 6. Divider Line and Social Share Icons */}
        <div className="border-t border-gray-100 pt-6 mt-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Facebook Share */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.vocasafewatch.net/post/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200/80 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center cursor-pointer"
              title="Share on Facebook"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-[#1877F2] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6.5c0-.83.67-1.5 1.5-1.5h1.5V2h-3C9.7 2 8 3.7 8 6v2z"/>
              </svg>
            </a>

            {/* X (formerly Twitter) Share */}
            <a
              href={`https://twitter.com/intent/tweet?url=https://www.vocasafewatch.net/post/${post.slug}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200/80 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center cursor-pointer"
              title="Share on X"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn Share */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.vocasafewatch.net/post/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-200/80 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center cursor-pointer"
              title="Share on LinkedIn"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Copy Link */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
              className="p-2 border border-gray-200/80 rounded-full hover:bg-neutral-light transition-all flex items-center justify-center cursor-pointer"
              title="Copy Link"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-accent-orange transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 7. Wix Style Recent Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-100 pt-12 mt-12 space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-display font-extrabold text-primary-navy tracking-tight">
                Recent Posts
              </h4>
              <Link
                href="/blog"
                className="text-xs font-bold text-gray-500 hover:text-accent-orange uppercase tracking-wider transition-colors"
              >
                See All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="bg-white border border-gray-100 rounded-sm flex flex-col justify-between hover:shadow-sm transition-all duration-300 overflow-hidden group"
                >
                  <div className="space-y-3">
                    {/* Related Image */}
                    {related.coverImage && (
                      <Link href={`/post/${related.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100/50">
                        <Image
                          src={related.coverImage}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 33vw, 250px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </Link>
                    )}

                    <div className="p-4 pt-1 space-y-2">
                      {/* Related Meta */}
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                        <span className="font-semibold text-gray-700">{related.author.name}</span>
                        <span>•</span>
                        <span>{related.readTime}</span>
                      </div>
                      
                      {/* Related Title */}
                      <h5 className="font-display font-bold text-primary-navy text-xs sm:text-sm line-clamp-2 hover:text-accent-orange transition-colors">
                        <Link href={`/post/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </article>
    </div>
  );
}
