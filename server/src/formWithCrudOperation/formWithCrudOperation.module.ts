import { Module } from "@nestjs/common";
import { FormWithCrudOperationModuleBase } from "./base/formWithCrudOperation.module.base";
import { FormWithCrudOperationService } from "./formWithCrudOperation.service";
import { FormWithCrudOperationController } from "./formWithCrudOperation.controller";
import { FormWithCrudOperationResolver } from "./formWithCrudOperation.resolver";

@Module({
  imports: [FormWithCrudOperationModuleBase],
  controllers: [FormWithCrudOperationController],
  providers: [FormWithCrudOperationService, FormWithCrudOperationResolver],
  exports: [FormWithCrudOperationService],
})
export class FormWithCrudOperationModule {}
