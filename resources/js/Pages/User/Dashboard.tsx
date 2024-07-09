import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth, presenters }: PageProps) {
    console.log(presenters);
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <h1>User normal</h1>
        </AuthenticatedLayout>
    );
}
