import { Button } from "@/shadcn/ui/button";
import {
  Dialog as DialogShadcn,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shadcn/ui/dialog";
import { useModalStore } from "@/store/modal-store";
import { PropsWithChildren, ReactElement } from "react";

type DialogProps = {
  children?: ReactElement | ReactElement;
  title: string;
  titleButton: string;
  icon?: ReactElement;
  modalKey: string;
};

export function CustomDialog2({
  children,
  titleButton,
  title,
  icon,
  modalKey,
}: PropsWithChildren<DialogProps>) {
  const { modals, toggleModal } = useModalStore();
  const modalState = modals[modalKey] || { open: false, isEditing: false, currentId: null };

  return (
    <div>
      <Button className="flex gap-2" onClick={() => toggleModal(modalKey)}>
        <span>{titleButton}</span>
        {icon ? icon : null}
      </Button>
      <DialogShadcn open={modalState.open} onOpenChange={() => toggleModal(modalKey)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{modalState.isEditing ? `Edit ${title}` : `Create ${title}`}</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </DialogShadcn>
    </div>
  );
}
