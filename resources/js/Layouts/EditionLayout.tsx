import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { Toaster } from '@/shadcn/ui/sonner';
import Navbar from '@/Components/Ui/Navbar';
import { useLocalStorage } from '@uidotdev/usehooks';

function EditionLayout({ children }: PropsWithChildren) {
    const [dark, setDark] = useLocalStorage("dark", false);
    const [fontSize, setFontSize] = useLocalStorage("fontSize", "text-base");

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },[]);

    useEffect(() => {
        document.documentElement.classList.remove('text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl');
        document.documentElement.classList.add(fontSize);
    }, [fontSize]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Toaster />
            <main className="h-screen">{children}</main>
        </div>
    )
}

export default EditionLayout
