"use client";

import { useState } from 'react';
import {supabase} from "@/lib/supabase"
import { useRouter } from 'next/navigation';

export default function ProjectForm(){
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [liveUrl, setLiveUrl] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [featured, setFeatured] = useState(false);
    const [displayOrder, setDisplayOrder] = useState(0);
    const [successMessage, setSuccessMessage] = useState("");

    const router = useRouter();

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();

        const { data, error} = await supabase 
        .from("projects").insert({
            title, slug, description, image_url: imageUrl, live_url: liveUrl, github_url:githubUrl,
            featured, display_order: displayOrder
        }).select().single();

        if(error){
            console.error(error.message);
            return
        }
        setTitle("");
setSlug("");
setDescription("");
setImageUrl("");
setLiveUrl("");
setGithubUrl("");
setFeatured(false);
setDisplayOrder(0);

setSuccessMessage("Project successfully added!");
        router.push("/admin/projects");
    router.refresh();

    }
    

    {/**
  
        */}
    return (
        <form className='mt-8 space-y-5  rounded-2xl border border-slate-200 bg-white p-8' onSubmit={handleSubmit}> 

        <div>
        <label className='text-sm font-medium'>
        Title
        </label>

        <input  
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        placeholder='Project Title'
        className='mt-2 w-full rounded-lg border border-slate-200 px-4 py-3'  
        required     
        />
        </div>
        <div>
<label className='text-sm font-medium'>Slug
        <input
        value={slug}
        onChange={(e)=>{setSlug(e.target.value)}}
        placeholder="Project slug"
        className='mt-2 w-full rounder-lg border border-slate-200 px-4 py-3'
         required 
        />
</label>
        </div>

         <div>
        <label className="text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          placeholder="Describe the project..."
           required 
        />
      </div>

      <div>
        <label className="text-sm font-medium">Image URL</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          placeholder="/Project-images/project.jpg"
           required 
        />
      </div>

      <div>
        <label className="text-sm font-medium">Live URL</label>
        <input
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          placeholder="https://..."
           required 
        />
      </div>

      <div>
        <label className="text-sm font-medium">GitHub URL</label>
        <input
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
          placeholder="https://github.com/..."
        
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}

        />

        <label className="text-sm font-medium">
          Featured project
        </label>
      </div>

      <div>
        <label className="text-sm font-medium">Display Order</label>
        <input
          type="number"
          value={displayOrder}
          onChange={(e) => setDisplayOrder(Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Create Project
      </button>
    {successMessage && (
        <p className='rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700'>
            {successMessage}
        </p>
    )}
        </form>
    )
}

{/**
*/}