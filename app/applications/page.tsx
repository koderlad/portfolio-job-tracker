import { Suspense } from "react";
import { ApplicationsData } from "@/lib/data";
import Table from "@/app/ui/applications/table";

export default async function Applications() {
  const applications = await ApplicationsData();
  console.log("Fetched applications:", applications); // Debug log to verify data fetching
  return (
    <Suspense fallback={<div>Loading applications...</div>}>
      <Table applications={applications} />
    </Suspense>
  );
}
