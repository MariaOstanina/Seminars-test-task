import { useState } from "react"
import { TEditSeminarModalProps, TSeminar } from "../types"
import { Button, Typography } from "antd"

const { Title } = Typography

export const EditSeminarModal = ({seminar, onClose, onSave}:TEditSeminarModalProps) => {
    
    const [formData, setFormData] = useState<TSeminar>(seminar)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;        
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        onSave(formData)
    }

    return (
        <>
            <Title level={2}>Редактирование семинара</Title>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Название семинара
                    <input required type="text" name="title" placeholder="Введите название" value={formData.title} onChange={handleChange}/>
                </label>
                <label htmlFor="description">
                    Описание
                    <textarea required name="description" placeholder="Введите описание" value={formData.description} onChange={handleChange}/>
                </label>
                <label htmlFor="date">
                    Дата:
                    <input required type="text" name="date" placeholder="Введите дату" value={formData.date} onChange={handleChange}/>
                </label>
                <label htmlFor="time">
                    Время:
                    <input required type="time" name="time" placeholder="Введите время" value={formData.time} onChange={handleChange}/>
                </label>
                <label htmlFor="photo">
                    Фото:
                    <input required type="text" name="photo" placeholder="Ссылка на фото" value={formData.photo} onChange={handleChange}/>
                </label>
                <Button htmlType="submit">Сохранить</Button>
                <Button htmlType="button" onClick={onClose}>Отменить</Button>
            </form>
        </>
    )
}