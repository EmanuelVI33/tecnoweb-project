import { Dialog } from "@/Components/Ui/Dialog"
import FormCreateOrEdit from "./FormCreateOrEdit"
import { useState } from "react";

function CreateOrEdit() {
    const [open, setOpen] = useState(false);

    const handleTogle = () => {
        setOpen((open) => !open);
    }

    return (
        <Dialog 
            open={open}
            handleTogleModal={handleTogle}
            title="Registrando presentador"
            titleButton="Registrar presentador" 
        >
            <FormCreateOrEdit handleCloseModal={handleTogle} />
        </Dialog>
    )
}

export default CreateOrEdit
