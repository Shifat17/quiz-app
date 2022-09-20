import { DateTime } from "luxon";
import {
  afterFind,
  BaseModel,
  column,
  ModelOptions,
} from "@ioc:Adonis/Lucid/Orm";

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  public serializeExtras = true;
  @column()
  public question: string;

  @column()
  public options: string;

  @column()
  public answers: string;

  @column()
  public quiz_id: number;

  @afterFind()
  public static afterFindHook(question: Question) {
    question.options = JSON.parse(JSON.stringify(question.options));
    question.answers = JSON.parse(JSON.stringify(question.answers));
  }
}
