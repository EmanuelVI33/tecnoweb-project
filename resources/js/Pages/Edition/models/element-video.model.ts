import { ElementType } from "@/Pages/Edition/enum/element-type";
import { Element, ElementData } from './element.model';

const labelVideo = "Video";

export interface ElementVideoData extends ElementData {
    file?: File;
}

export class ElementVideo extends Element {
    file?: File;

    constructor({id, title, file, isModified, videoUrl}: ElementVideoData) {
        super({id, title, type: ElementType.VIDEO, typeElement: labelVideo, isModified, videoUrl});
        this.file = file;
    }
}