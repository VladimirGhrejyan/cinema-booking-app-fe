import { Link, useLocation } from 'react-router-dom';
import { MenuProps } from 'antd';
import { EAppPaths } from '~app/providers/router/lib/route-config.tsx';

type TSidebarSubject = {
    path: EAppPaths;
    label: string;
};

const SIDEBAR_SUBJECTS: TSidebarSubject[] = [
    { path: EAppPaths.ADMIN_ROOMS, label: 'Rooms' },
    { path: EAppPaths.ADMIN_MOVIES, label: 'Movies' },
];

export const useSidebarMenuItems = (collapsed: boolean) => {
    const location = useLocation();

    const sidebarItems: MenuProps['items'] = SIDEBAR_SUBJECTS.map(({ path, label }) => ({
        key: path,
        label: <Link to={path}>{collapsed ? label[0] : label}</Link>,
    }));

    const selectedKeys: MenuProps['selectedKeys'] = SIDEBAR_SUBJECTS.filter(
        ({ path }) => path === location.pathname,
    ).map(({ path }) => path);

    return {
        sidebarItems,
        selectedKeys: selectedKeys.length ? selectedKeys : [EAppPaths.ADMIN_ROOMS],
    };
};
