import { db } from "@/lib/supabase/server";

export async function JobsData() {
  const { data: jobs } = await db.from("jobs").select();
  return jobs;
}

export async function ApplicationsData() {
  const { data: applications } = await db.from("applications").select(`
    *,
    status: application_status(name),
    job: jobs(title, company)`);
  return applications;
}
