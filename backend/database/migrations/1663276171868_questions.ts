import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "questions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("question");
      table
        .integer("quiz_id")
        .unsigned()
        .references("quizzes.id")
        .onDelete("CASCADE");
      table.json("options");
      table.json("answers");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
