import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useSidebarMenuItems } from '../lib/use-sidebar-menu-items.tsx';
import cls from './style.module.css';

export const SideBar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const { sidebarItems, selectedKeys } = useSidebarMenuItems(collapsed);

    return (
        <Layout.Sider collapsible onCollapse={setCollapsed} collapsed={collapsed}>
            <Menu
                className={cls.sidebarItem}
                theme="dark"
                mode="inline"
                items={sidebarItems}
                selectedKeys={selectedKeys}
            />
        </Layout.Sider>
    );
};
