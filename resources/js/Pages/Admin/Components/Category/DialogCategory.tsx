import { CustomDialog2 } from "@/Components/Ui/CustomDialog2"
import FormCategory from "./FormCategory"

export const categoryModalKey = 'categoyModal'

function DialogCategory() {
    return (
        <CustomDialog2 
            title="Creando Categoría" 
            titleButton="Crear Categoría" 
            modalKey={categoryModalKey}
        >
            <FormCategory modalKey={categoryModalKey} />
        </CustomDialog2>
    )
}

export default DialogCategory
