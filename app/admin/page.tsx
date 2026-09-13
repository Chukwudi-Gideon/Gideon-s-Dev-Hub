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

    <main>
      <AdminSidebar />
    </main>
  );
}