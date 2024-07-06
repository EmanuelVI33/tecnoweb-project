import { Presenter } from "@/Pages/Edition/models/presenter";
import { create } from "zustand";

interface PresenterState {
    presenters: Presenter[];
    initPresenter: (data: Presenter[] ) => void;
}

export const usePresenterStore = create<PresenterState>((set) => ({
    presenters: [],
    initPresenter: (data) => {
        set(() => ({
            presenters: [...data]
        }))
    }
}));