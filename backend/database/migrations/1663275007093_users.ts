import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("username").unique();
      table.string("email").unique();
      table.string("password").unique();
      table.string("rememberMeToken").nullable();
      table.boolean("paid");
      table.boolean("isAdmin");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
