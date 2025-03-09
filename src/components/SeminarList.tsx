import styled from 'styled-components';
import { TSeminar, TSeminarListProps } from '../types';
import { SeminarItem } from './SeminarItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
//список семинаров
export const SeminarList = ({ data, onDelete, onEdit }: TSeminarListProps) => {
  return (
    <Wrapper>
      {data.map((seminar: TSeminar) => (
        <SeminarItem
          key={seminar.id}
          seminar={seminar}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Wrapper>
  );
};
