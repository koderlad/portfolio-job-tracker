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
  );
}
