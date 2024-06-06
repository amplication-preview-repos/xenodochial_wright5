import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DefaultTemplateService } from "./defaultTemplate.service";
import { DefaultTemplateControllerBase } from "./base/defaultTemplate.controller.base";

@swagger.ApiTags("defaultTemplates")
@common.Controller("defaultTemplates")
export class DefaultTemplateController extends DefaultTemplateControllerBase {
  constructor(
    protected readonly service: DefaultTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
