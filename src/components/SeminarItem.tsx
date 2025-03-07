import styled from "styled-components"
import { TSeminarItemProps } from "../types"
import { Button, Typography } from "antd"

const { Paragraph, Title } = Typography

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 15px;    
`

const DateValue = styled(Typography)`
    display: inline;
    color: #4096ff;
    font-weight: bold;
`

export const SeminarItem = ({seminar, onDelete, onEdit}:TSeminarItemProps) => {
    return (
        <div>
            <img src={seminar.photo} alt={seminar.title}/>
            <Title level={3}>{seminar.title}</Title>
            <Paragraph>{seminar.description}</Paragraph>
            <Paragraph>Дата: <DateValue>{seminar.date}</DateValue></Paragraph>
            <Paragraph>Время: <DateValue>{seminar.time}</DateValue></Paragraph>
            <ButtonsWrapper>
                <Button onClick={() => onEdit()}>редактировать</Button>
                <Button onClick={() => onDelete(seminar.id)}>удалить</Button>
            </ButtonsWrapper>
        </div>
    )
}