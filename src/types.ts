export type TSeminar = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
  }

export type TSeminarItemProps = {
  seminar: TSeminar,
  onDelete: (id:string) => void,
  onEdit: () => void
}

export type TConfirmModalProps = {
  visible: boolean,
  onConfirm: () => void,
  onClose: () => void
}

export type TEditSeminarModalProps = {
  seminar: TSeminar,
  onClose: () => void,
  onSave: (arg0: TSeminar) => void
}