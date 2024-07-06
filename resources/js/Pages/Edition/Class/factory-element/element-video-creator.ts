import { ElementVideo, ElementVideoData } from "@/Pages/Edition/models/element-video.model";
import { ElementCreator } from "./element-creator";
import { Element } from "@/Pages/Edition/models/element.model";

export class ElementVideoCreator implements ElementCreator {
    createElement(data: ElementVideoData): Element {
        return new ElementVideo({ ...data });
    }
}