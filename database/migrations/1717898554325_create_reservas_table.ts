import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Reservas extends BaseSchema {
  protected tableName = 'reservas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('viagem_id').unsigned().references('id').inTable('viagens').onDelete('CASCADE')
      table.string('descricao', 500).notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
