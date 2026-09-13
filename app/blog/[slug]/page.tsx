import { notFound } from "next/navigation";
import { getBlogPostBySlug  } from "@/lib/blog";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogPostPage({ params,}: BlogPostPageProps) {
    const { slug } =  await params;

    let post;

    try {
        post = await getBlogPostBySlug(slug);
    }catch{
        notFound();
    }
    if(!post){
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <article className="mx-auto max-w-3xl px-4 sm-px-6 lg:px-8">

            <div className="mb-8">
                <p className="text-xs font-mono uppercase tracking-wide text-indigo-600">
                {
                    new Date(post.published_at).toLocaleDateString('en-GB', {month: "long", year: "numeric"})
                }
                {" • "} 
                {post.read_time} min read
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                    {post.title}
                </h1>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                {post.description}
                </p>

            </div>
            <div className="border-t border-slate-200 pt-8">
                <div className="whitespace-pre-wrap text-base leading-8 text-slate-700"> 
                {post.content}
                </div>
            </div>
            </article>
        </main>
    )
}

