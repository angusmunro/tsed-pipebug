import { Controller, Get } from "@tsed/common";
import { UserModel } from "src/repositories/user/user";
import { ExampleDecorator } from "./exampledecorator";

@Controller("/example")
export class ExampleController {

  @Get("/")
  get(
    @ExampleDecorator() user: UserModel,
  ): UserModel {
    return user;
  }
}
