import React, { FC } from "react";
import { useQuery } from "react-admin";
import { Chip } from "@material-ui/core";

const TabCountField = ({ verdict }) => {
  const payload = {
    pagination: {},
    sort: {},
    filter: { verdict },
  };

  const { data: checks, loading, error } = useQuery({
    type: "getList",
    resource: "checks",
    payload,
  });
  if (loading || error || !checks) return null;
  return <Chip label={checks.length} />;
};
export default TabCountField;
