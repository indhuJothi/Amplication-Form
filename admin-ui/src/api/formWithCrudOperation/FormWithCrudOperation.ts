export type FormWithCrudOperation = {
  countries?: "India" | "America" | "Germany" | "Australia";
  createdAt: Date;
  email: string;
  firstName: string | null;
  gender?: Array<"Male" | "Female">;
  id: string;
  lastName: string;
  mobileNumber: number | null;
  password: string;
  updatedAt: Date;
};
