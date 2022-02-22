import { FormWithCrudOperationWhereInput } from "./FormWithCrudOperationWhereInput";
import { FormWithCrudOperationOrderByInput } from "./FormWithCrudOperationOrderByInput";

export type FormWithCrudOperationFindManyArgs = {
  where?: FormWithCrudOperationWhereInput;
  orderBy?: FormWithCrudOperationOrderByInput;
  skip?: number;
  take?: number;
};
