import styled from 'styled-components';
import { TSeminarImgProps } from '../types';

const ImgWrapper = styled.div`
  height: 200px;
  width: 200px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SeminarImg = ({ src, alt }: TSeminarImgProps) => (
  <ImgWrapper>
    <Img src={src} alt={alt} />
  </ImgWrapper>
);
