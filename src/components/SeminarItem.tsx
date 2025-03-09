import styled from 'styled-components';
import { TSeminarItemProps } from '../types';
import { Button, Typography } from 'antd';
import { SeminarImg } from './SeminarImg';

const { Paragraph, Title } = Typography;

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  gap: 20px;
  box-shadow: 1px 1px 10px 2px #f1efef;
`;

const StyledTitle = styled(Title)`
  margin-top: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const DateValue = styled(Typography)`
  display: inline;
  color: #4096ff;
  font-weight: bold;
`;
//компонент семинара
export const SeminarItem = ({
  seminar,
  onDelete,
  onEdit,
}: TSeminarItemProps) => {
  return (
    <Wrapper>
      <SeminarImg src={seminar.photo} alt={seminar.title} />
      <div>
        <StyledTitle level={3}>{seminar.title}</StyledTitle>
        <Paragraph>{seminar.description}</Paragraph>
        <Paragraph>
          Дата: <DateValue>{seminar.date}</DateValue>
        </Paragraph>
        <Paragraph>
          Время: <DateValue>{seminar.time}</DateValue>
        </Paragraph>
        <ButtonsWrapper>
          <Button onClick={() => onEdit(seminar.id)}>Редактировать</Button>
          <Button danger onClick={() => onDelete(seminar.id)}>
            Удалить
          </Button>
        </ButtonsWrapper>
      </div>
    </Wrapper>
  );
};
