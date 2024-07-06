interface PresenterBase {
    full_name: string;
    sex: string;
}

export interface PresenterCreate extends PresenterBase {
    photo_url?: File;
}

export interface Presenter extends PresenterBase {
    id: string;
    photo_url: string;
    created_at: string;
    updated_at: string;
}

export enum Sex {
    MALE = 'male',
    FEMALE = 'female',
}