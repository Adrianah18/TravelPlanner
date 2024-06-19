import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import Destino from './destino.js'
import Reserva from './reserva.js'
import Comentario from './comentario.js'

export default class Viagem extends BaseModel {
  public static table = 'viagens' // Adicione esta linha para especificar o nome da tabela

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare usuarioId: number

  @column()
   declare destinoId: number

  @column()
   declare dataInicio: Date

  @column()
   declare dataFim: Date

  @column.dateTime({ autoCreate: true })
   declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
   declare updatedAt: DateTime

  @belongsTo(() => Usuario)
   declare usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Destino)
   declare destino: BelongsTo<typeof Destino>

  @hasMany(() => Reserva)
   declare reservas: HasMany<typeof Reserva>

  @hasMany(() => Comentario)
  declare comentarios: HasMany<typeof Comentario>
}
