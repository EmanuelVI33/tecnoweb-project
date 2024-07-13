import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shadcn/ui/form';
import { Button } from '@/shadcn/ui/button';
import { Input } from '@/shadcn/ui/input';
import { Textarea } from '@/shadcn/ui/textarea';
import { Select, SelectItem } from '@/shadcn/ui/select';
import { RadioGroup, RadioGroupItem } from '@/shadcn/ui/radio-group';
import { useEntityForm, UseEntityFormProps } from '@/hooks/useFormEntity';
import { Model } from '@/types';

export enum FormFieldType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  RADIO = 'radio',
};

interface FormFieldConfig {
    name: string;
    label: string;
    placeholder?: string;
    type: FormFieldType;
    options?: { value: string | number; label: string; [key: string]: any }[];
    defaultValue?: string | number | boolean;
}

interface GenericFormProps<T> extends UseEntityFormProps<T> {
  fields: FormFieldConfig[];
}

function GenericForm<T extends Model>({ modalKey, schema, defaultValues, entityRoute, fields }: GenericFormProps<T>) {
  const { form, errors, progress, processing, submit, modalState, toggleModal } = useEntityForm<T>({
    modalKey,
    schema,
    defaultValues,
    entityRoute,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        {fields.map(field => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem className="mb-3">
                <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                <FormControl>
                  <>
                    {field.type === FormFieldType.TEXT && (
                      <Input id={field.name} placeholder={field.placeholder} {...formField} />
                    )}
                    {field.type === FormFieldType.TEXTAREA && (
                      <Textarea id={field.name} placeholder={field.placeholder} {...formField} />
                    )}
                    {field.type === FormFieldType.SELECT && (
                      <Select defaultValue={formField.value} onValueChange={formField.onChange}>
                        {field.options?.map(option => (
                          <SelectItem key={option.value} value={option.value+''}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                    {field.type === FormFieldType.RADIO && (
                      <RadioGroup onValueChange={formField.onChange} defaultValue={formField.value}>
                        {field.options?.map(option => (
                          <div key={option.value} className="flex items-center">
                            <RadioGroupItem value={option.value.toString()} />
                            <FormLabel>{option.label}</FormLabel>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  </>
                </FormControl>
                <FormMessage />
                {errors[field.name as keyof T] && (
                  <p className="mt-2 text-sm text-red-600">{errors[field.name as keyof T]}</p>
                )}
              </FormItem>
            )}
          />
        ))}
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
  );
}

export default GenericForm;
