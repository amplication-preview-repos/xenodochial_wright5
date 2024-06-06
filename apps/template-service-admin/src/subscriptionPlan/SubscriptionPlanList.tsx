import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SubscriptionPlanList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SubscriptionPlans"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="JsonPath" source="jsonPath" />
        <TextField label="PreviewPath" source="previewPath" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Width" source="width" />
      </Datagrid>
    </List>
  );
};
