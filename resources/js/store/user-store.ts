import { User } from "@/types";
import { create } from "zustand";

interface UserState {
    user?: User;
    setUser: (data: User ) => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: undefined,
    setUser: (data) => {
        set(() => ({
            user: data
        }))
    }
}));