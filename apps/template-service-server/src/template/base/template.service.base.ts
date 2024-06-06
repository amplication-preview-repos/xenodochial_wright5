/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Template as PrismaTemplate,
  GeneratedTemplate as PrismaGeneratedTemplate,
  Project as PrismaProject,
  User as PrismaUser,
} from "@prisma/client";

import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class TemplateServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(args: Omit<Prisma.TemplateCountArgs, "select">): Promise<number> {
    return this.prisma.template.count(args);
  }

  async templates<T extends Prisma.TemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindManyArgs>
  ): Promise<PrismaTemplate[]> {
    return this.prisma.template.findMany<Prisma.TemplateFindManyArgs>(args);
  }
  async template<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<PrismaTemplate | null> {
    return this.prisma.template.findUnique(args);
  }
  async createTemplate<T extends Prisma.TemplateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateCreateArgs>
  ): Promise<PrismaTemplate> {
    return this.prisma.template.create<T>(args);
  }
  async updateTemplate<T extends Prisma.TemplateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateUpdateArgs>
  ): Promise<PrismaTemplate> {
    return this.prisma.template.update<T>(args);
  }
  async deleteTemplate<T extends Prisma.TemplateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateDeleteArgs>
  ): Promise<PrismaTemplate> {
    return this.prisma.template.delete(args);
  }

  async uploadTemplateData<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaTemplate> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "templateData";
    const templateData = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.template.update({
      where: args.where,

      data: {
        templateData: templateData as InputJsonValue,
      },
    });
  }

  async downloadTemplateData<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<FileDownload> {
    const { templateData } = await this.prisma.template.findUniqueOrThrow({
      where: args.where,
    });

    return await this.localStorageService.downloadFile(
      templateData as unknown as LocalStorageFile
    );
  }

  async deleteTemplateData<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<PrismaTemplate> {
    const { templateData } = await this.prisma.template.findUniqueOrThrow({
      where: args.where,
    });

    await this.localStorageService.deleteFile(
      templateData as unknown as LocalStorageFile
    );

    return await this.prisma.template.update({
      where: args.where,

      data: {
        templateData: Prisma.DbNull,
      },
    });
  }

  async uploadThumbnail<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaTemplate> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "thumbnail";
    const thumbnail = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.template.update({
      where: args.where,

      data: {
        thumbnail: thumbnail as InputJsonValue,
      },
    });
  }

  async downloadThumbnail<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<FileDownload> {
    const { thumbnail } = await this.prisma.template.findUniqueOrThrow({
      where: args.where,
    });

    return await this.localStorageService.downloadFile(
      thumbnail as unknown as LocalStorageFile
    );
  }

  async deleteThumbnail<T extends Prisma.TemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TemplateFindUniqueArgs>
  ): Promise<PrismaTemplate> {
    const { thumbnail } = await this.prisma.template.findUniqueOrThrow({
      where: args.where,
    });

    await this.localStorageService.deleteFile(
      thumbnail as unknown as LocalStorageFile
    );

    return await this.prisma.template.update({
      where: args.where,

      data: {
        thumbnail: Prisma.DbNull,
      },
    });
  }

  async findGeneratedTemplates(
    parentId: string,
    args: Prisma.GeneratedTemplateFindManyArgs
  ): Promise<PrismaGeneratedTemplate[]> {
    return this.prisma.template
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .generatedTemplates(args);
  }

  async getProject(parentId: string): Promise<PrismaProject | null> {
    return this.prisma.template
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.template
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}