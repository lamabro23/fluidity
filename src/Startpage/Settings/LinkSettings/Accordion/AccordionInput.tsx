import React from "react";
import styled from "@emotion/styled";
import { OptionTextInput } from "../../../../components/OptionTextInput";

const AccordionInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

const Label = styled.p<{ isAlt?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 1rem;
  color: ${({ isAlt }) => (isAlt ? "var(--bg-color)" : "var(--default-color)")};
`;

const TextInputWrapper = styled.div`
  width: 100%;
  margin-right: 25px;
`;

interface InputProps {
  label: string;
  index: number;
  value: string;
  autoFocus?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (label: string, index: number) => void;
}

export const Input = ({
  label,
  index,
  value,
  autoFocus,
  onChange,
}: InputProps) => (
  <AccordionInputWrapper>
    <Label>{label + ":"}</Label>
    <TextInputWrapper>
      <OptionTextInput
        value={value}
        onChange={(label: string) => onChange(label, index)}
        placeholder={label}
        autoFocus={autoFocus}
      />
    </TextInputWrapper>
  </AccordionInputWrapper>
);
