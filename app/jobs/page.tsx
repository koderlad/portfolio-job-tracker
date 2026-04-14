import { supabase } from "@/lib/supabase/server";

import { Suspense } from "react";

async function JobsData() {
  const { data: jobs } = await supabase.from("jobs").select();
  return <pre>{JSON.stringify(jobs, null, 2)}</pre>;
}

export default function Jobs() {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <JobsData />
    </Suspense>
  );
}
