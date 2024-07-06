import { Project } from '@/Pages/Edition/models/project';
import { Presenter } from '../Pages/Edition/models/presenter';
import { ProjectResponse } from '@/Pages/Edition/models/response';


export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    pointer: number;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    presenters: Presenter[];
    success: string;
    error: string;
};

export type ProjectPageProps = PageProps & {
    projects: Project[];
};

export type ProjectShowPageProps = PageProps & {
    project: ProjectResponse;
};