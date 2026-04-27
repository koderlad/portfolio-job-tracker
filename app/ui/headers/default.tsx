import Link from "next/link";

export default function DefaultHeader() {
  return (
    <>
      <header className="flex justify-between items-center p-2 md:py-3 md:px-6 bg-white">
        <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Job Tracker Project
        </h1>
        <ul className="flex items-center gap-4 text-sm font-medium text-gray-500">
          <li>
            <Link href="/jobs" className="hover:text-blue-500">
              My Jobs
            </Link>
          </li>
          <li>
            <Link href="/applications" className="hover:text-blue-500">
              My Applications
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Log Out
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
