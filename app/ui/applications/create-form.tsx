"use client";
import { submitForm, type FormState } from "@/app/server/applications/actions"; //Import the server action to handle form submission
import { searchJobs } from "@/app/server/applications/job-search"; //Import the server action to handle job search
import { useActionState, useState, useEffect, useRef } from "react";

interface Job {
  jobid: string;
  title: string;
  company: string;
}

const initialState: FormState = { success: false, message: "" };

export default function CreateApplications() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState,
  );
  //Get Status of form submission
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      setResults([]);
      setSelectedJob(null);
      setShowDropdown(false);

      const timeout = setTimeout(() => {}, 3000);

      return () => clearTimeout(timeout);
    }
  }, [state]);

  function handleSelect(job: Job) {
    setSelectedJob(job);
    setQuery(`${job.title} at ${job.company}`);
    setShowDropdown(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    setSelectedJob(null); //Clear Section if users starts typing again

    //Cancel any pending debounce timers
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (value.length < 2) {
      setResults([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      const jobs = await searchJobs(value);
      setResults(jobs);
      setShowDropdown(true);
    }, 300);
  }

  return (
    <>
      <form
        action={formAction}
        className="max-w-md mx-auto mt-4 p-4 rounded bg-white shadow"
      >
        {/* Form fields go here */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2 font-bold">
            Job
          </label>
          <input
            className="block text-sm font-medium text-gray-700 p-2 border border-gray-300 rounded-md w-full"
            type="text"
            placeholder="Start typing to search for jobs..."
            name="jobTitle"
            id="job-search"
            value={query}
            onChange={handleInputChange}
            onFocus={() => results.length > 0 && setShowDropdown(true)}
            autoComplete="off"
          />
          {/* Hidden field — this is what actually gets submitted */}
          <input type="hidden" name="jobId" value={selectedJob?.jobid ?? ""} />
          {showDropdown && results.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border rounded mt-1 shadow">
              {results.map((job) => (
                <li
                  key={job.jobid}
                  onClick={() => handleSelect(job)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="font-medium">{job.title}</div>
                  <div className="text-sm text-gray-500">{job.company}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending || !selectedJob}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Save Application"}
        </button>

        {state.message && (
          <p className={state.success ? "text-green-600" : "text-red-600"}>
            {state.message}
          </p>
        )}
      </form>
    </>
  );
}
