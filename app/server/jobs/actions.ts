"use server";

import { db } from "@/lib/supabase/server"; //Need to get the database client from the server-side library

export default async function submitForm(data: FormData) {
  //Extract the form data
  const rawFormData = {
    title: data.get("title"),
    company: data.get("company"),
  };

  //Insert into supabase table named "jobs"
  const { data: jobData, error } = await db
    .from("jobs")
    .insert([rawFormData])
    .select();

  // console.log(error);
  if (error) {
    console.error("Supabase Error: ", error);
    throw new Error("Failed to submit the form. Please try again.");
  }

  return { success: true, job: jobData };
}
