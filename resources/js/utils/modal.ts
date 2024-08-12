import { Model } from "@/types";

interface ModalState { 
    isEditing: boolean, 
    currentId: string | null 
}

export const getEntity = <T extends Model>(
    modalState: ModalState,
    entities: T[]
  ): T | null => {
    if (modalState.isEditing) {
      const entity = entities.find(e => e.id === modalState.currentId);
      if (entity) {
        return { ...entity };
      }
    }
    return null;
  };