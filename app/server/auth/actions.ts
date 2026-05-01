"use server";
import { createClient } from "@/lib/supabase/auth/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function loginAction(
  prevState: void | null,
  formData: FormData,
): Promise<void | null> {
  console.log("Form Data: ", formData);
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signupAction(
  prevState: void | null,
  formData: FormData,
): Promise<void | null> {
  console.log("Form Data: ", formData);
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
