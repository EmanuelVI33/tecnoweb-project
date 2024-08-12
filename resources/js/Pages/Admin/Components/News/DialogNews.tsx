import { CustomDialog2 } from "@/Components/Ui/CustomDialog2"
import FormNews from "./FormNews"

export const newsModalKey = 'newsModal'

function DialogNews() {
    return (
        <CustomDialog2 
            title="Creando Categoría" 
            titleButton="Crear Categoría" 
            modalKey={newsModalKey}
        >
            <FormNews modalKey={newsModalKey}  />
        </CustomDialog2>
    )
}

export default DialogNews
