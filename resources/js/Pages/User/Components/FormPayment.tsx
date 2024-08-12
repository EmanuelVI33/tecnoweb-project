import { custom, z } from "zod";
import GenericForm, { FormFieldType } from "@/Components/Ui/GenericForm";

const formSchema = z.object({
    id: z.string().optional(),
    customer_name: z.string().optional(),
    customer_ci: z.string().optional(),
    phone: z.string().optional(),
    type_payment: z.string().optional(),
});

const categoryForm = {
    id: "",
    customer_name: "",
    customer_ci: "",
    phone: "",
    type_payment: "",
};

const fields = [
    {
        name: "id",
        label: "ID",
        type: FormFieldType.TEXT,
        hidden: true,
    },
    {
        name: "customer_name",
        label: "Nombre del cliente",
        type: FormFieldType.TEXT,
    },
    {
        name: "customer_ci",
        label: "C.I. del cliente",
        type: FormFieldType.TEXT,
    },
    {
        name: "phone",
        label: "Teléfono",
        type: FormFieldType.TEXT,
    },
    {
        name: "type_payment",
        label: "Tipo de pago",
        type: FormFieldType.SELECT,
        options: [
            { label: "QR", value: "1" },
            { label: "Tigo Money", value: "2" },
        ],
    },
];

function FormPayment({ modalKey }: { modalKey: string }) {
    return (
        <GenericForm
            modalKey={modalKey}
            schema={formSchema}
            defaultValues={categoryForm}
            entityRoute="news-categories"
            fields={fields}
        />
    );
}

export default FormPayment;
