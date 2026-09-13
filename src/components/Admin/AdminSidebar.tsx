"use client";

import Link from "next/link";
import LogoutButton from "./Admin-LogOutBtn";

export default function AdminSidebar() {
  return (
    <aside className="max-w-5xl w-full mx-auto my-10 flex flex-col items-center justify-center border-slate-200  p-6">
      <div className=" text-center">
        <h1 className="text-xl font-bold text-slate-950">
         Welcome back Boss!
        </h1>
      
        <p className="text-sm text-neutral-500 mt-1">
            Go ahead and make an update
          </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-4">
        <Link
          href="/admin/projects"
          className="block rounded-lg px-3 py-2 text-md font-medium hover:bg-slate-700 bg-slate-600 my-4 text-white"
        >
          Projects
        </Link>

        <Link
          href="/admin/blog"
          className="block rounded-lg px-3 py-2 text-md font-medium hover:bg-slate-700 bg-slate-600 my-4 text-white"
        >
          Blog
        </Link>

        <Link
          href="/admin/skills"
          className="block rounded-lg px-3 py-2 text-md font-medium hover:bg-slate-700 bg-slate-600 my-4 text-white"
        >
          Skills
        </Link>
      </nav>

      <div className="mt-5 text-center w-full">
        <LogoutButton />
      </div>
    </aside>
  );
}