import { useEffect, useState } from "react"
import { SeminarList } from "../components/SeminarList"
import { fetchDeleteSeminar, fetchSeminars } from "../api/seminarsApi"
import { TSeminar } from "../types"
import { LayoutPage } from "../components/LayoutPage"
import { EditSeminarModal } from "../components/EditSeminarModal"
import { ConfirmModal } from "../components/ConfirmModal"

export const SeminarListPage = () => {

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
        <div>
            <LayoutPage>
                {seminars.map(seminar => (
                    <SeminarList 
                    data={seminars}
                    onDelete={() => {
                        setIsConfirmModalOpen(true);
                        setSeminarSelected(seminar)
                    }}
                    onEdit={() => {
                        setIsEditModalOpen(true);
                        setSeminarSelected(seminar)
                    }}
            />
                ))}
                
            </LayoutPage>
            <ConfirmModal 
                visible={isConfirmModalOpen}
                onConfirm={() => handleDelete(seminarSelected.id)}
                onClose={()=>setIsConfirmModalOpen(false)}
                />
        </div>
    )
}