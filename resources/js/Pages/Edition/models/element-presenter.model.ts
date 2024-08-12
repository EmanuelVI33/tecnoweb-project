import { Expression } from "@/Pages/Edition/enum/expression";
import { Element, ElementData } from "./element.model";
import { ElementType } from "@/Pages/Edition/enum/element-type";

const labelPresenter = "Presentador"

export interface ElementPresenterData extends ElementData {
    content: string;
    expression: Expression;   
}

export class ElementPresenter extends Element {
    content: string;
    expression: Expression;
    
    constructor({
        id, title, content = '', expression = Expression.NEUTRAL, isModified, videoUrl, videoId
    } : ElementPresenterData) {
        super({id, title, type: ElementType.PRESENTER, typeElement: labelPresenter, isModified, videoUrl, videoId});
        this.content = content;
        this.expression = expression;
    }
}
