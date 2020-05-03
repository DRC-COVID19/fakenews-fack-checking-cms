import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { useTranslate, useUpdate, useNotify, useRedirect } from "react-admin";

/**
 * This custom button demonstrate using useUpdate to update data
 */
const TrueButton = ({ record }) => {
  const translate = useTranslate();
  const notify = useNotify();
  const redirectTo = useRedirect();

  const [approve, { loading }] = useUpdate(
    "news",
    record.id,
    { status: "true" },
    record,
    {
      undoable: true,
      onSuccess: () => {
        notify(
          "resources.news.notification.approved_success",
          "info",
          {},
          true
        );
        redirectTo("/news");
      },
      onFailure: () => {
        notify("resources.news.notification.approved_error", "warning");
      },
    }
  );
  return record && record.status === "draft" ? (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      onClick={approve}
      disabled={loading}
    >
      <CheckCircle
        color="primary"
        style={{ paddingRight: "0.5em", color: "green" }}
      />
      {translate("resources.news.action.true")}
    </Button>
  ) : (
    <span />
  );
};

TrueButton.propTypes = {
  record: PropTypes.object,
};

export default TrueButton;
