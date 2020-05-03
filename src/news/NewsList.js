import React, { Fragment, useCallback } from "react";
import classnames from "classnames";
import { BulkDeleteButton, List } from "react-admin";
import { Route, useHistory } from "react-router-dom";
import { Drawer, useMediaQuery, makeStyles } from "@material-ui/core";
import BulkTrueButton from "./BulkTrueButton";
import BulkFalseButton from "./BulkFalseButton";
import NewsListMobile from "./NewsListMobile";
import NewsListDesktop from "./NewsListDesktop";
import NewsFilter from "./NewsFilter";
import NewsEdit from "./NewsEdit";

const ReviewsBulkActionButtons = (props) => (
  <Fragment>
    <BulkTrueButton {...props} />
    <BulkFalseButton {...props} />
    <BulkDeleteButton {...props} />
  </Fragment>
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  list: {
    flexGrow: 1,
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  listWithDrawer: {
    marginRight: 400,
  },
  drawerPaper: {
    zIndex: 100,
  },
}));

const NewsList = (props) => {
  const classes = useStyles();
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const history = useHistory();

  const handleClose = useCallback(() => {
    history.push("/news");
  }, [history]);

  return (
    <div className={classes.root}>
      <Route path="/news/:id">
        {({ match }) => {
          const isMatch = !!(
            match &&
            match.params &&
            match.params.id !== "create"
          );

          return (
            <Fragment>
              <List
                {...props}
                className={classnames(classes.list, {
                  [classes.listWithDrawer]: isMatch,
                })}
                bulkActionButtons={<ReviewsBulkActionButtons />}
                filters={<NewsFilter />}
                perPage={25}
                sort={{ field: "date", order: "DESC" }}
              >
                {isXSmall ? (
                  <NewsListMobile />
                ) : (
                  <NewsListDesktop
                    selectedRow={isMatch && parseInt(match.params.id, 10)}
                  />
                )}
              </List>
              <Drawer
                variant="persistent"
                open={isMatch}
                anchor="right"
                onClose={handleClose}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                {isMatch ? (
                  <NewsEdit
                    id={match.params.id}
                    onCancel={handleClose}
                    {...props}
                  />
                ) : null}
              </Drawer>
            </Fragment>
          );
        }}
      </Route>
    </div>
  );
};

export default NewsList;
