import { IconSave } from "@/Components/icons/icon-save"
import { Element } from "@/Pages/Edition/models/element.model";
import { Toggle } from "@/shadcn/ui/toggle"
import { useSelectedProjectStore } from "@/store/selected-project";
import { ProjectShowPageProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

function SaveToogle() {
    const { isSave, togleSave, elements } = useSelectedProjectStore();
    const { props: { project } } = usePage<ProjectShowPageProps>();
    const { data, post, wasSuccessful, errors } = useForm<{elements: Element[], project_id: string;}>({
        elements: [],
        project_id: project.id.toString()
    });

    useEffect(() => {
        if (wasSuccessful) {
            toast.success('Presentador registrado exitosamente');
            // Si se guarda exitosamente, el proyecto esta guardado
            togleSave();
        }
    }, [wasSuccessful]);

    useEffect(() => {
        if (errors.elements) {
            toast.error('Error al guardar proyecto');
        }
    }, [errors.elements]);

    const handleSave = () => {
        if (isSave || elements.length < 1) return;

        // const e: Element[] = elements.filter(element => element.isModified);
        // console.log(e)
        data.elements = elements;
        post('/elements');
    }

    return (
        <Toggle  pressed={!isSave} onPressedChange={handleSave}>
            <IconSave />
        </Toggle>
    )
}

export default SaveToogle
