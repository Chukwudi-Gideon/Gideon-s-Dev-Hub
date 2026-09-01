import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server"
import LogoutButton from "@/components/Admin-LogOutBtn";

export default async function AdminDashboard() {
    const  supabase = await createClient();

    const { data: { user },} = await supabase.auth.getUser();

    if(!user){
        redirect("/admin/login")
    }
    return (
        <main className="min-h-screen p-10">
            <h1 className="text-3xl font-bold">
                Portfolio Admin 
            </h1>

            <p className="mt-2 text-slate-600">
        There you are Chukwudi 
            </p>

            <LogoutButton />
        </main>
    )
}

{/**



    
    */}