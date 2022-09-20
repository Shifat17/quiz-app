import Hash from "@ioc:Adonis/Core/Hash";
import { DateTime } from "luxon";
import {
  BaseModel,
  beforeSave,
  column,
  ManyToMany,
  manyToMany,
  ModelObject,
} from "@ioc:Adonis/Lucid/Orm";
import Quiz from "./Quiz";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken?: string;

  @column()
  public paid: boolean;

  @column()
  public is_admin: boolean;

  @manyToMany(() => Quiz, {
    pivotTable: "user_quizes",
    localKey: "id",
    pivotForeignKey: "user_id",
    relatedKey: "id",
    pivotRelatedForeignKey: "quiz_id",
  })
  public quizzes: ManyToMany<typeof Quiz>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
