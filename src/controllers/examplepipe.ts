import { Inject, Injectable, IPipe } from "@tsed/common";
import { UserModel } from "src/repositories/user/user";
import { UserRepository } from "../repositories/user/user.repo";

@Injectable()
export class ExamplePipe implements IPipe<string, UserModel> {
  @Inject(UserRepository) _userRepo: UserRepository;

  transform(value: any) {
    return this._userRepo.getUser();
  }
}
