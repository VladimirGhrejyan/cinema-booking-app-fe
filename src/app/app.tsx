import { FC } from 'react';
import { Router } from './providers/router';
import { Header } from '~widgets/header';
import cls from './app.module.css';

const App: FC = () => {
    return (
        <div className={cls.app}>
            <Header />

            <Router />
        </div>
    );
};

export default App;
