import { ElementType } from "@/Pages/Edition/enum/element-type";
import { Expression } from "@/Pages/Edition/enum/expression";

export interface ProjectResponse {
    id:           number;
    name:         string;
    description:  null;
    cover_url:    string;
    video_url:    null;
    status:       string;
    presenter_id: number;
    created_at:   Date;
    updated_at:   Date;
    presenter:    PresenterResponse;
    elements:     ElementResponse[];
}

export interface ElementResponse {
    id:           number;
    title:        string;
    video_url?:    string;
    type:         ElementType;
    element_id:   number | null;
    element_type: null | string;
    project_id:   number;
    created_at:   Date;
    updated_at:   Date;
    element:      ElementDataResponse | null;
}

export interface ElementDataResponse {
    id:         number;
    content:    string;
    expression: Expression;
    video_id:   null;
}

export interface PresenterResponse {
    id:         number;
    full_name:  string;
    photo_url:  string;
    sex:        string;
    created_at: Date;
    updated_at: Date;
}