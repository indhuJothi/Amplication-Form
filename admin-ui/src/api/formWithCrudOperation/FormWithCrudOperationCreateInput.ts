export type FormWithCrudOperationCreateInput = {
  countries: "India" | "America" | "Germany" | "Australia";
  email: string;
  firstName?: string | null;
  gender?: Array<"Male" | "Female">;
  lastName: string;
  mobileNumber?: number | null;
  password: string;
};
