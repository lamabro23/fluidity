import React, { useState } from "react";
import styled from "@emotion/styled";
import { OptionTextInput } from "../../../components/OptionTextInput";
import { IconButton } from "../../../components/IconButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { linkGroup } from "../../../data/data";

const AddGroupButton = styled.button`
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

const AddGroupInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AddGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface NewGroupFormProps {
  linkGroups: linkGroup[];
  // eslint-disable-next-line no-unused-vars
  setLinkGroups: (value: linkGroup[]) => void;
}

export const NewGroupForm = ({
  linkGroups,
  setLinkGroups,
}: NewGroupFormProps) => {
  const [isAddingGroup, setAddingGroup] = useState<boolean>(false);
  const [buttonLabel, setButtonLabel] = useState<"Add Group" | "Cancel">(
    "Add Group",
  );
  const [newGroupValue, setNewGroupValue] = useState<string>("");

  const toggleAddingGroup = () => {
    setAddingGroup((prev) => !prev);
    setButtonLabel((prev) => (prev === "Add Group" ? "Cancel" : "Add Group"));
  };

  return (
    <AddGroupWrapper>
      {isAddingGroup && (
        <AddGroupInputWrapper>
          <OptionTextInput
            value={newGroupValue}
            onChange={(value: string) => setNewGroupValue(value)}
            placeholder={"New Group Name"}
          />
          <IconButton
            disabled={newGroupValue === ""}
            icon={faCheck}
            onClick={() => {
              setLinkGroups([
                ...linkGroups,
                { title: newGroupValue, links: [] },
              ]);
              setNewGroupValue("");
              toggleAddingGroup();
            }}
          />
        </AddGroupInputWrapper>
      )}
      <AddGroupButton onClick={toggleAddingGroup}>{buttonLabel}</AddGroupButton>
    </AddGroupWrapper>
  );
};
