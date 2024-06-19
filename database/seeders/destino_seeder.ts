import Destino from '#models/destino'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class DestinoSeeder extends BaseSeeder {
  public async run () {
    await Destino.createMany([
      {
        nome: 'Paris',
        descricao: 'A cidade do amor',
      },
      {
        nome: 'Nova York',
        descricao: 'A cidade que nunca dorme',
      },
    ])
  }
}
