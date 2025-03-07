import { Button, Modal } from 'antd'
import { TConfirmModalProps } from '../types'

export const ConfirmModal = ({visible, onConfirm, onClose}:TConfirmModalProps) => {
    return (
        <Modal 
            title="Удалить семинар?"
            open={visible}
            footer={[
                <Button key="submit" type="primary" onClick={onConfirm}>
                    Да
                </Button>,
                <Button key="back" onClick={onClose}>
                  Нет
                </Button>
              ]}
            >
            <Button onClick={onConfirm}>Да</Button>
            <Button onClick={onClose}>Нет</Button>
        </Modal>
    )
}