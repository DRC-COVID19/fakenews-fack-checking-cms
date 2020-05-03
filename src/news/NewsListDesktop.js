import React from "react";
import { Datagrid, DateField, TextField } from "react-admin";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import FactCheckReferenceField from "../factchecks/FactCheckReferenceField";
// import CustomerReferenceField from "../visitors/CustomerReferenceField";
// import StarRatingField from "./StarRatingField";

import rowStyle from "./rowStyle";

const useListStyles = makeStyles({
  headerRow: {
    borderLeftColor: "white",
    borderLeftWidth: 5,
    borderLeftStyle: "solid",
  },
  headerCell: {
    padding: "6px 8px 6px 8px",
  },
  rowCell: {
    padding: "6px 8px 6px 8px",
  },
  comment: {
    maxWidth: "18em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

const NewsListDesktop = ({ selectedRow, ...props }) => {
  const classes = useListStyles();
  const theme = useTheme();
  return (
    <Datagrid
      rowClick="edit"
      rowStyle={rowStyle(selectedRow, theme)}
      classes={{
        headerRow: classes.headerRow,
        headerCell: classes.headerCell,
        rowCell: classes.rowCell,
      }}
      optimized
      {...props}
    >
      <DateField source="createdAt" />
      {/* <CustomerReferenceField link={false} /> */}
      <FactCheckReferenceField link={false} />
      {/* <StarRatingField size="small" /> */}
      <TextField source="description" cellClassName={classes.comment} />
      <TextField source="location" />
      <TextField source="status" />
    </Datagrid>
  );
};

export default NewsListDesktop;
