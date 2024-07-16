import { Model } from '@/types';
import { create } from 'zustand';

export interface Modal {
  open: boolean;
  isEditing: boolean;
  currentId: string | null;
  model?: Model;
}

interface ModalState {
  modals: { [key: string]: Modal };
  toggleModal: <T extends Model>(key: string, isEditing?: boolean, id?: string | null, model?: T) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modals: {},
  toggleModal: (key: string, isEditing = false, id = null, model) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [key]: {
          open: !state.modals[key]?.open,
          isEditing,
          currentId: id,
          model: model,
        },
      },
    })),
}));
