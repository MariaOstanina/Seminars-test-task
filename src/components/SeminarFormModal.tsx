import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { SeminarForm } from './SeminarForm';
import { TSeminar, TSeminarFormModalProps } from '../types';
//модальное окно с формой семинара
export const SeminarFormModal = ({
  data,
  open,
  onCancel,
  onEdit,
}: TSeminarFormModalProps) => {
  const [formData, setFormData] = useState<TSeminar>(data);

  useEffect(() => {
    if (!data || formData) return;
    setFormData(data);
  }, [data, formData]);

  return (
    <Modal
      open={open}
      title='Редактирование семинара'
      onCancel={onCancel}
      onOk={() => onEdit(formData)}
    >
      <SeminarForm data={formData} onChange={setFormData} />
    </Modal>
  );
};
