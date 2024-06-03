import React from 'react';
import { Link } from 'react-router-dom';
import { GetOneRoomOutputDto } from '~store/generated-api.ts';
import cls from './room-card.module.css';

interface IProps {
    room: GetOneRoomOutputDto;
}

export const RoomCard: React.FC<IProps> = ({ room }) => {
    return (
        <div className={cls.card}>
            <h3 className={cls.title}>{room.name}</h3>
            <Link to={`/rooms/${room.id}`} className={cls.button}>
                Visit Room
            </Link>
        </div>
    );
};
