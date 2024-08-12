import { Button } from "@/shadcn/ui/button";
import { TableCell } from "@/shadcn/ui/table";
import { router, usePage } from "@inertiajs/react";
import { useModalStore } from "@/store/modal-store";
import CustomTable from "@/Components/Ui/CustomTable";
import { NewsCategoryIndexProps, NewsIndexProps } from "../../Models";
import { useState } from "react";
import ConfirmationModal from "@/Pages/Edition/Components/Project/ConfirmDelete";
import { newsModalKey } from "./DialogNews";

const routeBase = "admin.news";

const headers = ["Título", "Contenido", "Acciones"];

function TableNews() {
    const { toggleModal } = useModalStore();
    const {
        props: { news },
    } = usePage<NewsIndexProps>();
    const [confirmDelete, setConfirmDelete] = useState<{
        isOpen: boolean;
        id: string | null;
    }>({ isOpen: false, id: null });

    // const handleOpen = (id? : string) => {
    //     router.visit(route(`${routeBase}.show`));
    // };

    const handleDelete = (id?: string) => {
        if (id) {
            setConfirmDelete({ isOpen: true, id });
        }
    };

    const confirmDeletion = () => {
        if (confirmDelete.id) {
            router.delete(route(`${routeBase}.destroy`, confirmDelete.id));
            setConfirmDelete({ isOpen: false, id: null });
        }
    };

    const handleEdit = (id?: string) => {
        if (!id) return;
        const model = news.find((news) => news.id === id);
        if (!model) return;
        console.log(`Ingresa a editar ${model}`);
        toggleModal(newsModalKey, true, id, model);
    };

    return (
        <>
            <CustomTable
                caption="Lista de Categorías"
                headers={headers}
                data={news}
                renderRow={(news) => (
                    <>
                        <TableCell>
                            <p>{news.title ?? "Sin titulo"}</p>
                        </TableCell>
                        <TableCell>
                            <p>{news.content ?? "Descripción"}</p>
                        </TableCell>
                        <TableCell className="text-end flex justify-around ">
                            {/* <Button onClick={() => handleOpen(category.id)}>
                                <span className="mr-2">Abrir</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="currentColor" d="m249.17 117.7l-83.716 108.032H0v609.972l123.572-465.318H993.75V225.732h-402.1L507.935 117.7zM0 1016.612v65.688h993.75L1200 410.669H175.134z"/></svg>
                            </Button> */}
                            <Button onClick={() => handleEdit(news.id)}>
                                <span className="mr-2">Editar</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.28em"
                                    height="1em"
                                    viewBox="0 0 1792 1408"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m888 1056l116-116l-152-152l-116 116v56h96v96zm440-720q-16-16-33 1L945 687q-17 17-1 33t33-1l350-350q17-17 1-33m80 594v190q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-14 14-32 8q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q15-15 35-7t20 29m-96-738l288 288l-672 672H640V864zm444 132l-92 92l-288-288l92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68"
                                    />
                                </svg>
                            </Button>
                            <Button onClick={() => handleDelete(news.id)}>
                                <span className="mr-2">Eliminar</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.2rem"
                                    height="1.2rem"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
                                    />
                                </svg>
                            </Button>
                        </TableCell>
                    </>
                )}
            />
            <ConfirmationModal
                isOpen={confirmDelete.isOpen}
                onClose={() => setConfirmDelete({ isOpen: false, id: null })}
                onConfirm={confirmDeletion}
                title="Confirmar eliminación"
                description="¿Estás seguro de que deseas eliminar esta Noticia? Esta acción no se puede deshacer."
            />
        </>
    );
}

export default TableNews;
