import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const SubscriptionPlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="JsonPath" source="jsonPath" />
        <TextField label="PreviewPath" source="previewPath" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};
