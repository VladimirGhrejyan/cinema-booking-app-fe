import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Row, Col } from 'antd';
import { GetOneScheduleOutputDto } from '~store/generated-api.ts';
import { Button } from '~shared/ui/button/button.tsx';

interface IProps {
    schedule: GetOneScheduleOutputDto;
}

const { Text } = Typography;

export const ScheduleCard: React.FC<IProps> = ({ schedule }) => {
    return (
        <Card bordered={false} style={{ marginBottom: 16, flex: 1, width: '100%' }}>
            <Row align="middle" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Text strong>Session {schedule.id}</Text>
                    <div>
                        <Text>Start: {schedule.startTime}</Text> -{' '}
                        <Text>End: {schedule.endTime}</Text>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ textAlign: 'right' }}>
                    <Link to={`/rooms/${schedule.room.id}/${schedule.movie.id}`}>
                        <Button label={'View Movie Details'} type="primary"></Button>
                    </Link>
                </Col>
            </Row>
        </Card>
    );
};
