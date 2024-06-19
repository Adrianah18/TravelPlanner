import Comentario from '#models/comentario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ComentarioSeeder extends BaseSeeder {
  public async run () {
    await Comentario.createMany([
      {
        usuarioId: 1,
        viagemId: 1,
        comentario: 'Paris é maravilhosa!',
      },
      {
        usuarioId: 2,
        viagemId: 2,
        comentario: 'Nova York é incrível!',
      },
    ])
  }
}
