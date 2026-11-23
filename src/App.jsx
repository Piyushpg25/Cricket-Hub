import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* lg:pl-64 = desktop par sidebar ki width ke barabar jagah chhodta hai */}
      <div className="lg:pl-64">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 sm:p-6">
          <h1 className="page-title">Dashboard</h1>
          <p className="mt-2 text-sm text-slate-500">
            Layout test: sidebar links click karke URL change hota hai ya nahi dekho.
          </p>
        </main>
      </div>
    </div>
  );
}