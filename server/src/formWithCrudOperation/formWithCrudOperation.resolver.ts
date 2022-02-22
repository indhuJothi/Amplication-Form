import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FormWithCrudOperationResolverBase } from "./base/formWithCrudOperation.resolver.base";
import { FormWithCrudOperation } from "./base/FormWithCrudOperation";
import { FormWithCrudOperationService } from "./formWithCrudOperation.service";

@graphql.Resolver(() => FormWithCrudOperation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FormWithCrudOperationResolver extends FormWithCrudOperationResolverBase {
  constructor(
    protected readonly service: FormWithCrudOperationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
