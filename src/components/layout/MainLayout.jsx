import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="lg:pl-64 print:pl-0">
                <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

                <main className="mx-auto max-w-7xl p-4 sm:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}