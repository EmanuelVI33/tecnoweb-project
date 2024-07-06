import { Project } from "@/Pages/Edition/models/project"
import { PageProps } from "@/types";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Table from "./Components/Project/Table";
import CreateOrEdit from "./Components/Project/CreateOrEdit";

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
                <CreateOrEdit />
            </div>

            <div className="w-3/4 m-auto">
                <Table />
            </div>
        </Authenticated>
    )
}

export default Index
