// src/components/AccordionItem/AccordionGroupItems.tsx
import React from "react";
import styled from "@emotion/styled";
import { Draggable } from "@hello-pangea/dnd";
import { faTrash, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { linkGroup } from "../../../../data/data";
import { SettingElement } from "../../SettingsWindow";
import { Input } from "./AccordionInput";
import { IconButton } from "../../../../components/IconButton";

const AccordionContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
`;

const AccordionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

const AccordionInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

interface GroupItemsProps {
  lgroup: linkGroup;
  // eslint-disable-next-line no-unused-vars
  onChange: (updatedGroup: linkGroup) => void;
}

export const GroupItems = ({ lgroup, onChange }: GroupItemsProps) => {
  const handleLabelChange = (label: string, index: number) => {
    const updatedGroup = { ...lgroup };
    updatedGroup.links[index].label = label;
    onChange(updatedGroup);
  };

  const handleValueChange = (value: string, index: number) => {
    const updatedGroup = { ...lgroup };
    updatedGroup.links[index].value = value;
    onChange(updatedGroup);
  };

  const handleItemDelete = (index: number) => {
    const updatedGroup = { ...lgroup };
    updatedGroup.links.splice(index, 1);
    onChange(updatedGroup);
  };

  return (
    <>
      {lgroup.links.map((link, index) => (
        <Draggable
          key={index}
          draggableId={`${link.value}-${index}`}
          index={index}
        >
          {(provided) => (
            <SettingElement
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <AccordionContentRow>
                <AccordionButtonsWrapper>
                  <IconButton
                    icon={faTrash}
                    onClick={() => handleItemDelete(index)}
                  />
                  <IconButton
                    icon={faGripVertical}
                    style={{ cursor: "grab" }}
                  />
                </AccordionButtonsWrapper>
                <AccordionInputWrapper>
                  <Input
                    label="Label"
                    index={index}
                    value={link.label}
                    onChange={handleLabelChange}
                  />
                  <Input
                    label="URL"
                    index={index}
                    value={link.value}
                    onChange={handleValueChange}
                  />
                </AccordionInputWrapper>
              </AccordionContentRow>
            </SettingElement>
          )}
        </Draggable>
      ))}
    </>
  );
};
