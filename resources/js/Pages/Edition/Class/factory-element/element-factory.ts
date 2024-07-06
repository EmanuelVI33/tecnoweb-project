import { ElementType } from "@/Pages/Edition/enum/element-type";
import { Element, ElementData } from "@/Pages/Edition/models/element.model";
import { ElementResponse } from "@/Pages/Edition/models/response";
import { ElementPresenterCreator } from "./element-presenter-creator";
import { ElementVideoCreator } from "./element-video-creator";
import { ElementCreator } from "./element-creator";
import { ElementPresenterData } from "@/Pages/Edition/models/element-presenter.model";
import { ElementVideoData } from "@/Pages/Edition/models/element-video.model";

export class ElementFactory {
    // Map para las clase creadoras en base al typo de elemento
    private static creators: { [key in ElementType]?: ElementCreator } = {
        [ElementType.PRESENTER]: new ElementPresenterCreator(),
        [ElementType.VIDEO]: new ElementVideoCreator(),
    };

    static createElement(elementResponse: ElementResponse): Element {
        const { id, title, type, element: elementDataResponse, video_url } = elementResponse;
        const videoId = elementDataResponse?.video_id ?? '';

        console.log(`type Element ${type}`)

        const creator = this.creators[type];
        if (!creator) {
            throw new Error(`Unknown element type: ${type}`);
        }

        let elementData: ElementData = { id: id.toString(), title, videoUrl: video_url, type, videoId };

        if (type === ElementType.PRESENTER && elementDataResponse) {
            const { content, expression, } = elementDataResponse;
            elementData = { ...elementData, content, expression, } as ElementPresenterData;
        } else if (type === ElementType.VIDEO) {
            elementData = { ...elementData } as ElementVideoData;
        }

        return creator.createElement(elementData);
    }
}
