import { FC } from 'react';
import cls from './page-loader.module.css';
import { Loader } from '~shared/ui/loader/loader.tsx';

export const PageLoader: FC = () => {
    return (
        <div className={cls.pageLoader}>
            <Loader size={'large'} />
        </div>
    );
};
