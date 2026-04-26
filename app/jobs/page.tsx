import { JobsData } from "@/lib/data";
import { Suspense } from "react";
import Table from "@/app/ui/jobs/table";

export default async function Jobs() {
  const jobs = await JobsData();
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <Table jobs={jobs} />
    </Suspense>
  );
}
