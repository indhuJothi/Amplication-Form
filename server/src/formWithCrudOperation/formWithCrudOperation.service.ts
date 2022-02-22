import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FormWithCrudOperationServiceBase } from "./base/formWithCrudOperation.service.base";

@Injectable()
export class FormWithCrudOperationService extends FormWithCrudOperationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
