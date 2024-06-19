import Reserva from '#models/reserva'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ReservaSeeder extends BaseSeeder {
  public async run () {
    await Reserva.createMany([
      {
        viagemId: 1,
        descricao: 'Reserva de hotel em Paris',
      },
      {
        viagemId: 2,
        descricao: 'Reserva de hotel em Nova York',
      },
    ])
  }
}
