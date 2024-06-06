import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DefaultTemplateResolverBase } from "./base/defaultTemplate.resolver.base";
import { DefaultTemplate } from "./base/DefaultTemplate";
import { DefaultTemplateService } from "./defaultTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DefaultTemplate)
export class DefaultTemplateResolver extends DefaultTemplateResolverBase {
  constructor(
    protected readonly service: DefaultTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
