import { RoomCard } from '~entities/room-card';
import { useGetRoomsQuery } from '~store/generated-api.ts';
import cls from './rooms-page.module.css';

const RoomsPage = () => {
    const { data } = useGetRoomsQuery();

    return (
        <div className={cls.container}>
            <h1>Rooms List</h1>
            <div className={cls.cardsContainer}>
                {data?.items
                    ? data.items.map((room) => <RoomCard key={room.id} room={room} />)
                    : null}
            </div>
        </div>
    );
};

export default RoomsPage;
