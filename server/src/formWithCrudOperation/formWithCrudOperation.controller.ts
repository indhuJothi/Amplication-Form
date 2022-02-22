import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FormWithCrudOperationService } from "./formWithCrudOperation.service";
import { FormWithCrudOperationControllerBase } from "./base/formWithCrudOperation.controller.base";

@swagger.ApiTags("form-with-crud-operations")
@common.Controller("form-with-crud-operations")
export class FormWithCrudOperationController extends FormWithCrudOperationControllerBase {
  constructor(
    protected readonly service: FormWithCrudOperationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
