import { Project } from "@/Pages/Edition/models/project"
import { Button } from "@/shadcn/ui/button";
import {
    Table as TableShadcn,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shadcn/ui/table"
import { useSelectedProjectStore } from "@/store/selected-project";
import { ProjectPageProps } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { IconEdit, IconFolderOpen } from "@/Components/icons/icon";
import { useModalStore } from "@/store/modal-store";
import { projectModalKey } from "./DialogProject";

function TableProject() {
    const { toggleModal } = useModalStore();
    const { props: { projects } } = usePage<ProjectPageProps>();
    const openProject = useSelectedProjectStore(state => state.openProject);

    const handleOpenProject = (project: Project) => {
        openProject(project);
        router.visit(`projects/${project.id}`)
    }

    return (
        <TableShadcn>
            <TableCaption>Lista de Proyectos</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Portada</TableHead>
                    <TableHead className="text-center">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects && projects.map(project => (
                    <TableRow 
                        key={project.id}
                        className="hover:bg-gray-200"
                    >
                        <TableCell>
                            <p>{project.name}</p>
                            <p>{project.description ?? 'Proyecto'}</p>
                        </TableCell>
                        <TableCell>
                            <img className="w-[70px] h-[70px] object-cover" src={project.cover_url} alt="" />
                        </TableCell>
                        <TableCell className="text-end flex justify-around ">
                            <Button onClick={() => handleOpenProject(project)}>
                                <span className="mr-2">Abrír</span> 
                                <IconFolderOpen />
                            </Button>
                            <Button onClick={() => toggleModal(projectModalKey, true, project.id)}>
                                <span className="mr-2">Editar</span> 
                                <IconEdit />
                            </Button>
                            {/* <CreateOrEdit id={project.id} title="Editando Proyecto" titleButton="Editar Proyecto"  icon={<IconEdit />}/> */}
                            <Button onClick={() => {}}>
                                <span className="mr-2">Eliminar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableShadcn>
    )
}

export default TableProject
