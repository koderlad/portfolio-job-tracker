export default function DefaultHeader() {
  return (
    <>
      <header className="flex justify-between items-center p-2 md:py-3 md:px-6 bg-white">
        <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Job Tracker Project
        </h1>
        <ul>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </header>
    </>
  );
}
