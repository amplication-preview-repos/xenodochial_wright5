import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GeneratedTemplateService } from "./generatedTemplate.service";
import { GeneratedTemplateControllerBase } from "./base/generatedTemplate.controller.base";

@swagger.ApiTags("generatedTemplates")
@common.Controller("generatedTemplates")
export class GeneratedTemplateController extends GeneratedTemplateControllerBase {
  constructor(
    protected readonly service: GeneratedTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
