import { Link } from 'react-router-dom';
import cls from './header.module.css';

export const Header = () => {
    return (
        <header className={cls.header}>
            <h1>
                <Link to="/">Cinema Booking</Link>
            </h1>
        </header>
    );
};
