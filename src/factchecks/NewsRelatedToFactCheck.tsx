import React, { FC } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link, useTranslate, useQuery } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import { FieldProps, FactCheckNewsItem, News } from "../types";

const useStyles = makeStyles({
  container: { minWidth: "35em", marginLeft: "1em" },
  rightAlignedCell: { textAlign: "right" },
  boldCell: { fontWeight: "bold" },
});

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error...</div>;

const NewsRelatedToFactCheck: FC<FieldProps<FactCheckNewsItem>> = ({
  record,
}) => {
  const classes = useStyles();
  const translate = useTranslate();

  const payload = {
    ids: record?.news || [],
  };

  const { data: news, loading, error } = useQuery({
    type: "getMany",
    resource: "news",
    payload,
  });

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!news || !record) return null;

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
          {news.map((item: News) => (
            <TableRow key={item._id}>
              <TableCell>
                <Link to={`/news/${item._id}`}>
                  {item.description.slice(0, 140)}
                </Link>
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {item.location}
              </TableCell>
              <TableCell className={classes.rightAlignedCell}>
                {item.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default NewsRelatedToFactCheck;
