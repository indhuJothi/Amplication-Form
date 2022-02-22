import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const FormWithCrudOperationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="countries"
          label="Country"
          choices={[
            { label: "India", value: "India" },
            { label: "America", value: "America" },
            { label: "Germany", value: "Germany" },
            { label: "Australia", value: "Australia" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="Mobile Number" source="mobileNumber" />
        <TextInput label="Password" source="password" />
      </SimpleForm>
    </Create>
  );
};
