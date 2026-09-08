"use client";

import Link from "next/link";
import LogoutButton from "./Admin-LogOutBtn";

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-200 bg-slate-700 p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-slate-950">
          Portfolio Admin
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          My portfolio Management
        </p>
      </div>

      <nav className="space-y-2">
        <Link
          href="/admin"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/projects"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
        >
          Projects
        </Link>

        <Link
          href="/admin/blog"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
        >
          Blog
        </Link>

        <Link
          href="/admin/skills"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
        >
          Skills
        </Link>

        <Link
          href="/admin/experience"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
        >
          Experience & Education
        </Link>

        <Link
          href="/admin/cv"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-100"
        >
          CV
        </Link>
      </nav>

      <div className="mt-10">
        <LogoutButton />
      </div>
    </aside>
  );
}