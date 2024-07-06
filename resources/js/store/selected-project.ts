import { Element } from "@/Pages/Edition/models/element.model";
import { Project } from "@/Pages/Edition/models/project";
import { create } from "zustand";

interface SelectedProjectState {
    project?: Project;
    elements: Element[];
    isSave: boolean;
    currentElement: number;
    togleSave: () => void;
    openProject: (project: Project) => void;
    addElement: (element: Element) => void;
    getNewElement: () => Element[];
    initElement: (elements: Element[]) => void;
    selectElement: (index: number) => void;
}

export const useSelectedProjectStore = create<SelectedProjectState>((set, get) => ({
    project: undefined,
    elements: [],
    isSave: true,
    currentElement: -1,
    openProject: (project) => {
        const elem = project.elements;
        console.log(`Elementos proyecto ${elem}`);

        set(() => ({
            // project: project,
            // elements: project.elements ?? [],
            isSave: true,
            currentElement: -1
        }))
    },
    addElement: (element) => {
        set((state) => ({
            elements: [...state.elements, element],
            isSave: false,
        }))    
    },
    togleSave: () => {
        set((state) => ({
            isSave: !state.isSave,
        }))     
    },
    getNewElement: () => {
        const elements = get().elements;
        return elements.filter(element => element.id === undefined);
    },
    initElement: (elements) => {
        set(() => ({
            elements: elements,
        }))    
    },
    selectElement: (index: number) => {
        console.log(`selected ${index}`)
        set(() => ({
            currentElement :index,
        }))     
    }
}));