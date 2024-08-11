import { CustomDialog2 } from "@/Components/Ui/CustomDialog2";
import FormPayment from "./FormPayment";

export const newsModalKey = "paymentModal";

function DialogPayment() {
    return (
        <CustomDialog2
            title="Creando Categoría"
            titleButton="Crear Categoría"
            modalKey={newsModalKey}
        >
            <FormPayment modalKey={newsModalKey} />
        </CustomDialog2>
    );
}

export default DialogPayment;
