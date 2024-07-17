import { useState, PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebars';
import { useLocalStorage } from "@uidotdev/usehooks";

export function AdminLayout({ user,  children }: PropsWithChildren<{ user: User }>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <div className="p-4">
                {children}
                </div>
            </main>
        </div>
    );
}


