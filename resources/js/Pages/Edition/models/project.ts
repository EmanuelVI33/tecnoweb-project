import { Presenter } from './presenter';

interface ProjectBase {
    name: string;
    description?: string;
}

export interface ProjectCreate extends ProjectBase {
    cover_url?: File;
    presenter_id: string;
}

export interface Project extends ProjectBase {
    id: string;
    cover_url: string;
    status: Status;
    video_url?: string;
    presenter: Presenter;
    elements: Element[];
    created_at: string;
    updated_at: string;
}

enum Status {
    EDITION     = 'edition',
    PRODUCTION  = 'production',
    PUBLIC      = 'public',
}
