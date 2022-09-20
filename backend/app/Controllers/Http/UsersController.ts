import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

import { rules, schema } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";
import Quiz from "App/Models/Quiz";

export default class UsersController {
  public async registerUser({
    request,
    response,
    auth,
    session,
  }: HttpContextContract) {
    const validations = schema.create({
      email: schema.string({}, [
        rules.email(),
        rules.unique({ table: "users", column: "email" }),
      ]),
      password: schema.string({}, [rules.confirmed()]),
      username: schema.string({}, [
        rules.unique({ table: "users", column: "username" }),
      ]),
    });
    const data = await request.validate({ schema: validations });
    const user = await User.create(data);
    await auth.use("web").login(user);
    response.cookie("user", auth.user);
    return response.json({ user: auth.user });
  }

  public async login({ request, response, auth, session }) {
    const email = request.input("email");
    const password = request.input("password");
    await auth.use("web").attempt(email, password);
    console.log(auth.use("web").isLoggedIn);
    // Object
    response.cookie("user", auth.user);
    return response.json({ user: auth.user, session });
  }

  public async getAllUser({ request, response }: HttpContextContract) {
    const users = await Database.from("users") // 👈 gives an instance of select query builder
      .select("*");
    response.json(users);
  }

  public async getAuthenticateduser({
    response,
    session,
    request,
    auth,
  }: HttpContextContract) {
    const user = request.cookie("user");
    console.log(user);
    response.json({ user });
  }

  public async getUser({ params, response }: HttpContextContract) {
    const id = params.id;
    console.log("route user hitted");
    const user = await Database.from("users").where("id", id);
    response.json(user);
  }

  public async updateUser(ctx: HttpContextContract) {
    const id = ctx.params.id;
    // const { username, email, paid, isAdmin } = request.body();
    const data = ctx.request.all();
    const user = await User.find(id);
    return await user?.merge(data).save();
  }

  public async deleteUser(ctx: HttpContextContract) {
    const id = ctx.params.id;
    const user = await User.find(id);
    return await user?.delete();
  }

  public async makerelatedQuiz(ctx: HttpContextContract) {
    const user = await User.find(ctx.params.id);
    return await user?.related("quizzes").attach([ctx.params.quizid]);
  }

  public async getrelatedQuizes(ctx: HttpContextContract) {
    const user = await User.find(ctx.params.id);
    const quizes = await user?.related("quizzes").query();
    return quizes;
  }
}
