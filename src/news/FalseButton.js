import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Report from "@material-ui/icons/Report";
import { useTranslate, useUpdate, useNotify, useRedirect } from "react-admin";

/**
 * This custom button demonstrate using a custom action to update data
 */
const FalseButton = ({ record }) => {
  const translate = useTranslate();
  const notify = useNotify();
  const redirectTo = useRedirect();

  const [reject, { loading }] = useUpdate(
    "news",
    record.id,
    { status: "false" },
    record,
    {
      undoable: true,
      onSuccess: () => {
        notify(
          "resources.news.notification.rejected_success",
          "info",
          {},
          true
        );
        redirectTo("/news");
      },
      onFailure: () => {
        notify("resources.news.notification.rejected_error", "warning");
      },
    }
  );

  return record && record.status === "draft" ? (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      onClick={reject}
      disabled={loading}
    >
      <Report color="primary" style={{ paddingRight: "0.5em", color: "red" }} />
      {translate("resources.news.action.false")}
    </Button>
  ) : (
    <span />
  );
};

FalseButton.propTypes = {
  record: PropTypes.object,
};

export default FalseButton;
