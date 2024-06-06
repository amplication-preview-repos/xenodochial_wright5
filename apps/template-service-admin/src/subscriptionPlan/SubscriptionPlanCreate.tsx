import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionPlanCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Height" source="height" />
        <TextInput label="JsonPath" source="jsonPath" />
        <TextInput label="PreviewPath" source="previewPath" />
        <NumberInput step={1} label="Width" source="width" />
      </SimpleForm>
    </Create>
  );
};
