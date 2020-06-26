import req from "supertest";
import { app } from "./server";

const mockUser = {
  id: 0,
  email: 'jane@doe.com',
  name: 'Jane Doe',
  status: 'Happy',
  phoneNumbers: []
}
test("[GET] /", async () => {
  const userId = 0
  const res = await req(app).get(`/users/${userId}`);
  const user = { ...res.body }

  expect(user).toMatchObject(mockUser);
});