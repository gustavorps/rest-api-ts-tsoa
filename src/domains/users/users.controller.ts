import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Patch,
  Delete,
  Query,
  Route,
  SuccessResponse
} from "tsoa";
import { UserType } from "./userType";
import { UsersService, UserCreationParams, UserUpdateParams } from "./user.service";

@Route("users")
export class UsersController extends Controller {
  @Get("search")
  public async getUser(
    @Query() id?: number,
    @Query() name?: string,
    @Query() cellphone?: string,
  ): Promise<UserType> {
    return new UsersService().get(id, name, cellphone);
  }

  @Get("{id}")
  public async getUserById(@Path() id: number): Promise<UserType> {
    return new UsersService().getUserById(id);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201);
    new UsersService().create(requestBody);
    return;
  }

  @SuccessResponse("200", "OK")
  @Patch('{id}')
  public async updateUser(
    @Patch() id: number,
    @Body() requestBody: UserUpdateParams
  ): Promise<void> {
    this.setStatus(200);
    new UsersService().update(id, requestBody);
    return;
  }

  @SuccessResponse("200", "OK")
  @Delete('{id}')
  public async deleteUser(id: number): Promise<any> {
    return await new UsersService().delete(id)
  }
}