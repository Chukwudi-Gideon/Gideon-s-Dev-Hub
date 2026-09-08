import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server"

{/**
    import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import ProjectForm from "@/components/admin/ProjectForm";

export default async function NewProjectPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-950">
          Add Project
        </h1>

        <p className="mt-2 text-slate-600">
          Add a new project to your portfolio.
        </p>

        <ProjectForm />
      </div>
    </main>
  );
}
    
    
    
    */}