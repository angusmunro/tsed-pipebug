import { Inject, Injectable } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { UserModel } from "./user";
@Injectable()
export class UserRepository {

  constructor(
    @Inject(UserModel) protected repo: MongooseModel<UserModel>
  ) {
  }

  public getUser(): UserModel {
    return {
      _id: '1234',
      name: 'test',
    }
  }
}
