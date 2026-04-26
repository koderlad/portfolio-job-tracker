"use server";
import { db } from "@/lib/supabase/server";
export async function searchJobs(query: string) {
  if (!query || query.length < 2) return [];

  const { data, error } = await db
    .from("jobs")
    .select("jobid, title, company")
    .ilike("title", `%${query}%`)
    .limit(5);

  if (error) {
    console.error("Error searching jobs:", error);
    return [];
  }

  return data;
}
