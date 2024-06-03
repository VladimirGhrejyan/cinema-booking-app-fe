import { FC } from 'react';
import { Spin, SpinProps } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

interface IProps extends SpinProps {}

export const Loader: FC<IProps> = (props) => {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} {...props} />;
};
