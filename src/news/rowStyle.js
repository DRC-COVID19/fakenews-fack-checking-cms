import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";

const rowStyle = (selectedRow, theme) => (record, index, defaultStyle = {}) => {
  let style = defaultStyle;
  if (selectedRow === record.id) {
    style = {
      ...style,
      backgroundColor: theme.palette.action.selected,
    };
  }
  if (record.status === "true")
    return {
      ...style,
      borderLeftColor: green[500],
      borderLeftWidth: 5,
      borderLeftStyle: "solid",
    };
  if (record.status === "draft")
    return {
      ...style,
      borderLeftColor: orange[500],
      borderLeftWidth: 5,
      borderLeftStyle: "solid",
    };
  if (record.status === "false")
    return {
      ...style,
      borderLeftColor: red[500],
      borderLeftWidth: 5,
      borderLeftStyle: "solid",
    };
  return style;
};

export default rowStyle;
