import { CustomDialog2 } from "@/Components/Ui/CustomDialog2"
import FormSubscription from "./FormSubscription"

export const subscriptionModalKey = 'subscriptionModal'

function DialogSubscription() {
    return (
        <CustomDialog2 
            title="Creando Subscripción" 
            titleButton="Crear Subscripción" 
            modalKey={subscriptionModalKey}
        >
            <FormSubscription modalKey={subscriptionModalKey} />
        </CustomDialog2>
    )
}

export default DialogSubscription
