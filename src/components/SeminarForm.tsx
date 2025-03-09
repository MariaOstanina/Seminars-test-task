import { Input, InputProps } from 'antd';
import styled from 'styled-components';
import { TSeminar, TSeminarFormProps } from '../types';
import { SeminarImg } from './SeminarImg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.div`
  width: 60px;
  text-align: left;
`;
//форма для редактирования семинара
export const SeminarForm = ({
  data,
  onChange: onChangeProp,
}: TSeminarFormProps) => {
  const getFieldData = (name: keyof TSeminar) => {
    const onChange: InputProps['onChange'] = (e) =>
      onChangeProp((p) => ({ ...p, [name]: e.target.value }));

    const value = data[name];

    return {
      onChange,
      value,
    };
  };

  return (
    <Wrapper>
      <Input
        addonBefore={<Label>Заголовок</Label>}
        {...getFieldData('title')}
      />
      <Input
        addonBefore={<Label>Описание</Label>}
        {...getFieldData('description')}
      />
      <Input addonBefore={<Label>Дата</Label>} {...getFieldData('date')} />
      <Input addonBefore={<Label>Время</Label>} {...getFieldData('time')} />
      <Input addonBefore={<Label>Фото</Label>} {...getFieldData('photo')} />
      {data.photo && <SeminarImg src={data.photo} alt={data.title} />}
    </Wrapper>
  );
};
