import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DefaultTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="PlanName" source="planName" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
