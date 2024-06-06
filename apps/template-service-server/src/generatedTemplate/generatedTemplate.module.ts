import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GeneratedTemplateModuleBase } from "./base/generatedTemplate.module.base";
import { GeneratedTemplateService } from "./generatedTemplate.service";
import { GeneratedTemplateController } from "./generatedTemplate.controller";
import { GeneratedTemplateResolver } from "./generatedTemplate.resolver";

@Module({
  imports: [GeneratedTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [GeneratedTemplateController],
  providers: [GeneratedTemplateService, GeneratedTemplateResolver],
  exports: [GeneratedTemplateService],
})
export class GeneratedTemplateModule {}
