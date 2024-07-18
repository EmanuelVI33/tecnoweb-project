import { CustomDialogContext } from "@/Components/Ui/CustomDialog";
import { ProjectCreate } from "@/Pages/Edition/models/project";
import { useForm, usePage } from "@inertiajs/react";
import { useContext, useEffect, useRef } from "react"
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

const formSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  description: z.string().optional(),
  cover_url: z.string().url(),
  presenter_id: z.string().min(1, { message: 'Seleccione un presentador para su proyecto' }),
});

const project: ProjectCreate = {
  name: '',
  description: '',
  cover_url: undefined,
  presenter_id: '',
}

function FormCreateOrEdit() {
  const { data, post, processing, errors, progress, wasSuccessful } = useForm<ProjectCreate>(project);
  const { props: { presenters } } = usePage<ProjectPageProps>();
  const { handleTogle } = useContext(CustomDialogContext);
  const form = useReactForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const coverRef = useRef<HTMLInputElement>(null);

  console.log(`Desde el form: ${presenters}`)

  const submit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    if (coverRef.current && coverRef.current.files) {
      data.cover_url = coverRef.current?.files[0];
    }

    data.name = values.name;
    data.description = values.description;
    data.presenter_id = values.presenter_id;

    post('/projects');
  };

  useEffect(() => {
    if (wasSuccessful) {
      toast.success('Presentador registrado exitosamente');
      handleTogle();
    }
  }, [wasSuccessful]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
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
                <Input
                  type="file"
                  placeholder="foto"
                  {...field}
                  ref={coverRef}
                />
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
          <Button type="button" variant="destructive" onClick={() => handleTogle()}>Cancelar</Button>
          <Button type="submit" disabled={processing}>Registrar</Button>
        </div>
      </form>
    </Form>
  )
}

export default FormCreateOrEdit
