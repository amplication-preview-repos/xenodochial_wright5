/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { GeneratedTemplateService } from "../generatedTemplate.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GeneratedTemplateCreateInput } from "./GeneratedTemplateCreateInput";
import { GeneratedTemplate } from "./GeneratedTemplate";
import { GeneratedTemplateFindManyArgs } from "./GeneratedTemplateFindManyArgs";
import { GeneratedTemplateWhereUniqueInput } from "./GeneratedTemplateWhereUniqueInput";
import { GeneratedTemplateUpdateInput } from "./GeneratedTemplateUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GeneratedTemplateControllerBase {
  constructor(
    protected readonly service: GeneratedTemplateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GeneratedTemplate })
  @nestAccessControl.UseRoles({
    resource: "GeneratedTemplate",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGeneratedTemplate(
    @common.Body() data: GeneratedTemplateCreateInput
  ): Promise<GeneratedTemplate> {
    return await this.service.createGeneratedTemplate({
      data: {
        ...data,

        template: data.template
          ? {
              connect: data.template,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        generatedImage: true,
        id: true,
        requestData: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GeneratedTemplate] })
  @ApiNestedQuery(GeneratedTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GeneratedTemplate",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async generatedTemplates(
    @common.Req() request: Request
  ): Promise<GeneratedTemplate[]> {
    const args = plainToClass(GeneratedTemplateFindManyArgs, request.query);
    return this.service.generatedTemplates({
      ...args,
      select: {
        createdAt: true,
        generatedImage: true,
        id: true,
        requestData: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GeneratedTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneratedTemplate",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async generatedTemplate(
    @common.Param() params: GeneratedTemplateWhereUniqueInput
  ): Promise<GeneratedTemplate | null> {
    const result = await this.service.generatedTemplate({
      where: params,
      select: {
        createdAt: true,
        generatedImage: true,
        id: true,
        requestData: true,

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GeneratedTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneratedTemplate",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGeneratedTemplate(
    @common.Param() params: GeneratedTemplateWhereUniqueInput,
    @common.Body() data: GeneratedTemplateUpdateInput
  ): Promise<GeneratedTemplate | null> {
    try {
      return await this.service.updateGeneratedTemplate({
        where: params,
        data: {
          ...data,

          template: data.template
            ? {
                connect: data.template,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          generatedImage: true,
          id: true,
          requestData: true,

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GeneratedTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GeneratedTemplate",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGeneratedTemplate(
    @common.Param() params: GeneratedTemplateWhereUniqueInput
  ): Promise<GeneratedTemplate | null> {
    try {
      return await this.service.deleteGeneratedTemplate({
        where: params,
        select: {
          createdAt: true,
          generatedImage: true,
          id: true,
          requestData: true,

          template: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/generatedImage")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: GeneratedTemplate,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadGeneratedImage(
    @common.Param()
    params: GeneratedTemplateWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<GeneratedTemplate> {
    return this.service.uploadGeneratedImage(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/generatedImage")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadGeneratedImage(
    @common.Param()
    params: GeneratedTemplateWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadGeneratedImage({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/generatedImage")
  @swagger.ApiOkResponse({
    type: GeneratedTemplate,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteGeneratedImage(
    @common.Param()
    params: GeneratedTemplateWhereUniqueInput
  ): Promise<GeneratedTemplate> {
    return this.service.deleteGeneratedImage({
      where: params,
    });
  }
}
