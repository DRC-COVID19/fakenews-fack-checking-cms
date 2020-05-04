import React, { FC } from "react";
import { ReferenceField } from "react-admin";

import FullNameField from "./FullNameField";
import { FieldProps } from "../types";

const UserReferenceField: FC<FieldProps> = (props) => (
  <ReferenceField source="author" reference="User" {...props}>
    <FullNameField />
  </ReferenceField>
);

UserReferenceField.defaultProps = {
  source: "author",
  addLabel: true,
};

export default UserReferenceField;
