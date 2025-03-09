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
  const [editedSeminar, setEditedSeminar] = useState(''); //выбранный id семинара для редактирования
  const [deletedSeminar, setDeletedSeminar] = useState(''); //выбранный id семинара для удаления

  useEffect(() => {
    fetchSeminars().then((data) => setSeminars(data)); //получаем данные семинаров с сервера
  }, [seminars]);

  //функция выбора семинара для редактирования
  const handleEdit = (id: string) => {
    setEditedSeminar(id);
  };
  //функция выбора семинара для удаления
  const handleDelete = (id: string) => {
    setDeletedSeminar(id);
  };
  //функция сохранения отредактированного семинара
  const handleSave = (d: TSeminar) => {
    fetchUpdateSeminar(d.id, d);
    setEditedSeminar('');
  };
  //функция подтверждения удаления семинара
  const handleConfirm = (d: TSeminar) => {
    fetchDeleteSeminar(d.id);
    setDeletedSeminar('');
  };

  const seminar = seminars.find((el) => el.id === editedSeminar); //выбранный семинар для редактирования
  const deleteSeminar = seminars.find((el) => el.id === deletedSeminar); //выбранный семинар для удаления

  return (
    <LayoutPage>
      <SeminarList
        data={seminars}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {seminar && ( //если нажали на кнопку редактирования
        <SeminarFormModal //отображается модальное окно
          data={seminar}
          open={!!editedSeminar}
          onCancel={() => setEditedSeminar('')}
          onEdit={handleSave}
        />
      )}
      {deleteSeminar && ( //если нажали на кнопку удаления
        <ConfirmModal //отображается модальное окно
          data={deleteSeminar}
          open={!!deletedSeminar}
          onClose={() => setDeletedSeminar('')}
          onConfirm={handleConfirm}
        />
      )}
    </LayoutPage>
  );
};
