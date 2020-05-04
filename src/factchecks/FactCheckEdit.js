import React from "react";
import {
  AutocompleteInput,
  TextInput,
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  useTranslate,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

import { makeStyles } from "@material-ui/core/styles";

import NewsRelatedToFactCheck from "./NewsRelatedToFactCheck";

const FactCheckTitle = ({ record }) => {
  const translate = useTranslate();
  return (
    <span>
      {translate("resources.factchecks.title", {
        reference: record.slug,
      })}
    </span>
  );
};

const useEditStyles = makeStyles({
  root: { alignItems: "flex-start" },
});

const FactCheckEdit = (props) => {
  const classes = useEditStyles();
  return (
    <Edit
      title={<FactCheckTitle />}
      aside={<NewsRelatedToFactCheck />}
      classes={classes}
      {...props}
    >
      <SimpleForm>
        <DateInput source="publishedAt" />
        <ReferenceInput source="author" reference="User">
          <AutocompleteInput
            optionText={(choice) => `${choice.prenom} ${choice.nom}`}
          />
        </ReferenceInput>
        <SelectInput
          source="verdict"
          choices={[
            { id: "draft", name: "draft" },
            { id: "true", name: "true" },
            { id: "false", name: "false" },
            {
              id: "unknown",
              name: "unknown",
              disabled: true,
            },
          ]}
        />
        <TextInput source="titleQuestion" multiline label="Titre/Question" />
        <TextInput source="claim" multiline />
        <TextInput source="checkedFact" multiline />
        <RichTextInput source="scentificArgument" />
        <TextInput source="links" />
        <TextInput source="media" />
      </SimpleForm>
    </Edit>
  );
};

export default FactCheckEdit;
