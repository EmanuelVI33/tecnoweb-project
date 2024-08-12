import { Project } from "@/Pages/Edition/models/project"
import { PageProps } from "@/types";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import TableProject from "./Components/Project/Table";
import DialogProject from "./Components/Project/DialogProject";

function Index({ auth, projects } : PageProps<{ projects: Project[] }>) {
    console.log(projects)

    return (
        <Authenticated
            user={auth.user}
        >
            <div className="flex justify-between content-center my-4 w-11/12 m-auto">
                <h1 className="scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight">
                    Mis proyectos
                </h1>
                <DialogProject />
            </div>

            <div className="w-3/4 m-auto">
                <TableProject />
            </div>
        </Authenticated>
    )
}

export default Index
