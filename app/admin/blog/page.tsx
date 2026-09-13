import BlogForm from "@/components/Admin/BlogForm";

export default function NewBlogPostPage(){
    return (
        <main className="min-h-screen bg-slate-50 p-10">
            <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-950">
            Create Blog Post
        </h1>

        <p>
            Write and publish a new Article.
        </p>

        <BlogForm />
            </div>
        </main>
    )
};