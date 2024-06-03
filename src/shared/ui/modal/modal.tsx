import { FC } from 'react';
import { Modal as AntModal, ModalProps } from 'antd';

interface IProps extends ModalProps {}

export const Modal: FC<IProps> = ({ children, ...props }) => {
    return <AntModal {...props}>{children}</AntModal>;
};
