// in src/comments.js
import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import {
  DateField,
  EditButton,
  NumberField,
  TextField,
  BooleanField,
  useTranslate,
} from "react-admin";

import UserReferenceField from "../users/UserReferenceField";

const useListStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0.5rem 0",
  },
  cardTitleContent: {
    display: "flex",
    flexDirection: "rows",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContent: theme.typography.body1,
  cardContentRow: {
    display: "flex",
    flexDirection: "rows",
    alignItems: "center",
    margin: "0.5rem 0",
  },
}));

const MobileGrid = ({ ids, data, basePath }) => {
  const translate = useTranslate();
  const classes = useListStyles();
  return (
    <div style={{ margin: "1em" }}>
      {ids.map((id) => (
        <Card key={id} className={classes.card}>
          <CardHeader
            title={
              <div className={classes.cardTitleContent}>
                <span>
                  {translate("resources.commands.name", 1)}
                  :&nbsp;
                  {/* <TextField record={data[id]} source="reference" /> */}
                </span>
                {/* <EditButton
                  resource="commands"
                  basePath={basePath}
                  record={data[id]}
                /> */}
              </div>
            }
          />
          <CardContent className={classes.cardContent}>
            <span className={classes.cardContentRow}>
              {translate("resources.users.name", 1)}:&nbsp;
              <UserReferenceField record={data[id]} basePath={basePath} />
            </span>
            <span className={classes.cardContentRow}>
              {translate("resources.reviews.fields.date")}:&nbsp;
              <DateField record={data[id]} source="publishedAt" showTime />
            </span>
            <span className={classes.cardContentRow}>
              {translate("resources.commands.fields.status")}
              :&nbsp;
              <TextField source="verdict" record={data[id]} />
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

MobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default MobileGrid;
