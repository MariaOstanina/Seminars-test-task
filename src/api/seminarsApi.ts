import { TSeminar } from "../types";

const SEMINARS_API_URL = 'http://localhost:4000/seminars'
//получение массива с данными семинаров
export const fetchSeminars = async() => {
    const response = await fetch(SEMINARS_API_URL);
    if (!response.ok) {
        throw new Error('Ошибка при загрузке списка семинаров');
    } 
    return response.json()
}
//удаление семинара по кнопке
export const fetchDeleteSeminar = async(id:string) => {
    const response = await fetch(`${SEMINARS_API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Ошибка при удалении семинара');
      } 
}
//изменение семинара по кнопке "редактировать"
export const fetchUpdateSeminar = async(id:string, data:TSeminar) => {
    const response = await fetch(`${SEMINARS_API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        throw new Error('Ошибка при обновлении семинара');
      } 
}