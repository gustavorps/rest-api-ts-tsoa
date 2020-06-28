import { UserType } from "./userType";
import { User as UserModel } from '../../models/User'

// A post request should not contain an id.
export type UserCreationParams = Pick<UserType, "id" | "name" | "cellphone">;

export class UsersService {
  public get(id: number, name?: string): any {
    // let userId;
    // let userName;
    // let userCellphone;
    return UserModel.findAll({ attributes: ['id', 'name', 'cellphone'], where: { id } })
    // .then((result) => result.every((element) => {
    //   userId = element.getDataValue('id')
    //   userName = element.getDataValue('name')
    //   userCellphone = element.getDataValue('cellphone')

    //   console.log({
    //     userId,
    //     userName,
    //     userCellphone
    //   });
    //   return {
    //     userId,
    //     userName,
    //     userCellphone
    //   }

    // }))

  }

  public create(userCreationParams: UserCreationParams): any {
    return {
      // id: Math.floor(Math.random() * 10000), // Random
      // status: "Happy",
      // ...userCreationParams,
    };
  }
}