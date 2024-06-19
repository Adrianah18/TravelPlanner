import Viagem from '#models/viagem'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ViagemSeeder extends BaseSeeder {
  public async run () {
    await Viagem.createMany([
      {
        usuarioId: 1,
        destinoId: 1,
        dataInicio: new Date('2023-06-01'),
        dataFim: new Date('2023-06-10'),
      },
      {
        usuarioId: 2,
        destinoId: 2,
        dataInicio: new Date('2023-07-01'),
        dataFim: new Date('2023-07-10'),
      },
    ])
  }
}
