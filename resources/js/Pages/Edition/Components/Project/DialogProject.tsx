import FormProject from "./FormProject"
import { CustomDialog2 } from "@/Components/Ui/CustomDialog2"

export const projectModalKey = 'projectModal'

function DialogProject() {
    return (
        <CustomDialog2 
            title="Creando Proyecto" 
            titleButton="Crear Proyecto" 
            modalKey={projectModalKey}
        >
            <FormProject modalKey={projectModalKey} />
        </CustomDialog2>
    )
}

export default DialogProject
