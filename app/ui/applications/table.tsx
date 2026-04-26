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
        {applications?.map(
          (app) => (
            console.log("Rendering application:", app), // Debug log to verify application data
            (
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
            )
          ),
        )}
      </tbody>
    </table>
  );
}
