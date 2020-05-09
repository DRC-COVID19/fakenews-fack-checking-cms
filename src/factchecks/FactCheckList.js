import React, { Fragment } from "react";
import {
  AutocompleteInput,
  Datagrid,
  DateField,
  DateInput,
  EditButton,
  Filter,
  List,
  SearchInput,
  TextField,
  ReferenceInput,
} from "react-admin";
import {
  makeStyles,
  useMediaQuery,
  Divider,
  Tabs,
  Tab,
  Chip,
} from "@material-ui/core";

import NbItemsField from "./NbItemsField";
import UserReferenceField from "../users/UserReferenceField";
import MobileGrid from "./MobileGrid";

const FactCheckFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <ReferenceInput source="author" reference="User">
      <AutocompleteInput
        optionText={(choice) =>
          choice.prenom && choice.nom ? `${choice.prenom} ${choice.nom}` : ""
        }
      />
    </ReferenceInput>
    <DateInput source="date_gte" />
    <DateInput source="date_lte" />
  </Filter>
);

const useDatagridStyles = makeStyles({
  total: { fontWeight: "bold" },
});

class TabbedDatagrid extends React.Component {
  tabs = [
    { id: "draft", name: "draft" },
    { id: "true", name: "true" },
    { id: "false", name: "false" },
  ];

  state = { all: [], draft: [], true: [], false: [] };

  static getDerivedStateFromProps(props, state) {
    if (props.ids !== state[props.filterValues.verdict]) {
      return { ...state, [props.filterValues.verdict]: props.ids };
    }
    return null;
  }

  handleChange = (event, value) => {
    const { filterValues, setFilters } = this.props;
    setFilters({ ...filterValues, verdict: value });
  };

  render() {
    const { isXSmall, classes, filterValues, ...props } = this.props;
    return (
      <Fragment>
        <Tabs
          variant="fullWidth"
          centered
          value={filterValues.verdict}
          indicatorColor="primary"
          onChange={this.handleChange}
        >
          {this.tabs.map((choice) => (
            <Tab
              key={choice.id}
              icon={<Chip label={this.state[choice.id].length} />}
              label={choice.name}
              value={choice.id}
            />
          ))}
        </Tabs>
        <Divider />
        {isXSmall ? (
          <MobileGrid {...props} ids={this.state[filterValues.verdict]} />
        ) : (
          <div>
            {filterValues.verdict === "draft" && (
              <Datagrid
                {...props}
                ids={this.state.draft}
                optimized
                rowClick="edit"
              >
                <DateField source="publishedAt" showTime />
                <TextField source="claim" />
                <TextField source="checkedFact" />
                <UserReferenceField />
                <NbItemsField />
              </Datagrid>
            )}
            {filterValues.verdict === "true" && (
              <Datagrid {...props} ids={this.state.true}>
                <DateField source="publishedAt" showTime />
                <TextField source="claim" />
                <TextField source="checkedFact" />
                <UserReferenceField />
                <NbItemsField />
                <EditButton />
              </Datagrid>
            )}
            {filterValues.verdict === "false" && (
              <Datagrid {...props} ids={this.state.false}>
                <DateField source="publishedAt" showTime />
                <TextField source="claim" />
                <TextField source="checkedFact" />
                <UserReferenceField />
                <NbItemsField />
                <EditButton />
              </Datagrid>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

const StyledTabbedDatagrid = (props) => {
  const classes = useDatagridStyles();
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  return <TabbedDatagrid classes={classes} isXSmall={isXSmall} {...props} />;
};

const FactCheckList = ({ classes, ...props }) => (
  <List
    {...props}
    filterDefaultValues={{ verdict: "draft" }}
    sort={{ field: "publishedAt", order: "DESC" }}
    perPage={25}
    filters={<FactCheckFilter />}
  >
    <StyledTabbedDatagrid />
  </List>
);

export default FactCheckList;
