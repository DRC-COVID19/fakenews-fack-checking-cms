import React from "react";
import PropTypes from "prop-types";
import Report from "@material-ui/icons/Report";
import {
  Button,
  useUpdateMany,
  useNotify,
  useRedirect,
  useUnselectAll,
  CRUD_UPDATE_MANY,
} from "react-admin";

const BulkFalseButton = ({ selectedIds }) => {
  const notify = useNotify();
  const redirectTo = useRedirect();
  const unselectAll = useUnselectAll("news");

  const [reject, { loading }] = useUpdateMany(
    "news",
    selectedIds,
    { status: "false" },
    {
      action: CRUD_UPDATE_MANY,
      undoable: true,
      onSuccess: () => {
        notify(
          "resources.news.notification.approved_success",
          "info",
          {},
          true
        );
        redirectTo("/news");
        unselectAll();
      },
      onFailure: () => {
        notify("resources.news.notification.approved_error", "warning");
      },
    }
  );

  return (
    <Button
      label="resources.news.action.false"
      onClick={reject}
      disabled={loading}
    >
      <Report />
    </Button>
  );
};

BulkFalseButton.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BulkFalseButton;
