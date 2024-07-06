import { ElementType } from "@/Pages/Edition/enum/element-type";

export interface ElementData {
    id?: string;
    title: string; 
    isModified?: boolean;
    videoUrl?: string;
    videoId?: string;
    type?: ElementType;
}
 
export abstract class Element {
    readonly id?: string;
    readonly title: string;
    isModified: boolean;
    videoUrl?: string;
    videoId?: string;
    readonly type: ElementType;
    readonly labelTypeElement: string;

    constructor({
        id, title, type = ElementType.VIDEO, typeElement = '', isModified = false, videoUrl, videoId
    } : ElementData & { typeElement: string }) {
        this.id = id;
        this.title = title;
        this.isModified = isModified;
        this.type = type;
        this.labelTypeElement = typeElement;
        this.videoUrl = videoUrl;
        this.videoId = videoId;
    }

    play(): void {
        console.log(`playyyy`)
    }
}



