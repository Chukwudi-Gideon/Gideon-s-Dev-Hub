import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "../types";
import posthog from 'posthog-js';


interface BlogProps {
  posts: BlogPost[];
}
function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    month: "long",
    year: "numeric"
  })
}

export function Blog({ posts }: BlogProps) {
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <section
      id="blog"
      className="py-14 bg-slate-50 border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
            BLOG
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">
            What I'm learning, building, and figuring out.
          </h2>
        </div>


        {/* Featured post */}
        {featuredPost && (
          <div className="mb-6">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow">

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400 uppercase tracking-wide">            
            
                <span>{formatDate(featuredPost.published_at)}</span>
             
                <span>•</span>

                <span className="inline-flex items-center gap-1">
                  <Clock3 className="w-3 h-3" />
                  {featuredPost.read_time} min read
                </span>
              </div>


              <h3 className="mt-5 max-w-3xl text-xl sm:text-2xl lg:text-2xl font-semibold tracking-tight text-slate-950">
                {featuredPost.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base sm:text-lg font-serif leading-8 text-slate-600">
                {featuredPost.description}
              </p>


              <a
                href={`/blog/${featuredPost.slug}`}
                onClick={() => posthog.capture('blog_post_opened', { post_id: featuredPost.id })}
                className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                Read article
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

            </div>
          </div>
        )}


        {/* Other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
            >

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400 uppercase tracking-wide">
            

                <span>{formatDate(post.published_at)}</span>

                <span>•</span>

                <span>{post.read_time} min read</span>
              </div>


              <h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
                {post.title}
              </h3>

              <p className="mt-3 text-base leading-7 font-serif text-slate-600">
                {post.description}
              </p>


              <a
                href={`/blog/${post.slug}`}
                onClick={() => posthog.capture('blog_post_opened', { post_id: post.id })}
                className="inline-flex items-center gap-2 mt-auto pt-7 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                Read article
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}