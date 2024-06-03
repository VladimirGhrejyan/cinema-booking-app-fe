import { FC } from 'react';
import cls from './page-error.module.css';
import { Button } from '~shared/ui/button/button.tsx';

export const PageError: FC = () => {
    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={cls.errorPage}>
            <p>Unexpected Error</p>
            <Button label={'Refresh Page'} onClick={reloadPage} />
        </div>
    );
};
