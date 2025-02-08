import React, { memo, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { dataElem, linkGroup } from "../../../../data/data";
import { GroupItems } from "./AccordionGroupItems";
import { NewLinkForm } from "./AccordionNewLinkForm";
import { IconButton } from "../../../../components/IconButton";

const AccordionItemWrapper = styled.div`
  border: 2px solid var(--default-color);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 99%;
`;

const AccordionButton = styled(IconButton)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center; /* Changed to center for better alignment */
  justify-content: space-between;
  padding: 10px 20px;
  font-size: initial;
  z-index: 10;
  cursor: pointer;

  &:enabled:hover,
  &:focus,
  &:hover {
    animation: none;
    opacity: 1;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow-y: auto;
  overflow-x: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "10px 3% 3%" : "0 3%")};
`;

const AccordionContentButton = styled.button`
  background-color: var(--default-color);
  border: none;
  color: var(--bg-color);
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  width: 100%;
  :enabled:hover {
    animation: circling-shadow-small 2s ease 0s infinite normal;
  }
`;

interface AccordionItemProps {
  lgroup: linkGroup;
  itemKey: string;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  handleGroupChange: (updatedGroup: linkGroup) => void;
  // eslint-disable-next-line no-unused-vars
  toggleAccordion: (key: string) => void;
}

const AccordionItemComponent = ({
  lgroup,
  itemKey,
  isOpen,
  handleGroupChange,
  toggleAccordion,
}: AccordionItemProps) => {
  const groupItems = useMemo(
    () => <GroupItems lgroup={lgroup} onChange={handleGroupChange} />,
    [lgroup, handleGroupChange],
  );

  const [isAddingLink, setAddingLink] = useState<boolean>(false);
  const [newLink, setNewLink] = useState<dataElem>({ label: "", value: "" });
  const [addLinkLabel, setAddLinkLabel] = useState<"Add Link" | "Close">(
    "Add Link",
  );

  const toggleNewLinkForm = () => {
    setAddingLink((prev) => !prev);
    setAddLinkLabel((prev) => (prev === "Add Link" ? "Close" : "Add Link"));
    setNewLink({ label: "", value: "" });
  };

  const handleToggleAccordion = (itemKey: string) => {
    if (isAddingLink) {
      toggleNewLinkForm();
    }
    toggleAccordion(itemKey);
  };

  const reorderLinks = (
    links: dataElem[],
    startIndex: number,
    endIndex: number,
  ) => {
    const result = Array.from(links);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const reorderedLinks = reorderLinks(
      lgroup.links,
      result.source.index,
      result.destination.index,
    );

    handleGroupChange({ ...lgroup, links: reorderedLinks });
  };

  const handleAddLink = () => {
    const updatedGroup = {
      ...lgroup,
      links: [newLink, ...lgroup.links],
    };
    handleGroupChange(updatedGroup);
    toggleNewLinkForm();
  };

  return (
    <AccordionItemWrapper>
      <AccordionButton
        icon={faAngleDown}
        onClick={() => handleToggleAccordion(itemKey)}
      >
        {lgroup.title || "Untitled"}
      </AccordionButton>
      <AccordionContent isOpen={isOpen}>
        <AccordionContentButton onClick={toggleNewLinkForm}>
          {addLinkLabel}
        </AccordionContentButton>
        {isAddingLink && (
          <NewLinkForm
            newLink={newLink}
            onChange={setNewLink}
            onAdd={handleAddLink}
          />
        )}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="linkList">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {groupItems}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </AccordionContent>
    </AccordionItemWrapper>
  );
};

export const AccordionItem = memo(AccordionItemComponent);
AccordionItem.displayName = "AccordionItem";
