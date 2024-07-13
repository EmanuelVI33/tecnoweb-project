import { useState, PropsWithChildren } from 'react';
import { User } from '@/types';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebars';

export function AdminLayout({ children }: PropsWithChildren<{ user: User }>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <main className={`w-full p-3 flex-grow transition-all duration-300`}>
                {children}  
            </main>
        </div>
    );
}


