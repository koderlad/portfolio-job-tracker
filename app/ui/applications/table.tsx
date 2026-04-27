import Link from "next/link";

interface Application {
  appid: string | number;
  jobid: string | number;
  applied_on: string | Date;
  status: Array<{ name: string }>;
  job: Job | null;
}

interface Job {
  title: string;
  company: string;
}

interface TableProps {
  applications: Application[] | null;
}

export default function Table({ applications }: TableProps) {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">My Applications</h2>
        <Link
          href="/applications/add-new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Application
        </Link>
      </header>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Applied On
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {applications?.map((app) => (
            <tr key={app.appid}>
              <td className="px-6 py-4 whitespace-nowrap">
                {app.job?.title || "Unknown"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {app.job?.company || "Unknown"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {typeof app.applied_on === "string"
                  ? app.applied_on
                  : app.applied_on.toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {app.status?.[0]?.name || "Unknown"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
