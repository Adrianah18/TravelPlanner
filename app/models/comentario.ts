import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Usuario from './usuario.js'
import Viagem from './viagem.js'

export default class Comentario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare usuarioId: number

  @column()
  declare viagemId: number

  @column()
  declare comentario: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Usuario)
  declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Viagem)
  declare viagem: BelongsTo<typeof Viagem>
}
