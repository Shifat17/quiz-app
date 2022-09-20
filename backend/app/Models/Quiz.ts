import { DateTime } from "luxon";
import {
  afterFind,
  BaseModel,
  column,
  HasMany,
  hasMany,
  ManyToMany,
  manyToMany,
  ModelObject,
} from "@ioc:Adonis/Lucid/Orm";
import Question from "./Question";
import User from "./User";

export default class Quiz extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public status: string;

  @column()
  public price: number;

  @column()
  public image_url: string;

  @column()
  public retake: number;

  @column()
  public timing: string;

  @column()
  public ansseeopt: string;

  @column()
  public quiz_time: number;

  @hasMany(() => Question, {
    foreignKey: "quiz_id", // defaults to userId
  })
  public questions: HasMany<typeof Question>;

  @manyToMany(() => User, {
    pivotTable: "user_quizes",
    localKey: "id",
    pivotForeignKey: "quiz_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "user_id",
  })
  public users: ManyToMany<typeof User>;
}
