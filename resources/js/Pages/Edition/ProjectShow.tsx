import EditionLayout from "@/Layouts/EditionLayout"
import { ProjectShowPageProps } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs"
import { Button } from "@/shadcn/ui/button";
import { useSelectedProjectStore } from "@/store/selected-project";
import { ElementMapper } from "@/Pages/Edition/mappers/element.mapper";
import { useEffect } from "react";
import { ElementType } from "@/Pages/Edition/enum/element-type";
import { router, useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { Element } from "@/Pages/Edition/models/element.model";
import TabPresenter from "./Components/Project/TabPresenter";
import TabVideo from "./Components/Project/TabVideo";
import Timeline from "./Components/Project/Timeline";
import withModal, { useModal } from "@/Contexts/ModalContext";
import ErrorModal from "@/Components/Ui/ErrorModal";
import Player from "./Components/Project/Player";

function ProjectShow({ project, success, error} : ProjectShowPageProps) {
    const { toggleModal } = useModal();
    const { initElement, elements, togleSave } = useSelectedProjectStore();
    const { post, wasSuccessful, data, errors } = useForm<{elements: Element[], project_id: string;}>({
        elements: [],
        project_id: project.id.toString()
    });

    useEffect(() => {
        console.log('activado')
        if (success) {
            toast.success('Generando vídeos');
            togleSave();
        } else if (error != null) {
            toggleModal(); 
        }
    }, [wasSuccessful, success, errors]);

    useEffect(() => {
        const elements = ElementMapper.fromElementResponseToEntity(project.elements);
        initElement(elements);
    }, [])

    const handleGenerate = async () => {
        console.log(`Elementos ${JSON.stringify(elements)}`);
        const presenterElements = elements
            .filter(element => element.type === ElementType.PRESENTER)
            .filter(element => !element.videoUrl);
            
        console.log(`Elementos ${JSON.stringify(presenterElements)}`);

        if (presenterElements.length < 1) return

        data.elements = presenterElements;
        post(`/elements/generate/${project.id}`);

        // router.post(`/elements/generate/${project.id}`, {
        //     elements: JSON.stringify(presenterElements),
        //     project_id: project.id.toString()
        // });

        // post(`/elements/generate/${project.id}`);
    }

    return (
        <EditionLayout
        >
            <div className="grid grid-rows-4 h-full">
                <div className="row-span-3 grid grid-cols-2 h-full">
                    <Tabs defaultValue="account" className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-1" color="">
                        <TabsList className="">
                            <TabsTrigger value="account" className="">Presentador</TabsTrigger>
                            <TabsTrigger value="password">Video</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <TabPresenter />
                        </TabsContent>
                        <TabsContent value="password">
                            <TabVideo />
                        </TabsContent>
                    </Tabs>
                    {/* Player ocupa la otra mitad del ancho */}
                    <Player />
                </div>
                {/* Este div ocupa 1/4 de la pantalla */}
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 row-span-1 ">
                    <div className="flex justify-between mx-5">
                        <h1 className="text-2xl tracking-tight hover:tracking-wid font-bold">Guion</h1>
                        <Button onClick={handleGenerate}>Generar contenido</Button>
                    </div>
                    <Timeline />
                </div>

                {error && <ErrorModal error={error} />}
            </div>
        </EditionLayout>
    )
}

export default withModal(ProjectShow);
