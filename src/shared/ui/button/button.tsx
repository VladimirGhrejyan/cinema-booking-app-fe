import { FC } from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

interface IProps extends ButtonProps {
    label: string;
}

export const Button: FC<IProps> = ({ label, ...props }) => {
    return <AntButton {...props}>{label}</AntButton>;
};
