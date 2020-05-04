import React from "react";
import { FunctionField } from "react-admin";

const render = (record) => record.news.length;

const NbItemsField = (props) => <FunctionField {...props} render={render} />;

NbItemsField.defaultProps = {
  label: "Nb News",
  textAlign: "right",
};

export default NbItemsField;
