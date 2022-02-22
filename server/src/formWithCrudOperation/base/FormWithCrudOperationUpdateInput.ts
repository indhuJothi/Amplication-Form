/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumFormWithCrudOperationCountries } from "./EnumFormWithCrudOperationCountries";
import { IsEnum, IsOptional, IsString, IsInt } from "class-validator";
import { EnumFormWithCrudOperationGender } from "./EnumFormWithCrudOperationGender";
@InputType()
class FormWithCrudOperationUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumFormWithCrudOperationCountries,
  })
  @IsEnum(EnumFormWithCrudOperationCountries)
  @IsOptional()
  @Field(() => EnumFormWithCrudOperationCountries, {
    nullable: true,
  })
  countries?: "India" | "America" | "Germany" | "Australia";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumFormWithCrudOperationGender,
    isArray: true,
  })
  @IsEnum(EnumFormWithCrudOperationGender, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumFormWithCrudOperationGender], {
    nullable: true,
  })
  gender?: Array<"Male" | "Female">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mobileNumber?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;
}
export { FormWithCrudOperationUpdateInput };
