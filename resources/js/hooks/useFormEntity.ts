import { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { useForm as useReactForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useModalStore } from '@/store/modal-store';
import { Model } from '@/types';

export interface UseEntityFormProps<T> {
  modalKey: string;
  schema: ZodType<any>;
  defaultValues: T;
  entityRoute: string;
}

export function useEntityForm<T extends Model>({ modalKey, schema, defaultValues, entityRoute }: UseEntityFormProps<T>) {
  const { modals, toggleModal } = useModalStore();
  const modalState = modals[modalKey] || { open: false, isEditing: false, currentId: null };
  // const { props: { entities }} = usePage<{ entities: T[] }>();
  // const entity = getEntity<T>(modalState, entities) || defaultValues;
  const entity = modalState.model || defaultValues;
  const { data, post, wasSuccessful, progress, processing, errors } = useForm({
    ...entity, 
    _method: modalState.isEditing ? 'PUT' : 'POST',
  });

  const form = useReactForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...entity
    },
  });

  const submit = (values: z.infer<typeof schema>) => {
    Object.assign(data, values);

    modalState.isEditing 
      ? post(route(`${entityRoute}.update`, modalState.currentId!))
      : post(route(`${entityRoute}.store`));
  };

  useEffect(() => {
    if (wasSuccessful) {
      toast.success(`Entidad ${modalState.isEditing ? 'actualizada' : 'creada'} exitosamente`);
      toggleModal(modalKey);
    }
  }, [wasSuccessful]);

  return {
    form,
    errors,
    progress,
    processing,
    submit,
    modalState,
    toggleModal,
    modalKey,
  };
}
