import { appURL, dIdApi, dIdUrl } from "@/constants/constant";
import { Expression } from "@/Pages/Edition/enum/expression";
import { ElementPresenter } from "@/Pages/Edition/models/element-presenter.model";
import axios from "axios";

const webhookUrl = `${appURL}/webhook`

export const generateContent = async (elements: ElementPresenter[], projectId: string) : Promise<ElementPresenter[]> => {
    try {
        elements.map(async element => {
            const id = await generateVideo(element.content, element.expression);
            return {
                ...element,
                videoId: id,
            }
        });
        return elements;
    } catch (error) {
        console.error('Error generating video:', error);
        throw error;
    }
};


export const generateVideo = async (text: string, expression: Expression): Promise<string> => {
    console.log(`webhook-url ${webhookUrl}, ${dIdApi}`);
    const options = {
        method: 'POST',
        url: `${dIdUrl}/talks`,
        headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Basic ${dIdApi}`,
        },
        data: {
        script: {
            type: 'text',
            subtitles: 'false',
            provider: {
                type: 'microsoft',
                voice_id: 'es-MX-GerardoNeural',
            },
            ssml: 'false',
            input: text,
        },
        config: { 
            fluent: 'false', 
            pad_audio: '0.0',
            driver_expressions: {
            expressions: [
                {
                "start_frame": 0,
                "expression": expression,
                "intensity": 1
                }
            ]
            } 
        },
        source_url:
            'https://media-television.nyc3.digitaloceanspaces.com/neco.jpg',
        webhook: webhookUrl,
        },
    };

    try {
        const response = await axios(options);
        const { id } = response.data;
        return id;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}


