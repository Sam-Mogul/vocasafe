import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPosts, getPostBySlug } from "@/lib/sanity";
import { Calendar, Clock, User, ArrowLeft, BookOpen } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

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
    title: `${post.title} | VocaSafe Watch™ Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.vocasafewatch.net/post/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | VocaSafe Watch™ Blog`,
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
    <div className="flex flex-col min-h-screen bg-neutral-light/30">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex-grow space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-accent-orange transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Insights Feed</span>
        </Link>

        {/* Title & Metadata Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((cat, idx) => (
              <span
                key={idx}
                className="inline-block py-1 px-3 bg-orange-50 text-[10px] font-bold text-accent-orange uppercase rounded-full"
              >
                {cat.title}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-navy leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-medium border-y border-gray-100 py-3">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-accent-orange" />
              <span className="text-gray-700 font-bold">{post.author.name}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Rich Text Body */}
        <div
          className="prose prose-slate max-w-none text-gray-600 font-light leading-relaxed space-y-6 text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Author Bio Container */}
        <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-6 mt-12">
          <div className="w-12 h-12 rounded-full bg-orange-100 text-accent-orange font-black flex items-center justify-center text-lg flex-shrink-0">
            {post.author.name[0]}
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <strong className="block text-sm font-bold text-primary-navy">
              Published by {post.author.name}
            </strong>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              {post.author.bio || "VocaSafe Watch Team developer inspired by neurodiversity and inclusive communication paradigms."}
            </p>
          </div>
        </div>

        {/* Sidebar: Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-100 pt-12 mt-12 space-y-6">
            <h4 className="font-bold text-primary-navy text-sm uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={16} className="text-accent-orange" />
              <span>Other Articles You Might Like</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/post/${related.slug}`}
                  className="block p-4 bg-white border border-gray-50 rounded-xl shadow-sm hover:shadow-md hover:border-accent-orange/10 transition-all space-y-2"
                >
                  <span className="block text-[9px] font-bold text-accent-orange uppercase tracking-wider">
                    {related.categories[0]?.title}
                  </span>
                  <h5 className="font-bold text-primary-navy text-xs sm:text-sm line-clamp-2 hover:text-accent-orange">
                    {related.title}
                  </h5>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>
    </div>
  );
}
