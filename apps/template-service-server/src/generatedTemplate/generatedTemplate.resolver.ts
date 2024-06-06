import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GeneratedTemplateResolverBase } from "./base/generatedTemplate.resolver.base";
import { GeneratedTemplate } from "./base/GeneratedTemplate";
import { GeneratedTemplateService } from "./generatedTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GeneratedTemplate)
export class GeneratedTemplateResolver extends GeneratedTemplateResolverBase {
  constructor(
    protected readonly service: GeneratedTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
