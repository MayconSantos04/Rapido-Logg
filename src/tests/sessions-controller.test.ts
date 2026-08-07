import request from "supertest";
import { app } from "@/app";

describe("SessionsController", () => {
  let user_id: string;

  it("should authenticate a and get acess token", async () => {
    const userResponse = await request(app).post("/user").send({
      name: "Auth Test User",
      email: "authtestuser@example.com",
      password: "password123",
    });

    user_id = userResponse.body.id;

    const sessionResponse = await request(app).post("/sessions").send({
      email: "testuser@example.com",
      password: "password",
    });

    expect(sessionResponse.status).toBe(200);
    expect(sessionResponse.body.token).toEqual(expect.any(String));
  });
});
