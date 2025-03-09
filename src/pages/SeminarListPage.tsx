import { useEffect, useState } from 'react';
import { SeminarList } from '../components/SeminarList';
import {
  fetchDeleteSeminar,
  fetchSeminars,
  fetchUpdateSeminar,
} from '../api/seminarsApi';
import { TSeminar } from '../types';
import { LayoutPage } from '../components/LayoutPage';
import { SeminarFormModal } from '../components/SeminarFormModal';
import { ConfirmModal } from '../components/ConfirmModal';

export const SeminarListPage = () => {
  const [seminars, setSeminars] = useState<TSeminar[]>([]); //массив с семинарами
  const [editedSeminarId, setEditedSeminarId] = useState(''); //выбранный id семинара для редактирования
  const [deletedSeminarId, setDeletedSeminarId] = useState(''); //выбранный id семинара для удаления

  useEffect(() => {
    fetchSeminars().then((data) => setSeminars(data)); //получаем данные семинаров с сервера
  }, [seminars]);

  //функция выбора семинара для редактирования
  const handleEdit = (id: string) => {
    setEditedSeminarId(id);
  };
  //функция выбора семинара для удаления
  const handleDelete = (id: string) => {
    setDeletedSeminarId(id);
  };
  //функция сохранения отредактированного семинара
  const handleSave = (d: TSeminar) => {
    fetchUpdateSeminar(d.id, d);
    setEditedSeminarId('');
  };
  //функция подтверждения удаления семинара
  const handleConfirm = (d: TSeminar) => {
    fetchDeleteSeminar(d.id);
    setDeletedSeminarId('');
  };

  const editedSeminar = seminars.find((el) => el.id === editedSeminarId); //выбранный семинар для редактирования
  const deletedSeminar = seminars.find((el) => el.id === deletedSeminarId); //выбранный семинар для удаления

  return (
    <LayoutPage>
      <SeminarList
        data={seminars}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {editedSeminar && (
        <SeminarFormModal
          data={editedSeminar}
          open={!!editedSeminarId}
          onCancel={() => setEditedSeminarId('')}
          onEdit={handleSave}
        />
      )}
      {deletedSeminar && (
        <ConfirmModal
          data={deletedSeminar}
          open={!!deletedSeminarId}
          onClose={() => setDeletedSeminarId('')}
          onConfirm={handleConfirm}
        />
      )}
    </LayoutPage>
  );
};
