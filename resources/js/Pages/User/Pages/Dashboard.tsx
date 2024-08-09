import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { AdminLayout } from "../../Admin/Layout/AdminLayout";

export default function Dashboard({ auth, presenters }: PageProps) {
    console.log(presenters);
    return (
        <AdminLayout user={auth.user}>
            <h1>User normal</h1>
        </AdminLayout>
    );
}
