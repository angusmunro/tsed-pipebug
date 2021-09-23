import { UsePipe } from "@tsed/common";
import { useDecorators } from "@tsed/core";
import { Description, Property, Required, Title } from "@tsed/schema";
import { ExamplePipe } from "./examplepipe";

export function ExampleDecorator(): ParameterDecorator {
  return useDecorators(
    Property(String),
    Required(),
    UsePipe(ExamplePipe),
  );
}
