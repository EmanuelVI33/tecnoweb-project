import { PropsWithChildren, ReactNode } from 'react';
import { Toaster } from '@/shadcn/ui/sonner';
import Navbar from '@/Components/Ui/Navbar';

function EditionLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Toaster />
            <main className="">{children}</main>
        </div>
    )
}

export default EditionLayout
