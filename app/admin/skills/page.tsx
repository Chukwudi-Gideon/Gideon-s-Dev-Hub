import SkillsForm from "@/components/Admin/SkillsForm";

export default function NewSkillPage() {
  return (
    <main className="min-h-screen bg-slate-200 p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-950">
          Add New Skill
        </h1>

        <p className="mt-2 text-sm text-slate-500">
         Glad you are here to add a new technology. Keep pushing, keep learning, the breakthrough is near.
        </p>

        <SkillsForm />
      </div>
    </main>
  );
}