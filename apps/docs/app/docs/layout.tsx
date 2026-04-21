import { Sidebar } from "@/components/docs/sidebar";
import { OnThisPage } from "@/components/docs/on-this-page";
import { SearchModal } from "@/components/docs/search";
import { Breadcrumb } from "@/components/docs/breadcrumb";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-arcade-bg">
      <Sidebar />

      {/* Search modal — mounted once, listens for ⌘K */}
      <SearchModal />

      {/* Scrollable content area */}
      <div className="flex-1 min-w-0 flex overflow-y-auto">
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-8 py-12">
            <Breadcrumb />
            {children}
          </div>
        </main>
        <OnThisPage />
      </div>
    </div>
  );
}
