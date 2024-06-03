import { ReactElement } from 'react';
import { RoomsPage } from '~pages/rooms-page';
import { RoomPage } from '~pages/room-page';
import NotFoundPage from '~pages/not-found-page';

export enum EAppPaths {
    HOME = '/',
    ROOM = '/rooms/:roomId',
    SCHEDULE = '/rooms/:roomId/:scheduleId',
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
    [EAppPaths.HOME]: { path: EAppPaths.HOME, element: <RoomsPage /> },
    [EAppPaths.ROOM]: { path: EAppPaths.ROOM, element: <RoomPage /> },
    [EAppPaths.SCHEDULE]: { path: EAppPaths.SCHEDULE, element: null },
    [EAppPaths.ADMIN]: {
        path: EAppPaths.ADMIN,
        element: null,
        children: [
            { path: EAppPaths.ADMIN_ROOMS, element: null },
            { path: EAppPaths.ADMIN_MOVIES, element: null },
        ],
    },
    [EAppPaths.NOT_FOUND]: { path: EAppPaths.NOT_FOUND, element: <NotFoundPage /> },
};
