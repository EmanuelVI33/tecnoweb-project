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


// import { useForm, usePage } from "@inertiajs/react";
// import { useEffect } from "react"
// import { z } from "zod";
// import { useForm as useReactForm } from "react-hook-form";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form";
// import { Button } from "@/shadcn/ui/button";
// import { Input } from "@/shadcn/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { Textarea } from "@/shadcn/ui/textarea";
// import { useModalStore } from "@/store/modal-store";
// import { NewsCategoryIndexProps } from "../../Models";
// import { getEntity } from "@/utils/modal";
// import { NewsCategory } from "../../Models/news-category";

// const formSchema = z.object({
//     name: z.string().min(3),
//     description: z.string().optional(),
// });

// const categoryForm = {
//     id: '',
//     name: '',
//     description: '',
// }

// interface FormCreateOrEditProps {
//   modalKey: string;
// }

// function FormCategory({ modalKey }: FormCreateOrEditProps) {
//   const { props: { newsCategory }} = usePage<NewsCategoryIndexProps>();
//   const { modals, toggleModal } = useModalStore();
//   const modalState = modals[modalKey] || { open: false, isEditing: false, currentId: null };
//   const project = getEntity<NewsCategory>(modalState, newsCategory) || categoryForm;
//   const { data, post, wasSuccessful, progress, processing, errors } = useForm({
//     ...project, 
//     _method: modalState.isEditing ? 'PUT' : undefined,
//   });
//   const form = useReactForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       ...project
//     },
//   }); 

//   const submit = (values: z.infer<typeof formSchema>) => {
//     console.log(values, data)

//     data.name = values.name;
//     data.description = values.description;

//     modalState.isEditing 
//       ? post(route("news-categories.update", modalState.currentId!))
//       : post(route("news-categories.store"));
//   }

//   useEffect(() => {
//     if (wasSuccessful) {
//       toast.success(`Categoría ${modalState.isEditing ? 'actualizado' : 'creado'} exitosamente`);
//       toggleModal(modalKey);
//     }
//   }, [wasSuccessful]);

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(submit)}>
//         {errors.id && <p className="mt-2 text-sm text-red-600">{errors.id}</p>}
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem className="mb-3">
//               <FormLabel htmlFor="name">Nombre del Proyecto</FormLabel>
//               <FormControl>
//                 <Input 
//                     id="name"
//                     placeholder="nombre"
//                     {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//               {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="description"
//           render={({ field }) => (
//             <FormItem className="mb-3">
//               <FormLabel htmlFor="description">Descripción</FormLabel>
//               <FormControl>
//                 <Textarea 
//                     id="description"
//                     placeholder="descripción" 
//                     {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//               {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
//             </FormItem>
//           )}
//         />
//         {progress && (
//             <progress value={progress.percentage} max="100">
//                 {progress.percentage}%
//             </progress>
//         )}

//         <div className="flex justify-between gap-5 mt-5">
//             <Button type="button" variant="destructive" onClick={() => toggleModal(modalKey)}>Cancelar</Button>
//             <Button type="submit" disabled={processing}>{modalState.isEditing ? 'Actualizar' : 'Registrar'}</Button>
//         </div>
//       </form>
//     </Form>
//   )
// }

// export default FormCategory
