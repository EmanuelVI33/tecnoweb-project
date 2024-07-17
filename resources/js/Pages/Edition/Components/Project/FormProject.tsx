import { Project, ProjectCreate } from "@/Pages/Edition/models/project";
import { useForm, usePage } from "@inertiajs/react";
import { useCallback, useEffect } from "react"
import { z } from "zod";
import { useForm as useReactForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Textarea } from "@/shadcn/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/shadcn/ui/radio-group";
import CreateOrEdit from "../Presenter/CreateOrEdit";
import { ProjectPageProps } from "@/types";
import { useModalStore } from "@/store/modal-store";
import { useDropzone } from 'react-dropzone';

const formSchema = z.object({
    name: z.string().min(3),
    description: z.string().optional(),
    cover_url: z.union([z.string(), z.instanceof(File)]), 
    presenter_id: z.string(),
});

const projectForm = {
    id: '',
    name: '',
    description: '',
    cover_url: '',
    presenter_id: '',
}

interface FormCreateOrEditProps {
  modalKey: string;
}

function FormProject({ modalKey }: FormCreateOrEditProps) {
  const { props: { presenters, projects }} = usePage<ProjectPageProps>();
  const { modals, toggleModal } = useModalStore();
  const modalState = modals[modalKey] || { open: false, isEditing: false, currentId: null };
  const project = getInitialProject(modalState, projects) || projectForm;
  const { data, post, wasSuccessful, progress, processing, errors } = useForm({
    ...project, 
    _method: modalState.isEditing ? 'PUT' : undefined,
  });
  const form = useReactForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...project
    },
  }); 
  const onDrop =  useCallback((acceptedFiles: File[]) => {
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop });

  const submit = (values: z.infer<typeof formSchema>) => {
    console.log(values, data)

    data.name = values.name;
    data.description = values.description;
    data.presenter_id = values.presenter_id; 
    data.cover_url = acceptedFiles[0] || values.cover_url;

    modalState.isEditing 
      ? post(route("projects.update", modalState.currentId!),  {
        onError: (serverErrors) => {
            // Maneja los errores del servidor aquí
            console.log(serverErrors);
        },
        onSuccess: () => {
            // Maneja el éxito del servidor aquí
            toast.success('Proyecto registrado exitosamente');
            toggleModal(modalKey);
        }
    })
      : post(route("projects.store"),  {
        onError: (serverErrors) => {
            // Maneja los errores del servidor aquí
            console.log(serverErrors);
        },
        onSuccess: () => {
            // Maneja el éxito del servidor aquí
            toast.success('Proyecto actualizado exitosamente');
            toggleModal(modalKey);
        }
    });
  }

  // useEffect(() => {
  //   if (wasSuccessful ) {
  //     toast.success(`Projecto ${modalState.isEditing ? 'actualizado' : 'creado'} exitosamente`);
  //     toggleModal(modalKey);
  //   }
  // }, [wasSuccessful]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        {errors.id && <p className="mt-2 text-sm text-red-600">{errors.id}</p>}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel htmlFor="name">Nombre del Proyecto</FormLabel>
              <FormControl>
                <Input 
                    id="name"
                    placeholder="nombre"
                    {...field} 
                />
              </FormControl>
              <FormMessage />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel htmlFor="description">Descripción</FormLabel>
              <FormControl>
                <Textarea 
                    id="description"
                    placeholder="descripción" 
                    {...field} 
                />
              </FormControl>
              <FormMessage />
              {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cover_url"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Portada</FormLabel>
              <FormControl>
                <>
                  {modalState.isEditing && project.cover_url && !acceptedFiles[0] && (
                    <div>
                      <img src={project.cover_url as string} alt="Current Cover" style={{ width: '100px' }} />
                    </div>
                  )}
                  {acceptedFiles[0] && (
                    <div>
                      <img src={URL.createObjectURL(acceptedFiles[0])} alt="Preview" style={{ width: '100px' }} />
                    </div>
                  )}
                  <div
                    {...getRootProps()}
                    style={{ border: '2px dashed #ccc', padding: '20px', marginBottom: '10px', textAlign: 'center' }}
                  >
                    <input {...getInputProps()} />
                    Drag & Drop to Upload Image or Click to Select
                  </div>
                </>
              </FormControl>
              <FormMessage />
              {errors.cover_url && <p className="mt-2 text-sm text-red-600">{errors.cover_url}</p>}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="presenter_id"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel className="flex justify-between py-1">
                <p className="text-lg  font-semibold">Seleccionar Presentador</p>
                <CreateOrEdit />
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row  space-y-1"
                >
                  <div className="w-full h-56 grid grid-cols-3 overflow-y-auto">
                    {presenters && presenters.map(presenter => (
                      <FormItem className=" flex space-x-3">
                        <FormControl>
                          <RadioGroupItem value={presenter.id.toString()} />
                        </FormControl>
                        <FormLabel>
                          <div className="">
                            <p className="text-md mb-1">
                              {presenter.full_name}
                            </p>
                            <img className="h-20 w-20" src={presenter.photo_url} alt={presenter.full_name} />
                          </div>
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                </RadioGroup>  
              </FormControl>
              <FormMessage />
              {errors.presenter_id && <p className="mt-2 text-sm text-red-600">{errors.presenter_id}</p>}
            </FormItem>
          )}
        />
        {progress && (
            <progress value={progress.percentage} max="100">
                {progress.percentage}%
            </progress>
        )}

        <div className="flex justify-between gap-5 mt-5">
            <Button type="button" variant="destructive" onClick={() => toggleModal(modalKey)}>Cancelar</Button>
            <Button type="submit" disabled={processing}>{modalState.isEditing ? 'Actualizar' : 'Registrar'}</Button>
        </div>
      </form>
    </Form>
  )
}

// Function to get initial project data for editing
const getInitialProject = (
  modalState: { isEditing: boolean, currentId: string | null },
  projects: Project[],
): ProjectCreate | null => {
  if (modalState.isEditing) {
    const projectInit = projects.find(project => project.id === modalState.currentId);
    if (projectInit) {  
      return {
        id: projectInit.id,
        name: projectInit.name,
        description: projectInit.description,
        cover_url: projectInit.cover_url,
        presenter_id: projectInit.presenter.id.toString(),
      };
    }
  }
  return null;
};

export default FormProject
