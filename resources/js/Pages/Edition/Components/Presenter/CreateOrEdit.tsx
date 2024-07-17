import FormCreateOrEdit from "./FormCreateOrEdit"
import { CustomDialog2 } from "@/Components/Ui/CustomDialog2";

export const presenterModalKey = 'presenterModal'

function CreateOrEdit() {
    // const [open, setOpen] = useState(false);

    // const handleTogle = () => {
    //     setOpen((open) => !open);
    // }

    return (
        <CustomDialog2 
            title="Creando Presentador" 
            titleButton="Crear Presentador" 
            modalKey={presenterModalKey}
            // open={open}
            // handleTogleModal={handleTogle}
            // title="Registrando presentador"
            // titleButton="Registrar presentador" 
        >
            <FormCreateOrEdit modalKey={presenterModalKey} />
        </CustomDialog2>
    )
}

export default CreateOrEdit
