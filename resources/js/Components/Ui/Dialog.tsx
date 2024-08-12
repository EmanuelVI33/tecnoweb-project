import { Button } from "@/shadcn/ui/button"
import {
  Dialog as DialogShadcn,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/shadcn/ui/dialog"
import { PropsWithChildren, useState } from "react"

type DialogProps = {
    title: string
    titleButton: string
    titleButtonClose?: string,
    open: boolean,
    handleTogleModal: () => void,
}

export function Dialog({ children, titleButton, title, open = false, handleTogleModal } : PropsWithChildren<DialogProps>) {
    return (
        <DialogShadcn open={open} onOpenChange={handleTogleModal}>
            <Button type="button" onClick={() => handleTogleModal()}>{titleButton}</Button>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
                <DialogFooter className="sm:justify-start">
                {/* <DialogClose asChild>
                    <Button type="button" variant="secondary">
                    {titleButtonClose}
                    </Button>
                </DialogClose> */}
                </DialogFooter>
            </DialogContent>
        </DialogShadcn>
    )
}


