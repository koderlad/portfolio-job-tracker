"use client";
import submitForm from "@/app/server/jobs/actions"; //Import the server action to handle form submission
import { useState } from "react";

export default function CreateJobs() {
  const [status, setStatus] = useState("");

  async function handleSubmit(formData: FormData) {
    const res = await submitForm(formData);
    if (res.success) {
      setStatus("Job created successfully!");
    } else {
      setStatus("Failed to create job. Please try again.");
    }
  }
  return (
    <>
      {status && (
        <div
          className={`max-w-md mx-auto mt-4 p-4 rounded ${status.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          {status}
        </div>
      )}
      <form
        action={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2 font-bold">
            Job Title
          </label>
          <input
            className="block text-sm font-medium text-gray-700 p-2 border border-gray-300 rounded-md w-full"
            type="text"
            placeholder="Job Title"
            name="title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2 font-bold">
            Company
          </label>
          <input
            className="block text-sm font-medium text-gray-700 p-2 border border-gray-300 rounded-md w-full"
            type="text"
            placeholder="Company"
            name="company"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create Job
        </button>
      </form>
    </>
  );
}
