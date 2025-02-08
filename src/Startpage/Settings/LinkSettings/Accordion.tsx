import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { linkGroup } from "../../../data/data";
import { Draggable } from "@hello-pangea/dnd";
import { AccordionItem } from "./Accordion/AccordionItem";
import { IconButton } from "../../../components/IconButton";
import { faGripVertical, faTrash } from "@fortawesome/free-solid-svg-icons";

const AccordionItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface AccordionProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: linkGroup[]) => void;
  linkGroups: linkGroup[];
}

export const Accordion = ({ onChange, linkGroups }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [isAnyOpen, setIsAnyOpen] = useState<boolean>(false);

  const toggleAccordion = useCallback((key: string) => {
    setOpenItem((prevOpenItem) => {
      const newOpenItem = prevOpenItem === key ? null : key;
      setIsAnyOpen(newOpenItem !== null);
      return newOpenItem;
    });
  }, []);

  const parseTitle = (title: string) => {
    return title.trim().replace(/\s/g, "-").replace("'", "-").toLowerCase();
  };

  const handleGroupDelete = (itemKey: string) => {
    const newLinkGroups = linkGroups.filter((_, index) => {
      const currentItemKey = `${parseTitle(linkGroups[index].title)}-${index}`;
      return currentItemKey !== itemKey;
    });
    onChange(newLinkGroups);
  };

  return (
    <>
      {linkGroups.map((lgroup, index) => {
        const itemKey = `${parseTitle(lgroup.title)}-${index}`;
        const isOpen = openItem === itemKey;

        const handleGroupChange = (value: linkGroup) => {
          const newLinkGroups = linkGroups.map((group) =>
            group.title === lgroup.title ? value : group,
          );
          onChange(newLinkGroups);
        };

        return (
          <Draggable
            key={itemKey}
            draggableId={itemKey}
            index={index}
            isDragDisabled={isAnyOpen}
          >
            {(provided) => (
              <AccordionItemWrapper
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <IconButton
                  icon={faTrash}
                  onClick={() => handleGroupDelete(itemKey)}
                />
                <IconButton
                  icon={faGripVertical}
                  style={{ cursor: isAnyOpen ? "default" : "grab" }}
                  disabled={isAnyOpen}
                />
                <AccordionItem
                  key={itemKey}
                  lgroup={lgroup}
                  itemKey={itemKey}
                  isOpen={isOpen}
                  handleGroupChange={handleGroupChange}
                  toggleAccordion={toggleAccordion}
                />
              </AccordionItemWrapper>
            )}
          </Draggable>
        );
      })}
    </>
  );
};
