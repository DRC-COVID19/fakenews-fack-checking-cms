import React from "react";
import PropTypes from "prop-types";
import CheckCircle from "@material-ui/icons/CheckCircle";
import {
  Button,
  useUpdateMany,
  useNotify,
  useRedirect,
  useUnselectAll,
  CRUD_UPDATE_MANY,
} from "react-admin";

const BulkTrueButton = ({ selectedIds }) => {
  const notify = useNotify();
  const redirectTo = useRedirect();
  const unselectAll = useUnselectAll("news");

  const [approve, { loading }] = useUpdateMany(
    "news",
    selectedIds,
    { status: "true" },
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
      label="resources.news.action.true"
      onClick={approve}
      disabled={loading}
    >
      <CheckCircle />
    </Button>
  );
};

BulkTrueButton.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BulkTrueButton;
