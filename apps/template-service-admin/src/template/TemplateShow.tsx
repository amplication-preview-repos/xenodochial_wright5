import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TEMPLATE_TITLE_FIELD } from "./TemplateTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TemplateData" source="templateData" />
        <TextField label="TemplateName" source="templateName" />
        <TextField label="TemplateSize" source="templateSize" />
        <TextField label="TemplateUUID" source="templateUuid" />
        <TextField label="Thumbnail" source="thumbnail" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="GeneratedTemplate"
          target="templateId"
          label="GeneratedTemplates"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="GeneratedImage" source="generatedImage" />
            <TextField label="ID" source="id" />
            <TextField label="RequestData" source="requestData" />
            <ReferenceField
              label="Template"
              source="template.id"
              reference="Template"
            >
              <TextField source={TEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
