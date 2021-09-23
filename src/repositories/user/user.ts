import { Model, ObjectID } from '@tsed/mongoose';
import { Property, Required } from '@tsed/schema';

@Model()
export class UserModel {
  @Property()
  @ObjectID("_id")
  @Required()
  public readonly _id: string;

  @Property()
  @Required()
  public name: string;
}

