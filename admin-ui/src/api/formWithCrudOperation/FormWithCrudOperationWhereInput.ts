import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FormWithCrudOperationWhereInput = {
  countries?: "India" | "America" | "Germany" | "Australia";
  email?: StringFilter;
  firstName?: StringNullableFilter;
  gender?: "Male" | "Female";
  id?: StringFilter;
  lastName?: StringFilter;
  mobileNumber?: IntNullableFilter;
  password?: StringFilter;
};
