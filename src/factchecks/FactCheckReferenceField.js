import React from "react";
import { ReferenceField, TextField } from "react-admin";

const FactCheckReferenceField = (props) => (
  <ReferenceField
    label="Fact Check"
    source="factcheck"
    reference="FactCheck"
    {...props}
  >
    <TextField source="reference" />
  </ReferenceField>
);

FactCheckReferenceField.defaultProps = {
  source: "FactCheck",
  addLabel: true,
};

export default FactCheckReferenceField;
