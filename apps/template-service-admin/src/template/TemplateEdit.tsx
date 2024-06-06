import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { GeneratedTemplateTitle } from "../generatedTemplate/GeneratedTemplateTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { UserTitle } from "../user/UserTitle";

export const TemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="generatedTemplates"
          reference="GeneratedTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GeneratedTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="TemplateName" source="templateName" />
        <TextInput label="TemplateSize" source="templateSize" />
        <TextInput label="TemplateUUID" source="templateUuid" />
        <div />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
