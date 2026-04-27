import Link from "next/link";
interface Job {
  jobid: string | number;
  title: string;
  company: string;
} //Creating a Job interface to define the structure of job data to match the schema.

interface TableProps {
  jobs: Job[] | null;
}

export default function Table({ jobs }: TableProps) {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">My Jobs</h2>
        <Link
          href="/jobs/add-new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Job
        </Link>
      </header>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs?.map((job) => (
            <tr key={job.jobid}>
              <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{job.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
