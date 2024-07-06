import { Element, ElementData } from "@/Pages/Edition/models/element.model";

export interface ElementCreator {
    createElement(data: ElementData): Element;
}