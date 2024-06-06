import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DefaultTemplateServiceBase } from "./base/defaultTemplate.service.base";

@Injectable()
export class DefaultTemplateService extends DefaultTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
