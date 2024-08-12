import { z } from 'zod';
import { NewsCategory } from '../../Models/news-category';
import GenericForm, { FormFieldType } from '@/Components/Ui/GenericForm';

const formSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  description: z.string().optional(),
});

const categoryForm: NewsCategory = {
  id: '',
  name: '',
  description: '',
};

const fields = [
  { name: 'name', label: 'Nombre de la Categoría', placeholder: 'nombre', type: FormFieldType.TEXT, },
  { name: 'description', label: 'Descripción', placeholder: 'descripción', type: FormFieldType.TEXTAREA, },
];

function FormCategory({ modalKey }: { modalKey: string }) {
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

export default FormCategory;