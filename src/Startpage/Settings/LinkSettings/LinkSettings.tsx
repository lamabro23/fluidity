import React from "react";

import styled from "@emotion/styled";

import { OptionTextArea } from "./OptionTextArea";
import { linkGroup } from "../../../data/data";
import { SettingsLabel } from "../SettingsWindow";

interface props {
  linkGroups: linkGroup[];
  // eslint-disable-next-line no-unused-vars
  setLinkGroups: (value: linkGroup[]) => void;
}
export const GeneralSettingsContent = styled.div`
  width: 100%;
`;

export const LinkSettings = ({ linkGroups, setLinkGroups }: props) => {
  return (
    <GeneralSettingsContent>
      <SettingsLabel>Links</SettingsLabel>
      <OptionTextArea onChange={setLinkGroups} initialValue={linkGroups} />
    </GeneralSettingsContent>
  );
};
