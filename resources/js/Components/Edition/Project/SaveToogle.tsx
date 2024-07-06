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
    const { data, post, wasSuccessful, errors, hasErrors } = useForm<{elements: Element[], project_id: string;}>({
        elements: [],
        project_id: project.id.toString()
    });
    const { error, success } = usePage<ProjectShowPageProps>().props;

    useEffect(() => {
        console.log(`Error ${error} and ${success}`)
        console.log(`Error ${JSON.stringify(errors)}`)
        if (!error && wasSuccessful) {
            toast.success('Elemento registrado exitosamente');
            // Si se guarda exitosamente, el proyecto esta guardado
            togleSave();
        } else if (error) {
            toast.error(error);
        }
    }, [wasSuccessful, error]);

    useEffect(() => {
        if (errors.elements) {
            toast.error('Error al guardar proyecto');
        }
    }, [errors.elements]);

    const handleSave = () => {
        // const elements = getNewElement();
        // Si esta guardado o no tiene elementos
        if (isSave || elements.length < 1) return;
        
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
