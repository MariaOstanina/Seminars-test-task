import { Button, Modal } from 'antd';
import { TConfirmModalProps } from '../types';
//компонент модального окна для подтверждения удаления
export const ConfirmModal = ({
  data,
  open,
  onConfirm,
  onClose,
}: TConfirmModalProps) => {
  return (
    <Modal
      title='Удалить семинар?'
      open={open}
      onCancel={onClose}
      footer={[
        <Button key='submit' type='primary' onClick={() => onConfirm(data)}>
          Да
        </Button>,
        <Button key='back' onClick={onClose}>
          Нет
        </Button>,
      ]}
    ></Modal>
  );
};
