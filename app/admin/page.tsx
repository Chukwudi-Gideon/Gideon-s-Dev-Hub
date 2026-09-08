import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import AdminSidebar from "@/components/Admin/AdminSidebar";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-slate-200 flex">
      <AdminSidebar />

      <section className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-slate-950">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Welcome back, {user.email}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Projects</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Blog Posts</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">Skills</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">CV</p>
            <p className="mt-2 text-3xl font-bold">—</p>
          </div>
        </div>
      </section>
    </main>
  );
}