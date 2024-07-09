import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/shadcn/ui/alert-dialog';
import { useModal } from '@/Contexts/ModalContext';
import { ErrorMessage } from '../../types/index';

interface Prop {
  error: ErrorMessage;
}

const ErrorModal = ( { error } : Prop) => {
  const { message, statu } = error;
  const { open, toggleModal } = useModal();

  return (
    <AlertDialog open={open} onOpenChange={() => toggleModal} >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Error: {statu}</AlertDialogTitle>
          <AlertDialogDescription>
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => toggleModal()}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => toggleModal()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ErrorModal;
