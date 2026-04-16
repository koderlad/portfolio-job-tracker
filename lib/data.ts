import { db } from "@/lib/supabase/server";

export async function JobsData() {
  const { data: jobs } = await db.from("jobs").select();
  return jobs;
}
