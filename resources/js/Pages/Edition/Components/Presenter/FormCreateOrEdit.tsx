import * as z from "zod";
import { toast } from "sonner";
import { useForm as useReactForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@inertiajs/react";
import { Button } from "@/shadcn/ui/button";
import { RadioGroup, RadioGroupItem } from "@/shadcn/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/ui/form";
import { Input } from "@/shadcn/ui/input";
import { PresenterCreate, Sex } from "@/Pages/Edition/models/presenter";
import { useEffect, useRef } from "react";
import { useModalStore } from "@/store/modal-store";

const formSchema = z.object({
    full_name: z.string().min(3),
    sex: z.enum([Sex.MALE, Sex.FEMALE]),
    photo_url: z.string(),
});

const presenter = {
    full_name: '',
    sex: Sex.MALE,
    photo_url: undefined,
}

function FormCreateOrEdit({ modalKey }: { modalKey: string }) {
  const { data, post, processing, errors, progress, wasSuccessful, reset } = useForm<PresenterCreate>(presenter);
  const form = useReactForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
  }); 
  const { modals, toggleModal } = useModalStore();
  const photoRef = useRef<HTMLInputElement>(null);
  const submit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    if (photoRef.current && photoRef.current.files) {
        data.photo_url = photoRef.current?.files[0];
    }

    data.full_name = values.full_name;
    data.sex = values.sex;
    
    post('/presenters', {
      onError: (serverErrors) => {
          // Maneja los errores del servidor aquí
          console.log(serverErrors);
      },
      onSuccess: () => {
          // Maneja el éxito del servidor aquí
          toast.success('Presentador registrado exitosamente');
          toggleModal(modalKey);
      }
    });
  };

    // useEffect(() => {
    //   if (!errors && wasSuccessful) {
    //     toast.success('Presentador registrado exitosamente');
    //     toggleModal(modalKey);
    //   }
    // }, [wasSuccessful, errors]);

    return (
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl>
                    <>
                      <Input 
                          placeholder="nombre completo" 
                          {...field} 
                      />
                      {errors.full_name && <p className="mt-2 text-sm text-red-600">{errors.full_name}</p>}
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem className="mb-3">
                    <FormLabel>Sexo</FormLabel>
                    <FormControl>
                      <>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal">Masculino</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal">Femenino</FormLabel>
                          </FormItem>
                        </RadioGroup>
                        {errors.sex && <p className="mt-2 text-sm text-red-600">{errors.sex}</p>}
                      </>
                    </FormControl>
                    <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photo_url"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Foto</FormLabel>
                  <FormControl>
                    <>
                        <Input 
                            type="file" 
                            placeholder="foto"
                            {...field} 
                            ref={photoRef}
                        />
                        {errors.photo_url && <p className="mt-2 text-sm text-red-600">{errors.photo_url}</p>}
                    </>
                  </FormControl>
                  <FormMessage />
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
                <Button type="submit" disabled={processing}>Registrar</Button>
            </div>
          </form>
        </Form>
      </>
    );
  }

export default FormCreateOrEdit;
