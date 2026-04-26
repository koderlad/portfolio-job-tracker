import DefaultHeader from "@/app/ui/headers/default";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DefaultHeader />
      <div className="flex flex-col my-6 md:flex-row md:overflow-hidden w-full max-w-6xl mx-auto">
        <div className="grow p-6 md:overflow-y-auto md:p-12 bg-white">
          <h2 className="text-2xl font-bold mb-4">My Applications</h2>
          {children}
        </div>
      </div>
    </>
  );
}
