import React, { Fragment } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { linkToRecord, FunctionField, DateField } from "react-admin";
import rowStyle from "./rowStyle";

// import AvatarField from '../visitors/AvatarField';

const useStyles = makeStyles({
  root: {
    width: "100vw",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  inline: {
    display: "inline",
  },
});

const ReviewMobileList = ({ basePath, data, ids, loading, total }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    (loading || total > 0) && (
      <List className={classes.root}>
        {ids.map((id, index) => {
          const style = rowStyle(id, theme)(data[id], index);
          return (
            <Link
              to={linkToRecord(basePath, id)}
              className={classes.link}
              key={id}
            >
              <ListItem button style={style}>
                <ListItemText
                  primary={
                    <FunctionField
                      record={data[id]}
                      render={(record) => record.description.slice(0, 50)}
                    />
                  }
                  secondary={<DateField record={data[id]} source="createdAt" />}
                  secondaryTypographyProps={{ noWrap: true }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    )
  );
};

ReviewMobileList.propTypes = {
  basePath: PropTypes.string,
  data: PropTypes.object,
  hasBulkActions: PropTypes.bool.isRequired,
  ids: PropTypes.array,
  leftAvatar: PropTypes.func,
  leftIcon: PropTypes.func,
  linkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onToggleItem: PropTypes.func,
  primaryText: PropTypes.func,
  rightAvatar: PropTypes.func,
  rightIcon: PropTypes.func,
  secondaryText: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  tertiaryText: PropTypes.func,
};

ReviewMobileList.defaultProps = {
  linkType: "edit",
  hasBulkActions: false,
  selectedIds: [],
};

export default ReviewMobileList;
