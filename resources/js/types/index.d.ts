import { Project } from '@/Pages/Edition/models/project';
import { Presenter } from '../Pages/Edition/models/presenter';
import { ProjectResponse } from '@/Pages/Edition/models/response';

// type ID = string | number;

export interface Model {
    id?: string;
}

export interface User extends Model {
    name: string;
    email: string;
    email_verified_at: string;
    pointer: number;
}

export interface ErrorMessage {
    message: string;
    statu: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    presenters: Presenter[];
    success: string;
    error: ErrorMessage;
};

export type ProjectPageProps = PageProps & {
    projects: Project[];
};

export type ProjectShowPageProps = PageProps & {
    project: ProjectResponse;
};