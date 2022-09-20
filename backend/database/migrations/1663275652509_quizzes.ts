import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "quizzes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name").unique();
      table.string("description").unique();
      table.string("status");
      table.integer("price");
      table.string("image_url");
      table.integer("retake");
      table.string("timing");
      table.integer("quiz_time");
      table.string("ansseeopt");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
