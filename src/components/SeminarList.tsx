import styled from "styled-components";
import { TSeminar } from "../types";
import { SeminarItem } from "./SeminarItem";

type TSeminarListProps = {
    data: any
    onDelete?: (id: string) => void
    onEdit?: () => void
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const SeminarList = ({ data, onDelete, onEdit }: TSeminarListProps) => {
    return (
        <Wrapper>
            {data.map((seminar:TSeminar) => (
                <SeminarItem 
                    key={seminar.id} 
                    seminar={seminar} 
                    onDelete={() => onDelete}
                    onEdit={onEdit}
                />
            ))}
        </Wrapper>
    )
}