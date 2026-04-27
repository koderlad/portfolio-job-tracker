"use server";
import { db } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitForm(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  //Extract the form data
  const jobId = data.get("jobId") as string;

  if (!jobId) {
    return { success: false, message: "Job ID is required." };
  }

  //Insert the new application into the database
  const { data: application, error: appError } = await db
    .from("applications")
    .insert({
      jobid: jobId,
      applied_on: new Date().toISOString(),
    })
    .select()
    .single();

  if (appError) {
    console.error("Error creating application:", appError);
    return { success: false, message: "Failed to create application." };
  }

  //Insert into application_status table with default status "Applied"
  const { error: statusError } = await db.from("application_status").insert({
    appid: application.appid,
    name: "applied",
    updated_on: new Date().toISOString(),
  });

  if (statusError) {
    console.error("Error setting application status:", statusError);
    return {
      success: true,
      message: "Application created but failed to set status.",
    };
  }

  revalidatePath("/applications"); //Revalidate the applications page to show the new application
  return { success: true, message: "Application saved!" };
}
