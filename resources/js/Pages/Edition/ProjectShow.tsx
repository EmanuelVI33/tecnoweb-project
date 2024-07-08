import EditionLayout from "@/Layouts/EditionLayout"
import { ProjectShowPageProps } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs"
import { Button } from "@/shadcn/ui/button";
import { useSelectedProjectStore } from "@/store/selected-project";
import { ElementMapper } from "@/Pages/Edition/mappers/element.mapper";
import { useEffect, useState } from "react";
import { ElementType } from "@/Pages/Edition/enum/element-type";
import Player from "@/Components/Edition/Project/Player";
import { router, useForm, usePage } from "@inertiajs/react";
import { toast } from "sonner";
import { Element } from "@/Pages/Edition/models/element.model";
import TabPresenter from "./Components/Project/TabPresenter";
import TabVideo from "./Components/Project/TabVideo";
import Timeline from "./Components/Project/Timeline";
import withModal, { useModal } from "@/Contexts/ModalContext";
import ErrorModal from "@/Components/Ui/ErrorModal";

function Show({ project, flash} : ProjectShowPageProps) {
    console.log(flash);
    const { open, toggleModal } = useModal();
    const { initElement, elements, togleSave } = useSelectedProjectStore();
    const { post, wasSuccessful, errors } = useForm<{elements: Element[], project_id: string;}>({
        elements: [],
        project_id: project.id.toString()
    });

    useEffect(() => {
        console.log('activado')
        if (flash.success) {
            toast.success('Generando vídeos');
            togleSave();
        } else if (flash.error != null) {
            toggleModal(); 
        }
    }, [wasSuccessful, flash]);

    useEffect(() => {
        const elements = ElementMapper.fromElementResponseToEntity(project.elements);
        initElement(elements);
    }, [])

    const handleGenerate = async () => {
        const presenterElements = elements
            .filter(element => element.type === ElementType.PRESENTER)
            .filter(element => !element.videoUrl);
            
        if (presenterElements.length < 1) return

        router.post(`/elements/generate/${project.id}`, {
            elements: JSON.stringify(presenterElements),
            project_id: project.id.toString()
        });

        post(`/elements/generate/${project.id}`);
    }

    return (
        <EditionLayout
        >
            <div className="grid grid-rows-4 h-1/3">
                <div className="row-span-3 grid grid-cols-2">
                    <Tabs defaultValue="account" className="bg-slate-300 px-4 py-1" color="">
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
                <div className="text-white row-span-1 bg-slate-700">
                    <div className="flex justify-between mx-5">
                        <h1 className="text-2xl tracking-tight hover:tracking-wid font-bold">Guion</h1>
                        <Button onClick={handleGenerate}>Generar contenido</Button>
                    </div>
                    <Timeline />
                </div>

                {flash.error && <ErrorModal error={flash.error} />}
            </div>
        </EditionLayout>
    )
}

export default withModal(Show);
