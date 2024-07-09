import { IconSave } from "@/Components/icons/icon-save"
import { useModal } from "@/Contexts/ModalContext";
import { Element } from "@/Pages/Edition/models/element.model";
import { Toggle } from "@/shadcn/ui/toggle"
import { useSelectedProjectStore } from "@/store/selected-project";
import { ProjectShowPageProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

function SaveToogle() {
    const { toggleModal } = useModal();
    const { flash } = usePage<ProjectShowPageProps>().props;
    const { isSave, togleSave, elements } = useSelectedProjectStore();
    const { props: { project } } = usePage<ProjectShowPageProps>();
    const { data, post, wasSuccessful, errors } = useForm<{elements: Element[], project_id: string;}>({
        elements: [],
        project_id: project.id.toString()
    });

    // useEffect(() => {
    //     console.log('activado2')
    //     if (flash.error == null && wasSuccessful) {
    //         toast.success('Generando vídeos');
    //         togleSave();
    //     } else if (flash.error != null) {
    //         toggleModal(); 
    //     }
    // }, [wasSuccessful, flash.error]);

    const handleSave = () => {
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
