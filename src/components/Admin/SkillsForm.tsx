"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SkillsForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("language");
  const [unlocked, setUnlocked] = useState(true);
  const [description, setDescription] = useState("");
  const [displayOrder, setDisplayOrder] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("skills")
      .insert({
        name,
        category,
        unlocked,
        description,
        display_order: displayOrder,
      })
      .select()
      .single();


    if (error) {
      console.error(error.message);
      return;
    }

    setName("");
    setCategory("language");
    setUnlocked(true);
    setDescription("");
    setDisplayOrder(0);

    setSuccessMessage("Skill successfully added!");

    router.push("/admin/skills");
    router.refresh();
  }

  return (
    <form
      className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-8"
      onSubmit={handleSubmit}
    >
      {/* Name */}
      <div>
        <label className="text-sm font-medium">Skill Name</label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Skill name"
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="text-sm font-medium">Description</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          placeholder="Describe skill..."
          required
        />
      </div>

      {/* Unlocked */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={unlocked}
          onChange={(e) => setUnlocked(e.target.checked)}
        />

        <label className="text-sm font-medium">
          Unlocked
        </label>
      </div>

      {/* Display Order */}
      <div>
        <label className="text-sm font-medium">Display Order</label>

        <input
          type="number"
          value={displayOrder}
          onChange={(e) => setDisplayOrder(Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Create Skill
      </button>

      {successMessage && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          {successMessage}
        </p>
      )}
    </form>
  );
}