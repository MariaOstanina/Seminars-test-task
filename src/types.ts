import { ModalProps } from 'antd';

export type TSeminar = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
};

export type TSeminarItemProps = {
  seminar: TSeminar;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export type TConfirmModalProps = {
  data: TSeminar;
  open: boolean;
  onConfirm: (d: TSeminar) => void;
  onClose: () => void;
};

export type TSeminarListProps = {
  data: any;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export type TSeminarImgProps = Pick<HTMLImageElement, 'alt' | 'src'>;

export type TSeminarFormModalProps = {
  data: TSeminar;
  onEdit: (data: TSeminar) => void;
} & ModalProps;

type TOnChangeCb = (data: TSeminar) => TSeminar;

export type TSeminarFormProps = {
  data: TSeminar;
  onChange: (cb: TOnChangeCb) => void;
};
