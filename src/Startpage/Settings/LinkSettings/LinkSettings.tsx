import React from "react";

import styled from "@emotion/styled";

import { linkGroup } from "../../../data/data";
import { SettingsLabel } from "../SettingsWindow";
import { Accordion } from "./Accordion";
import { NewGroupForm } from "./NewGroupForm";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

interface LinkSettingsProps {
  linkGroups: linkGroup[];
  // eslint-disable-next-line no-unused-vars
  setLinkGroups: (value: linkGroup[]) => void;
}

export const GeneralSettingsContent = styled.div`
  width: 100%;
`;

const AccordionWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 85%;
  width: 100%;
`;

const LinkSettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const LinkSettings = ({
  linkGroups,
  setLinkGroups,
}: LinkSettingsProps) => {
  const reorderLinks = (
    links: linkGroup[],
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

    const reorderedGroups = reorderLinks(
      linkGroups,
      result.source.index,
      result.destination.index,
    );

    setLinkGroups(reorderedGroups);
  };
  return (
    <GeneralSettingsContent>
      <SettingsLabel>Links</SettingsLabel>
      <LinkSettingsWrapper>
        <AccordionWrapper>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="groupList">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Accordion onChange={setLinkGroups} linkGroups={linkGroups} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </AccordionWrapper>
        <NewGroupForm linkGroups={linkGroups} setLinkGroups={setLinkGroups} />
      </LinkSettingsWrapper>
    </GeneralSettingsContent>
  );
};
