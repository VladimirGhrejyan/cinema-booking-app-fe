import { ReactElement } from 'react';

export enum EAppPaths {
    HOME = '/',
    ROOM = '/rooms/:roomId',
    SESSION = '/rooms/:roomId/sessions/:sessionId',
    ADMIN = '/admin',
    ADMIN_ROOMS = '/admin/rooms',
    ADMIN_MOVIES = '/admin/movies',
    NOT_FOUND = '*',
}

type TPathRouteProps = {
    path: string;
    element: ReactElement | null;
    children?: TPathRouteProps[];
};

type TRouteConfig = Record<string, TPathRouteProps>;

export const routeConfig: TRouteConfig = {
    [EAppPaths.HOME]: { path: EAppPaths.HOME, element: null },
    [EAppPaths.ROOM]: { path: EAppPaths.ROOM, element: null },
    [EAppPaths.SESSION]: { path: EAppPaths.SESSION, element: null },
    [EAppPaths.ADMIN]: {
        path: EAppPaths.ADMIN,
        element: null,
        children: [
            { path: EAppPaths.ADMIN_ROOMS, element: null },
            { path: EAppPaths.ADMIN_MOVIES, element: null },
        ],
    },
    [EAppPaths.NOT_FOUND]: { path: EAppPaths.NOT_FOUND, element: null },
};
