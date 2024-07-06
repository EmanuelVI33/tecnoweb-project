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

function Table() {
    const { props: { projects } } = usePage<ProjectPageProps>();
    const openProject = useSelectedProjectStore(state => state.openProject);

    const handleOpenProject = (project: Project) => {
        openProject(project);
        router.visit(`projects/${project.id}`)
    }

    return (
        <TableShadcn>
            <TableCaption>Lista de proyctos</TableCaption>
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
                                <span className="mr-2">Open</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg>
                            </Button>
                            <Button onClick={() => {}}>
                                <span className="mr-2">Editar</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg>
                            </Button>
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

export default Table
