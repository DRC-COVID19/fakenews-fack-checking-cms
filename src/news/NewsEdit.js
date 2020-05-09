import React from "react";
import {
  useEditController,
  useTranslate,
  TextInput,
  SimpleForm,
  DateField,
  TextField,
} from "react-admin";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import FactCheckReferenceField from "../factchecks/FactCheckReferenceField";
import NewsEditToolbar from "./NewsEditToolbar";
import MediaField from "./MediaField";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1em",
  },
  form: {
    [theme.breakpoints.up("xs")]: {
      width: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      marginTop: -30,
    },
  },
  inlineField: {
    display: "inline-block",
    width: "50%",
  },
}));

const NewsEdit = ({ onCancel, ...props }) => {
  const classes = useStyles();
  const controllerProps = useEditController(props);
  const translate = useTranslate();
  if (!controllerProps.record) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h6">
          {translate("resources.news.detail")}
        </Typography>
        <IconButton onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </div>
      <SimpleForm
        className={classes.form}
        basePath={controllerProps.basePath}
        record={controllerProps.record}
        save={controllerProps.save}
        version={controllerProps.version}
        redirect="list"
        resource="news"
        toolbar={<NewsEditToolbar />}
      >
        <DateField source="createdAt" formClassName={classes.inlineField} />
        <TextInput source="description" rowsMax={15} multiline fullWidth />
        <TextInput source="location" rowsMax={15} multiline fullWidth />
        <TextInput source="links" rowsMax={15} multiline fullWidth />
        <TextField source="status" rowsMax={15} multiline fullWidth />
        <MediaField rowsMax={15} multiline fullWidth />
        <FactCheckReferenceField formClassName={classes.inlineField} />
      </SimpleForm>
    </div>
  );
};

export default NewsEdit;
