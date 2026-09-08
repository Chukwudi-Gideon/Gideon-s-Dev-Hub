"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();

        setError("");

        const { data, error }  = await supabase.auth.signInWithPassword({
            email,
            password
        });
        
        if(error) {
            setError(error.message);
            return;
        }

        if (data.user) {
           posthog.identify(
             data.user.id,
             data.user.email ? { email: data.user.email } : {},
           );
           posthog.capture('admin_login_succeeded');
           window.location.href = "/admin";
        }
    }
       return (
        <main className="min-h-screen flex items-center justify-center bg-slate-400 px-4">

            <form 
            onSubmit={handleLogin} 
            className="w-full max-w-md rounded-2xl border border-slate-300 bg-white p-8 shadow-sm"
            >

                <h1 className="text-2xl font-semibold text-slate-950">
                    Admin Login
                </h1>
                <p className="mt-2 text-sm text-slate-500">
            Sign in
                </p>
                <div className="mt-6 space-y-4">

                        <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                       required
                       />

                       <input 
                       type="password"
                       placeholder="Password"
                       value={password}
                       onChange={event => setPassword(event.target.value)}
                       className="w-full rounded-lg border border-slate-200 px-4 py-3 outline:none focus:border-indigo-500"
                       required
                       />
                       <button type="submit" 
                       className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
                            Sign In
                       </button>
                       {error && (
                        <p className="text-sm text-red-600">
                            {error}
                        </p>
                       )}
                </div>

            </form>

        </main>
       )
}
