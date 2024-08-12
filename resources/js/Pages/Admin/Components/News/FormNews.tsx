import { z } from "zod";
import GenericForm, {
    FormFieldConfig,
    FormFieldType,
} from "@/Components/Ui/GenericForm";
import { usePage } from "@inertiajs/react";
import { News } from "../../Models/news";
import { NewsIndexProps } from "../../Models";

const formSchema = z.object({
    title: z
        .string()
        .min(3, { message: "El titulo debe tener al menos 3 caracteres" }),
    content: z
        .string()
        .min(3, { message: "El contenido debe tener al menos 3 caracteres" }),
    news_category_id: z.string().min(1, {
        message: "El id de la categoria de noticias es obligatorio",
    }),
});

const newsForm = {
    id: "",
    title: "",
    content: "",
    news_category_id: "",
};

const fields: FormFieldConfig[] = [
    {
        name: "title",
        label: "Título de la noticia",
        placeholder: "título",
        type: FormFieldType.TEXT,
    },
    {
        name: "content",
        label: "Contenido",
        placeholder: "Redacta la noticia",
        type: FormFieldType.TEXTAREA,
    },
    {
        name: "news_category_id",
        label: "Categorías",
        placeholder: "Selecciona una categoría",
        type: FormFieldType.SELECT,
    },
];

function FormNews({ modalKey }: { modalKey: string }) {
    const { newsCategories } = usePage<NewsIndexProps>().props;
    fields[2].options = newsCategories.map((category) => ({
        value: category.id!,
        label: category.name,
    }));

    return (
        <GenericForm
            modalKey={modalKey}
            schema={formSchema}
            defaultValues={newsForm}
            entityRoute="admin.news"
            fields={fields}
        />
    );
}

export default FormNews;
