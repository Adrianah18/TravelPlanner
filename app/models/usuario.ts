import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type {  HasMany } from '@adonisjs/lucid/types/relations'
import Viagem from './viagem.js'
import Comentario from './comentario.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare senha: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Viagem)
  declare viagens: HasMany<typeof Viagem>

  @hasMany(() => Comentario)
  declare comentarios: HasMany<typeof Comentario>
}
