import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Height" source="height" />
        <TextInput label="JsonPath" source="jsonPath" />
        <TextInput label="PreviewPath" source="previewPath" />
        <NumberInput step={1} label="Width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
