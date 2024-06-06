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
  GeneratedTemplate as PrismaGeneratedTemplate,
  Template as PrismaTemplate,
} from "@prisma/client";

import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class GeneratedTemplateServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(
    args: Omit<Prisma.GeneratedTemplateCountArgs, "select">
  ): Promise<number> {
    return this.prisma.generatedTemplate.count(args);
  }

  async generatedTemplates<T extends Prisma.GeneratedTemplateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateFindManyArgs>
  ): Promise<PrismaGeneratedTemplate[]> {
    return this.prisma.generatedTemplate.findMany<Prisma.GeneratedTemplateFindManyArgs>(
      args
    );
  }
  async generatedTemplate<T extends Prisma.GeneratedTemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateFindUniqueArgs>
  ): Promise<PrismaGeneratedTemplate | null> {
    return this.prisma.generatedTemplate.findUnique(args);
  }
  async createGeneratedTemplate<T extends Prisma.GeneratedTemplateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateCreateArgs>
  ): Promise<PrismaGeneratedTemplate> {
    return this.prisma.generatedTemplate.create<T>(args);
  }
  async updateGeneratedTemplate<T extends Prisma.GeneratedTemplateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateUpdateArgs>
  ): Promise<PrismaGeneratedTemplate> {
    return this.prisma.generatedTemplate.update<T>(args);
  }
  async deleteGeneratedTemplate<T extends Prisma.GeneratedTemplateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateDeleteArgs>
  ): Promise<PrismaGeneratedTemplate> {
    return this.prisma.generatedTemplate.delete(args);
  }

  async uploadGeneratedImage<T extends Prisma.GeneratedTemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaGeneratedTemplate> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "generatedImage";
    const generatedImage = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.generatedTemplate.update({
      where: args.where,

      data: {
        generatedImage: generatedImage as InputJsonValue,
      },
    });
  }

  async downloadGeneratedImage<
    T extends Prisma.GeneratedTemplateFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateFindUniqueArgs>
  ): Promise<FileDownload> {
    const { generatedImage } =
      await this.prisma.generatedTemplate.findUniqueOrThrow({
        where: args.where,
      });

    return await this.localStorageService.downloadFile(
      generatedImage as unknown as LocalStorageFile
    );
  }

  async deleteGeneratedImage<T extends Prisma.GeneratedTemplateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneratedTemplateFindUniqueArgs>
  ): Promise<PrismaGeneratedTemplate> {
    const { generatedImage } =
      await this.prisma.generatedTemplate.findUniqueOrThrow({
        where: args.where,
      });

    await this.localStorageService.deleteFile(
      generatedImage as unknown as LocalStorageFile
    );

    return await this.prisma.generatedTemplate.update({
      where: args.where,

      data: {
        generatedImage: Prisma.DbNull,
      },
    });
  }

  async getTemplate(parentId: string): Promise<PrismaTemplate | null> {
    return this.prisma.generatedTemplate
      .findUnique({
        where: { id: parentId },
      })
      .template();
  }
}