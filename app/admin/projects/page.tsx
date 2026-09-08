import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export default async function ProjectsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: true });


  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-950">
              Projects
            </h1>

            <p className="mt-2 text-slate-600">
              Portfolio Project display management
            </p>
          </div>

          <button className="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
            + Add Project
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h2 className="font-semibold text-slate-950">
                {project.title}
              </h2>

              <img src={project.image_url} className="object-contain w-100-h-100 "/>

              <p className="mt-1 text-sm text-slate-500">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}