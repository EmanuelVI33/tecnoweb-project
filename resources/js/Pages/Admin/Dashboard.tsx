import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { AdminLayout } from './Layout/AdminLayout';

export default function Dashboard({ auth, presenters }: PageProps) {
    console.log(presenters);
    return (
        <AdminLayout
            user={auth.user}
        >
            Pagina de administrativo asdsadsad
        </AdminLayout>
    );
}
