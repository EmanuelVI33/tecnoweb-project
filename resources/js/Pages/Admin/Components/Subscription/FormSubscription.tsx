import { z } from "zod";
import GenericForm, { FormFieldType } from "@/Components/Ui/GenericForm";
import { Subscription } from "../../Models/subscription";

const formSchema = z.object({
    name: z
        .string()
        .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
    description: z.string().optional(),
    duration: z.coerce.number().int().positive(),
    price: z.coerce.number().int().positive(),
});

const subscriptionForm: Subscription = {
    id: "",
    name: "",
    description: "",
    duration: "30",
    price: "1",
};

const fields = [
    {
        name: "name",
        label: "Nombre de la Categoría",
        placeholder: "nombre",
        type: FormFieldType.TEXT,
    },
    {
        name: "description",
        label: "Descripción",
        placeholder: "descripción",
        type: FormFieldType.TEXTAREA,
    },
    {
        name: "duration",
        label: "Duración(Días)",
        placeholder: "días",
        type: FormFieldType.NUMBER,
    },
    {
        name: "price",
        label: "Precio",
        placeholder: "precio",
        type: FormFieldType.NUMBER,
    },
];

function FormSubscription({ modalKey }: { modalKey: string }) {
    return (
        <GenericForm
            modalKey={modalKey}
            schema={formSchema}
            defaultValues={subscriptionForm}
            entityRoute="admin.subscriptions"
            fields={fields}
        />
    );
}

export default FormSubscription;
