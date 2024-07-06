import { CustomDialog } from "@/Components/Ui/CustomDialog"
import FormCreateOrEdit from "./FormCreateOrEdit"

function CreateOrEdit() {
    return (
        <CustomDialog title="Creando Proyecto" titleButton="Crear Proyecto" >
            <FormCreateOrEdit />
        </CustomDialog>
    )
}

export default CreateOrEdit
