import { FormWithCrudOperation as TFormWithCrudOperation } from "../api/formWithCrudOperation/FormWithCrudOperation";

export const FORMWITHCRUDOPERATION_TITLE_FIELD = "firstName";

export const FormWithCrudOperationTitle = (
  record: TFormWithCrudOperation
): string => {
  return record.firstName || record.id;
};
