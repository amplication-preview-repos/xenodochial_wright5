import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DefaultTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="PlanName" source="planName" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
