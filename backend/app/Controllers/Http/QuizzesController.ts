import { Response } from "@adonisjs/core/build/standalone";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Question from "App/Models/Question";
import User from "App/Models/User";
import Quiz from "App/Models/Quiz";
import Drive from "@ioc:Adonis/Core/Drive";
import Application from "@ioc:Adonis/Core/Application";
import Database from "@ioc:Adonis/Lucid/Database";
import drive from "Config/drive";

export default class QuizzesController {
  public async createQuiz(ctx: HttpContextContract) {
    const quiz = new Quiz();
    const data = ctx.request.all();
    const image = ctx.request.file("image");
    await image?.moveToDisk("./");
    const path = image?.filePath;
    const url = await Drive.getUrl(path);
    return await quiz.fill({ ...data, image_url: url }).save();
  }

  public async addQuestion(ctx: HttpContextContract) {
    const { question, options, answers } = ctx.request.body();
    const params = ctx.params.id;
    console.log(params);
    const quiz = await Quiz.find(params);
    const questionz = await quiz?.related("questions").create({
      question,
      options: JSON.stringify(options),
      answers: JSON.stringify(answers),
    });
    console.log(quiz?.id === questionz?.quiz_id);
    return questionz;
  }

  public async getrelatedQuestions(ctx: HttpContextContract) {
    const quiz = await Quiz.find(ctx.params.qid);
    const user = await User.find(ctx.params.uid);
    await user?.related("quizzes").attach([user.id]);
    const questions = await quiz?.related("questions").query();

    return questions;
  }

  public async getQuestion(ctx: HttpContextContract) {
    return await Question.find(ctx.params.id);
  }

  public async updateQuiz(ctx: HttpContextContract) {
    const { id } = ctx.request.all();
    const data = ctx.request.all();
    const quiz = await Quiz.find(id);
    return await quiz?.merge(data).save();
  }

  public async deleteQuiz(ctx: HttpContextContract) {
    const id = ctx.params.id;
    const quiz = await Quiz.find(id);
    return await quiz?.delete();
  }

  public async getallquiz(ctx: HttpContextContract) {
    const quizzes = await Quiz.query().withCount("users").preload("users");
    return quizzes;
  }

  public async getSingleQuiz(ctx: HttpContextContract) {
    const id = ctx.params.id;
    console.log("route hitted");
    const quiz = await Database.from("quizzes").where("id", id);
    ctx.response.json(quiz);
  }
}
