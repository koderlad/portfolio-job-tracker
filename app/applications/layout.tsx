import DefaultHeader from "@/app/ui/headers/default";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DefaultHeader />
      <div className="flex flex-col my-6 md:flex-row md:overflow-hidden w-full max-w-6xl mx-auto">
        <div className="grow p-6 md:overflow-y-auto md:p-12 bg-white">
          {children}
        </div>
      </div>
    </>
  );
}
