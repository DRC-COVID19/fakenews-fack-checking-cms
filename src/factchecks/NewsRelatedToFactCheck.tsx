import React, { FC } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link, useTranslate, useQueryWithStore } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import { FieldProps, AppState, FactCheckNewsItem, News } from "../types";

const useStyles = makeStyles({
  container: { minWidth: "35em", marginLeft: "1em" },
  rightAlignedCell: { textAlign: "right" },
  boldCell: { fontWeight: "bold" },
});

const NewsRelatedToFactCheck: FC<FieldProps<FactCheckNewsItem>> = ({
  record,
}) => {
  const classes = useStyles();
  const translate = useTranslate();

  const { loaded, data: news } = useQueryWithStore(
    {
      type: "getMany",
      resource: "news",
      payload: {
        ids: record ? record.news.map((item: News) => item._id) : [],
      },
    },
    {},
    (state: AppState) => {
      const newsIds = record ? record.news.map((item) => item._id) : [];
      return newsIds
        .map<News>(
          (newsId: string) => state.admin.resources.news.data[newsId] as News
        )
        .filter((r) => typeof r !== "undefined")
        .reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {} as { [key: string]: News });
    }
  );

  if (!loaded || !record) return null;

  return (
    <Paper className={classes.container} elevation={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              {translate("resources.news.fields.description")}
            </TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {translate("resources.news.fields.location")}
            </TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {translate("resources.news.fields.status")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record.news.map(
            (item: any) =>
              news[item._id] && (
                <TableRow key={item._id}>
                  <TableCell>
                    <Link to={`/news/${item._id}`}>
                      {news[item._id].description.trim(0, 50)}
                    </Link>
                  </TableCell>
                  <TableCell className={classes.rightAlignedCell}>
                    {news[item._id].location}
                  </TableCell>
                  <TableCell className={classes.rightAlignedCell}>
                    {news[item._id].status}
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default NewsRelatedToFactCheck;
