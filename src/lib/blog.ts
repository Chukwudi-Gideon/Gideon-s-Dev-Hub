import { createClient } from "@/lib/supabase-server";

export async function getBlogPosts(){
    const supabase = await createClient();

    const {data, error} = await supabase.from('blog_posts').select('*').order("display_order", {ascending: true});
    if(error){
      throw new Error(error.message)
    };
    return data
}
export async function getBlogPostBySlug(slug: string){
    const supabase = await createClient();

    const {data, error } = await supabase.from('blog_posts').select('*').eq('slug',slug).single();
    if(error){
        throw new Error(error.message);
    };
    return data;
}


