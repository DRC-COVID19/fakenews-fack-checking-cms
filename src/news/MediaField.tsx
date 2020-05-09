import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FieldProps, News } from "../types";
import MuiGridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles({
  root: { width: 25, maxWidth: 25, maxHeight: 25 },
  embedResponsive: {
    position: "relative",
    display: "block",
    width: "100%",
    padding: 0,
    overflow: "hidden",
  },
  embedResponsiveItem16by9: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
    objectFit: "cover",
    "&:before": {
      paddingTop: "56.25%",
    },
  },
  list: {
    listStyle: "none",
  },
  gridList: {
    width: "100%",
    margin: 0,
  },
});

const MediaField: FC<FieldProps<News>> = ({ record }) => {
  const classes = useStyles();
  return record?.media ? (
    <MuiGridList className={classes.gridList} cols={1}>
      {record.media.map((mediaLink: string) => (
        <GridListTile key={mediaLink}>
          <a href={mediaLink} target="_blank" rel="noopener noreferrer">
            <img
              src={mediaLink}
              className={classes.embedResponsiveItem16by9}
              alt=""
            />
          </a>
        </GridListTile>
      ))}
    </MuiGridList>
  ) : null;
};

MediaField.defaultProps = {
  addLabel: true,
  label: "Media",
};

export default MediaField;
