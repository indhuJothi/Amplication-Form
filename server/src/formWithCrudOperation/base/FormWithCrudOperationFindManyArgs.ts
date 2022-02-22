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
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FormWithCrudOperationWhereInput } from "./FormWithCrudOperationWhereInput";
import { Type } from "class-transformer";
import { FormWithCrudOperationOrderByInput } from "./FormWithCrudOperationOrderByInput";

@ArgsType()
class FormWithCrudOperationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FormWithCrudOperationWhereInput,
  })
  @Field(() => FormWithCrudOperationWhereInput, { nullable: true })
  @Type(() => FormWithCrudOperationWhereInput)
  where?: FormWithCrudOperationWhereInput;

  @ApiProperty({
    required: false,
    type: FormWithCrudOperationOrderByInput,
  })
  @Field(() => FormWithCrudOperationOrderByInput, { nullable: true })
  @Type(() => FormWithCrudOperationOrderByInput)
  orderBy?: FormWithCrudOperationOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FormWithCrudOperationFindManyArgs };
