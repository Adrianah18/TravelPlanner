import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Comentarios extends BaseSchema {
  protected tableName = 'comentarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').onDelete('CASCADE')
      table.integer('viagem_id').unsigned().references('id').inTable('viagens').onDelete('CASCADE')
      table.string('comentario', 1000).notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
