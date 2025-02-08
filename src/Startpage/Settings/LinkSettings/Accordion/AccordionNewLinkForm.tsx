// src/components/AccordionItem/NewLinkForm.tsx
import React from "react";
import styled from "@emotion/styled";
import { Input } from "./AccordionInput";
import { dataElem } from "../../../../data/data";

const AccordionAddButton = styled.button`
  background-color: var(--default-color);
  border: none;
  color: var(--bg-color);
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  width: 90%;
  :enabled:hover {
    animation: circling-shadow-small 2s ease 0s infinite normal;
  }
`;

const AccordionInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const NewLinkFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--default-color);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 30px;
`;

interface NewLinkFormProps {
  newLink: dataElem;
  // eslint-disable-next-line no-unused-vars
  onChange: (updatedLink: dataElem) => void;
  onAdd: () => void;
}

export const NewLinkForm = ({ newLink, onChange, onAdd }: NewLinkFormProps) => {
  return (
    <NewLinkFormWrapper>
      <AccordionInputWrapper>
        <Input
          label="Label"
          index={-1}
          value={newLink.label}
          onChange={(label: string) => onChange({ ...newLink, label })}
        />
        <Input
          label="URL"
          index={-1}
          value={newLink.value}
          onChange={(value: string) => onChange({ ...newLink, value })}
        />
      </AccordionInputWrapper>
      <AccordionAddButton onClick={onAdd}>Add</AccordionAddButton>
    </NewLinkFormWrapper>
  );
};
