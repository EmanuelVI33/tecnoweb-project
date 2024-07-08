import { create } from 'zustand';

interface ModalState {
  modals: { [key: string]: { open: boolean; isEditing: boolean; currentId: string | null } };
  toggleModal: (key: string, isEditing?: boolean, id?: string | null) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modals: {},
  toggleModal: (key: string, isEditing = false, id = null) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [key]: {
          open: !state.modals[key]?.open,
          isEditing,
          currentId: id,
        },
      },
    })),
}));
