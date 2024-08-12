import { CustomDialog2 } from "@/Components/Ui/CustomDialog2"

export const projectModalKey = 'projectDeleteModal'

function DeleteProject() {
    return (
        <CustomDialog2 
            title="Creando Proyecto" 
            titleButton="Crear Proyecto" 
            modalKey={projectModalKey}
        >
            
        </CustomDialog2>
    )
}

export default DeleteProject
