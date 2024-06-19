import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Viagens extends BaseSchema {
  protected tableName = 'viagens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuarioId').unsigned().references('id').inTable('usuarios').onDelete('CASCADE')
      table.integer('destinoId').unsigned().references('id').inTable('destinos').onDelete('CASCADE')
      
      table.date('data_inicio').notNullable()
      table.date('data_fim').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
