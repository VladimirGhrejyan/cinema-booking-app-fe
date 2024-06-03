import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../lib/route-config.tsx';
import { PageLoader } from '~shared/ui/page-loader/page-loader.tsx';

export const Router: FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}>
                        {route.children &&
                            route.children.map((childRoute, childIndex) => (
                                <Route
                                    key={childIndex}
                                    path={childRoute.path}
                                    element={childRoute.element}
                                />
                            ))}
                    </Route>
                ))}
            </Routes>
        </Suspense>
    );
};
