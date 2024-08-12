import { AdminPageProps, PageProps } from "@/types";
import { AdminLayout } from "./Layout/AdminLayout";
import { Char } from "./Components/Char";
import { UserChar } from "./Components/UserChar";
import { Visitors } from "./Components/Visitors";
import { PagesChar } from "./Components/PagesChar";

export default function Dashboard({ auth, pages, total }: AdminPageProps) {
    console.log(`Admin ${pages[0].label}`, "Total " + total);
    console.log("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    return (
        <AdminLayout user={auth.user}>
            <h1 className="text-2xl font-bold">Pagina de administrativo</h1>
            <div className="grid grid-cols-2 gap-5 ">
                <Visitors />
                <PagesChar />
                <Char />
                <UserChar />
            </div>
        </AdminLayout>
    );
}
