import { createClient } from "@/lib/supabase-server";

export async function getProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  console.log("PRODUCTION PROJECT DATA:", data);
  console.log("PRODUCTION PROJECT ERROR:", error);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}