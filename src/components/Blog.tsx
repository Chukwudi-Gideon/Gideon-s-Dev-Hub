import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "../types";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "What I Learned Building My Portfolio with Next.js",
    description:
      "A look at the decisions, challenges, and lessons that came with rebuilding my portfolio around Next.js and TypeScript.",
    category: "Next.js",
    date: "August 2026",
    readTime: "5 min read",
    slug: "building-my-portfolio-with-nextjs",
    featured: true,
  },

  {
    id: 2,
    title: "From HTML and CSS to React",
    description:
      "What changed when I moved from traditional HTML, CSS, and JavaScript projects into component-based development.",
    category: "React",
    date: "August 2026",
    readTime: "4 min read",
    slug: "from-html-css-to-react",
  },

  {
    id: 3,
    title: "What Makes a Website Feel Responsive?",
    description:
      "Exploring the small details that make interfaces feel fast, responsive, and pleasant to use.",
    category: "Frontend",
    date: "July 2026",
    readTime: "6 min read",
    slug: "what-makes-a-website-feel-responsive",
  },
];

export function Blog() {
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

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950">
            What I'm learning, building, and figuring out.
          </h2>
        </div>


        {/* Featured post */}
        {featuredPost && (
          <div className="mb-6">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow">

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-slate-400 uppercase tracking-wide">
                <span className="text-indigo-600">
                  {featuredPost.category}
                </span>

                <span>•</span>

                <span>{featuredPost.date}</span>

                <span>•</span>

                <span className="inline-flex items-center gap-1">
                  <Clock3 className="w-3 h-3" />
                  {featuredPost.readTime}
                </span>
              </div>


              <h3 className="mt-5 max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">
                {featuredPost.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base sm:text-lg font-serif leading-8 text-slate-600">
                {featuredPost.description}
              </p>


              <a
                href={`/blog/${featuredPost.slug}`}
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
                <span className="text-indigo-600">
                  {post.category}
                </span>

                <span>•</span>

                <span>{post.date}</span>

                <span>•</span>

                <span>{post.readTime}</span>
              </div>


              <h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
                {post.title}
              </h3>

              <p className="mt-3 text-base leading-7 font-serif text-slate-600">
                {post.description}
              </p>


              <a
                href={`/blog/${post.slug}`}
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