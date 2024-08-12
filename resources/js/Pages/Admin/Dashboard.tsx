import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { AdminLayout } from "./Layout/AdminLayout";
import { Char } from "./Components/Char";
import { UserChar } from "./Components/UserChar";
import { Visitors } from "./Components/Visitors";
import { PagesChar } from "./Components/PagesChar";

export default function Dashboard({ auth, presenters }: PageProps) {
    console.log(presenters);
    return (
        <AdminLayout user={auth.user}>
            <h1>Pagina de administrativo</h1>
            <div className="grid grid-cols-2 gap-5 ">
                <Char />
                <UserChar />
                <Visitors />
                <PagesChar />
            </div>
        </AdminLayout>
    );
}
