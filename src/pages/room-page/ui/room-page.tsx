import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import { ScheduleCard } from '~entities/schedule-card';
import { useGetAllRoomSchedulesQuery, useGetRoomByIdQuery } from '~store/generated-api.ts';
import cls from './room-page.module.css';

const RoomPage = () => {
    const { roomId } = useParams();

    const { data: roomData } = useGetRoomByIdQuery({ id: Number(roomId) });
    const { data: schedulesData } = useGetAllRoomSchedulesQuery({ roomId: Number(roomId) });

    if (roomData && schedulesData) {
        return (
            <div className={cls.container}>
                <h1>{roomData.name}</h1>
                <Row gutter={[16, 16]}>
                    {schedulesData.items.map((schedule) => (
                        <Col xs={24} sm={12} md={8} key={schedule.id}>
                            <ScheduleCard schedule={schedule} />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }

    return null;
};

export default RoomPage;
