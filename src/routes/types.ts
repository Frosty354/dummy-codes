export interface Page {
    path: string;
    exact?: boolean;
    component: JSX.Element;
    isPrivate?: boolean;
}