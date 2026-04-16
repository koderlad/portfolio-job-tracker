import { JobsData } from "@/lib/data";
import { Suspense } from "react";

export default async function Jobs() {
  const jobs = await JobsData();
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      {jobs?.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.status}</p>
        </div>
      ))}
    </Suspense>
  );
}
