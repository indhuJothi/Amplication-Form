export type FormWithCrudOperationCreateInput = {
  countries: "India" | "America" | "Germany" | "Australia";
  email: string;
  firstName?: string | null;
  gender: "Male" | "Female";
  lastName: string;
  mobileNumber?: number | null;
  password: string;
};
