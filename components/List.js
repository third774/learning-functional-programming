import React from "react";
import { Appear } from "mdx-deck";
import styled from "styled-components";

export const List = ({ children, ...props }) => (
  <ul>
    <Appear>{children}</Appear>
  </ul>
);

export const ListItem = styled.li`
  text-align: left;
`;
