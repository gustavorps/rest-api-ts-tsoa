import { UserType } from "./userType";
import { User as UserModel } from '../../models/User'

export type UserCreationParams = Pick<UserType, "id" | "name" | "cellphone">;
export type UserUpdateParams = Pick<UserType, "name" | "cellphone">;

export class UsersService {
  public get(id?: number, name?: string, cellphone?: string): Promise<any> {
    let parameter
    if (id) parameter = { id }
    else if (name) parameter = { name }
    else parameter = { cellphone }

    return UserModel.findOne({ attributes: ['id', 'name', 'cellphone'], where: { ...parameter } })
  }

  public getUserById(id: number): Promise<any> {
    return UserModel.findOne({ attributes: ['id', 'name', 'cellphone'], where: { id } })
  }

  public create(userCreationParams: UserCreationParams): Promise<any> {
    return UserModel.create({ ...userCreationParams })
  }

  public update(id: any, userUpdateParams: UserUpdateParams): Promise<any> {
    return UserModel.update({ ...userUpdateParams }, { where: { id } })
  }

  public delete(id: number): any {
    return UserModel.findOne({
      where: { id }
    }).then((user: any) => {
      if (!user) return Promise.resolve('User not found to delete')
      UserModel.destroy({
        where: { id }
      })
      return Promise.resolve('User deleted')
    })
  }
}
