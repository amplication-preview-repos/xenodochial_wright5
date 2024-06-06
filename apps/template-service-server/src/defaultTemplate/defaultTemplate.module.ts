import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DefaultTemplateModuleBase } from "./base/defaultTemplate.module.base";
import { DefaultTemplateService } from "./defaultTemplate.service";
import { DefaultTemplateController } from "./defaultTemplate.controller";
import { DefaultTemplateResolver } from "./defaultTemplate.resolver";

@Module({
  imports: [DefaultTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [DefaultTemplateController],
  providers: [DefaultTemplateService, DefaultTemplateResolver],
  exports: [DefaultTemplateService],
})
export class DefaultTemplateModule {}
