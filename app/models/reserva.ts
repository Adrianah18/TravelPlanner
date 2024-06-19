import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Viagem from './viagem.js'

export default class Reserva extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare viagemId: number

  @column()
  declare descricao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Viagem)
  declare viagem: BelongsTo<typeof Viagem>
}
