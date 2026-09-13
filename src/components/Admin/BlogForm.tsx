"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    // Basic slug validation
    const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

    if (!slugPattern.test(slug)) {
      setErrorMessage(
        "Slug must contain only lowercase letters, numbers, and hyphens."
      );
      return;
    }

    if (content.trim().length < 50) {
      setErrorMessage("Article content must be at least 50 characters.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("blog_posts").insert({
      title: title.trim(),
      slug: slug.trim(),
      description: description.trim(),
      content: content.trim(),
    });

    if (error) {
      console.error(error);

      if (error.code === "23505") {
        setErrorMessage("A blog post with this slug already exists.");
      } else {
        setErrorMessage(error.message);
      }

      setIsSubmitting(false);
      return;
    }

    setTitle("");
    setSlug("");
    setDescription("");
    setContent("");

    setSuccessMessage("Blog post successfully created!");

    setIsSubmitting(false);

    router.push("/admin/blog");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-8"
    >
      {/* Title */}
      <div>
        <label className="text-sm font-medium">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What I Learned Building My Portfolio"
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          required
          minLength={3}
          maxLength={150}
        />
      </div>

      {/* Slug */}
      <div>
        <label className="text-sm font-medium">
          Slug
        </label>

        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="what-i-learned-building-my-portfolio"
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          required
          pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
        />

        <p className="mt-1 text-xs text-slate-500">
          Use lowercase letters, numbers, and hyphens only.
        </p>
      </div>

      {/* Description */}
      <div>
        <label className="text-sm font-medium">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="A short summary of what this article is about..."
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          required
          minLength={10}
          maxLength={300}
        />
      </div>

    

      {/* Content */}
      <div>
        <label className="text-sm font-medium">
          Content
        </label>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
          placeholder="Write your article here..."
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          required
          minLength={50}
        />

        <p className="mt-1 text-xs text-slate-500">
          {content.length} characters
        </p>
      </div>

      {/* Error */}
      {errorMessage && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      {/* Success */}
      {successMessage && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          {successMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Creating..." : "Create Blog Post"}
      </button>
    </form>
  );
}