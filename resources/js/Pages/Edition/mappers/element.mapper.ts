import { ElementFactory } from "@/Pages/Edition/Class/factory-element/element-factory";
import { Element } from "@/Pages/Edition/models/element.model";
import { ElementResponse } from "@/Pages/Edition/models/response";

export class ElementMapper {
    static fromElementResponseToEntity(elementsResponse: ElementResponse[]) : Element[] {

        return elementsResponse.map(ElementFactory.createElement.bind(ElementFactory));
    }
}
