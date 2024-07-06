import { Element } from "@/Pages/Edition/models/element.model";
import { ElementCreator } from "./element-creator";
import { ElementPresenter, ElementPresenterData } from "@/Pages/Edition/models/element-presenter.model";

export class ElementPresenterCreator implements ElementCreator {
    createElement(data: ElementPresenterData): Element {
        return new ElementPresenter({  ...data });
    }
}