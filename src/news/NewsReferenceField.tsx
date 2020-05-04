import React, { FC } from "react";
import { ReferenceField, TextField } from "react-admin";

// import FullNameField from "./FullNameField";
import { FieldProps } from "../types";

const NewsReferenceField: FC<FieldProps> = (props) => (
  <ReferenceField source="news" reference="News" {...props}>
    <TextField source="description" />
    {/* <FullNameField /> */}
  </ReferenceField>
);

NewsReferenceField.defaultProps = {
  source: "news",
  addLabel: true,
};

export default NewsReferenceField;
