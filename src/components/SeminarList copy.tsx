import { useEffect, useState } from "react";
import { fetchDeleteSeminar, fetchSeminars, fetchUpdateSeminar } from "../api/seminarsApi";
import { TSeminar } from "../types";
import { SeminarItem } from "./SeminarItem";
import { ConfirmModal } from "./ConfirmModal";
import { EditSeminarModal } from "./EditSeminarModal";

export const SeminarList = () => {

    const [seminars, setSeminars] = useState<TSeminar[]>([]) //массив с семинарами
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false) //состояние модалки подтверждения удаления
    const [seminarSelected, setSeminarSelected] = useState<TSeminar | null>(null) //выбранный семинар
    const [isEditModalOpen, setIsEditModalOpen] = useState(false) //состояние модалки редактирования

    // получение массива с семинарами с сервера
    useEffect(() => {
        fetchSeminars().then(data => setSeminars(data))
    },[seminars])

    //функция удаления семинара
    const handleDelete = (id:string) => {
        fetchDeleteSeminar(id) // удаление семинара с сервера
        setSeminars(seminars.filter(seminar => seminar.id !== id)) // обновление списка семинаров
        setIsConfirmModalOpen(false) // закрытие модалки подтверждения удаления
    }

    return (
        <>
            {seminars.map((seminar) => (
                <SeminarItem 
                    key={seminar.id} 
                    seminar={seminar} 
                    onDelete={() => {
                        setIsConfirmModalOpen(true);
                        setSeminarSelected(seminar)
                    }}
                    onEdit={() => {
                        setIsEditModalOpen(true);
                        setSeminarSelected(seminar)
                    }}
                />
            )
            )}
            {/* отображение модалки подтверждения удаления */}
            {isConfirmModalOpen && seminarSelected && (
                <ConfirmModal 
                    onConfirm={() => handleDelete(seminarSelected.id)}
                    onClose={() => setIsConfirmModalOpen(false)}/>
            )}
            {/* отображение модалки редактирования семинара */}
            {isEditModalOpen && seminarSelected && (
                <EditSeminarModal 
                    seminar={seminarSelected}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={(updateSeminar:TSeminar) => {
                        setSeminars(seminars.map((seminar) => // обновление массива после редактирования
                            seminar.id === seminarSelected.id ? {...seminar, updateSeminar} : seminar
                        ))
                        fetchUpdateSeminar(seminarSelected.id, updateSeminar) // обновление семинара на сервере
                        setIsEditModalOpen(false)
                    }}
                /> 
            )}
        </>
    )
}