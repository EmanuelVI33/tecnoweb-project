import EditionLayout from "@/Layouts/EditionLayout"
import { ProjectShowPageProps } from "@/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs"
import { Button } from "@/shadcn/ui/button";
import { useSelectedProjectStore } from "@/store/selected-project";
import { ElementMapper } from "@/Pages/Edition/mappers/element.mapper";
import { useEffect } from "react";
import { ElementType } from "@/Pages/Edition/enum/element-type";
import Player from "@/Components/Edition/Project/Player";
import { useForm, usePage } from "@inertiajs/react";
import { toast } from "sonner";
import { Element } from "@/Pages/Edition/models/element.model";
import TabPresenter from "./Components/Project/TabPresenter";
import TabVideo from "./Components/Project/TabVideo";
import Timeline from "./Components/Project/Timeline";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/shadcn/ui/alert-dialog";

function Show({ project, error = '', success } : ProjectShowPageProps) {
    console.log(`error ${error}`);
    console.log(`success ${success}`)
    const { initElement, elements, togleSave } = useSelectedProjectStore();
    const { data, post, wasSuccessful, errors } = useForm<{elements: Element[], project_id: string;}>({
        elements: [],
        project_id: project.id.toString()
    });
    const { errors: e } = usePage().props;
    console.log('Eroroer' + JSON.stringify(e))

    useEffect(() => {
        console.log(`Respuesta ${JSON.stringify(data)}`)
        console.log(data)
        if (!error && wasSuccessful) {
            toast.success('Generando vídeos');
            // Si se guarda exitosamente, el proyecto esta guardado
            togleSave();
        } else if (error) {
            toast.error(error);
        }
    }, [wasSuccessful, error]);

    useEffect(() => {
        console.log(errors)
        if (errors.elements) {
            toast.error('Error al guardar proyecto');
        }
       
    }, [errors.elements]);

    useEffect(() => {
        const elements = ElementMapper.fromElementResponseToEntity(project.elements);
        initElement(elements);
    }, [])

    const handleGenerate = async () => {
        const presenterElements = elements
            .filter(element => element.type === ElementType.PRESENTER)
            .filter(element => !element.videoUrl);
            
        if (presenterElements.length < 1) return

        data.elements = presenterElements;
        post(`/elements/generate/${project.id}`);
    }

    return (
        <EditionLayout
        >
            <div className="grid grid-rows-4 h-1/3">
                <div className="row-span-3 grid grid-cols-2">
                    {/* Tabs ocupa la mitad del ancho */}
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
                {/* Esta fila ocupa el resto de la pantalla */}
            
                {/* {error && <AlertDialog open={error}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialog>
                    } */}
            </div>
        </EditionLayout>
    )
}

export default Show
