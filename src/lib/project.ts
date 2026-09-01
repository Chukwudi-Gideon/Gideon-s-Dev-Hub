import  { supabase } from "@/lib/supabase"

export async function getProjects(){


    
    const {data, error} = await supabase
    .from("projects")
    .select("*")
    .order("display_order", {ascending: true});


      console.log("SUPABASE DATA:", data);
  console.log("SUPABASE ERROR:", error);

    if(error){
        throw new Error(error.message)
    };
    return data;
}
