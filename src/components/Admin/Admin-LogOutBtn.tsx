"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function LogoutButton(){
const router = useRouter();

useEffect(() => {
    async function checkAuth() {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            router.push("/admin/login");
            return;
        }

        posthog.identify(user.id, user.email ? { email: user.email } : {});
    }

    void checkAuth();
}, [router]);

async function handleLogout(){
    const { error } = await supabase.auth.signOut();

    if (error) {
        return;
    }

    posthog.capture('admin_logged_out');
    posthog.reset();
    router.push("/admin/login");
    router.refresh();
} 
return (
    <button onClick={handleLogout} className="mt-10 rounded-lg bg-slate-900 py-2 px-4 font-semibold text-white hover:bg-slate-700">
        Log out
    </button>
)
}
