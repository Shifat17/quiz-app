import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "user_quizes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.integer("user_id").unsigned().references("users.id");
      table.integer("quiz_id").unsigned().references("quizzes.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
